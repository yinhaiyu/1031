<template>
	<div class="mp-baseinfo">
		<div class="mp-baseinfo-address" id="card-adress">
			<p class="mp-baseinfo-address-txt">
				<span class="mp-iconfont mp-baseinfo-address-icon iconfont icon-map"></span>{{address2}}<span class="mp-iconfont mp-baseinfo-address-arrow iconfont icon-gengduo"></span>
			</p>
		</div>
		<a class="mp-baseinfo-intro mp-border-top">
			<p class="mp-baseinfo-intro-txt">
				<span class="mp-iconfont mp-baseinfo-intro-icon iconfont icon-tupian"></span>查看景点简介及开放时间<span class="mp-iconfont mp-baseinfo-address-arrow iconfont icon-gengduo"></span>
			</p>
		</a>
	</div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
                return{
                    list3:[],
					id:"",
					address2:""
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
				this.address2 = this.list3[this.id].address2
            },
            handleGetDataError(){

            }
        }
    }
</script>


<style scoped>
	.mp-baseinfo {
		position: relative;
		top: -.1rem;
		padding: .1rem .2rem 0 .2rem;
		margin-bottom: .1rem;
		background: #fff;
		-webkit-border-radius: .1rem .1rem 0 0;
		-moz-border-radius: .1rem .1rem 0 0;
		border-radius: .1rem .1rem 0 0;
	}
	.mp-baseinfo-address{
		display: block;
		position: relative;
		height: .88rem;
		color: #212121;
		line-height: .88rem;
	}
	.mp-baseinfo-address-txt, .mp-baseinfo-intro-txt {
		overflow: hidden;
		padding-right: .56rem;
		white-space: nowrap;
		text-overflow: ellipsis;
	}
	.mp-baseinfo-opentime-icon, .mp-baseinfo-address-icon, .mp-baseinfo-intro-icon {
		margin-right: .2rem;
		color: #9e9e9e;
	}
	.mp-iconfont {
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
	.mp-baseinfo-opentime, .mp-baseinfo-address, .mp-baseinfo-intro {
		display: block;
		position: relative;
		height: .88rem;
		color: #212121;
		line-height: .88rem;
	}
	.mp-baseinfo-opentime-arrow, .mp-baseinfo-address-arrow, .mp-baseinfo-address-arrow {
		position: absolute;
		right: 0;
		top: .28rem;
		color: #b9b9b9;
	}
</style>