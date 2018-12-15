<template>
    <div class="app-container">
        <mt-header fixed title="APP-header"></mt-header>
		<span class="go-back" @click="back">&lt;</span>

		<!-- 下面4个按钮所对应的界面 -->
		<transition mode="out-in">
		
		<router-view></router-view>
		
		</transition>
		<!-- 下面4个按钮所对应的界面 -->

 				

<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~下面是4个按钮 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item " to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item " to="/shopcar">
				<span class="mui-icon  mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item " to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
		
    </div>


    
</template>

<script>
	export default{
    data(){
		return {}
	},
	methods:{
		back(){
			this.$router.go(-1);//this.$router是一个方法,里面有push,go,back()等等法方法
			//$routr.parmes. 才是获取路由参数
			console.log(this);
		}
	}


	}
</script>

<style lang="css" scoped>
    *{
        margin:0;
        padding: 0;
        /* box-sizing: border-box; */
    }
	.go-back{
		position: fixed;
		left: 20px;
		top: 10px;
		z-index: 2;
		font-weight: 100;
		font-size :35px;
		
		color:white;
	}
    .app-container{
        padding-top: 40px;
    }
	.v-enter,{
		transform: translateX(-20%);
		opacity: 0;
	}
	.v-leave-to{
		transform: translateX(100%);
		opacity: 0;


	}
	.v-enter-active,.v-leave-active{
		transition: all 0.6s ease-in-out 0s;
	}
	
</style>