
import Link from "next/link";
//import Interface from "../../layouts/interface";
import styles from '../../styles/Tutorial.module.css';
import SlidingElement from "../../components/slide";


export default function Tutorial() {

  return (
    
    <main style={{backgroundColor: "var(--secondary)"}}>
    <section className={styles.pop}>

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

      <div className={styles.slider}>
        <SlidingElement id="1" />
        <SlidingElement id="2" />
        <SlidingElement id="3" />
        <SlidingElement id="4" />
      </div>  

      <footer>
      <hr />
      <Link href="/">
        <a> Home </a>
      </Link>


      </footer>

    </section>
    </main>

  )
}
