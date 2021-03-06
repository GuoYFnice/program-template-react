// 引入插件
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin');
// const webpack = require('webpack');
const path = require('path');
// 可以判断当前环境-可以再.env里进行配置（cross-env）
const isDev = process.env.NODE_ENV === 'development';
// 引入测量各个插件花费时间
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');

const smp = new SpeedMeasurePlugin();


const BASE_PATH = path.resolve(__dirname, '../');
// const BASE_PATH = "./"

const webpackConfig = {
  // webpack的默认配置 入口
  // 单页面入口
  // entry: './src/index.js',
  // 多页面入口
  entry: {
    index: path.resolve(BASE_PATH, './src/index.tsx')
  },
  output: {
    path: path.resolve(BASE_PATH, './dist'), // 必须是绝对路径
    filename: 'js/[name].[hash:8].js',
    // 这里如果不设置，在单独打包的css中引入图片或者其他文件时，会找不到
    publicPath: '/'
  },
  // mode 配置项，告知 webpack 使用相应模式的内置优化。(已經分開配置)
  // mode: 'development',
  /* 
  devtool 中的一些设置，可以帮助我们将编译后的代码映射回原始源代码。不同的值会明显影响到构建和重新构建的速度。
  生产环境可以使用 none 或者是 source-map，使用 source-map 最终会单独打包出一个 .map 文件，我们可以根据报错信息和此 map 文件，进行错误解析，定位到源代码。
  */
  devtool: 'cheap-module-eval-source-map', // 开发环境下使用
  resolve: {
    // import Dialog from 'dialog'，会去寻找 ./src/components/dialog，不再需要使用相对路径导入。如果在 ./src/components 下找不到的话，就会到 node_modules 下寻找。
    // modules: ['node_modules'], //从左到右依次查找
    extensions: ['.tsx', '.ts', '.js', '.json'],
    // 这样配置，可以将一些长的依赖名缩短
    alias: {
      '@': path.resolve(BASE_PATH, './src')
    }
  },
  module: {
    /* 
      loader 需要配置在 module.rules 中，rules 是一个数组。
      loader 的执行顺序是从右向左执行的，也就是后面的 loader 先执行
    */
    rules: [
      {
        test: /\.(tsx?|js)$/,
        /* 
        use 字段有几种写法可以是一个字符串，例如上面的 use: 'babel-loader'
        use 字段可以是一个数组，例如处理CSS文件是，use: ['style-loader', 'css-loader']
        use 数组的每一项既可以是字符串也可以是一个对象，当我们需要在webpack 的配置文件中对 loader 进行配置，就需要将其编写为一个对象，并且在此对象的 options 字段中进行配置
        */
        use: {
          loader: 'babel-loader',
          options: {
            // 开启缓存，避免运行期间重复的公共文件，造成代码体积大冗余，同时也会减慢编译效率
            cacheDirectory: true
          }
          // options: {
          //   presets: ["@babel/preset-env"],
          //   plugins: [
          //     [
          //       "@babel/plugin-transform-runtime",
          //       {
          //         "corejs": 3
          //       }
          //     ]
          //   ]
          // }
        },
        // 排除 node_modules 目录
        exclude: /node_modules/
      },
      {
        /* 
        webpack 不能直接处理 css，需要借助 loader。
        如果是 .css，我们需要的 loader 通常有： style-loader、css-loader，
        考虑到兼容性问题，还需要 postcss-loader，
        如果是 less 或者是 sass 的话，还需要 less-loader 和 sass-loader，这里配置一下 less 和 css 文件(sass 的话，使用 sass-loader即可):
        */
        test: /\.(sc|c)ss$/,
        /* 
        style-loader 动态创建 style 标签，将 css 插入到 head 中.
        css-loader 负责处理 @import 等语句。
        postcss-loader 和 autoprefixer，自动生成浏览器兼容性前缀
        sass-loader 负责处理编译 .sass 文件,将其转为 css
        */
        // 通过配置MiniCssExtractPlugin，将css单独打包
        use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
        // {
        //   // 将css-loader上包一层，他的选项完全兼容css-loader
        //   // 他会为sass文件生成对应的sass.d.ts（为了ts正常解析）
        //   loader: 'css-modules-typescript-loader',
        //   options: {
        //     // 使用css modules
        //     modules: true,
        //     // 类名导出
        //     namedExport: true,
        //     // 支持驼峰
        //     camelCase: true,
        //     // 是否使用sass
        //     sass: true,
        //     // 定义类名
        //     localIdentName: '[name]_[local]_[hash:base63:5]'
        //   }
        // },
        {
          loader: 'css-loader',
          options: {
            // 使用css modules
            modules: true
          }
        },
        // 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins() {
              return [
                require('autoprefixer')({
                  'overrideBrowserslist': [
                    '>0.25%',
                    'not dead'
                  ]
                })
              ];
            }
          }
        }, 'sass-loader',
        // 全局引用scss文件
        {
            loader: 'sass-resources-loader',
            options: {
                resources: [path.resolve(BASE_PATH, './src/variables.scss')]
            }
        }
      ],
        exclude: /node_modules/
      },
      // * 单独处理 antd 样式，避免模块化 css 文件影响。
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev
            }
          }
        ],
        exclude: /src/
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 资源大小小于 10K 时，将资源转换为 base64，超过 10K，将图片拷贝到 dist 目录。
              limit: 10240, // 10K
              // esModule 设置为 false，否则，<img src={require('XXX.jpg')} /> 会出现 <img src=[Module Object] />
              esModule: false,
              // 默认情况下，生成的文件的文件名就是文件内容的 MD5 哈希值并会保留所引用资源的原始扩展名（這裡進行了名字的定義）
              name: '[name]_[hash:6].[ext]',
              // 指定打包後的文件位置
              outputPath: 'assets'
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },
  // 数组 放着所有的webpack插件
  plugins: [
    // 默认寻找路径是当前文件夹 ./** 和 node_modules，当然啦，你可以指定全路径
    // 这样配置之后，你就可以在项目中随心所欲的使用 $、_map了，并且写 React 组件时，也不需要 import React 和 Component 了
    // new webpack.ProvidePlugin({
    //   React: 'react',
    //   Component: ['react', 'Component']
    // }),
    new HtmlWebpackPlugin({
      template: path.resolve(BASE_PATH, './public/index.html'),
      // 打包后的文件名
      filename: 'index.html',
      cache: false,
      // 接受一个数组，配置此参数仅会将数组中指定的js引入到html文件中，此外，如果你需要引入多个JS文件，仅有少数不想引入，还可以指定 excludeChunks 参数，它接受一个数组
      // chunks: ['index'],
      minify: {
        // 是否删除属性的双引号
        removeAttributeQuotes: false,
        // 是否折叠空白
        collapseWhitespace: false,
        removeComments: true,
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        useShortDoctype: true
      }
      // hash: true //是否加上hash，默认是 false
    }),
    // 每次打包刪除上一次的dist包
    // TODO: 需要分开生产环境和开发环境---只在打包时执行
    // new CleanWebpackPlugin({
    //   cleanOnceBeforeBuildPatterns: ['**/*', '!dll', '!dll/**'] // 不删除dll目录下的文件
    // }),
    // 這個插件可以拷貝資源
    // new CopyWebpackPlugin([
    //   {
    //     from: 'public/*.js',
    //     to: path.resolve(BASE_PATH, './dist'),
    //     // 设置为 true，那么它只会拷贝文件，而不会把文件夹路径都拷贝上
    //     flatten: true,
    //   }]
    // ),
    // * 打包后将 public 文件夹下的静态资源拷贝到 dist 目录下。
    new CopyWebpackPlugin({
      patterns: [
        {
          context: path.resolve(BASE_PATH, './public'),
          from: '*',
          to: path.resolve(BASE_PATH, './dist'),
          toType: 'dir'
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
      // 个人习惯将css文件放在单独目录下
      // publicPath: '../'   
      // 如果你的output的publicPath配置的是 './' 这种相对路径，那么如果将css文件放在单独目录下，记得在这里指定一下publicPath 
    }),
    // 进行css代码压缩
    new OptimizeCssPlugin()
    // 热更新插件
    // new webpack.HotModuleReplacementPlugin()
  ]
  // externals: {
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // },
  // devServer: {
  //   host: 'localhost',
  //   port: '3000',
  //   /* 
  //    启用 quiet 后，除了初始启动信息之外的任何内容都不会被打印到控制台。这也意味着来自 webpack 的错误或警告在控制台不可见  (默认不启用)
  //    */
  //   quiet: false,
  //   // 默认开启 inline 模式，如果设置为false,开启 iframe 模式
  //   inline: true,
  //   // 终端仅打印 error
  //   stats: 'errors-only',
  //   // 默认不启用 -当编译出错时，会在浏览器窗口全屏输出错误
  //   overlay: false,
  //   // 日志等级
  //   clientLogLevel: 'silent',
  //   // 是否启用 gzip 压缩
  //   compress: true,
  //   open: true,
  //   // 热更新
  //   hot: true,
  //   historyApiFallback: true
  // }
};

// 量各个插件和loader所花费的时间
module.exports = smp.wrap(webpackConfig);