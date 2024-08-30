import React, { useState } from 'react'
import "./MeasurementForm.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
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
      toast.success("Measurement Added Successfully");
      navigate("/orderslip");
      console.log(measureData);
      // }
    } catch (error) {
      toast.error(error);
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
      toast.success("Measurement Added Successfully");
      navigate("/orderslip");
      console.log(measureData);
      // }
    } catch (error) {
      toast.success(error);
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
      toast.success("Measurement Added Successfully");
      navigate("/orderslip");
      console.log(measureData);
      // }
    } catch (error) {
      toast.error(error);
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


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Collar in inch '
            onChange={(e) => {
              setCollar(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Length in inch' onChange={(e) => {
            setHeight(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sleeve in inch'
            onChange={(e) => {
              setSleeve(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Chest in inch'
            onChange={(e) => {
              setChest(e.target.value)
            }} /> 
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Waist in inch'
            onChange={(e) => {
              setWaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sholder in inch'
            onChange={(e) => {
              setSholder(e.target.value)
            }} />

          <input type="submit" value="Submit"  id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("shirt")
          }} />

        </form>
      </div>
      <ToastContainer />
    </>;
  } else if (clothData === "kurta") {
    return <>
      <div className="measurementForm">

        <img src={kurta} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostShirtMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Collar in inch'
            onChange={(e) => {
              setCollar(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='height in inch' onChange={(e) => {
            setHeight(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sleeve in inch'
            onChange={(e) => {
              setSleeve(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Chest in inch'
            onChange={(e) => {
              setChest(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Waist in inch'
            onChange={(e) => {
              setWaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='Sholder in inch'
            onChange={(e) => {
              setSholder(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("kurta")
          }} />

        </form>
        <ToastContainer />
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


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant height in inch'
            onChange={(e) => {
              setpantheight(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant waist in inch' onChange={(e) => {
            setpantwaist(e.target.value)
          }}
          />

          <input type="number" name="" id=""  required className="measurementForm-form-input" placeholder='pant hibs in inch'
            onChange={(e) => {
              setpanthibs(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant abdomen in inch'
            onChange={(e) => {
              setpantabdomen(e.target.value)
            }} />
          <input type="number" name="" id=""   required className="measurementForm-form-input" placeholder='pant thigh in inch'
            onChange={(e) => {
              setpantthigh(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant knee in inch'
            onChange={(e) => {
              setpantknee(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant calf in inch'
            onChange={(e) => {
              setpantcalf(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant instep in inch'
            onChange={(e) => {
              setpantinstep(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("pant")
          }} />

        </form>
      </div>
      <ToastContainer />
    </>;
  } else if (clothData === "payjama") {
    return <>
      <div className="measurementForm">

        <img src={payjama} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostPantMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant height in inch'
            onChange={(e) => {
              setpantheight(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant waist in inch' onChange={(e) => {
            setpantwaist(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant hibs in inch'
            onChange={(e) => {
              setpanthibs(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant abdomen in inch'
            onChange={(e) => {
              setpantabdomen(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant thigh in inch'
            onChange={(e) => {
              setpantthigh(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant knee in inch'
            onChange={(e) => {
              setpantknee(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant calf in inch'
            onChange={(e) => {
              setpantcalf(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='pant instep in inch'
            onChange={(e) => {
              setpantinstep(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("payjama")
          }} />

        </form>
      </div>
      <ToastContainer />
    </>;
  } else {
    return <>
      <div className="measurementForm">

        <img src={suit} alt="" className="measurementForm-img" />


        <form action="" className="measurementForm-form"
          onSubmit={PostSafariMeasure}
        >
          <h1 className="measurementForm-form-h">Measurement Form</h1>


          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari collar in inch'
            onChange={(e) => {
              setsafaricollar(e.target.value)
            }} />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari chest in inch' onChange={(e) => {
            setsafarichest(e.target.value)
          }}
          />

          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari shirt waist in inch'
            onChange={(e) => {
              setsafarishirtwaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari sleeve in inch'
            onChange={(e) => {
              setsafarisleeve(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari sholder in inch'
            onChange={(e) => {
              setsafarisholder(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari trouser waist in inch'
            onChange={(e) => {
              setsafaritrouserwaist(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari trouser hip in inch'
            onChange={(e) => {
              setsafaritrouserhip(e.target.value)
            }} />
          <input type="number" name="" id="" required className="measurementForm-form-input" placeholder='safari trouser thigh in inch'
            onChange={(e) => {
              setsafaritrouserthigh(e.target.value)
            }} />

          <input type="submit" value="Submit" id="" className="measurementForm-form-submit" onClick={() => {
            setCategory("safari")
          }} />

        </form>
      </div>
      <ToastContainer />
    </>;
  }
}