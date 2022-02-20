//npm i @popperjs/core
import Head from 'next/head'
import Script from "next/script";
//import Navigation from "../../components/header";
//import Footer from "../../components/footer";
import {app_description, app_url} from "../../utility/app"


export default function BareMinimumTemplate({children}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maritime Flag App: Tutor and Quizzer</title>
        <meta name="description" content={app_description} />
        <meta name="description" content="Page description. No longer than 155 characters." />
        
        {/*Twitter Card data*/}
        <meta name="twitter:card" content="app">
        {/*<meta name="twitter:site" content="@TheIbrahim_O">*/}
        <meta name="twitter:title" content="Master The Maritime Flags">
        <meta name="twitter:description" content={app_description}>
        <meta name="twitter:creator" content="@TheIbrahim_O">
        <meta name="twitter:image" content={`${app_url}/icon-192x192.png`}> {/*min of 120 x 120*/}
        {/*Open Graph data*/}
        <meta property="og:title" content="Maritime Flag App: Tutor and Quizzer" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={app_url} />
        <meta property="og:image" content={`${app_url}/icon-192x192.png`} />
        <meta property="og:description" content={app_description} />
        <meta property="og:site_name" content="Maritime Flag App: Tutor and Quizzer" />
        {/*<meta property="fb:admins" content="Facebook numeric ID" />*/}

        {/*Global site tag (gtag.js) - Google Analytics*/}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-T0B7WP4YMS"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-T0B7WP4YMS');
        </script>

        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>

      {children}
      
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
    </>
  )
}
