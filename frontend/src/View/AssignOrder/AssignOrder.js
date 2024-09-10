import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import "./Assign.css";
import back from "./back.png";
import axios from "axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

export default function AssignOrder() {
  const [getAllData, setGetAllData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [search, setSearch] = useState([]);
  // category
  const [type, setType] = useState("shirt");

  const getData = async () => {
    const getNote = await axios.get(
      `http://localhost:5555/api/orderroutes/getallorder`
    );
    setGetAllData(getNote.data.data);
  };
  console.log(getAllData);

  // const searchData = getAllData.filter((data) => {
  //   return (
  //     data.customer_id.name.toLowerCase().includes(search.toLowerCase()) ||
  //     data.createdAt.toLowerCase().includes(search.toLowerCase())
  //   );
  // });

  useEffect(() => {
    getData();
  }, []);

  const navigate = useNavigate()


  const goToUpdatePage = (id) => {
    navigate(`/updatestatus/${id}`); // Navigate to the update status page with the ID
  };



  const filterDataFn = () => {
    let filtered = getAllData;

    console.log('Before Filtering:', filtered);

    // Apply search filter
    if (search) {
      filtered = filtered.filter((data) => {
        const customerName = data.customer_id?.name || "Unknown Customer";
        const createdAt = data.createdAt || "";
        return (
          customerName.toLowerCase().includes(search.toLowerCase()) ||
          moment(createdAt).format("DD MMM YYYY").includes(search.toLowerCase())
        );
      });
    }

    console.log('After Search Filtering:', filtered);
  }

  return (
    <div>
      <Header />
      <Link to={"/home"} className="link">
        <div className="profile-back">
          <img src={back} alt="" className="profile-back-img" />
        </div>
      </Link>
      <p className="heding-assign">Manage Orders</p>

      <div >
        {/* <div className="assign-left">
          <p className="aa">All</p>
          <p className="aa">Shirt</p>
          <p className="aa">Pant</p>
          <p className="aa">Kurta</p>
          <p className="aa">Pyjama</p>
          <p className="aa">Sut Safari</p>
        </div> */}

        {/* categoryes */}
        <ul type="none" className="order_list">

          <li
            onClick={() => {
              setType("all");
            }}
            className="pp"
          >
            All
          </li>
          <li
            onClick={() => {
              setType("shirt");
            }}
            className="pp"
          >
            Shirt
          </li>

          <li
            onClick={() => {
              setType("pant");
            }}
            className="pp"
          >
            Pant
          </li>

          <li
            onClick={() => {
              setType("kurta");
            }}
            className="pp"
          >
            Kurta
          </li>

          <li
            onClick={() => {
              setType("payjama");
            }}
            className="pp"
          >
            Payjama
          </li>

          <li
            onClick={() => {
              setType("safari");
            }}
            className="pp"
          >
            Suit Safari
          </li>


          <div className="assign-line"></div>
        </ul>

        <div>
          <div className="assign-patti">
            <p className="aa">Name</p>
            <p className="aa">Date</p>
            <p className="aa">Status</p>
            <p className="aa">Order</p>
            <p className="aa">Actions</p>
          </div>

          {getAllData.reverse().map((data, index) => {
            if (type === data.cloth_type) {
              const date = moment(data.createdAt).format("DD MMM YYYY");
              return (
                <div className="assign-informetion">
                  <h3 className="aap customer_name">{data.customer_id?.name || "Unknown Customer"}</h3>
                  <p className="aap">{date}</p>
                  <p className={`aap  ${data.status}`}>{data.status}</p>
                  <p className="aap">{data.cloth_type}</p>

                  {data.status === 'pending' || data.status === 'working' ? (
                    <button className="stutas" onClick={() => { goToUpdatePage(data._id) }}>Update Status</button>

                  ) : data.status === 'complete' ? (
                    <button className="stutas-tow"> <Link to={`/invoiceInfo/${data._id}`} className='link'>View bill</Link></button>
                  ) : null}
                </div>
              );
            } else if (type == "all" && type != data.cloth_type) {
              const date = moment(data.createdAt).format("DD MMM YYYY");
              return (
                <div className="assign-informetion">
                  <h3 className="aa customer_name">{data.customer_id?.name || "Unknown Customer"}</h3>
                  <p className="aap">{date}</p>
                  <p className={`aap ${data.status}`}>{data.status}</p>
                  {/* <p className="aa">{data._id}</p> */}
                  <p className="aap">{data.cloth_type}</p>


                  {data.status === 'pending' || data.status === 'working' ? (
                    <div className="stutas" onClick={() => { goToUpdatePage(data._id) }}>Update Status</div>

                  ) : data.status === 'complete' ? (
                    <button className="stutas-tow"> <Link to={`/invoiceInfo/${data._id}`} className='link'>View bill</Link></button>
                  ) : null}
                </div>


              );
            }
          })}
        </div>
      </div>
    </div>
  );
}


