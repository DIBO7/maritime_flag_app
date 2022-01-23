//npm i @popperjs/core
import Image from "next/image";
import Interface from "../layouts/interface";
//import Card from "../components/card"
import styles from '../styles/Home.module.css';



export default function Home() {
  return (
    <Interface>
      <section className="within-main">
        <div className="board">
          <p className="lead"> Hello!, Welcome to the maritime flag app. What do you intend to do now? </p>
        </div>

        <div className="workgroup">
          <button> Nautical Flags Tutor </button>
          <button> Nautical Flags Quizzer </button>
          <button> About the App </button>
          <button> Send App Invite to Friends </button>

        </div>

      </section>
    </Interface>
  )
}
