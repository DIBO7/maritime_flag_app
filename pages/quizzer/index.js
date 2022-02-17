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
	let [tickedAnswers, setTickedAnswers] = useState([]); //to hold user answers {flagName: "string", answer: "string", correct: Boolean}
	let [sn, setSn] = useState(0); //set serial number, this will be used to move along the questions, displaying them one at a time
	let [currentSelection, setCurrentSelection] = useState(null);//the option the user is currently selected
	let [questionMode, setQuestionMode] = useState(true)//once this is false...show results instead!


	//so i will haee two functions; goToNext and anwerThisQuestion (and a new state that either hold wrongAnswers or correct answers)
	//go to next well goes to the next question by increasing sn if possible, else it goes to the result 
	//answer questions notes down the question answered by the user, updates all necessary states and then calls goToNext

	const answerThisQuestion = () =>{
		//checks if a selected answer is right, if it is, go to the next, if its not right, add it to wrong questions then go to next
		if(questions[sn].meaning === currentSelection){//meaning its correct/the user picked the right answer
				setTickedAnswers([...tickedAnswers, {flagName: questions[sn].q, actualMeaning: questions[sn].meaning, correct:true}])
		}else{
				setTickedAnswers([...tickedAnswers, {flagName: questions[sn].q, actualMeaning: questions[sn].meaning, correct:false}])
		}
		goToNextQuestion()
	}

	const goToNextQuestion = () =>{
		if( (sn + 1) < questions.length){
			setSn(sn+1)
		}else{//we are at the end of the questions
			setReady(false)			
			setQuestionMode(false)
			setTimeout(()=>{ //wait 2 secs parhaps the setTickedAnswerswill be done by then
				setReady(true)
			}, 2000)
		}
		setCurrentSelection("")//forget whatever the user has selected;
		

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
		
		<ProgressBar currentQuestionNumber={sn + 1} />


		<section className={cssStyles["mainsection"]}>

    {
    	ready ? 
    				<>    				
				    <div className="board wide" style={{margin: "0 auto!important"}}>
				    {
				    	questionMode ?
				      	<p className="lead"> What does {questions[sn].q} mean?</p>
				      	:
				      	<p className="lead"> You answered <strong style={{fontSize: "3rem"}}>{tickedAnswers.filter(item=>item.correct).length}/{questions.length}</strong> correctly! </p>
				    }
				    </div>
						 
						<div className="workgroup wide flexor">

				    {
				    	questionMode ? questions[sn].options.map((opt, ind)=>{

				    		return(
									  <button className={ opt === currentSelection ? "active" : "" } type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" key={ind} onClick={()=>setCurrentSelection(opt)}>
										  {opt}
										</button>
				    			)						    
				    	})

				    	:

				    	<p>Corrections</p>
				    }
						

				    </div>	    

						<hr />

						<div className={cssStyles["cta"]}>
				  		<span className={cssStyles["tiny"]}>
				  			you can skip this question but you will not be able to answer it later.
				  		</span>
						<button className={cssStyles["nextbtn"]} disabled={false} onClick={()=>goToNextQuestion()}> Proceed To Next Question </button>
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

		<ModalScreen> <ConfirmAnswer clickHandler={answerThisQuestion} /> </ModalScreen>

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

