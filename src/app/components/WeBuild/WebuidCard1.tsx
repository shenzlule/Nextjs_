import React from "react"
import Image from "next/image"


const WebuildCard1 = ( ) =>  {
    return (

        
        <div className=" flex w-auto flex-col md:flex-row ">   


<div className=" flex m-3 flex-col  p-4 items-center text-center justify-around h-72 w-72 border_">
    <p id="para" className="text-xs gryclr">Maecenas non ante sit amet ex
                    scelerisque facilisis. Sed at orci maximus,
                    suscipit nunc, elementum arcu. the Fusce
                    in aliquet purus. </p>
      <div className=" flex flex-col items-center text-center">
      <Image
src="/c1.png"
alt=""
width={90}
height={90}
className='pp w-20 '

/>
<p><b>Mr Jhon Smith</b></p>
<p  id="paras" className="gryclr text-xs"> CEO of Omni Tech</p>
<Image
src="/star.png"
alt=""
width={70}
height={30}
className='star'

/>

      </div>


    </div>         
        


        
<div className="h-72 w-72  m-3 p-4 border_ flex flex-col items-center  justify-around   text-center borderCard">
    <p id="para"  className="text-xs gryclr">Maecenas non ante sit amet ex
                    scelerisque facilisis. Sed at orci maximus,
                    suscipit nunc, elementum arcu. the Fusce
                    in aliquet purus. </p>
      <div className=" flex flex-col items-center text-center">
      <Image
src="/c2.png"
alt=""
width={90}
height={90}
className='pp  w-20 '

/>
<p><b>Mr Jhon Smith</b></p>
<p  id="paras" className="gryclr text-xs"> CEO of Omni Tech</p>
<Image
src="/star.png"
alt=""
width={70}
height={30}
className='star'

/>

      </div>


    </div>   

    
<div className="h-72 w-72  m-3 p-4  border_ flex flex-col items-center  justify-around   text-center">
    <p id="para"  className="text-xs gryclr">Maecenas non ante sit amet ex
                    scelerisque facilisis. Sed at orci maximus,
                    suscipit nunc, elementum arcu. the Fusce
                    in aliquet purus. </p>
      <div className=" flex flex-col items-center text-center">
      <Image
src="/c3.png"
alt=""
width={90}
height={90}
className='pp  w-20 '

/>
<p><b>Mr Jhon Smith</b></p>
<p  id="paras" className="gryclr text-xs"> CEO of Omni Tech</p>
<Image
src="/star.png"
alt=""
width={70}
height={30}
className='star'

/>

      </div>


    </div>   
        
        </div>
       
    )
} 

export  default WebuildCard1 