import React  from "react";
import Expertleft from "./expertComponents/Expertleft";
import ExpertRight from "./expertComponents/ExpertRight";

const Expert = () =>{
    return (
        <div className="text-white flex flex-row    justify-end h-fit flex-grow  my-10">

         <Expertleft></Expertleft>
         <ExpertRight></ExpertRight>

        </div>
    )
}

export default Expert