

import React, { useEffect, useState } from "react";
import Header from "../../Component/Header/Header";

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

            <div className="Orderdiv" >
                <ul type="none" className="order_list" >
                    <div className="ppp">
                        <li onClick={() => { setType("all"); }} className="pp" >     All  </li>

                        <li onClick={() => { setType("shirt"); }} className="pp">    Shirt  </li>

                        <li onClick={() => { setType("pant"); }} className="pp" >    Pant</li>

                        <li onClick={() => { setType("kurta"); }} className="pp"> Kurta</li>

                        <li onClick={() => { setType("pyjama"); }} className="pp">    Pyjama </li>

                        <li onClick={() => { setType("safari"); }} className="pp">    Suit Safari</li>
                    </div>
                </ul>
                <div className='tablediv'>
                    <table>

                        <tr className="assign-line">
                            {/* <th className="thead indexrow">No</th> */}
                            <th className="thead">Name </th>
                            <th className="thead">Date</th>
                            <th className="thead">Due Date</th>
                            <th className="thead">Status</th>
                            <th className="thead">Cloth type</th>
                            <th className="thead">Action</th>

                        </tr>
                        {getAllData.reverse().map((data, index) => {
                            if (type === data.cloth_type) {
                                const date = moment(data.createdAt).format("DD MMM YYYY");
                                const target = moment(data.targetDate).format("DD MMM YYYY");
                                return (
                                    <tr >
                                        {/* <td className="indexrow">{index + 1}</td> */}
                                        <td style={{ fontSize: '21px' }}> {data.customer_id?.name || "Unknown Customer"}</td>
                                        <td >{date}</td>
                                        <td >{target}</td>
                                        <button className={`aap ${data.status}`}>{data.status}</button>
                                        <td>{data.cloth_type}</td>
                                        <td>
                                            {data.status === 'pending' || data.status === 'working' ? (
                                                <button className="stutas butmargin" onClick={() => { goToUpdatePage(data._id) }}>Update </button>
                                            ) : data.status === 'complete' ? (
                                                <button className="stutas-tow butmargin"> <Link to={`/invoiceInfo/${data._id}`} className='link'>View bill</Link></button>
                                            ) : null}
                                        </td>


                                    </tr>
                                );
                            } else if (type == "all" && type != data.cloth_type) {
                                const date = moment(data.createdAt).format("DD MMM YYYY");
                                const target = moment(data.targetDate).format("DD MMM YYYY");
                                return (
                                    <tr >
                                        {/* <td >{index + 1}</td> */}
                                        <td style={{ fontSize: '21px' }}> {data.customer_id?.name || "Unknown Customer"}</td>
                                        <td >{date}</td>
                                        <td >{target}</td>
                                        <button className={`aap ${data.status}`}>{data.status}</button>

                                        <td >{data.cloth_type}</td>
                                        <td >
                                            {data.status === 'pending' || data.status === 'working' ? (
                                                <button className="stutas butmargin" onClick={() => { goToUpdatePage(data._id) }}>Update </button>

                                            ) : data.status === 'complete' ? (
                                                <button className="stutas-tow butmargin"> <Link to={`/invoiceInfo/${data._id}`} className='link'>View bill</Link></button>
                                            ) : null}
                                        </td>


                                    </tr>
                                );
                            }
                        })}
                    </table>
                </div>
            </div>
        </div>

    );
}


