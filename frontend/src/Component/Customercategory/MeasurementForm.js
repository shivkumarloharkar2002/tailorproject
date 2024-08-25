import React from 'react'
import './Measurement.css'
import collar from '../../Image/collar.webp'
import length from '../../Image/fullLenght.webp'
import sleeve from '../../Image/sleeve.webp'
import waist from '../../Image/waist.webp'
import cheast from '../../Image/cheast.webp'
import shoulder from '../../Image/shoulder.webp'
import { Link } from 'react-router-dom'

import { useState } from 'react'



export default function MeasurementForm() {
//  const [collar , setCollar] = useState('')
  const [unit, setUnit] = useState('cm');
  const [value, setValue] = useState('');

  // Convert cm to inches
  const convertToInches = (cm) => (cm / 2.54).toFixed(2);

  // Convert inches to cm
  const convertToCm = (inches) => (inches * 2.54).toFixed(2);

  // Handle input change and convert based on current unit
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    console.log("input collar" ,inputValue)
  };

  // Handle unit toggle
  const handleUnitToggle = () => {
    if (unit === 'cm') {
      setValue(convertToInches(value));
      setUnit('inch');
    } else {
      setValue(convertToCm(value));
      setUnit('cm');
    }
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: 'center' }}>Size</h1>
        <div className='sizetoggle'>
          <select value={unit}
          onChange={handleUnitToggle}
          className='selectunit'>
            <option value="inch">inch</option>
            <option value="cm">cm</option>
            {/* <option value="in">inch</option> */}
          </select>
        {/* <button onClick={handleUnitToggle}>
          Switch to {unit === 'cm' ? 'inch' : 'cm'}
        </button> */}
        {/* <h4>Measure Size in "{unit}"</h4> */}
        </div>
        <div >
          <div className='size_main' >
            <div className='size_subdiv'>
              <img src={collar} className='size_img' /><br />
             <div className='disinch'>
               <input
                type='number'
                // value={value}
                onChange={handleInputChange}
                placeholder={`Collar Size `}
                className='size_input' /><h5 className='unit'>{unit}</h5>
            </div></div>
            <div className='size_subdiv'>
              <img src={length} className='size_img' /><br />
              <div className='disinch'> <input
                type='number'
                // value={value}
                onChange={handleInputChange}
                placeholder={`Upper Length `}
                className='size_input' /><h5 className='unit'>{unit}</h5>
            </div>
            </div>
            <div className='size_subdiv'>
              <img src={sleeve} className='size_img' /><br />
              <div className='disinch'> <input
                type='number'
                // value={value}
                onChange={handleInputChange}
                placeholder={`Sleeve Size `}
                className='size_input' /><h5 className='unit'>{unit}</h5>
            </div>
            </div>
            {/*            
        </div>
        <div className='size_main'> */}
            <div className='size_subdiv'>
              <img src={cheast} className='size_img' /><br />
              <div className='disinch'> <input
                type='number'
                // value={value}
                onChange={handleInputChange}
                placeholder={`Cheast Size `}
                className='size_input' /><h5 className='unit'>{unit}</h5>
            </div>
            </div>
            <div className='size_subdiv'>
              <img src={waist} className='size_img' /><br />
              <div className='disinch'> <input
                type='number'
                // value={value}
                onChange={handleInputChange}
                placeholder={`Waist Size `}
                className='size_input' /><h5 className='unit'>{unit}</h5>
            </div>
            </div>
            <div className='size_subdiv'>
              <img src={shoulder} className='size_img' /><br />
              <div className='disinch'> <input
                type='number'
                // value={value}
                onChange={handleInputChange}
                placeholder={`Shoulder Size `}
                className='size_input' /><h5 className='unit'>{unit}</h5>
            </div>
            </div>

          </div>
          <Link to='/orderslip'><button className='size_btn'>Submit</button></Link>

        </div>
      </div>
    </>
  )
}
