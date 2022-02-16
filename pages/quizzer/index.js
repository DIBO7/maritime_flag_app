import {useState, useEffect} from "react";
import Link from "next/link";
import BareMinimumTemplate from "../../layouts/interface/minimum";
import cssStyles from "../../styles/Quizzer.module.css";
import ModalScreen from "../../layouts/modal";
import {ConfirmAnswer} from "../../components/notification";
import ProgressBar from "../../components/meter";
import Loader from "../../components/loader";
import {getAPIData, getRandomObjects, questionification} from "../../utility/worker";

//here, I will fetch all flags from the api (most probably with useEffect)
//keep the fetched flags in an API
//create a function to pick random 5 or 10 objects to questonify. (this function can be in a different file, cos it will be used in other places)
//questionify selected objects and keep them in a stata
//user answers are also kept in a state
//



export default function Quizzer({data}) {

	let [ready, setReady] = useState(false);
	let [apiData, setApiData] = useState(data);
	let [questions, setQuestions] = useState([]);
	let [wrongChoices, setWrongChoice] = useState([]); //to hold wrong answers ONLY, we arent keeping track of correct answers
	let [sn, setSn] = useState(0); //set serial number, this will be used to move along the questions, displaying them one at a time


	//so i will haee two functions; goToNext and anwerThisQuestion (and a new state that either hold wrongAnswers or correct answers)
	//go to next well goes to the next question by increasing sn if possible, else it goes to the result 
	//answer questions notes down the question answered by the user, updates all necessary states and then calls goToNext

	const nextSn = () =>{
		if( (sn + 1) < questions.length){
			setSn(sn+1)
		}
	}

	useEffect(()=>{
		//set the loader on
		setReady(false)
		//use a function on it to select any random 10
		let randomObjectsToQuizOn = getRandomObjects(apiData)		
		//turn this ten into questions
		setQuestions(questionification(randomObjectsToQuizOn, apiData))//the "questionification" function makes the question		
		//turn off the loader
		setReady(true)
	}, []);


  return (
    <BareMinimumTemplate>
		
		<ProgressBar />


		<section className={cssStyles["mainsection"]}>

    {
    	ready ? 
    				<>    				
				    <div className="board wide" style={{margin: "0 auto!important"}}>
				      <p className="lead"> What does {questions[sn].q} mean?</p>
				    </div>
						 
						<div className="workgroup wide flexor">

				    {
				    	questions[sn].options.map((opt, ind)=>{

				    		return(
									  <button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" key={ind}>
										  {opt}
										</button>
				    			)						    
				    	})
				    }

				    </div>	    

						<hr />

						<div className={cssStyles["cta"]}>
				  		<span className={cssStyles["tiny"]}>
				  			you can skip this question but you will not be able to answer it later.
				  		</span>
						<button className={cssStyles["nextbtn"]} disabled={false} onClick={()=>nextSn()}> Proceed To Next Question </button>
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

