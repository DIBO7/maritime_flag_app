//const res = await axios.get("http://localhost:3000/api/v1/flags");  
//The getAPIData function well, gets the api data
export const getAPIData = async function(apiURL="https://maritime-flag-app.vercel.app/api/v1/flags"){
	const apiData = await fetch(apiURL)//for now all host (heroku, vercel and local) should fetch from vercel
	return await apiData.json()
}