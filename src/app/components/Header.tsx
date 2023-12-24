import React  from "react";

import { Pacifico } from 'next/font/google'
const fonnt=Pacifico({
  subsets: ["vietnamese"],
  weight: "400"
  
})

const Header = ( props :{name:string, cast:string}) =>  {
    return (

        
        <div className="flex flex-row w-inherit justify-between text-white items-center mt-4 ">      
          <p className="text-sm   md:text-xl" style={fonnt.style}>Pitchable</p>
          <button className="gradient-button px-1 py-1 text-xs md:text-sm ">Give us a call</button>
        </div>
       
    )
} 

export  default Header 



// const Header = ( props :{name:string, cast:string}) =>  {
//     return (

        
//         <div className="flex flex-row w-96 justify-around">      
//            <p>{` ${props.name} `}</p>
//            <p>{` ${props.name} `}</p>
//            <p>{` ${props.name} `}</p>
//         </div>
       
//     )
// } 

// export  default Header 