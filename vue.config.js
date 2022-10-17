module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    devServer: {
        host: 'shop2.mcfef.com',
        // port: '8081',
        historyApiFallback: true,
    },
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "~@/styles/style.scss";`
            }
        }
    },
    pages: {
        index: {
          // entry for the page
        entry: 'src/main.js',
        title: 'Доступная рыба',
        },
    }
}