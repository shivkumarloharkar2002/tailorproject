import { useState } from 'react'
import './StritForm.css'
import axiosInstance from '../../axiosConfing';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import Header from '../../Component/Header/Header';

export default function StichForm() {
    const [edit , setEdit] = useState(false);
    const [stich , setStich] = useState([]);
    const [price, setPrice] = useState('');
    const [cloth_type, setClothType] = useState('');
    const [ id , setId] = useState('')

    
  const saveStich = async (e) => {
    e.preventDefault();

    
    if (edit === true) {
      const updatedata = new FormData()
      updatedata.append('price', price); // 'price' is a field name
      updatedata.append('cloth_type', cloth_type); // 'cloth_type' is a field name
      updatedata.append('id', id);

      try{
          const Stichdata = await axios.put(
            `http://localhost:5555/api/shialiroutes/updateshilairate/` , 
            updatedata,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
              }
            }
          );
        //   GetStichdata();
          console.log(Stichdata);
          toast.success("Updated successfully");
          
      }catch(error){
        toast.error(error)
      }
    }else{
      const formData = new FormData();
      formData.append('price', price); // 'price' is a field name
      formData.append('cloth_type', cloth_type); // 'cloth_type' is a field name
      try {
        const stichsdata = await axiosInstance.post("http://localhost:5555/api/shialiroutes/addshilairate",
          // {
          // title:title ,
          // color:color,
          // price:price,
          // cloth_type:cloth_type,
          // fabric_type:fabric_type,
          // pattern:pattern,
          // img1:img1
          // },
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        )
        console.log(stichsdata)
        toast.success(stichsdata.data.msg)
      }
      catch (e) {
        toast.error(e)
        console.log(e)
      }
    //   GetStichdata();
    }
    }


    const Edit = async(data)=>{
        setPrice(data.price);
        setClothType(data.cloth_type);
        setId(data._id)
        setEdit(true)
      }
      //Stich from the form

//   const GetStichdata = async () => {
//     const stichd = await axiosInstance.get('http://localhost:5555/api/shialiroutes/getallfabric');
//     setStich(stichd.data.data)
//     console.log(stichd.data.data)
//   }


  return (
   <>
   <Header/>
   <div className='addFabMain'>
   <form className='stich_form  FabformFV_main'>
    <h1 className='center'>Stich Form</h1>
    <label className="Stich_label" >Cloth Type</label>:<select 
    className='stich_input'
    value={cloth_type}
    onChange={(e)=>{
        setClothType(e.target.value);
    }}
    >
        <option>Choose cloth type</option>
        <option value="shirt">Shirt</option>
        <option value="pant">Pant</option>
        <option value="kurta">Kurta</option>
        <option value="payjama">Payjama</option>
        <option value="safari">Suit Safari</option>
    </select><br></br>
    <label className="Stich_label">Price</label>:
    <input type="number" placeholder="Enter Stich Price"  className='stich_input'
    onChange={(e)=>{
        setPrice(e.target.value);
    }}
     value={price}
     />
     {edit === false ? (<button className='Fab_btn'
            onClick={saveStich}
            >
                Add</button>):(<button className='Fab_btn'
              onClick={saveStich}
              >Update</button>)}
   </form>
   <div>
          <div className='Fabform_list  List_fab'>
            <h1 className="center" style={{margin:'30px'}}>Stich Rate</h1>
            {
              stich.reverse().map(
                (data) => {
                  return (
                    <>
                      <div className='AFmain'>
                        <div className='AFDIV' >
                          <div className='AFinfo'>
                            <div className='AFcomponents'> <h5 className='AFh5'>Cloth Type: </h5><h4 className='AFh4'>{data.cloth_type}</h4></div>
                            <div className='AFcomponents'> <h5 className='AFh5'>Price: </h5><h4 className='AFh4'>{data.price}</h4></div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                }
              )
            }
          </div>
        </div>
        <ToastContainer />
   </div>
   </>
  )
}
