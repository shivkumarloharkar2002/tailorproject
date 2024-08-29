

import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";
import "./Assign.css";
import "./manageorder.css";
import back from "./back.png";
import axios from "axios";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";

export default function Manage_order() {
    const [getAllData, setGetAllData] = useState([]);
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

    return (
        <div>
            <Header />
            <a href="/home">
                <img className="back-btn" src={back} />
            </a>
            <p className="heding-assign">Manage Orders</p>

            {/* <div className="assign-left">
          <p className="aa">All</p>
          <p className="aa">Shirt</p>
          <p className="aa">Pant</p>
          <p className="aa">Kurta</p>
          <p className="aa">Pyjama</p>
          <p className="aa">Sut Safari</p>
        </div> */}

            {/* categoryes */}
        <div className="Orderdiv"></div>
            <ul type="none" className="order_list">
                <div className="ppp">
                    <li onClick={() => { setType("all"); }} className="pp" >     All  </li>

                    <li onClick={() => { setType("shirt"); }} className="pp">    Shirt  </li>

                    <li onClick={() => { setType("pant"); }} className="pp"  >    Pant</li>

                    <li onClick={() => { setType("kurta"); }} className="pp"> Kurta</li>

                    <li onClick={() => { setType("pyjama"); }} className="pp" >    Pyjama </li>

                    <li onClick={() => { setType("safari"); }} className="pp">    Suit Safari</li>
                </div>

                <div className="assign-line"></div>
            </ul>
            <div className='tablediv'>
                <table>

                    <tr>
                        <th >No</th>
                        <th>Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Cloth type</th>
                        <th>Action</th>

                    </tr>
                    {getAllData.reverse().map((data, index) => {
                        if (type === data.cloth_type) {
                            const date = moment(data.createdAt).format("DD MMM YYYY");
                            const target = moment(data.targetDate).format("DD MMM YYYY");
                            return (
                                <tr >
                                    <td >{index + 1}</td>
                                    <td >{date}</td>
                                    <td >{target}</td>
                                    <td className={data.status}>{data.status}</td>

                                    <td>{data.cloth_type}</td>

                                    {data.status === 'pending' || data.status === 'working' ? (
                                        <button onClick={() => { goToUpdatePage(data._id) }}>Update Status</button>
                                    ) : data.status === 'complete' ? (
                                        <button> <Link to={`/invoiceInfo/${data._id}`} className='link'>View bill</Link></button>
                                    ) : null}
                                </tr>
                            );
                        } else if (type == "all" && type != data.cloth_type) {
                            const date = moment(data.createdAt).format("DD MMM YYYY");
                            const target = moment(data.targetDate).format("DD MMM YYYY");
                            return (
                                <tr >
                                    <td >{index + 1}</td>
                                    <td >{date}</td>
                                    <td >{target}</td>
                                    <td className={`aa ${data.status}`}>{data.status}</td>

                                    <td >{data.cloth_type}</td>

                                    {data.status === 'pending' || data.status === 'working' ? (
                                        <button onClick={() => { goToUpdatePage(data._id) }}>Update Status</button>

                                    ) : data.status === 'complete' ? (
                                        <button> <Link to={`/invoiceInfo/${data._id}`} className='link'>View bill</Link></button>
                                    ) : null}
                                </tr>
                            );
                        }
                    })}
                </table>
            </div>
        </div>

    );
}


