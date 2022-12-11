import Link from "next/link";
import BareMinimumTemplate from "../../layouts/interface/minimum";
import {appname} from "../../utility/app";



export default function About(){

	return(
		<BareMinimumTemplate>

			<main style={{backgroundColor: "var(--secondary)", padding:"20px 0", minHeight: "100vh"}}>

			<div className="container">

			<h2 style={{color: "var(--tertiary)"}}> About The {appname} </h2>
			<div style={{padding: "15px 0", textAlign: "justify"}}>
				<p className="lead">
					This {appname.toLowerCase()} is a very lightweight and FREE PWA app developed to help master quickly and conviniently the international maritime signal flags.
					This is the very first version. It contains all the international signal flags, names and meanings. With the coming updates, the international code of signals
					will be included with the flags as well (both in the tutorials and quizzer).
				</p>
				<p className="lead">
					The international maritime signal flags are essential parts of the maritime industry used (commercially and by ships of war) to communicate. 
					Even though this app covers the signal flags only from A-Z with their meanings, there are additional flags and codes with special use cases or 
					historical significance.
				</p>
				<p className="lead">
					There are various methods by which the flags can be used as signals:
					Individual flags have specific and standard meanings (these have been covered in this app) &
					A series of flags can spell out a message, each flag representing a letter.
				</p>
			</div>

			<br />
			
			<h2 style={{color: "var(--tertiary)"}}> Development & Maintenance </h2>
			<div style={{padding: "15px 0", textAlign: "justify"}}>
				<p className="lead">
					This {appname.toLowerCase()} is the result of one of many projects of Mr. <Link href="https://theibrahim.vercel.app" passHref={true}><a data-bs-toggle="tooltip" data-bs-placement="top" title="Ibrahim Oduola is a skilled tech savvy nautical cadet making the best of both worlds">Ibrahim B. Oduola</a></Link>.
					Although a project of one person, this app is actually an <Link href="https://github.com/TheIbrahim7/maritime_flag_app" passHref={true}><a>open source project on github</a></Link> where 
					developers (with knowledge and experience in Javascript, Next-js and bootsrap among others) can contribute to.
				</p>
				<p className="lead">
					Updates (in forms of improvement and corrections) will continuosly and regularly be made on this app including periodic maintenace.
					To contact the developers with error reports, suggestions, necessary corrections or anything at all, please  <Link href="mailto:ibrahim.oduola007@gmail.com?subject=Message About The Maritime Flag App&body=Hello! My name is ...." passHref={true}><a>send us a mail.</a></Link>
				</p>
				<p className="lead">
					Thank you and Have a great day.
				</p>
			</div>

			<hr />

			</div>

	        <footer>
	          <Link href="/">
	            <a> Home </a>
	          </Link>

	        </footer>



			</main>


		</BareMinimumTemplate>
		)
}
