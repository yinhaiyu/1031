import Vuex from "vuex"
import Vue from "vue"
import home from "../pages/Home/module.js"


Vue.use(Vuex)

export default new Vuex.Store({
	modules:{
		home:home
	},
	state:{
		name:"dell"
	}
})