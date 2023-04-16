import "./FormStyle.css";

import React, { useState } from "react";
import FormBg from "../img/farm-bg2.jpg";
import axios from "axios";

const Form = () => {
  const[laoding,setLoading] = useState(true);
  const [data, setData] = useState({
    nitrogen: "",
    potassium: "",
    phosphate: "",
    pH: "",
    rainfall: "",
  });

  const [response,setResponse]=useState();
  const handleChange = (e, state) => {
    setData({
      ...data,
      [[state]]: e.target.value,
    });
  };
  const result =
    "suggest me crops according to my soil concentration where as my soil has " +
    data.nitrogen +
    " nitrogen, " +
    data.phosphate +
    " phosphate," +
    data.potassium +
    " potassium, ph level " +
    data.pH +
    " , rainfall " +
    data.rainfall +
    " mm";

  const handleSubmit = async() => {

    axios.post("http://localhost:5000/chat",{result})
    .then((res)=>{setResponse(res.data.split('\n'));setLoading(false);})

  };

  return (
    <div className="absolute w-full">



{/* model */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Response</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       { laoding
       ?
       <div class="d-flex justify-content-center">
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
       :
          response.map((e,key)=>{
            return <p>{e}</p>
            })
       }
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-outline-primary" data-bs-dismiss="modal" onClick={()=>{setLoading(false)}}>Close</button>
        {/* <button type="button" class="btn btn-outlinxe-primary">Save changes</button> */}
      </div>
    </div>
  </div>
</div>

{/* end */}

      <img
        src={FormBg}
        className="w-screen h-screen opacity-40"
        alt=""
        srcSet=""
      />
      <div className="border-2  text-center -mt-105 ml-105 w-fit relative">
        <div className="mb-3">
          <label
            htmlFor="nitrogen"
            className="Form-label text-3xl m-2 font-semibold"
          >
            Nitrogen
          </label>
          <input
            type="number"
            className="border-b focus:outline-none border-solid border-black "
            id="nitrogen"
            placeholder="Nitrogen"
            onChange={(e) => handleChange(e, "nitrogen")}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="potassium"
            className="Form-label text-3xl m-2 font-semibold"
          >
            Potassium
          </label>
          <input
            type="number"
            className="Form-control"
            id="potassium"
            placeholder="potassium"
            onChange={(e) => handleChange(e, "potassium")}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="phosphate"
            className="Form-label text-3xl m-2 font-semibold"
          >
            Phosphate
          </label>
          <input
            type="number"
            className="Form-control "
            id="phosphate"
            placeholder="Phosphate"
            onChange={(e) => handleChange(e, "phosphate")}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="pH" className="Form-label text-3xl m-2 font-semibold">
            pH
          </label>
          <input
            type="number"
            className="Form-control"
            id="pH"
            placeholder="pH"
            onChange={(e) => handleChange(e, "pH")}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="rainfall"
            className="Form-label text-3xl m-2 font-semibold"
          >
            Rainfall
          </label>
          <input
            type="number"
            className="Form-control"
            id="rainfall"
            placeholder="rainfall"
            onChange={(e) => handleChange(e, "rainfall")}
          />
        </div>
      </div>
      <button
        className="border-black p-2 ml-105 border-solid text-2xl bg-green-600 text-white font-bold cursor-pointer relative"
        onClick={handleSubmit}
        data-bs-toggle="modal" data-bs-target="#exampleModal"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
