module.exports = {
    devServer: {
        proxy: {
            '/api': {
                // 此处的写法，目的是为了 将 /api 替换成 https://www.baidu.com/ 
                // target: process.env.VUE_APP_BASE_URL, 
                // http://www.hao6v.com/ 
                //https://www.66s.cc/e/search/result/?searchid=31525
                target: 'https://www.66s.cc/', // 允许跨域 
                changeOrigin: true,
                ws: true,
                pathRewrite: { '^/api': '' }
            }
        }
    },

    // pluginOptions: { //配置多语言相关 
    //     i18n: {
    //         locale: 'cn',
    //         fallbackLocale: 'cn',
    //         localeDir: 'locales',
    //         enableInSFC: true
    //     }
    // }
}


