//const res = await axios.get("http://localhost:3000/api/v1/flags");  
//The getAPIData function well, gets the api data
export const getAPIData = async function(apiURL="https://maritime-flag-app.vercel.app/api/v1/flags"){
	const apiData = await fetch(apiURL)//for now all host (heroku, vercel and local) should fetch from vercel
	return await apiData.json()
}


//This function takes an array of object and returns an array with randomly selected objects. objLength reps the number of randoms you want selected!
//let sampleArray = ["Alpha", "Beta", "Omega", "Yankee", "Zulu"]

export const getRandomObjects = function(array, objLength=10){

	let temp = array.slice(array) //so this can be altered
	let randomizedArray = []

	for (let i = 0; i < objLength; i++) {
		let index = Math.floor(Math.random() * temp.length);
		let removed = temp.splice(index, 1); //removes one onject from array at the point of the index
		//since we are only removing one elements
		randomizedArray.push(removed[0])		
	}

	return randomizedArray;
}



export const getAllPossibleAnswers = function(data){
	//the data is an array on objects
	let options = data.map((item)=>{
		return item.meaning[0]
	})
	return options
}



export const questionification = function(arraysOfObjects, apiData){

	let allPossibleOptions = getAllPossibleAnswers(apiData) //an array of all possible options
	//use the length of arrayOfObjects to determine the lenght
	//pick *3 of the length from allpossibleoptions ensuring none of them is the right answer to any of the ones picked
	//maybe reshuffle the options 
	//now make options for each questions

	{q:"Zulu", meaning: "I require a tug", options=["I am dragging my anchor", "I have a diver below", "Man Overboard", "I require a tug"]}

	return 
}