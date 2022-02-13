import {useState, useEffect} from "react";
import Link from "next/link";
import BareMinimumTemplate from "../../layouts/interface/minimum";
import cssStyles from "../../styles/Quizzer.module.css";
import ModalScreen from "../../layouts/modal";
import {ConfirmAnswer} from "../../components/notification";
import ProgressBar from "../../components/meter";
import Loader from "../../components/loader";
import {getAPIData, getRandomObjects} from "../../utility/worker";

//here, I will fetch all flags from the api (most probably with useEffect)
//keep the fetched flags in an API
//create a function to pick random 5 or 10 objects to questonify. (this function can be in a different file, cos it will be used in other places)
//questionify selected objects and keep them in a stata
//user answers are also kept in a state
//


export default function Quizzer({data}) {

	let [ready, setReady] = useState(false);
	let [apiData, setApiData] = useState(data);

	useEffect(()=>{
		//set the loader on
		setReady(false)
		console.log(getRandomObjects(apiData))
		setTimeout(()=>{setReady(true)}, 2500)
		//use a function on it to select any random 10
		//turn this ten into questions
	}, []);


  return (
    <BareMinimumTemplate>
		
		<ProgressBar />


		<section className={cssStyles["mainsection"]}>

    {
    	ready ? 
    				<>    				
				    <div className="board wide" style={{margin: "0 auto!important"}}>
				      <p className="lead"> What does Bravo mean?</p>
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
				  		<span className={cssStyles["tiny"]}>
				  			Proceed to next question. please note you will not be able to return later
				  		</span>
						<button className={cssStyles["nextbtn"]} disabled={true}> Proceed To Next Question </button>
						</div>

						<hr />
						</>

						:

						<Loader />
    }


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


export const getServerSideProps = async() =>{
  
  const data = await getAPIData()

	//pass data to this page via props
  return{
    props:{data}
  }
}

