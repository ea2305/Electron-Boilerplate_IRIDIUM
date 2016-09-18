module.exports = {

    entry  : './app/app.js',
    output : {
        path : './dist',
        filename : 'app.bundle.js'
    },
    module : {
        loaders : [{
            exclude : /node_modules/,
            loader  : 'babel-loader' 
        }]
    }
}