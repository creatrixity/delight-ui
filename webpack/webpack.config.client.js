/* constants */
const isDev = process.env.NODE_ENV !== "production";
const isHttps = false;
const outputFolder = "../dist";
const isDeploy = process.env.DEPLOY;

/* imports */
const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WriteFilePlugin = require("write-file-webpack-plugin");
const SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require("stylelint-webpack-plugin");
// const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

let web = {
    name: "web",
    target: "web",
    devtool: isDev ? "eval" : "hidden-source-map",
    context: path.resolve(__dirname, "../src"),
    externals: [{
        xmlhttprequest: "{XMLHttpRequest:XMLHttpRequest}"
    }],
    entry: {
        "main.js": "./js/index.jsx",
        "client.js": [
            "react-hot-loader/patch",
            "webpack-dev-server/client?http://localhost:3001",
            "webpack/hot/only-dev-server",
            "./client/index.js",
        ],
        "vendor": [
            "react",
            "react-dom",
            "react-redux",
            "immutable",
            "react-router-dom",
            "react-transition-group",
            "react-helmet",
            "redux-immutable",
            "redux-thunk"
        ]
    },
    output: {
        path: path.join(__dirname, `./${outputFolder}`),
        filename: "[name]"
    },
    devServer: {
        host: 'localhost',
        port: 3001,
        historyApiFallback: true,
        hot: true
    },
    plugins: [
        // new WriteFilePlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js",
            minChunks: 2
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.BASE_URL": isDev ?
                JSON.stringify("http://eliiss-api.localhost:8081/") : JSON.stringify("https://eliiss-api.azurewebsites.net/")
        }),
        new ExtractTextPlugin({
            filename: `[name]`,
            allChunks: true
        }),
        new CopyWebpackPlugin([{
                from: "./img/",
                to: "img/"
            },
            {
                from: "./favicon.ico",
                to: "./"
            },
            {
                from: "./manifest.json",
                to: "./"
            }
        ]),
        new StyleLintPlugin(),
        new SWPrecacheWebpackPlugin({
            cacheId: "eliiss",
            filename: "sw.js",
            minify: true,
            staticFileGlobs: [
                `/${outputFolder}/**/*.{css,js}`,
                `/${outputFolder}/img/**`
            ],
            stripPrefix: `/${outputFolder}`
        })
    ].concat(isDev ? [] : [new webpack.optimize.UglifyJsPlugin()]),
    // .concat(isDeploy ? [] : [new BundleAnalyzerPlugin()]),
    module: {
        rules: [{
                enforce: "pre",
                test: /\.jsx?$/,
                loader: "eslint-loader",
                exclude: /node_modules/,
                options: {
                    fix: true,
                    emitWarning: true
                }
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015", "react"],
                    plugins: [
                        "transform-class-properties",
                        "transform-object-rest-spread"
                    ]
                }
            },            
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
                    "image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false"
                ]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".jsx"]
    }
};

module.exports = web;
