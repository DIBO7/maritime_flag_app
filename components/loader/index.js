/*Bootstrap components*/


export default function Loader(text="Loading..."){

	return(
		<div className="text-center">
		  <div className="spinner-border" role="status">
		    <span className="visually-hidden">{text}</span>
		  </div>
		</div>

		)
};