import Expert from "./Expert"
import Image from "next/image"



const Container_Expert = ( ) =>  {
    return (

        
        <div className="flex flex-row items-end w-full">      
             <Image
src="/left.png"
alt=""
width={50}
height={10}
className=" self-center mb-52"/>
         <Expert></Expert>
        </div>
       
    )
} 

export  default Container_Expert