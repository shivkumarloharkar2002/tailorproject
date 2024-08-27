import React, { useState } from 'react'
import "./MeasurementForm.css"
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import shirt from "./Shirt-Size.webp"
import kurta from "./kurta.avif"
import pant from "./pant.jpg"
import payjama from "./pyjamas.webp"
import suit from "./suits.webp"


export default function MeasurementForm() {

  const clothData = localStorage.getItem('cloth');
  console.log(clothData)

  const navigate = useNavigate(); 
 
  const [category, setCategory] = useState()
  const [collar, setCollar] = useState()
  const [height, setHeight] = useState()
  const [sleeve, setSleeve] = useState()
  const [chest, setChest] = useState()
  const [waist, setWaist] = useState()
  const [sholder, setSholder] = useState()


  const [pantheight, setpantheight] = useState()
  const [pantwaist, setpantwaist] = useState()
  const [panthibs, setpanthibs] = useState()
  const [pantabdomen, setpantabdomen] = useState()
  const [pantthigh, setpantthigh] = useState()
  const [pantknee, setpantknee] = useState()
  const [pantcalf, setpantcalf] = useState()
  const [pantinstep, setpantinstep] = useState()



  const [safaricollar, setsafaricollar] = useState()
  const [safarichest, setsafarichest] = useState()
  const [safarishirtwaist, setsafarishirtwaist] = useState()
  const [safarisleeve, setsafarisleeve] = useState()
  const [safarisholder, setsafarisholder] = useState()
  const [safaritrouserwaist, setsafaritrouserwaist] = useState()
  const [safaritrouserhip, setsafaritrouserhip] = useState()
  const [safaritrouserthigh, setsafaritrouserthigh] = useState()





  const PostShirtMeasure = async (e) => {
    e.preventDefault()

    try {
      const measureData = await axios.post(
        `http://localhost:5555/api/measurementroutes/shirt`,
        {
          category,
          collar,
          height,
          sleeve,
          chest,
          waist,
          sholder
        }
      );

      // if (registerData.status === 200) {
      localStorage.setItem("measure", JSON.stringify(measureData.data.data));
      alert("Measurement Added Successfully");
      navigate("/orderslip");
      console.log(measureData);
      // }
    } catch (error) {
      alert(error);
    }
  }

  const PostPantMeasure = async (e) => {
    e.preventDefault()

    try {
      const measureData = await axios.post(
        `http://localhost:5555/api/measurementroutes/pant`,
        {
          category,

          pantheight,
          pantwaist,
          panthibs,
          pantabdomen,
          pantthigh,
          pantknee,
          pantcalf,
          pantinstep,
        }
      );

      // if (registerData.status === 200) {
      localStorage.setItem("measure", JSON.stringify(measureData.data.data));
      alert("Measurement Added Successfully");
      navigate("/orderslip");
      console.log(measureData);
      // }
    } catch (error) {
      alert(error);
    }
  }


  const PostSafariMeasure = async (e) => {
    e.preventDefault()

    try {
      const measureData = await axios.post(
        `http://localhost:5555/api/measurementroutes/safari`,
        {
          category,

          safaricollar,
          safarichest,
          safarishirtwaist,
          safarisleeve,
          safarisholder,
          safaritrouserwaist,
          safaritrouserhip,
          safaritrouserthigh,
        }
      );

      // if (registerData.status === 200) {
      localStorage.setItem("measure", JSON.stringify(measureData.data.data));
      alert("Measurement Added Successfully");
      navigate("/orderslip");
      console.log(measureData);
      // }
    } catch (error) {
      alert(error);
    }
  }

  // setCategory(clothData)


  if (clothData === "shirt") {
    // setCategory("shirt")
    return <>
      <div className="measurementForm">

        <img src={shirt} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostShirtMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Collar'
            onChange={(e) => {
              setCollar(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='height' onChange={(e) => {
            setHeight(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sleeve'
            onChange={(e) => {
              setSleeve(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Chest'
            onChange={(e) => {
              setChest(e.target.value)
            }} /> 
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Waist'
            onChange={(e) => {
              setWaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sholder'
            onChange={(e) => {
              setSholder(e.target.value)
            }} />

          <input type="submit" value="Submit"  id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("shirt")
          }} />

        </form>
      </div>
    </>;
  } else if (clothData === "kurta") {
    return <>
      <div className="measurementForm">

        <img src={kurta} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostShirtMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Collar'
            onChange={(e) => {
              setCollar(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='height' onChange={(e) => {
            setHeight(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sleeve'
            onChange={(e) => {
              setSleeve(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Chest'
            onChange={(e) => {
              setChest(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Waist'
            onChange={(e) => {
              setWaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sholder'
            onChange={(e) => {
              setSholder(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("kurta")
          }} />

        </form>
      </div>
    </>;
  } else if (clothData === "pant") {
    return <>
      <div className="measurementForm">

        <img src={pant} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostPantMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantheight'
            onChange={(e) => {
              setpantheight(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantwaist' onChange={(e) => {
            setpantwaist(e.target.value)
          }}
          />

          <input type="number" name="" id=""  required className="measurementForm-form-input" placeholder='panthibs'
            onChange={(e) => {
              setpanthibs(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantabdomen'
            onChange={(e) => {
              setpantabdomen(e.target.value)
            }} />
          <input type="number" name="" id=""   required className="measurementForm-form-input" placeholder='pantthigh'
            onChange={(e) => {
              setpantthigh(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantknee'
            onChange={(e) => {
              setpantknee(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantcalf'
            onChange={(e) => {
              setpantcalf(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantinstep'
            onChange={(e) => {
              setpantinstep(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("pant")
          }} />

        </form>
      </div>
    </>;
  } else if (clothData === "payjama") {
    return <>
      <div className="measurementForm">

        <img src={payjama} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostPantMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantheight'
            onChange={(e) => {
              setpantheight(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantwaist' onChange={(e) => {
            setpantwaist(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='panthibs'
            onChange={(e) => {
              setpanthibs(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantabdomen'
            onChange={(e) => {
              setpantabdomen(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantthigh'
            onChange={(e) => {
              setpantthigh(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantknee'
            onChange={(e) => {
              setpantknee(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantcalf'
            onChange={(e) => {
              setpantcalf(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pantinstep'
            onChange={(e) => {
              setpantinstep(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("payjama")
          }} />

        </form>
      </div>
    </>;
  } else {
    return <>
      <div className="measurementForm">

        <img src={suit} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostSafariMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari collar'
            onChange={(e) => {
              setsafaricollar(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari chest' onChange={(e) => {
            setsafarichest(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari shirt waist'
            onChange={(e) => {
              setsafarishirtwaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari sleeve'
            onChange={(e) => {
              setsafarisleeve(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari sholder'
            onChange={(e) => {
              setsafarisholder(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari trouser waist'
            onChange={(e) => {
              setsafaritrouserwaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari trouser hip'
            onChange={(e) => {
              setsafaritrouserhip(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari trouser thigh'
            onChange={(e) => {
              setsafaritrouserthigh(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("safari")
          }} />

        </form>
      </div>
    </>;
  }
}