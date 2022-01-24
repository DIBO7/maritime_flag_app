//npm i @popperjs/core
import Head from 'next/head'
import Script from "next/script";
//import Navigation from "../../components/header";
//import Footer from "../../components/footer";


export default function BareMinimumTemplate({children}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Maritime Flag App: Tutor and Quizzer</title>
        <meta name="description" content="Master the flags with their meanings and test your knowledge as well. A must use app for maritime young professionals" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />
      </Head>

      {children}
      
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous" />
    </>
  )
}
