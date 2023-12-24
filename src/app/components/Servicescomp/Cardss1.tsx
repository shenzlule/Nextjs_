import React from "react"
import Image from "next/image"
import ServiceButton from "./ServiceButton"



const Cardss1 = ( props :{cardText:string ,cardTitle:string}) =>  {
    return (

        
       

<div className="px-2    w-80  py-6 my-3  mx-2 Brclr rounded-lg shadow  ">
    <div  className="flex flex-row justify-between  items-center">
        <div className="flex flex-row   items-center">

        <Image
            src="/twos1.png"
            alt=""
            width={50}
            height={50}
            className='pics'
            />

    <a href="#">
        <h5 className="mb-2   mt-4  text-xl font-semibold tracking-tight text-white">{ `${props.cardTitle} `}</h5>
    </a>
    </div>
    <Image
            src="/two.png"
            alt=""
            width={70}
            height={70}
            /> 
    
    </div>
    <p className="mb-3 text-xs gryclr">{ `${props.cardText} `}</p>
   <ServiceButton />
</div>
       
    )
} 

export  default Cardss1 