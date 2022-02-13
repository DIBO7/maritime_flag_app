//ps redux part starts at ~52 mins into the yt
import {useReducer} from "reducer";

const initialState = {
	flags: [],//the flag list, empty for now
};

const reducer = (state = initialState, action) => {

	switch (action.type){
		case "SOMETHING":
			return {
				...state,
				flags: [...state.flags, action.payload]
			}

		default:
			return state;
	}
}

export default reducer;