import React from "react";
import BG from "../img/bg.jpg";
import FarmAi from '../img/farm-ai.jpg';
import FarmAi2 from '../img/farm-ai2.webp';
import {Link} from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <img src={BG} className="h-96 w-screen" alt="" srcset="" />
      <div className="flex space-x-20">
        <div className="left flex">
          <img src={FarmAi} className="w-96 h-96 m-12 ml-24 rounded-lg"  alt=""/>
          <img
            src={FarmAi2}
            className="w-64 h-52 mt-72 ml-80 absolute rounded-lg"
            alt=""
            srcset=""
          />
        </div>
        <div className="right w-1/2 p-20">
          <p className="font-semibold text-yellow-400 ml-12">
            Find Best Crop for Your Farm
          </p>
          <h1 className="text-6xl font-semibold mb-8">Crop Genius</h1>
          <p className="text-xl ">
            CropGenius is a feature that helps farmers make informed decisions
            about which crops to plant based on a variety of factors, such as
            soil type, climate, and water availability. 
            </p>
            <div>
            
            </div>
            <p>
             It uses advanced
            algorithms and data analysis techniques to recommend the best crops
            to plant for a given region or farm
          </p>
          <hr className="my-3" />
          <Link
            to="/cropGenius"
            className="w-fit p-2 bg-amber-400 text-white text-2xl rounded-xl hover:bg-amber-500 mt-9 ml-36"
          >
           Check Best Crop
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
