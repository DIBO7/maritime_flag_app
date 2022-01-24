
import Link from "next/link";
import Interface from "../../layouts/interface";
import styles from '../../styles/Tutorial.module.css';
import SlidingElement from "../../components/slide";


export default function Tutorial() {

  return (
    
    <Interface>
    <section className={styles.pop}>

      <div className="">
        <Link href="#slide-1" passHref> 
          <a> Slide One </a> 
        </Link>
        <Link href="#slide-2" passHref> 
          <a> Slide Two </a> 
        </Link>
        <Link href="#slide-3" passHref> 
          <a> Slide Three </a> 
        </Link>
        <Link href="#slide-4" passHref> 
          <a> Slide Four </a> 
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
    </Interface>

  )
}
