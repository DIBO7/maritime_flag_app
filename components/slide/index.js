import Image from "next/image";
import styles from '../../styles/Tutorial.module.css';

let something = "I require a free diver below urgently."

export default function SlidingElement({id, alphabet="B", img_url="/bravo.png", name="Bravo", meaning=something}){

	return(
		<div id={`slide-${id}`} className={styles.slide}>
		 <h2> {alphabet} </h2>

	     <div className="container" style={{textAlign: "center"}}>
	        <Image src={img_url} width={260} height={260} alt={"imagethingy"} style={{margin: "0 auto"}} />
	     </div>

	     <p style={{textAlign:"center"}}> This flag represents {name} </p>

	     <article style={{padding: "5px 10px 30px"}}>
	        <span className="tiny"> It means </span>
	        <p className="lead"> {meaning} </p>
	     </article>

		</div>
		)
};