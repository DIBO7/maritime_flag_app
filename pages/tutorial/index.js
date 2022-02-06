import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import BareMinimumTemplate from "../../layouts/interface/minimum";
import styles from '../../styles/Tutorial.module.css';
import SlidingElement from "../../components/slide";


export default function Tutorial({flaglist}) {//flaglist is from the getServerProps below whish is like useEffect except it works before page loads

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
  const res = await axios.get("http://localhost:3000/api/v1/flags");
  return{
    props:{
      flaglist: res.data,
    }
  }
}