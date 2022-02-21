//npm i @popperjs/core
import Link from "next/link";
import {useRouter} from "next/router";
import Interface from "../layouts/interface";
//import Card from "../components/card"
//import ModelScreen from "../components/modal";
import ModalScreen from "../layouts/modal";
import {InformationShowcase} from "../components/notification";
import ShareWindow from "../components/sharer";
import styles from '../styles/Home.module.css';



export default function Home() {

const router = useRouter();//to push to the quizzer page

  return (
    <Interface>
      <section className="within-main">
        <div className="board wide">
          <p className="lead"> Hello!, Welcome to the maritime signal flag app. Please select one of the options below to get started! </p>
        </div>

        <div className="workgroup wide flexor">
          <Link href="/tutorial" passHref><button> Nautical Flags Tutor </button></Link>
          <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Nautical Flags Quizzer
          </button>          

          <Link href="/about/" passHref><button> About the App </button></Link>
          <button type="button" data-bs-toggle="modal" data-bs-target="#sharemodal">
            Send App Invite to Friends
          </button>

        </div>

        <ModalScreen modal_title={"Proceed To Quizzer"}> 
          <InformationShowcase 
            info={"At the moment, the quizzer works with flag names and meanings. In the coming days, it would include flag image identifications and more."}
            btnHandler={()=>router.push("/quizzer/")}
            btnText={"Proceed To Quizzer"}
          />
        </ModalScreen>

        <ModalScreen modal_id={"sharemodal"} modal_title={"Share App With People"}> 
          <ShareWindow />
        </ModalScreen>

      </section>
    </Interface>
  )
}
