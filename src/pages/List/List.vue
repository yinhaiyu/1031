<template>
	<div class="mp-main">
        <div class="mp-filter mpf-border-bottom" id="demo">
            <div class="mp-select" v-on:click="btn1">全部分类
                <div class="mp-menu mp-menu-half mp-menu-left" v-if="show">
                    <div id="div1" class="mp-menu-inner" >
                        <div class="mp-menu-item mpf-border-bottom mp-menu-item-active"><img class="mp-menu-item-icon" src="//img1.qunarzz.com/piao/fusion/1509/9d/0ee9e4808773f.png">全部分类<span class="mp-munu-item-num">42713</span></div>
                        <div class="mp-menu-item mpf-border-bottom" v-on:click="btn2" v-for="(item1, index) in select" :index="index" :key="item1.id" ><img class="mp-menu-item-icon" :src="item1.imgUrl">{{item1.type}}<span class="mp-munu-item-num">{{item1.number}}</span></div>
                    </div>
                </div>
                <div class="mp-menu mp-menu-half mp-menu-right" v-if="show">
                    <div class="mp-menu-inner" v-if="show1">
                        <div class="mp-menu-item" v-for="item in children" key="item.id">{{item.name}}<span class="mp-munu-item-num">7559</span></div>
                    </div>
                </div>
            </div>
            <div class="mp-select">推荐排序</div>           
        </div> 
        <div id="div2" v-if="show">

        </div>
        <div>
            <ul>               
                <li class="mp-sight-group mpf-border-topbottom" v-for="item in list2" :key="item.id">
                   <router-link :to="{path:'/B',query:{name:item.id}}">
                    <div  class="mp-item-content">
                        <div class="mp-sight-info">
                            <div class="mp-sight-imgcon"><img class="mp-sight-img" :src="item.imgUrl" all=""/></div>
                            <div class="mp-sight-detail">
                                <h3 class="mp-sight-name mp-sight-name-float">{{item.name}}<span class="mp-tag-word">{{item.hot}}</span></h3>
                                <span class="mp-sight-price">
                                    ￥<em>{{item.money}}</em><span class="mp-lowprice-text">起</span>
                                </span>
                                <div class="mp-sight-comments">
                                    <span class="mpf-starlevel">{{item.evaluate}}</span>
                                    <span class="mp-comments-totalnum">13002评论</span>
                                </div>
                                <div class="mp-sight-location">
                                    <span class="mp-sight-address">{{item.address}}</span>
                                </div>
                            </div>
                        </div>
                        <div class="mp-sight-ticket-item mpf-border-top">
                            <h4 class="mp-ticket-name">{{item.ticketName}}</h4>
                            <span class="mp-ticket-qunarprice">¥<em>{{item.qunarprice}}</em></span>
                        </div>
                        <div class="mp-sight-ticket-item mpf-border-top">
                            <h4 class="mp-ticket-name">{{item.ticketName2}}</h4>
                            <span class="mp-ticket-qunarprice">¥<em>{{item.qunarprice2}}</em></span>
                        </div>
                    </div>
                    </router-link>
                </li>
            </ul>
        </div>
        <div class="moreInfoCon">
            <div class="mp-pagination">
                <button class="mp-disable-btn">上页</button><span class="mp-page-num">1</span><button class="mp-disable-btn">下页</button>
            </div>
            <div class="mp-page-text">去哪儿门票</div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
	export default {         
        data(){
            return{
                list2:[],
                select:[],
                children:[],
                show : false,
                show1 : false
            }
        },
		mounted(){
            this.getListData(); 
            window.addEventListener('scroll', this.handleScroll) ;  
        },
        methods:{
           getListData(){
               axios.get('../../../static/list.json')
                .then(this.handleGetDataSucc.bind(this))
                .catch(this.handleGetDataError.bind(this));
           },
           handleGetDataSucc(response){
               const res = response.data
               const data = res.data;
               this.list2 = data.list2;
               this.select = data.select;
               //this.children = data.select[].children;
            //    console.log(response.data.data.select.children)
           },
           handleGetDataError(err){

           },
           btn1:function(){
               this.show = !this.show; 
               if( this.btn1 == true ){
                    this.show = false ;
                }
               if( this.btn1 == false ){ 
                   this.show = true ;
                }
            },
            btn2:function(e){
                const id = Number(e.target.getAttribute('index'));
                this.children = this.select[id].children;
                //console.log(this.select[id]);
                window.event? window.event.cancelBubble = true : e.stopPropagation();
                this.show1 = true;
            
            },
            handleScroll () {
                var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
                var height = 50
                if(scrollTop > height){
                      document.getElementById("demo").style.position = "fixed";
                      document.getElementById("demo").style.top = 0;
                      document.getElementById("demo").style.background = "#fff"
                }
                if(scrollTop < height){
                    document.getElementById("demo").style.position = "relative"
                }
            }
                   
	}
}
</script>

<style scoped>
    #div2{
        position:fixed;
        width:100%;
        height:100%;
        background:#000;
        opacity:0.3;
        z-index:9
    }
    .mp-main{
        background:#f5f5f5;
    }
    .mp-filter{
        width: 100%;
        height: .8rem;
        background: #fff;   
        position:relative;
        z-index:10 
    }
    .mp-select{
        width:50%;
        height: .8rem;
        position: relative;
        color: #212121;
        line-height: .8rem;
        text-align: center;
        white-space: nowrap;
        text-overflow: ellipsis;
        float:left;
    }
    .mp-sight-group{
        margin-bottom: .2rem;
        background: #fff;
    }
    .mp-sight-info {
        padding: .2rem;
    }
    .mp-sight-imgcon {
        float: left;
    }
    .mp-sight-img{
        width: 1.6rem;
        height: 1.6rem;
    }       
    .mp-sight-imgcon, .mp-list-imgcon {
        position: relative;
        background-size: contain;
        width: 1.6rem;
        height: 1.6rem;
    }   
    .mp-sight-detail {
        position: relative;
        overflow: hidden;
        padding-left: .2rem;
        height: 1.6rem;
    }
    .mp-sight-name{
        overflow: hidden;
        max-width: 60%;
        color: #212121;
        font-size: .32rem;
        line-height: .36rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-tag-word {
        display: inline-block;
        margin-left: .06rem;
        width: .3rem;
        height: .3rem;
        background: #ff1200;
        color: #fff;
        font-size: .24rem;
        line-height: .3rem;
        text-align: center;
    }
    .mp-sight-price {
        position: absolute;
        top: 0;
        right: 0;
        height: .36rem;
        color: #ff8300;
        font-size: .2rem;
        color: #ff8300;
    }
    .mp-sight-price em {
        font-size: .36rem;
    }
    .mp-lowprice-text{
        color:#999
    }
    .mp-sight-comments {
        margin-top: .38rem;
        height: .64rem;
        line-height: .64rem;
    }
    .mpf-starlevel {
        position: relative;
        width: 1.2rem;
        height: .24rem;
        font-size: .24rem;
        display: inline-block;   
    }
    .mp-comments-totalnum {
        position: relative;
        top: -.04rem;
        margin-left: .06rem;
        color: #9e9e9e;
        font-size: .24rem;
    }
    .mp-sight-location {
        position: absolute;
        bottom: 0;
        color: #9e9e9e;
        font-size: 0;
        white-space: nowrap;
    }
    .mp-sight-address{
        font-size: .24rem;
    }
    .mp-sight-ticket-item {
        position: relative;
        height: .9rem;
        margin: 0 .2rem;
    }
    .mp-ticket-name {
        overflow: hidden;
        margin-right: 1.2rem;
        color: #212121;
        font-size: .28rem;
        line-height: .9rem;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .mp-ticket-qunarprice {
        overflow: hidden;
        position: absolute;
        top: 0;
        right: 0;
        width: 1.2rem;
        height: .9rem;
        color: #ff8300;
        font-size: .2rem;
        line-height: .9rem;
        text-align: right;
    }
    .mp-ticket-qunarprice em {
        font-size: .36rem;
    }
    .moreInfoCon{
        padding: .2rem 0;
        color: #00afc7;
        line-height: .82rem;
        text-align: center;
    }
    .mp-pagination{
        height: .7rem;
        line-height: .7rem;     
    }
    .mp-disable-btn{
        display: inline-block;
        width: 1.4rem;
        border: .02rem solid #00afc7;
        background: #fff;
        color: #00afc7;
        line-height: .6rem;
        border-radius: .06rem;
    } 
    .mp-page-num{
        color: #212121;
        line-height: .6rem;
        padding: 0 15px;
    } 
    .mp-page-text{
        padding-top: .2rem;
        line-height: .3rem;
        font-size: .3rem;
    }
    .mp-menu {
        overflow:hidden;
        position: absolute;
        z-index: 10;
        width: 100%;
        max-height: 4.8rem;
        background: white;
        display: none;
        top: 39px;
        display: block;
    }
    .mp-menu-half .mp-menu-item {
        text-align: left;
        font-size: .24rem;
    }
    .mp-menu-item {
        padding-left: .3rem;
        line-height: .8rem;
        height: .8rem;
        overflow: hidden;
        text-align: center;
        color: #212121;
    }
    .mp-menu-item-icon {
        width: .3rem;
        height: .3rem;
        vertical-align: middle;
        margin-right: .1rem;
    }
    .mp-menu-half {
        width: 100%;
        height: 4.8rem;
    }
    .mp-menu-right {
        background: #f1f1f1;
        right: 0;
        left:100%
    }
    .mp-munu-item-num{
        position:absolute;
        right:10px;;
    }
</style>