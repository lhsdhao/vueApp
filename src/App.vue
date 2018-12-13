<template>
    <div class="app-container">
        <mt-header fixed title="固定在顶部">Header头部</mt-header>
        <h1>APP</h1>
        <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon  mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</a>
		</nav>
    </div>


    
</template>

<script>
    
</script>

<style lang="css">
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
    }
    .app-container{
        padding-top: 40px;
    }
</style>