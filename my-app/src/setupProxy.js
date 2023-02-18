const { createProxyMiddleware } = require("http-proxy-middleware")

module.exports = function(app) {
    // 请求反向代理,更改配置需要重启项目
    app.use(
        '/gateway',
        createProxyMiddleware({
            target: 'https://m.maizuo.com',
            changeOrigin: false
        })
    )
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'https://localhost:3000',
            changeOrigin: false
        })
    )
}