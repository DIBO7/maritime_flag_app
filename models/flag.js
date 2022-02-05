import mongoose from "mongoose"

const FlagSchema = new mongoose.Schema({
	name:{
		type: String,
		required: true,
		maxlength: 29
	},
	image:{
		type:String,
		rquired: true
	},
	meaning:{
		type: [String],
		required:false
	}
},{timestamps: true})

//module.exports = mongoose.models.Flag || mongoose.model("Flag", FlagSchema)
export default mongoose.models.Flag || mongoose.model("Flag", FlagSchema)