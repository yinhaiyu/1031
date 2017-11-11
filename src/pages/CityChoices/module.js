import axios from "axios"

export default {
	state:{
		hotCityList:[],
		ChinaCharacterList:[],
		ChinaCharacterCityList:[],
		InternationalHotCityList:[]
		
	},
	mutations:{
		setData(state,payload){
			state.hotCityList = payload.hotCityList
			state.ChinaCharacterList = payload.ChinaCharacterList
			state.ChinaCharacterCityList = payload.ChinaCharacterCityList
			state.InternationalHotCityList = payload.InternationalHotCityList
		}
	},
	actions:{
		getData(contxt){
  			axios.get("/static/cityChoices.json")
				.then((res) => {
					contxt.commit("setData",res.data.data)
				})
				.catch()
		}
	},
	getters:{

	}
}