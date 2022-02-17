import cssStyles from "../../styles/Quizzer.module.css";


export const ConfirmAnswer = function({clickHandler}){

	return(

		<div className={cssStyles["cta"]}>
	  	<span className={cssStyles["tiny"]}>
	  		Final Answer? please note you will not be able to return later
	  	</span>
		<button className={cssStyles["nextbtn"]} disabled={false} data-bs-dismiss="modal" onClick={()=>clickHandler()}> Yes! Proceed To Next Question </button>
		</div>

		)
}