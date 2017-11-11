import Vuex from "vuex"
import Vue from "vue"
import home from "../pages/Home/module.js"
import cityChoices from "../pages/CityChoices/module.js"
import payMent from "../pages/Payment/module.js"

Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		home:home,
		cityChoices:cityChoices,
		payMent:payMent
	}
})