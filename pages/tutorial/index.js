import Head from "next/head";
import Link from "next/link";
//import axios from "axios";
//import absoluteUrl from "next-absolute-ur";//this is useless too as it takes an argument which cannot be gottent from get ServerSideProps()
import BareMinimumTemplate from "../../layouts/interface/minimum";
import styles from '../../styles/Tutorial.module.css';
import SlidingElement from "../../components/slide";
import {getAPIData} from "../../utility/worker";


function Tutorial({data}) {//data is from the getServerProps below whish is like useEffect except it works before page loads
  data=data.sort((a, b) => {
    const nameA = a.name.toLowerCase(); // Convert names to lowercase for case-insensitive sorting
    const nameB = b.name.toLowerCase();
    if (nameA < nameB) {
      return -1; // a should come before b
    }
    if (nameA > nameB) {
      return 1; // a should come after b
    }
    return 0; // names are the same
  });

  return (
    
    <BareMinimumTemplate>

      <main style={{backgroundColor: "var(--secondary)"}}>

        <section className={styles.mainview}>
      {/*This section should take the entire screen (consideration should be given to browser-views)*/}

            <div className={styles.slider}> {/*boostrap 'conatiner' class looks good but the width of the sliding element gets a bug. alittle portion of next element is visible*/}

              {
                data.map((f)=>{
                  return(
                      <SlidingElement id={f._id} key={f._id} img_url={f.image} alphabet={f.name.charAt(0)}  name={f.name} meaning={f.meaning[0]} />
                    )
                })
              }
            {/*img_url={f.image}, firebase error i suppose*/}

            </div>

            <div className={styles["nav-group"]}>

              {
                data.map((f)=>{
                  
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
  //for now all host (heroku, vercel and local) should fetch from vercel
  const data = await getAPIData()

    //pass data to this page via props
    return{
      props:{data}
    }
}

export default Tutorial;