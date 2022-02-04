import cssStyles from "../../styles/Quizzer.module.css";


export const ConfirmAnswer = function(){

	return(

		<div className={cssStyles["cta"]}>
	  	<span className={cssStyles["tiny"]}>
	  		Proceed to next question. please note you will not be able to return later
	  	</span>
		<button className={cssStyles["nextbtn"]} disabled={true}> Proceed To Next Question </button>
		</div>

		)
}