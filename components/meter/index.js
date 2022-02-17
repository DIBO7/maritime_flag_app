
export default function ProgressBar({currentQuestionNumber=0, totalQuestions=10}){

	return (
		<div className="progress">
		  <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" 
		  	role="progressbar" 
		  	aria-valuenow="75" 
		  	aria-valuemin="0" 
		  	aria-valuemax="100" 
		  	style={{width: `${(currentQuestionNumber / totalQuestions) * 100}%`}}>

		  	</div>


		</div>

		)
};