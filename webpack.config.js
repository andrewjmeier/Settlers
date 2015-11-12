module.exports = {
    entry: "./src/settlers.js",
    output: {
        path: __dirname,
        filename: "settlers.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};