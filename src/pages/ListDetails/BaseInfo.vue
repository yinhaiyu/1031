<template>
	<div class="mp-commentsinfo-con">
		<span class="mp-comment-icon"></span>
		<span class="mpf-starlevel">
			<i class="mp-iconfont mpf-starlevel-gain iconfont icon-star" style="width:100.0%">BBBBB</i>
			<i class="mp-iconfont mpf-starlevel-total iconfont icon-star">BBBBB</i>
		</span>
		<span class="mp-comments-tagscore">5.0分</span>
		<a class="mp-comments-total" mp-role="commentLink">
			<span class="mp-comments-totalnum">155627评论&nbsp;
			<span class="mp-iconfont mp-comments-rightarrow iconfont icon-gengduo"></span>
		</span>
		</a>
	</div>
</template>

<script>
   
</script>


<style scoped>
.mp-commentsinfo-con {
    margin-bottom: .2rem;
    background-color: #fff;
    height: .8rem;
    line-height: .8rem;
}
.mp-comment-icon {
    position: relative;
    top: 0.04rem;
    display: inline-block;
    width: .36rem;
    height: .36rem;
    margin-left: .2rem;
    margin-right: .1rem;
	color:#00afc7;
    background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -1.35rem no-repeat;
    background-size:20px;
}
.mp-commentsinfo-con .mpf-starlevel {
    top: .04rem;
}
.mpf-starlevel {
    display: inline-block;
    position: relative;
    width: 1.4rem;
    height: .28rem;
}
.mpf-starlevel-gain {
    z-index: 2;
    color: #00bcd4;
	overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
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
.mpf-starlevel-gain, .mpf-starlevel-total {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
	font-size:0.27rem;
}
.mp-comments-tagscore {
    display: inline-block;
    margin-left: .1rem;
    color: #00afc7;
}
.mp-comments-total {
    float: right;
    display: block;
    margin-bottom: .2rem;
}
a {
    color: #00afc7;
    text-decoration: none;
}
.mpf-starlevel-total {
    color: #ddd;
}
.mpf-starlevel-total {
    z-index: 1;
    color: #666;
}
.mp-comments-rightarrow {
    position: relative;
    top: .02rem;
}
.mp-comments-totalnum {
    display: inline-block;
    line-height: .28rem;
    font-size: .28rem;
    margin-left: .16rem;
    margin-right: .2rem;
    color: #9e9e9e;
}
</style>