//npm i @popperjs/core
import Link from "next/link";
import Interface from "../layouts/interface";
//import Card from "../components/card"
import ModelScreen from "../components/modal";
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <Interface>
      <section className="within-main">
        <div className="board wide">
          <p className="lead"> Hello!, Welcome to the maritime flag app. What do you intend to do now? </p>
        </div>

        <div className="workgroup wide flexor">
          <Link href="/tutorial"><button> Nautical Flags Tutor </button></Link>
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Nautical Flags Quizzer
          </button>          

          <Link href="/quizzer/"><button> About the App </button></Link>
          <button> Send App Invite to Friends </button>

        </div>

        <ModelScreen />

      </section>
    </Interface>
  )
}
