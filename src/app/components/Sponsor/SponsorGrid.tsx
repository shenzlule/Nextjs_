import React from "react"
import Image from "next/image"


const SponsorGrid = ( ) =>  {
    return (

        
        <div className="flex flex-col   justify-around  w-full">      
         <div className="flex flex-row justify-center ">
            
         <div className="flex flex-row justify-center BrclrR  BrclrB w-56  ">
               
               <Image
               src="/1.png"
               alt=""
               width={150}
               height={70}
               className="p-4 "
             
               />
    </div>

    <div className=" w-56  flex BrclrR  BrclrB  flex-row justify-center">
               
               <Image
               src="/2.png"
               alt=""
               width={150}
               height={70}
               className="p-4"
             
               />
    </div>
    <div className="BrclrR  BrclrB  w-56 flex flex-row justify-center">
               
               <Image
               src="/3.png"
               alt=""
               width={150}
               height={70}
               className="p-4"
             
               />
    </div>
    <div className="flex flex-row justify-center  BrclrB   w-56  ">
               
               <Image
               src="/4.png"
               alt=""
               width={150}
               height={70}
               className="p-4"
             
               />
    </div>

         </div>



         <div  className="flex flex-row justify-center mr-7 md:mr-0
         ">
         <div className="BrclrR   w-56 ">
               
             
    </div >
    <div className="BrclrR   w-56  flex flex-row justify-center">
               
               <Image
               src="/5.png"
               alt=""
               width={160}
               height={70}
               className="p-4"
             
               />
    </div>
    <div className="BrclrR   w-56  flex flex-row justify-center">
               
               <Image
               src="/6.png"
               alt=""
               width={150}
               height={70}
               className="p-4"
             
               />
    </div>
    <div className="w-56 ">
          
             
               
    </div>
            
            
            </div>
        </div>
       
    )
} 

export  default SponsorGrid 