import React from "react"
import Cardss from "./Cardss"
import Cardss1 from "./Cardss1"
import Cardss2 from "./Cardss2"
import Image from "next/image"




const Servicesz = ( props :{cardText:string}) =>  {
    return (

        
       
<div className=" w-full ">
    <div className="flex flex-row w-full justify-between">
    <h1 className="text-xl md:text-3xl ">Services</h1>
    <Image

            width={37}
            height={36}
            src={"/service_op.png"} alt={""} className="mb-10"/>

    </div>
   
<div className="flex flex-col justify-center md:flex-row justify-self-center   items-center">
<Cardss cardTitle='PITCH DECK' cardText=' Pitch deck services typically offer a rarnge of
                    services, including content creation, design, and
                    presentation coaching. Content creation involves
                    developinga compeling story that clearly
                    Communicates the problem that the business is
                    solving, the market opportunity, and the unique
                    value proposition.'></Cardss>
          <Cardss1 cardTitle='BUSINESS PLAN'  cardText=' Pitch deck services typically offer a rarnge of
                    services, including content creation, design, and
                    presentation coaching. Content creation involves
                    developinga compeling story that clearly
                    Communicates the problem that the business is
                    solving, the market opportunity, and the unique
                    value proposition.'></Cardss1>
          <Cardss2 cardTitle='ADVISORY'  cardText='Advisory services are professional services
          provided by consultants, advisors, or experts who offer
          advice and guidance to individuals or organistaions in various areas of business.
          Advisory servies can cover a wide range of areas, such as finance,accounting, 
          management, marketing, and human resources.'></Cardss2>
</div>
</div>
       
    )
} 

export  default Servicesz 