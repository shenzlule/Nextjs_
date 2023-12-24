'use client'
import React from "react"
import Image  from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the styles (required)


const FollowUs = ( ) =>  {
    return (

        
        <div className="flex h-autp px-24 md:px-60 flex-col justify-items-center  items-center sm:py-12    text-white">   

      
<form className="md:w-full mx-auto w-full sm:mt-28 z-10">
<div className="sm:mb-5 flex flex-row">
    
    <input type="text"  className="  text-sm mr-5 w-full p-2.5 FormInput " placeholder="Name" />
    <input type="text"  className=" text-sm w-full p-2.5 FormInput" placeholder="Email" />
    
  </div>

  <textarea id="message" rows={4} className="FormMassega block sm:p-2.5 w-full text-sm text-gray-900 rounded-lg border " placeholder="Your message"></textarea>
  <button className="gradient-form-button w-full">Send</button>
</form>


<div className="flex flex-col z-10 w-96 sm:h-80 sm:mt-5  justify-end items-center">

<h2 className='z-10 sm:mb-5 sm:text-3xl font-extrabold'>Follow Us On</h2>


<Image

            width={200}
            height={20}
            src={"/follow_line.png"} alt={""} className="sm:mb-10"/>

<div className=" w-full  justify-around  flex flex-row z-10">
  <div className="dd">
 
<FontAwesomeIcon icon={faTwitter} size="2x" />

  </div>

  <div className="dd">
 
<FontAwesomeIcon icon={faInstagram} size="2x"/>

  </div>

  <div className="dd">

<FontAwesomeIcon icon={faFacebook} size="2x"/>


  </div>


</div>

</div>

<h3 className='sign  z-10 sm:mt-16'>Sign Up for Newsletter</h3>


<div className="input_plus_btn z-10 flex flex-row h-8 sm:mt-5">

<input type="text" placeholder="Your Email Here" className="mail"/>
<Image
src="/arrow.jpg"
alt=""
width={40}
height={40}

/>

</div>


        
   <div className="w-full sm:mt-32  z-10">

<footer className="w-full mt-0">
    <div className="w-full   mx-auto max-w-screen-xl  md:flex md:items-center md:justify-between">
    <ul className="flex flex-row w-full justify-between border-b gryclr border-gray-400 items-center mt-3 sm:text-sm text-xs font-medium  sm:mt-0 w-ful">
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">About Us</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Disclaimer</a>
        </li>
        <li>
            <a href="#" className="hover:underline me-4 md:me-6">Privacy policy</a>
        </li>
        <li>
            <a href="#" className="hover:underline">Affiliate policy</a>
        </li>
        
    </ul>
    </div>
</footer>
<div className="flex flex-row justify-between z-10  gryclr sm:mt-10">
            <ul className="footerlst sm:text-sm text-xs">
                <li>Bangadesh Office Address:</li>
                <li>House #449,Road #31, New DOHS Mohakhali, Dhaka-1206</li>
               
            </ul>

            <p>copyright@blogsite</p>


          </div>
   </div>
        <Image
        src='/footerbgs.png'
        alt=''
        width={1000}
        height={1000}
        // layout="fill"
        // objectFit="cover"

        className="-z-3  absolute w-full "
        />
                </div>
       
    )
} 

export  default FollowUs 