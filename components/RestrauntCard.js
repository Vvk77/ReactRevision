
// import { IMAGE_ID } from "./utils/constants"

// export const ResCard  = ({resdata}) => {
//     return (
//         <div className="res-card">
//             <img  className="res-logo" src={IMAGE_ID + resdata.info.cloudinaryImageId}/>
//             <h3> {resdata.info.name} </h3>
//           <h4>{resdata?.info?.cuisines?.join(", ")}</h4>
//             <h5> Rating : {resdata.info.avgRating}</h5>
//             <h5>  Delivery Time: {resdata.info.sla.deliveryTime} minutes</h5>
//             <h5> Price: {resdata.info.costForTwo}</h5>

//         </div>
//     )
// }

import { IMAGE_ID } from "./utils/constants";
import { Link } from "react-router-dom";

export const ResCard = ({ resdata }) => {
  return (
    <Link 
      to="/restaurants" 
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="res-card">
        <img
          className="res-logo"
          src={IMAGE_ID + resdata.info.cloudinaryImageId}
          alt="res-logo"
        />

        <h3>{resdata.info.name}</h3>
        <h4>{resdata?.info?.cuisines?.join(", ")}</h4>
        <h5>Rating: {resdata.info.avgRating}</h5>
        <h5>Delivery Time: {resdata.info.sla.deliveryTime} minutes</h5>
        <h5>Price: {resdata.info.costForTwo}</h5>
      </div>
    </Link>
  );
};



