import Head from "next/head";
import Link from "next/link";
//import axios from "axios";
//import absoluteUrl from "next-absolute-ur";//this is useless too as it takes an argument which cannot be gottent from get ServerSideProps()
import BareMinimumTemplate from "../../layouts/interface/minimum";
import styles from '../../styles/Tutorial.module.css';
import SlidingElement from "../../components/slide";


function Tutorial({data}) {//flaglist is from the getServerProps below whish is like useEffect except it works before page loads

  return (
    
    <BareMinimumTemplate>

      <main style={{backgroundColor: "var(--secondary)"}}>

        <section className={styles.mainview}>
      {/*This section should take the entire screen (consideration should be given to browser-views)*/}

            <div className={styles.slider}> {/*boostrap 'conatiner' class looks good but the width of the sliding element gets a bug. alittle portion of next element is visible*/}

              {
                flaglist.map((f)=>{
                  return(
                      <SlidingElement id={f._id} key={f._id} img_url={f.image} alphabet={f.name.charAt(0)}  name={f.name} meaning={f.meaning[0]} />
                    )
                })
              }
            {/*img_url={f.image}, firebase error i suppose*/}

            </div>

            <div className={styles["nav-group"]}>

              {
                flaglist.map((f)=>{
                  
                  return(

                    <Link href={`#slide-${f._id}`} passHref key={f._id}> 
                      <a> {f.name.charAt(0)} </a> 
                    </Link>

                  )
                })
              }

              
            </div>

        </section>

        <hr />

        <footer>
          <Link href="/">
            <a> Home </a>
          </Link>

        </footer>


    </main>      
    </BareMinimumTemplate>

    

  )
}

export const getServerSideProps = async() =>{
  //const res = await axios.get("http://localhost:3000/api/v1/flags");  
  const res = await fetch("http://maritime-flag-app.vercel.app/api/v1/flags")//for now all host (heroku, vercel and local) should fetch from vercel
  //and the only way to test that is in production...what a bad idea!!
  const data = await res.json()

//pass data to this page via props
  return{
    props:{data}
  }
}

export default Tutorial;