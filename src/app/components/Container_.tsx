import React from "react"
import Servicesz from "./Servicescomp/Servicesz"
import Sponsor from "./Sponsor/Sponsor"
import Webuild from "./WeBuild/Webuild"
import Boost from "./Boost"
import GetInTouch from "./GetInTouch"
import FollowUs from "./FollowUs"
import Image from "next/image"




const Container_ = ( ) =>  {
    return (
        <div className="flex flex-col ">
         <div className="flex flex-row justify-between   w-full ">

          <div  className=" w-96 flex flex-col justify-between pt-12">
          
          <Image
src="/left.png"
alt=""
width={50}
height={10}
className=""/>
{/* 
        <Image
src="/left_img.png"

width={176}
height={10}

alt=""

className="w-44 h-auto mb-80"/> */}


          </div>
        
        <div className="flex flex-col  w-full bas  ">      
          <Servicesz cardText=''/>
          <Sponsor/>
         
         

        </div>


        <div className=" flex  w-96 flex-col justify-between pt-12   content-baseline" >
       <div className="flex  w-full justify-between flex-row">
        <div></div>
        <Image
src="/right.png"
alt=""
width={50}
height={10}
className=""/>

</div>

        {/* <Image
src="/right_img.png"
alt=""
width={176}
height={10}
className="w-44 h-auto mb-80"/> */}
            
            </div>
        </div>

       

        </div>
       
    )
} 

export  default Container_ 