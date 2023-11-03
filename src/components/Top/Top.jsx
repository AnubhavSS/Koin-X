import React from 'react'
import './style.css'
const Top = () => {
  return (
    <div>
      <p className='heading'>Free Crypto Tax Calculator Australia</p>
      <div className='topDrop'>
{/* For Year */}
      <div className='dropContainer'>
  <label className='dropLabel'>Financial Year</label>
  <select className='selectB'>
    <option >FY 2023-2024</option>
  </select>

</div>

{/* For Country */}
<div className='dropContainer'>
  <label className='dropLabel'>Country</label>
  <select className='selectB'>
    <option >Australia</option>
  </select>

</div>

      </div>
      <hr className="new1"></hr>
    </div>
  )
}

export default Top