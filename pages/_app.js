/*
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
//This was there initially but after using google analytics, i saw something on stack overflow to chang app to below
*/
import {useRouter} from "next/router";
import {useEffect} from "react";

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  const router = useRouter();

  const handleRouteChange = (url) =>{
    window.gtag("config", "G-T0B7WP4YMS", {
      page_path: url,
    });
  }
  
  useEffect(()=>{
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events]);

  return <Component {...pageProps} />
}

export default MyApp;