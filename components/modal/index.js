
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
				  <h5>Popover in a modal</h5>
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
The trigger ->

<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

*/