import Head from "next/head";
import Link from "next/link";
import BareMinimumTemplate from "../../layouts/interface/minimum";
import styles from '../../styles/Tutorial.module.css';
import SlidingElement from "../../components/slide";


export default function Tutorial() {

  return (
    
    <BareMinimumTemplate>

      <main style={{backgroundColor: "var(--secondary)"}}>

        <section className={styles.mainview}>
      {/*This section should take the entire screen (consideration should be given to browser-views)*/}

            <div className={styles.slider}> {/*boostrap 'conatiner' class looks good but the width of the sliding element gets a bug. alittle portion of next element is visible*/}
              <SlidingElement id="1" />
              <SlidingElement id="2" />
              <SlidingElement id="3" />
              <SlidingElement id="4" />
            </div>

            <div className={styles["nav-group"]}>
              <Link href="#slide-1" passHref> 
                <a> A </a> 
              </Link>
              <Link href="#slide-2" passHref> 
                <a> B </a> 
              </Link>
              <Link href="#slide-3" passHref> 
                <a> C </a> 
              </Link>
              <Link href="#slide-4" passHref> 
                <a> D </a> 
              </Link>
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
