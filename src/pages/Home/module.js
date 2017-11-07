import axios from "axios"
import {H_SET_DATA,H_Get_DATA} from "./types.js"
export default {
	state:{
		swiperInfo:[]
	},
	mutations:{
		[H_SET_DATA](state,payload){
			state.swiperInfo=payload
		}
	},
	actions:{
		[H_Get_DATA](contxt){
  			axios.get("/static/index.json?city=北京")
				.then((res) => {
					// console.log(res)
					contxt.commit(H_SET_DATA,res.data.data.swiperInfo)
				})
				.catch()
		}
	},
	getters:{

	}
}