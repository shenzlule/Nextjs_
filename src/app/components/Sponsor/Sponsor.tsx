import React from "react"
import SponsorGrid from "./SponsorGrid"



const Sponsor = ( ) =>  {
    return (

        
        <div className="flex h-autp py-5 px-5 flex-col justify-items-center mt-14  Brclr items-center ">   

          <div className="flex flex-col text-center h-auto mb-8">
            <h1 className='text-4xl  m-2'>Our Corporate Sponsor</h1>
                <p className="text-md m-5 gryclr">
                   Pitch deck services typically offer a range of services,inlcuding
                   <br/>content creation,design, and presentation coaching.
                </p>

            </div> 
            <SponsorGrid/>
        
        </div>
       
    )
} 

export  default Sponsor 


