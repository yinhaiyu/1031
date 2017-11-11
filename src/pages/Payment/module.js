export default {
	state:{
		number:1,
		tourists:[]
	},
	mutations:{		
		minusNumber(state,value){
			if(state.number>1){
				state.number--
			}else{
				state.number=1
			}
			
		},
		plusNumber(state,value){
			state.number++
		}
	},
	actions:{
		
	},
	getters:{
		totalPrice:(state) => {
			return state.number * 208
		},
		getTourists:(state) => {
			var tour=[]
			 for(var i=0;i<state.number-1;i++){
					state.tourists[i]=i+2
			 }
			 if(state.number==state.tourists.length){
			 	state.tourists.splice(-1,1)
			 }
			 return state.tourists
		}
	}
}