// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../../../utility/mongo";
import Flag from "../../../../models/flag"

export default async function handler(req, res) {
	const {method} = req
	//await dbConnect()
	dbConnect();

	switch(method){
		case "GET":
			try{
				const all_flags = await Flag.find()//name:"a string" to filter
				res.status(200).json(all_flags)

			}catch(error){
				res.status(500).json(error)
			}
			break;

		case "POST":
			try{
				const f = await Flag.create(req.body)
				res.status(201).json(f)

			}catch(error){
				res.status(500).json(error)	
			}
			break;

		default:
			res.status(400).json({info: "request not accepted!"})
	}


  //res.status(200).json({ name: 'John Doe' })
}


/*
Instead of the switch statements, I can use if(method==="POST")
*/