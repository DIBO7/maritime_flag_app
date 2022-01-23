

export default function Navigation(){

	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
		  <div className="container-fluid">
		    <a className="navbar-brand" href="/something">
		    	<img src="icon-192x192.png" alt="" width="30" height="24" />
		    </a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		      <span className="navbar-toggler-icon"></span>
		    </button>
		    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
		      <div className="navbar-nav">
		        <a className="nav-link active" aria-current="page" href="#">Home</a>
		        <a className="nav-link disabled" href="#">Tutor</a>
		        <a className="nav-link disabled" href="#">Quizzer</a>
		        <a className="nav-link disabled" href="#">Credit</a>
		      </div>
		    </div>
		  </div>
		</nav>

		)
};