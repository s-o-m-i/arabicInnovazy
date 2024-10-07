import React from 'react';
import { container, headingText, paragraphTextColor, textwhite } from '../../styles/styles';
import { StaticImage } from 'gatsby-plugin-image';
import '../../ui/services.css'
import { PopupModal } from 'react-calendly';
import ForwardArrow from "../../assets/icons/forwardArrow.png";
import PrimaryButton from '../../ui/PrimaryButton';
import SecondaryButton from '../../ui/SecondaryButton';
import CallIcon from "../../assets/icons/callIcon.png";
import { corporateWebDev } from '../../utils/corporate-dev-data';
import { ourApproach } from '../../utils/ourApproach-data';
import { Link } from 'gatsby';

import CallToAction from '../../ui/CallToAction'

import CustomSpotlight from '../../ui/CustomSpotlight';

import UnitingWithUs from '../../components/webDevelopment/FancyCard';
import { FaCheck } from "react-icons/fa6";
const WebDevelopment = () => {
    const [showModal, setModal] = React.useState(false);
    const handleClick = () => {
        setModal(true);
    };
    return (
        <>
        <div className={`${container} mt-[130px]`}>
            {/* <div className="grid grid-cols-12">
                <div className="col-span-12 sm:col-span-6 ">
                    <div className='mt-8'>

           <h1
                className={`${textwhite}  ${headingText}   uppercase    font-medium`}
                >
               <span className='services-linear'> Web Development</span> Services <br/> in USA
              </h1>
              <p className={`w-[100%] sm:w-[75%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
              We prioritize the unique needs and preferences of our valued clients and provide them with creative and supremely functional end to end web designs and development services.</p>
              <div className="flex flex-wrap gap-3 sm:gap-0 mt-8">
                                <button onClick={handleClick} aria-label="Get Consultation">
                                    <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                                </button>
                                <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                    <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                                </a>
                            </div>
                  </div>
                </div>
                <div className="col-span-6 flex justify-center items-center [perspective:900px]">
              <StaticImage src='../../assets/images/s_webdevelopment.png' alt='web_development' className='w-[80%] hidden sm:block cursor-pointer hover:transform hover:scale-110 transition-transform duration-300' 
              
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
          Web Development<br/>  Services
          in USA
              </h1>
             
              <div className="self-start">
                <div className="h-1 w-24 services_heading_success" />
              </div>
            </div>
          </div>
          <h1
             className={`${textwhite} mt-28 text-[30px] sm:text-[38px] sm:w-[50%] w-[100%]  font-medium`}
           >
    
       <span className='testi-linear'>  Crafting Scalable and  </span>   Future-Ready Web Solutions 
           </h1>

           <p
                  className={`w-[100%] sm:w-[45%] z-10  mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}
                >
     We prioritize the unique needs and preferences of our valued clients and provide them with creative and supremely functional end to end web designs and development services.






                </p>
        
                <div className="flex flex-wrap gap-3 sm:gap-0 mt-12">
                               <button onClick={handleClick}  aria-label="Get Consultation">
                                   <PrimaryButton btnText="Get Consultation" image={ForwardArrow} imageAlt="Get Consultation" />
                               </button>
                               <a href="/#contact-us" role="button" rel="noreferrer" aria-label="Contact">
                                   <SecondaryButton btnText="Talk to us" image={CallIcon} imageAlt="Talk to us" />
                               </a>
                           </div>


            <div className={`mt-[120px]`}>
            <h1 className={`${textwhite} ${headingText} mx-auto w-[100%] text-start md:text-center`}>Our Approach</h1>
            <p className={`w-[100%] sm:w-[65%] mx-auto mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] text-start md:text-center leading-7`}>Empowering Your Possibilities: Explore Our Diverse Range of Services</p>

<CustomSpotlight data={ourApproach}/>
            <div className='mt-10'>
                <div className="grid md:grid-cols-12 gap-4 justify-center">


                    
                </div>
            </div>
            <div className='text-center mt-14'>
                <Link to='/services'>
                    {/* <PrimaryButton btnText="Explore Services" image={ForwardArrow} imageAlt="Get Consultation" /> */}
                    <PrimaryButton image={CallIcon} btnText="(305)-501-8021" imageAlt="Call Innovazy for further quries" />
                </Link>
            </div>
        </div>


<UnitingWithUs/>



<div className="flex items-center flex-col sm:flex-row justify-between mt-28 sm:mt-0">
    <div className='border-r-2 border-primary-orange sm:mr-8 '>
            <h1
                className={`${textwhite}  text-[38px] w-[100%] sm:w-[80%] font-medium`}
              >
          Attain business goals through  <br/>  <span className="text-primary-orange text-[35px] capitalize"> web development solutions
             </span>
              </h1>

              <p className={`w-[100%] sm:w-[70%] mt-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
                     At Innovazy, you get the most advanced and diverse options for a modern interface mobile app for your business to stand from your competitors.
                      </p>
    </div>

    <div>
    <div className=' flex sm:flex-row flex-col items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-8 overflow-hidden  w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>01</h1>
            <h1 className={` ${textwhite} `}>Website Development</h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            Establish a strong online presence with our responsive, user-friendly websites. Tailored to your business needs, we help elevate your brand and engage your audience.
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>02</h1>
            <h1 className={` ${textwhite} `}>Web App Development</h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            Develop robust web applications that enhance user experience and drive efficiency. Our team creates tailored solutions to meet your unique business needs.
                      </p>
        </div>
    </div>

    <div className=' flex sm:flex-row flex-col  items-center gap-5'>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-8 overflow-hidden w-[280px] h-[280px] text-center mt-28">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>03</h1>
            <h1 className={` ${textwhite} `}>Ecommerce Website Development</h1>
            <p className={`w-[100%]  mt-3 ${paragraphTextColor} text-[12px] `}>
            Build a robust online store with user-friendly, scalable platforms that drive sales and boost customer engagement.
                      </p>
        </div>
        <div className="dev-circle border-2 rounded-full border-primary-orange px-5 overflow-hidden w-[300px] h-[300px] text-center">
            <h1 className={`${headingText} mt-10 ${textwhite}`}>04</h1>
            <h1 className={` ${textwhite} `}>WordPress Development Services            </h1>
            <p className={`w-[100%]  mt-5 ${paragraphTextColor} text-[12px] `}>
            Custom WordPress development services that unlock your website's potential with responsive, easy-to-manage, and high-performance sites.
                      </p>
        </div>
    </div>
    </div>



</div>


<div className="flex sm:flex-row flex-col  justify-between gap-14 mt-32">

<div className='p-5 hidden sm:block'>
    <StaticImage src='../../assets/images/corporateWebDev.webp' alt='' className='w-full h-full cursor-pointer hover:transform hover:scale-110 transition-transform duration-300'/>
</div>

    <div className=' '>

<h1
                className={`${textwhite}  ${headingText} w-[100%]  font-medium`}
                >
        Corporate Web <span className="text-primary-orange ">Development
        
             </span>
              </h1>

              <p className={`w-[100%] sm:w-[70%] my-5 ${paragraphTextColor} text-[14px] sm:text-[16px] leading-6 sm:leading-7`}>
              Our experts make us claim to be the best web development company with their creative, meaningful and functional web designs which provides businesses a sustainable marketing strength.
                      </p>
                      {corporateWebDev && corporateWebDev.length>0 && corporateWebDev.map((e,i)=> {
                        return (
<div className="flex items-center gap-4 text-primary-orange mt-3">
<FaCheck />
                      <h5 className={`${paragraphTextColor} text-[13px]`}>{e.data}</h5>
</div>

                        )
                      })}

                      
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
        </div>
        <CallToAction/>
        </>
    );
};

export default WebDevelopment;