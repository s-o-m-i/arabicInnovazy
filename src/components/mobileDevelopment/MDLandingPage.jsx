import React from 'react'
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles'
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import CallIcon from "../../assets/icons/callIcon.png";
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import { StaticImage } from 'gatsby-plugin-image';
import { PopupModal } from 'react-calendly';
const MDLandingPage = () => {
  const [showModal, setModal] = React.useState(false);
  const handleClick = () => {
      setModal(true);
  };
  return (
    <>
     <div className='homeSectionleftBlob'>
     <div className='homeSectionRightBlob'>
    <div className={`${container} mt-[130px]`}>
           {/* <div className="grid grid-cols-12">
               <div className="col-span-12 sm:col-span-6 ">
                   <div className='mt-8'>

          <h1
               className={`${textwhite}  ${headingText}   uppercase    font-medium`}
               >
              <span className='services-linear'> Mobile Application </span> Development
             </h1>
             <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] `}>
             Our highly experienced and skilled expert team ensures to bring our customers the most advanced mobile apps to the user experience of their potential businesses and satisfy more customers.</p>
             <div className="flex flex-wrap gap-3 sm:gap-0 mt-12">
                               <button onClick={handleClick} aria-label="Get Consultation">
                                   <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                               </button>
                               <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                   <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                               </a>
                           </div>
                 </div>
               </div>
               <div className="col-span-6 flex justify-center  [perspective:900px]">
             <StaticImage src='../../assets/images/serviceAppDev.png' alt='web_development' className='w-[80%] hidden sm:block cursor-pointer hover:transform hover:scale-110 transition-transform duration-300'  
                 placeholder="blurred" // Displays a blurred placeholder while loading
                 loading='eager' // Forces the image to load immediately
             />

               </div>
           </div> */}

<div className="flex justify-center ">
            <div className="flex flex-col items-center">
              <div className="self-end">
                <div className="h-1 w-24 services_heading_success" />
              </div>

              <h1
                className={`${textwhite}   text-center uppercase tracking-wider font-[Montserrat-Bold] text-[42px] sm:text-[50px] w-[100%] font-medium`}
              >
          Mobile Application <br/>  Development
              </h1>
             
              <div className="self-start">
                <div className="h-1 w-24 services_heading_success" />
              </div>
            </div>
          </div>
          <h1
             className={`${textwhite} mt-28 text-[30px] sm:text-[38px] sm:w-[50%] w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'>  Empowering Businesses with  </span>   Cutting-Edge Mobile Solutions
           </h1>

           <p
                  className={`w-[100%] sm:w-[45%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
      Our highly experienced and skilled expert team ensures to bring our customers the most advanced mobile apps to the user experience of their potential businesses and satisfy more customers.



                </p>
        
                <div className="flex flex-wrap gap-3 sm:gap-0 mt-12">
                               <button onClick={handleClick}  aria-label="Get Consultation">
                                   <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                               </button>
                               <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                   <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                               </a>
                           </div>




           </div>
           </div>
           </div>

           {
                        typeof window !== 'undefined' ?
                            <PopupModal
                                open={showModal}
                                onModalClose={() => setModal(false)}
                                url="https://calendly.com/innovazy/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=151414&text_color=ffffff&primary_color=f17840"
                                rootElement={document.getElementById("___gatsby")}
                            />
                            :
                            ''
                    }
   </>
  )
}

export default MDLandingPage