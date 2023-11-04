
import "./style.css";
import { Faq } from "../../data";
const FAQ = () => {
  console.log(Faq);
  return (
    <div className="container1">
      <p className="heading">Frequently Asked Questions</p>
      <div>
        {/* Mapping Question and Answers */}
        {Faq.map((item) => {
          return (
            <div className="quesCon" key={item?.id}>
              <h4 className="question">
                <span>{Faq.indexOf(item) + 1}.</span> {item?.question}
              </h4>
              <p className="answers">{item?.answer}</p>

              <hr className="new2"></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};
// eslint-disable-next-line no-use-before-define
export default FAQ;
