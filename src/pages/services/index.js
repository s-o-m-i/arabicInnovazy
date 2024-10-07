import React, { useEffect } from "react"
import { container, headingText, paragraphTextColor, textwhite } from "../../styles/styles"
import "../../ui/services.css"

import "../../components/hero/hero.css"
import { servicesCards } from "../../utils/servicesCard-data"
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "gatsby"
import CallToAction from "../../ui/CallToAction"
import Lottie from 'react-lottie';
import servicesAnime from '../../utils/services-anime.json'
import { RiUserLocationLine } from "react-icons/ri"
import ClientsBusiness from "../../components/hero/ClientsBusiness"
const ServicesHome = () => {
  const location = RiUserLocationLine()
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[location.pathname])
  const defaultOptionsSuccess = {
    loop: true,
    autoplay: true,
    animationData: servicesAnime,
};
  return (
    <div className="homeSectionleftBlob  mt-[150px] z-50 ">
      <div className="homeSectionRightBlob  ">
        <div className={`${container} mt-[130px]`}>
         

          {/* <div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading_success" />
              </div>

              <h1
                className={`${textwhite} text_effect_threeD   text-center uppercase tracking-wider font-[Montserrat-Bold] text-[42px] sm:text-[120px] w-[100%] font-medium`}
              >
                SERVICES
              </h1>

              <div className="self-start mt-2">
                <div className="h-1 w-24 services_heading_success" />
              </div>
            </div>
          </div> */}

<div className="flex justify-center ">
  <div className="flex flex-col items-center">
    
    <div className="self-end">
      <div className="h-1 w-24 services_heading_success" />
    </div>
    
    
    <h1
      className={`${textwhite} text-center uppercase tracking-wider font-[Aeonik-Bold] text-[38px] sm:text-[60px] w-[100%] font-medium`}
    >
      Ser<span className="testi-linear">v</span>ices
    </h1>

    
    <div className="self-start">
      <div className="h-1 w-24 services_heading_success" />
    </div>
  </div>
</div>
           <h1
             className={`${textwhite} mt-28 ${headingText}   w-[100%]  font-medium`}
           >
     COVERING ALL YOUR 

<span className='testi-linear'> DIGITAL NEEDS</span> 
           </h1>

           <p
                  className={`w-[100%] sm:w-[60%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
            At Innovazy, we provide a comprehensive range of digital services tailored to meet all your business needs. From innovative web development and mobile app design to cutting-edge digital marketing strategies, our solutions are crafted to elevate your online presence and drive growth. Whether you're looking for custom software, cloud solutions, or data analytics, our expert team is here to help you achieve success in the digital world.
                </p>


          {/* <p
            className={`w-[100%]   text-center mt-5 text-white text-[14px] sm:text-[20px] leading-6 sm:leading-7`}
          >
            COVERING ALL YOUR DIGITAL NEEDS
          </p>

          <div>
            <h1
              className={`${textwhite} mt-28  text-center   font-[Montserrat-Bold] ${headingText} w-[100%] font-medium`}
            >
              Landing your success,
            </h1>
            <h1
              className={`${textwhite} mt-4  text-center   font-[Montserrat-Bold] ${headingText} w-[100%] font-medium`}
            >
              everything starts with Innovazy
            </h1>
          </div> */}
          {/* <div className="relative ">
          <div className="flex absolute gap-5 justify-end animate-move w-full z-[-1]">
      <div className="w-[40px] sm:w-[100px] h-[40px] sm:h-[100px] bg-[#A0A0A0] mt-24 rounded-full absolute left-0"></div>
      <div className="w-[40px] sm:w-[150px] h-[40px] sm:h-[150px] bg-[#6C7A59] rounded-full"></div>
      <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-[#8A7669] mt-24 rounded-full"></div>
      <div className="w-[40px] sm:w-[200px] h-[40px] sm:h-[200px] bg-[#2E2E2E] rounded-full"></div>
      <div className="w-[300px] sm:w-[150px] h-[300px] sm:h-[150px] bg-[#7C6C55] rounded-full"></div>
      <div className="w-[40px] sm:w-[50px] h-[40px] sm:h-[50px] bg-[#2E2E2E] mt-24 rounded-full"></div>
      <div className="w-[40px] sm:w-[200px] h-[40px] sm:h-[200px] bg-[#7B8C9C] rounded-full"></div>
    </div>
          
          <div className="service_image h-[300px] items-center flex justify-center my_glassMorhism background-glass  mt-28 rounded-xl">
        
           

                                <h1 className="text-4xl z-[999] text-white">OUR SERVICES</h1>

          </div>
          </div> */}

{/* <ClientsBusiness/> */}



          <div className="grid grid-cols-12 my-56">
            {servicesCards && servicesCards.length>0 && servicesCards.map((serData,index)=>{
return (
            <div className="col-span-12 md:col-span-6">
              <div className={`inner ${serData.imageClass} bg-gray-700 h-[400px] relative`}>
                <div className={`outer-upper overflow-hidden aboslute top-0 left-0  opacity-[0.95] h-[70%] transition-all duration-1000 ease-in-out px-8 ${serData.colorScheme}`}>

                  <div className="h-full flex justify-center flex-col">
                    <h1
                      className={`text-[rgba(255,255,255,0.6)] relative   font-[Montserrat-Bold] text-[32px] sm:text-[50px] w-[100%] font-medium`}
                    >
{serData.title}
                    </h1>
                    <div className="">

                      <p
                        className={`w-[100%] sm:w-[60%] z-10 ${textwhite} mt-5  text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                      >
                        {serData.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className={`outer-lower services_heading flex items-center h-[30%] w-full absolute bottom-0`}>
                  <div className="ser_card_footer px-2 flex items-center justify-between w-full pr-4">

                    <h1 className={`${textwhite }  text-[42px] sm:text-[80px] uppercase tracking-wider font-[Montserrat-Bold]  w-[100%] font-medium`}
                    >
{serData.number}
                    </h1>
                    <Link to={serData.path}>
                    <div className="text-[30px] opacity-[.8] hover:opacity-[1] border-2 border-white hover:border-[#703b30] p-[10px] rounded-full hover:text-[#703b30] text-white transition-all duration-200">

                    <FaExternalLinkAlt />
                    </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

)
            })}
          

          </div>



         

        </div>
      </div>
      <CallToAction/>
    </div>
  )
}

export default ServicesHome
