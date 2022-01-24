import Image from "next/image";
import Link from "next/link";
//import Interface from "../layouts/interface";
//import styles from '../styles/Home.module.css';


export default function Home() {

  return (
    
    <section>

      <h2> B </h2>

      <div className='card'>
        <Image src="/bravo.png" width={100} height={100} className="card-image-top" />
      </div>

      <p> This flag represents "Bravo" </p>

      <article>
        <span className="tiny"> It means </span>
        <p> I require a diver below urgently </p>
      </article>

      <footer>
      <hr />
      <Link href="/">
        <a> Home </a>
      </Link>


      </footer>

    </section>

  )
}
