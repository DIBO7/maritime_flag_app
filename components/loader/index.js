/*Bootstrap components*/


export default function Loader(text="Loading..."){

	return(
		<div className="d-flex justify-content-center" style={{backgroundColor:"transparent", padding: "45px 0"}}>
		  <div className="spinner-border" role="status">
		    <span className="visually-hidden">Loading...</span>
		  </div>
		</div>

		)
};