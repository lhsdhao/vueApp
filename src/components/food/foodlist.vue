<template>
  <div class="container">
    <h1>菜谱查询</h1>
    
    <div class="search">
      <input type="text" name="greens" id="greens" placeholder="请输入想要查询的菜谱" @keyup.enter="search">
      
      <select class="searchNum" name="" id="">
         <option value="">1</option>
         <option value="">2</option>
         <option value="">3</option>
         <option value="">4</option>
         <option value=""  selected = 'selected' >5</option>
         <option value="">6</option>
         <option value="">7</option>
         <option value="">8</option>
         <option value="">9</option>
         <option value="">10</option>
       
          
      </select>
      <button @click="search">查询</button>
    </div>
    <div class="content" v-for="i in result" :key="i.id" >
      <h3>{{i.name}}</h3>
      <div class="title-area">
        <img :src="i.pic" class="pic" alt="照片">
        <div class="tags">
          <strong>人数: {{i.peoplenum}}</strong>
          <strong>准备时间: {{i.preparetime}}</strong>
          <strong>效果: {{i.tag}}</strong>
          
        </div>
        <div class="mui-btn mui-btn-primary" @click = 'goGoodInfo(i.id)'>
					点击查看详情>>
				</div>
      </div>

      
      <h3 style="color:orange">配料</h3>
      <ul class="u1">
        <li v-for="y in i.material" :key="y.mname">{{y.mname}}---{{y.amount}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
//引入 jquery
import $ from "jquery";
import { Toast } from "mint-ui";

export default {
  updated() {
    $(".content").css("display", "block");
  },
  data() {
    return {
      result: [{}],
      foodid:null,
      
    };
  },
 
  methods: {

    search() {
    console.log(this);

      //   console.log(this.$options.filters);
      var greensName = $("#greens").val();
      var n = Number($('.searchNum option:selected').text());//拿到要显示的条数
      
      this.$http
        .jsonp(
          "http://api.jisuapi.com/recipe/search?keyword=" +
            greensName +
            "&num="+n+"&appkey=c8e805342f50c2cc"
        )
        .then(data => {
          var datas = JSON.parse(data.bodyText).result.list;
          var status = JSON.parse(data.bodyText).status;

          if (status == 205 || status == 201 || status == 101) {
            Toast("获取失败!");

            return;
          } else {
            console.log(datas);
            Toast("获取成功!");

            this.result = datas;
            // this.$options.filters.brKill();
          }
        });
        
    },

    goGoodInfo(id){
      console.log(id);
      this.$router.push({ name: 'foodinfo', query: { id: id} })
    },
  },

  
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
    padding-bottom: 40px;
  .search {
    width: 100%;
    height: 45px;
    position: relative;
    margin-top: -10px;
  }
  h1 {
    padding: 15px;
    font-weight: 400;
  }
  #greens {
    width: 65%;
    margin-top: 5px;
    margin-left: 10px;
    height: 40px;
    padding: 0;
    border: 0;
    text-indent: 20px;
    color: rgb(80, 75, 75);
  }
  .searchNum{
      width: 10%;
      height: 90%;
      padding-left: 14px;
      font-size: 18px;
  }
  button {
    border: 0;
    right: 0;
    display: inline-block;
    width: 20%;
    height: 40px;
    position: absolute;
    top: 56%;
    transform: translateY(-50%);
    font-size: 18px;
    color: white;
    background-color: purple;
  }
  .introduce {
    width: 100%;
    height: 70px;
    display: inline-block;
    overflow: auto;
  }

  .content {
    padding: 10px;
    padding-top: 20px;
    position: relative;
    display: none;

    .title-area {
      position: relative;

      width: 100%;
      .mui-btn-blue, .mui-btn-primary{
        position: absolute;
        right:  0 ;
        bottom: 0 ;
        padding: 5px 30px;
        font-size: 18px;
        box-shadow:0 0 2px 3px #ccc;
      }
      .pic {
        width: 40%;
        height: 140px;
        margin-top: 3px;
      }
      .tags {
        position: absolute;
        right: 0;

        display: inline-block;
        width: 50%;
        height: 70%;
        overflow: auto;

        strong {
          display: block;
          color: rgb(23, 140, 194);
          height: 20.333%;
        }
      }
    }
    h3 {
      margin-top: 5px;
      color: rgb(18, 155, 59);
    }
    .tab {
      color: tomato;
      font-weight: bold;
      display: block;
      margin-top: 10px;
    }
  }

  .content .u1 {
    overflow: hidden;
  }
  
  .content .u1 li {
    list-style: none;
    width: 33.333%;
    height: 35px;
    float: left;
    text-align: center;
    line-height: 35px;
    color: rgb(38, 157, 212);
    border: 1px dashed #ccc;
    font-size: 16px;
  }
  @media  (max-width: 320px) {
      .content .u1 li{
          font-size: 12px;
      }
  }
}
</style>