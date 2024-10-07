import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from './footer/Footer';
import Navbar from './header/Navbar';
import Loader from '../ui/Loader';

const MainLayout = ({ children }) => {
    // const [isLoading, setIsLoading] = React.useState(true);

    // React.useLayoutEffect(() => {
    //   const timer = setTimeout(() => {
    //     setIsLoading(false); 
    //   }, 3000);
  
    //   return () => clearTimeout(timer); 
    // }, []);
    return (
        <>
             <Helmet>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
                <link href="https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,300,601,600,401,501,400,700&display=swap" rel="stylesheet" />
                <link rel="icon" type="image/x-icon" />
                <link rel="apple-touch-icon" />
            </Helmet>
              {/* {isLoading ? (
        <Loader /> // Show loader while loading is true
      ) : ( */}
      {/* <> */}
          <Navbar />
            {children}
            <Footer />
      {/* </> */}
      {/* )} */}

       
        
        </>);
};

export default MainLayout;