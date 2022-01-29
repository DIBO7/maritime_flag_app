//npm i @popperjs/core
import Head from 'next/head'
import Script from "next/script";
import BareMinimumTemplate from "./minimum";
//import Navigation from "../../components/header";
//import Footer from "../../components/footer";


export default function Home({children}) {
  return (
    <BareMinimumTemplate>

      <main className="mainclass" style={{backgroundImage: 'url("/display/bg2.png")', backgroundSize: "contain", minHeight: '100vh'}}>
        {children}                
      </main>

      <section className="overflow"> </section>
     
    </BareMinimumTemplate>
  )
}
