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


const makeOptions = function(actualMeaning, allMeanings){
	//Since the answr can be only one string, pick any four and in any situations, AT LEAST THREE WOULD BE WRONG
	let wrongOptions = getRandomObjects(allMeanings, 4)

	if(wrongOptions.includes(actualMeaning)){
		//just return it; as its a random pick alreday
		return wrongOptions
	}else{
		//remove any of them and add the actual answers //then return it
		let randomPosition = Math.floor(Math.random() * 4);
		wrongOptions.splice(randomPosition, 1, actualMeaning)
		return wrongOptions;
	}	
}



export const questionification = function(arraysOfObjects, apiData){
	//arrayOfObjects are the randomly slected objects we have chosen to ask questions about
	let allPossibleOptions = getAllPossibleAnswers(apiData) //an array of all possible options
	
	let questionScope = arraysOfObjects.map((obj)=>{
		let qs = new Object();
		qs.q = obj.name
		qs.meaning = obj.meaning[0]
		qs.options = makeOptions(obj.meaning[0], allPossibleOptions)
		return qs
		//return {q:obj.name, meaning:obj.meaning[0], options=opts, pk=obj._id} //id may be needed later
	})

	return questionScope;
}



//{q:"Zulu", meaning: "I require a tug", options=["I am dragging my anchor", "I have a diver below", "Man Overboard", "I require a tug"]}