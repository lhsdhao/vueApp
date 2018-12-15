//导包
const path = require('path');

//导入安装的html-webpack-plugin,
const htmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader')

//暴露出去
//----------------------------------------------------------------
module.exports = {
    mode: 'development' ,//开发模式
    entry:path.join(__dirname,"./src/main.js"),//入口配置
    output:{//出口对象
        path:path.join(__dirname,'./dist'),//出口目录
        filename:'bundle.js',//出口文件
    },  
    //----------------------------------------------------------------
    plugins:[new htmlWebpackPlugin({//创建一个在内存中生成  html 的页面
        template:path.join(__dirname,'./src/index.html'),//指定模板页面,
        filename:'index.html',//指定生成的模板页面名称,默认放在出口目录,dist里面
        favicon: path.resolve( './src/images/favicon.ico')//打包网页favicon.ico
    }
    ) ,// make sure to include the plugin for the magic
        new VueLoaderPlugin()],//Vue需要
    // --------------------------------------------------------------------
    module: {//第三方处理模块
        rules: [
            {
                test: /\.css$/,     // 解析css
                use: ['style-loader', 'css-loader'] // 从右向左解析
                
            },
            {
                test:/\.less$/,
                use:['style-loader','css-loader','less-loader'],
            },
            {
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'],
            },
            {
                test:/\.(jpg|png|gif|bmp|jpeg|ico)$/,
                use:'url-loader?limit=20000&name=[hash:8]-[name].[ext]'//loader传参,limit值是字节,如果图片小于值,会转成base64,如果大于,就使用原图
                // name =[name].[ext]
            },

            {
                test:/\.(ttf|eot|svg|woff|woff2)$/,
                use:'url-loader',//处理配置文件的loader
            },
            {
                test:/\.js$/,
                use:'babel-loader',
                exclude:/node_modules/  //配置babel,的配置文件,识别es6语法
            },{
                test:/\.vue$/,
                use:'vue-loader',
               
            },

        ]
    }
};