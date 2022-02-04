import Link from "next/link";
import Image from "next/image";
import BareMinimumTemplate from "../../layouts/interface/minimum";
import cssStyles from "../../styles/Quizzer.module.css";
import ModalScreen from "../../layouts/modal";
import {ConfirmAnswer} from "../../components/notification";
import ProgressBar from "../../components/meter";


export default function Quizzer() {
  return (
    <BareMinimumTemplate>

    <ProgressBar />

    <section className={cssStyles["mainsection"]}>
	    <div className="board wide" style={{margin: "0 auto!important"}}>
	      <p className="lead"> What does the below flag represents?</p>
	      <Image src="/bravo.png" width={260} height={260} alt={"imagethingy"} className="centermargin" />
	    </div>

	    <div className="workgroup wide flexor">
	    	<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
			  Dangerous goods onboard
			</button>
			
			<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
			  Dangerous goods onboard
			</button>
			
			<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
			  Dangerous goods onboard
			</button>
			
			<button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
			  Dangerous goods onboard
			</button>

	    </div>	    

		<hr />

		<div className={cssStyles["cta"]}>
	  	<span className={cssStyles["tiny"]}>Proceed to next question. please note you will not be able to return later</span>
		<button className={cssStyles["nextbtn"]} disabled={true}> Proceed To Next Question </button>
		</div>

		<hr />

		<footer>
			<Link href="/">
				<a style={{color:"var(--headline)", opacity: ".6"}}> Abort Quiz </a>
			</Link>
		</footer>

		<ModalScreen> <ConfirmAnswer /> </ModalScreen>

	  </section>

    </BareMinimumTemplate>
  )
}
