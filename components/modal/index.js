
export default function ModalScreen(){

	return(
		<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
		  <div className="modal-dialog modal-dialog-centered"> {/*the style{alignItems: flex-end} allow the modal to appear at the bottom but i didnt use it only leads to better UX on phones. tabs look bad and center looks good everywhere*/}
		    <div className="modal-content">
		      <div className="modal-header">
		        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
		        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		      </div>
		      	
		      	<div className="modal-body">
				  
				  <p>What would you like to be quizzed on?</p>

				  	<div style={{textAlign: "center"}}>
				  	<br/>
		      		<div className="btn-group-vertical" role="group" aria-label="Basic radio toggle button group">
					  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" checked />
					  <label className="btn btn-outline-primary" style={{backgroundColor: "var(--tertiary)"}} htmlFor="btnradio1">Names and Meaning</label>

					  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" />
					  <label className="btn btn-outline-primary" htmlFor="btnradio2">Flags, Names and Meaning</label>

					  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" />
					  <label className="btn btn-outline-primary" htmlFor="btnradio3">Flags, Names, Code and Meaning</label>
					</div>
					<br/>
					</div>

				</div>


		      <div className="modal-footer">
		        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
		        <button type="button" className="btn btn-primary">Save changes</button>
		      </div>

		    </div>
		  </div>
		</div>

		)
};


/*
<p>This 
  	<a href="#" role="button" className="btn btn-secondary popover-test" title="Popover title" 
  		data-bs-content="Popover body content is set in this attribute.">
  			button
  	</a> 
  	triggers a popover on click.
  </p>
  
  <hr />
  
  <h5>Tooltips in a modal</h5>
  <p>
  	<a href="#" className="tooltip-test" title="Tooltip">This link</a> 
  	and 
  	<a href="#" className="tooltip-test" title="Tooltip">that link</a> 
  	have tooltips on hover.
  </p>

The trigger ->

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

*/