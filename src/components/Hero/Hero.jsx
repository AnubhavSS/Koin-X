import React, { useEffect, useState } from "react";
import Top from "../Top/Top";
import "./style.css";
import { Data } from "../../data";
const Hero = () => {
  const [incomeRange, setincomeRange] = useState(1);
  const [termSelect, settermSelect] = useState(null);
  const [info, setinfo] = useState({
    sale: "0",
    purchase: "0",
    expense: "0",
  });
  const [cal, setcal] = useState({
    gain: 0,
    netGain: 0,
    discount: 0,
    tax: 0,
  });

  const handleIncomeChange = (event) => {
    const selectedValue = event.target.value;
    setincomeRange(selectedValue);
  };

  const handleFieldChange = (event) => {
    if (event.target.id === "sale") {
      setinfo({ ...info, sale: event.target.value });
    } else if (event.target.id === "purchase") {
      setinfo({ ...info, purchase: event.target.value });
    } else if (event.target.id === "expense") {
      setinfo({ ...info, expense: event.target.value });
    }
  };

  console.log(info);

  useEffect(() => {
    const PURCHASE = parseInt(info.purchase);
    const EXPENSE = parseInt(info.expense);
    const SALE = parseInt(info.sale);

    const Gain = SALE - PURCHASE - EXPENSE;
    const Discount = termSelect === "long" ? (Gain > 0 ? 0.5 * Gain : 0) : 0;
    const NetGain = termSelect === "long" ? Gain - Discount : Gain;
    const Tax = NetGain * Data[incomeRange-1].tax;

    setcal({
      ...cal,
      gain: Gain,
      netGain: NetGain,
      tax: Tax,
      discount: Discount,
    });
  }, [info,incomeRange,termSelect]);

  console.log(info, cal,Data[incomeRange-1]);
  return (
    <div className="container">
      <Top />

      <div className="inpCont">
        {/* Purchase Price */}
        <div className="textContain">
          <label className="dropLabel">Enter purchase price of Crypto</label>
          <input
            className="textInp"
            placeholder="Purchase Price"
            id="purchase"
            onChange={handleFieldChange}
            value={info?.purchase || ""}
          />
        </div>

        {/* Sale Price */}
        <div className="textContain">
          <label className="dropLabel">Enter Sale price of Crypto</label>
          <input
            className="textInp"
            placeholder="Sale Price"
            id="sale"
            onChange={handleFieldChange}
            value={info?.sale || ""}
          />
        </div>

        {/* Expenses */}
        <div className="textContain">
          <label className="dropLabel">Enter your Expenses</label>
          <input
            className="textInp"
            placeholder="Expenses"
            id="expense"
            onChange={handleFieldChange}
            value={info?.expense || ""}
          />
        </div>

        {/* Investment type */}
        <div className="textContain">
          <label className="dropLabel">Investment type </label>
          <div className="investCont">
            {" "}
            <div onClick={() => settermSelect("short")}>
              <div
                className={`short ${
                  termSelect === "short" ? "short_active" : ""
                }`}
              >
                Short Term {termSelect === "short" && <span> &#10003;</span>}
              </div>
              <p className="subTitle"> &#60; 12 months</p>
            </div>
            <div onClick={() => settermSelect("long")}>
              <div
                className={`short ${
                  termSelect === "long" ? "short_active" : ""
                }`}
              >
                Long Term {termSelect === "long" && <span> &#10003;</span>}
              </div>
              <p className="subTitle"> &#62; 12 months</p>
            </div>
          </div>
        </div>

        {/* Annual Income */}
        <div className="textContain">
          <label className="dropLabel">Select Your Annual Income</label>
          <select
            className="textInp"
            onChange={handleIncomeChange}
            value={Data[incomeRange - 1]?.income}
          >
            {Data.map((item) => (
              <option key={item.id} value={item.id}>
                {item.income}
              </option>
            ))}
          </select>
        </div>

        {/* Tax Rate */}
        <div className="textContain">
          <p className="dropLabel">Tax Rate</p>
          <p className="subTitle">{Data[incomeRange - 1]?.taxRate}</p>
        </div>

        {/* Capital Gain Amount */}
        {termSelect === "long" && (
          <div className="textContain">
            <label className="dropLabel">Capital Gain Amount</label>
            <div className="textInp" >$ {cal?.gain}</div>
          </div>
        )}

        {/* Discount for long term gains */}
        {termSelect === "long" && (
          <div className="textContain">
            <label className="dropLabel">Discount for long term gains</label>
            <div className="textInp" >$ {cal?.discount}</div>
          </div>
        )}
        {/* Net Capital gains tax amount */}
        <div className="result" style={{ backgroundColor: "#EBF9F4" }}>
          <p className="resultKey">Net Capital gains tax amount</p>
          <p className="resultValue" style={{ color: "#0FBA83" }}>
           $ {cal.netGain}
          </p>
        </div>

        {/* The tax you need to pay* */}
        <div className="result" style={{ backgroundColor: "#EBF2FF" }}>
          <p className="resultKey">The tax you need to pay*</p>
          <p className="resultValue" style={{ color: "#0141CF" }}>
           $ {cal.tax}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
