<template>
    <div>
        <mt-swipe :auto="2000">
        <mt-swipe-item v-for='n in weather' :key = 'n.data' >宁海县{{n.date}}--{{n.week}}--{{n.day['weather']}}--{{n.day['windpower']}}</mt-swipe-item>
        
        </mt-swipe>

        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu1.png" alt="">
		                    <div class="mui-media-body">新闻资讯</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu2.png" alt=""><span class="mui-badge">5</span>
		                    <div class="mui-media-body">图片分享</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu3.png" alt="">
		                    <div class="mui-media-body">商品购买</div></a></li>
							<br>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu4.png" alt="">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../images/menu5.png" alt="">
		                    <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                   <img src="../../images/menu6.png" alt="">
		                    <div class="mui-media-body">联系我们</div></a></li>
		            
		        </ul> 
    </div>
</template>

<script>
    export default{
        data(){
            return {
                weather : null,
            }
        },
        created(){
            this.getSlide();
        },
        methods:{
            getSlide(){
               
                this.$http.jsonp("http://api.jisuapi.com/weather/query?appkey=c8e805342f50c2cc&city=宁海").then((result)=>{
                this.weather =result.data.result.daily;
                console.log(result.data.result.daily);
                });
        }
    }
}
</script>

<style lang="less" scoped>
    .mint-swipe{
        height: 220px;
        
        font-size: 24px;
        .mint-swipe-item{
            line-height: 220px;
            text-align: center;
            background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1544711306438&di=2d367491cd59e786483714a159a08967&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D4261614554%2C1390509081%26fm%3D214%26gp%3D0.jpg') no-repeat;
            background-size: cover;
            border: 0;
        }
        .mint-swipe-item:nth-child(1){
            background-color: aqua;
        }
        .mint-swipe-item:nth-child(2){
            background-color: green;
        }
        .mint-swipe-item:nth-child(3){
            background-color: rgb(89, 52, 177);
        }
       
    }
     .mui-col-sm-3{
		width: 33.3333%;
    }
    .mui-grid-view.mui-grid-9{
        background-color: white;
        border: 0;
        li{
            border: 0;
           img{
               width: 60px;
               height: 60px;
           }
           .mui-badge{
               top: 20px;
               background-color: red;
               color:white;
           }
        }
    }
   
</style>