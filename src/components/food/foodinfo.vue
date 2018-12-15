<template>
<div class="foodinfo">

    <h1 class="title">{{result.name}}</h1>
    <h2 class="titletime">用时:{{result.cookingtime}}</h2>
    <img  class="mainpic" :src="result.pic"  alt="">
    <h4 class="tag"> 菜品定义: {{result.tag}}</h4>
    <div class="tab">介绍:</div>
      <span class="introduce">{{result.content | brKill}}</span>
    <h3 class="dosage">调料用量</h3>
    <ul class="flavour">
        <!-- 调料 -->
        <li v-for='n in result.material' :key='n.mname'>
            <span>{{n.mname}}~</span>
            <span>{{n.amount}}</span>
        </li>
    </ul>
    <ul  class="process">
        <li v-for='p in result.process' :key='p.pic'>
            <img :src="p.pic" alt="食材图片暂时无法显示">
            <div>{{p.pcontent | brKill}}</div>
        </li>
    </ul>

</div>
    
</template>

<script>
import $ from "jquery";
import { Toast } from "mint-ui";
export default{
    created(){
        console.log(this.$route.query.id);
        
        this.$http.jsonp('http://api.jisuapi.com/recipe/detail?id='+this.$route.query.id+'&appkey=c8e805342f50c2cc')
        .then(data=>{
            console.log(data);
             var datas = data.body.result;
                var status = data.body.status;

          if (status == 205 || status == 201 || status == 101) {
            Toast("获取失败!");

            return;
          } else {
            console.log(datas);
            console.log(status);
            Toast("获取成功!");

            this.result = datas;
            // this.$options.filters.brKill();//方法里面使用过滤器
          }
        })
    },
    data(){
            return {
                result:'',
            }
        },
    methods:{

    },
    filters: {
    brKill(val) {
      if (val) {
        return val.replace(/br|<|\/>/gi, " ");
      } else {
        return;
      }
    }
  },
}
    
</script>

<style lang="less" scoped>
    *{
        padding: 0;
        margin: 0;
    }
    .foodinfo{
        padding-bottom: 15%;
    }
    .title{
        color: rgb(15, 170, 162);
    }
    .titletime{
        font-size: 14px;
        color:rgb(100, 100, 128);
    }
    .mainpic{
        width: 100%;
        // transform: scale(0.8);
        height: 250px;
        margin-top: 10px;
    }
    li{
        list-style: none;
    }
    img{
        border-radius: 8px;
        box-shadow: 0 0 3px 4px #ccc;
        margin-bottom: 10px;
    }
    .tag{
        color: rgb(93, 93, 175);
        margin-bottom: 10px;
        
    }
    .tab{
            color: rgb(219, 133, 21);
            font-weight: bold;
            margin-bottom: 10px;

        }
        .introduce{
            font-weight: 500;
            color: rgb(202, 139, 139);
            margin-bottom: 10px;
            display: inline-block;

        }
        .dosage{
            color: rgb(185, 32, 32);
            margin-bottom: 10px;

        }

    .flavour{
        width: 100%;
        overflow: hidden;
        margin-bottom: 10px;
    }
        .flavour li {
            float: left;
            width: 33.33%;
            color: rgb(50, 165, 121);
            border: 1px solid #ccc;

            
        }
        .process li{
            // overflow: hidden;
            margin-bottom: 3px;
            position: relative;
            width: 100% ;
            height: 127px;
        }
        .process li img{
            width: 46%;
            display: inline-block;
            margin-left: 2%;
            height: 127px;
            // float: left;
            // vertical-align:middle;
            
        }
        .process li div{
            width: 46%;
            height: 100%;
            position: absolute;
            border-radius: 8px;
            color: white;
            box-shadow: 0 0 3px 4px #ccc;
            background-color: rgb(11, 139, 172);
            
            box-sizing: border-box;
            
            
            right: 2%;
            top: 0;
        }
</style>