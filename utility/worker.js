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