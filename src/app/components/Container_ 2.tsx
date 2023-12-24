import React from "react"
import Servicesz from "./Servicescomp/Servicesz"
import Sponsor from "./Sponsor/Sponsor"
import Webuild from "./WeBuild/Webuild"
import Boost from "./Boost"
import GetInTouch from "./GetInTouch"
import FollowUs from "./FollowUs"
import Image from "next/image"




const Container_2 = ( ) =>  {
    return (
        
         <div className="flex flex-row justify-between w-full ">

          <div  className=" w-36 justify-center  flex flex-col ">
          
       
        <Image
src="/left_img.png"

width={100}
height={10}

alt=""

className="w-auto h-auto mt-32"/>


          </div>
        
        <div className="flex flex-col  w-full bas  ">      
        <Webuild/>
          {/* <Boost/>
          <GetInTouch/> */}
         
         

        </div>


        <div className=" flex justify-center  w-36 flex-col   content-baseline" >
      

        <Image
src="/right_img.png"
alt=""
width={100}
height={10}
className=" w-28 h-auto mt-32 "/> 
            
            </div>
        </div>

      

        
       
    )
} 

export  default Container_2 