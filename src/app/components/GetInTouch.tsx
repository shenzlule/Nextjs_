import React from "react"
import Image from "next/image"


const GetInTouch = ( ) =>  {
    return (

        
        <div className="flex h-autp  flex-col justify-items-center items-center ">   

          <div className="flex flex-col text-center h-auto  items-center">
            <h1 className='text-4xl '>Get in Touch</h1>
              
            </div> 
           
            
            <Image
src="/getin_img.png"
alt=""
width={200}
height={30}
className="w-72"

/>
<p  className="gryclr text-center">93%   of   traffic  begins with a query. Even with a high number of <br/>
                searches being performed.</p>


            
        
        </div>
       
    )
} 

export  default GetInTouch 