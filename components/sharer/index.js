import Link from "next/link";
import {useState} from "react";

export default function ShareWindow(){

	let [linkCopied, setLinkCopied] = useState(false)//set to true whenever the "copy link" has been clicked and successful for user notification purposes!
	
	const pretextToShare = "Conviniently learn the maritime flags with this free maritime flag app. Take the quizzer whenever you like!";
	const url = "https://maritime-flag-app.vercel.app";

	const copyToClipboard = () =>{
//		if(!navigator.clipboard){
			//call a callback function
//			console.log("couldn't copy tho")
//		return;
//		}
		navigator.clipboard.writeText(url).then(()=>{
			setLinkCopied(true)
			setTimeout(()=>setLinkCopied(false), 5000)//return to initial state after 5 secs
		}).catch((err)=>{
			alert("Your browser does not support clipboard copy")
		})
	}


	return(
		<div className="flexor">

				<Link href={`https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmaritime-flag-app.vercel.app%2F&amp;src=sdkpreparse`} passHref>
	      <span className="cursorHover" data-bs-toggle="tooltip" data-bs-placement="top" title="share via facebook"> 
	      	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook text-primary" viewBox="0 0 16 16">
				 		<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
					</svg>			
		  	</span>	      
		  	</Link>

		  	<Link href={"whatsapp://send?text=" + pretextToShare + "%0a%0a" + url} data-action="share/whatsapp/share" passHref>
	      <span className="cursorHover" data-bs-toggle="tooltip" data-bs-placement="top" title="share via whatsapp">
	      	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-whatsapp text-success" viewBox="0 0 16 16">
			  	<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>			  
					</svg>			
	      </span>
	      </Link>

	      <Link href={"https://twitter.com/intent/tweet?text=" + escape(pretextToShare + "\n\n" + url)} passHref>
	      <span className="cursorHover" data-bs-toggle="tooltip" data-bs-placement="top" title="share via twitter">
	      	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter text-primary" viewBox="0 0 16 16">
			  		<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
					</svg>
	      </span>
	      </Link>

	      <Link href={"mailto:?subject=I found an app to help you learn the maritime flags conviniently&body=" + pretextToShare + url} passHref={true}>
	      <a className="cursorHover" data-bs-toggle="tooltip" data-bs-placement="top" title="share via email">
	      	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-check-fill text-danger" viewBox="0 0 16 16">
			  		<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.026A2 2 0 0 0 2 14h6.256A4.493 4.493 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586l-1.239-.757ZM16 4.697v4.974A4.491 4.491 0 0 0 12.5 8a4.49 4.49 0 0 0-1.965.45l-.338-.207L16 4.697Z"/>
			  		<path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-1.993-1.679a.5.5 0 0 0-.686.172l-1.17 1.95-.547-.547a.5.5 0 0 0-.708.708l.774.773a.75.75 0 0 0 1.174-.144l1.335-2.226a.5.5 0 0 0-.172-.686Z"/>
					</svg>
	      </a>
	      </Link>

	      {
	      	linkCopied ? 
	      		<span className="cursorHover" data-bs-toggle="tooltip" data-bs-placement="top" title="link copied">
			      	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-square-fill text-success" viewBox="0 0 16 16">
					  		<path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z"/>
							</svg>
			      </span>
			     :
			     	<span className="cursorHover" data-bs-toggle="tooltip" data-bs-placement="top" title="copy link" onClick={()=>copyToClipboard()}>
			      	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-clipboard-fill text-primary" viewBox="0 0 16 16">
					  		<path fillRule="evenodd" d="M10 1.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1Zm-5 0A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5v1A1.5 1.5 0 0 1 9.5 4h-3A1.5 1.5 0 0 1 5 2.5v-1Zm-2 0h1v1A2.5 2.5 0 0 0 6.5 5h3A2.5 2.5 0 0 0 12 2.5v-1h1a2 2 0 0 1 2 2V14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V3.5a2 2 0 0 1 2-2Z"/>
							</svg>
			      </span>

	      }
	      

	      

	    </div>

		)
}


/*


<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="left" title="Tooltip on left">
  Tooltip on left
</button>

<button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-html="true" title="<em>Tooltip</em> <u>with</u> <b>HTML</b>">
  Tooltip with HTML
</button>

*/