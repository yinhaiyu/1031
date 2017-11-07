import axios from "axios"
import {SET_DATA,Get_DATA} from "./types.js"
export default {
	state:{
		swiperInfo:[]
	},
	mutations:{
		[SET_DATA](state,payload){
			console.log(state)
			console.log(payload)
			state.swiperInfo=payload
		}
	},
	actions:{
		[Get_DATA](contxt){
  			axios.get("/static/index.json?city=北京")
				.then((res) => {
					// console.log(res)
					contxt.commit(SET_DATA,res.data.data.swiperInfo)
				})
				.catch()
		}
	},
	getters:{

	}
}