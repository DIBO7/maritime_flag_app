import Head from "next/head";
import Link from "next/link";
import BareMinimumTemplate from "../../layouts/interface/minimum";
import styles from '../../styles/Tutorial.module.css';
import SlidingElement from "../../components/slide";


export default function Tutorial() {

  return (
    
    <BareMinimumTemplate>

      <main style={{backgroundColor: "var(--secondary)"}}>

        <section>
      {/*This section should take the entire screen (consideration should be given to browser-views)*/}

            <div className={styles.slider}>
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

        <footer>
          <hr />
          <Link href="/">
            <a> Home </a>
          </Link>
        </footer>


        <section className={styles.pop}>          

        </section>
    </main>

      
    </BareMinimumTemplate>

    

  )
}
