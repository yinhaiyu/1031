<template>
	<div class="mp-headfigure">
		<div class="mp-headfigure-wrap" id="imgcontainer">
			<img class="mp-headfigure-img" :src="url" alt="故宫">
		</div>
		<div class="mp-headfeagure-info">
			<div class="mp-headfeagure-title">{{name2}}</div>
				<div class="mp-imgswipeicon">
				<span class="mp-iconfont mp-imgswipeicon-icon iconfont icon-tupian"></span><em class="mp-imgswipeicon-number">10</em>
			</div>
		</div>
	</div>
</template>

<script>
     import axios from 'axios'
    export default {
        data(){
                return{
                    list3:[],
					id:"",
					url:"",
					name2:""
                }
            },
            mounted(){
                this.getDetailData()
				this.id = parseInt(this.$route.query.name - 1 )			
            },
        methods:{
            getDetailData(){
                axios.get('../../../static/list.json')
                .then(this.handleGetDataSucc.bind(this))
                .catch(this.handleGetDataError.bind(this))
            },
            handleGetDataSucc(response){
                const res = response.data
                const data = res.data
                this.list3 = data.list2
				this.url = this.list3[this.id].imgUrl2
				this.name2 = this.list3[this.id].name2
				
            },
            handleGetDataError(){

            }
        }
    }
</script>


<style scoped>
	.mp-headfigure {
		position: relative;
	}
	.mp-headfigure-wrap {
		overflow: hidden;
		height: 0;
		width: 100%;
		padding-bottom: 55%;
	}
	.mp-headfigure-img {
		width: 100%;
		vertical-align: top;
	}
	.mp-headfeagure-info {
		position: absolute;
		right: .2rem;
		bottom: .26rem;
		left: .2rem;
		min-height: .4rem;
	}
	.mp-headfeagure-title {
		position: relative;
		z-index: 1;
		margin-right: 1.4rem;
		line-height: .4rem;
		color: #fff;
		font-size: .32rem;
		text-shadow: 0 1px 2px rgba(0,0,0,0.70);
	}
	.mp-imgswipeicon {
		position: absolute;
		right: 0;
		top: 0;
		width: 1.2rem;
		height: .4rem;
		background: rgba(0,0,0,.5);
		border-radius: .2rem;
		font-size: .24rem;
		color: #fff;
		line-height: .4rem;
		text-align: center;
	}
	.mp-imgswipeicon-icon {
		position: relative;
		top: .02rem;
	}
	.mp-iconfont {
		font-size:0.2rem;
		font-family: 'mpiconfont';
		speak: none;
		font-style: normal;
		font-weight: normal;
		font-variant: normal;
		text-transform: none;
		line-height: 1;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}
	.mp-imgswipeicon-number {
		margin-left: .1rem;
	}
</style>