const path = require("path");

const js = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: "babel-loader",
        query: {
            presets: [
                ["@babel/preset-env", { modules: false }]
            ]
        }
    }
};

module.exports = {
    entry: {
        main: path.resolve(__dirname, "./src/js/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/"
    },

    module: {
        rules: [js]
    },

    resolve: {
        alias: {
            "%modules%": path.resolve(__dirname, "src/blocks/modules"),
            "%components%": path.resolve(__dirname, "src/blocks/components")
        }
    },
};
