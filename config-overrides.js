const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

/* 
通过react脚手架[create-react-app]创建的项目，如果需要在项目中配置一些webpack配置，需要在根目录下新建一个名称为config-overrides.js的文件。
*/
module.exports = override(
  //  配置路径别名。
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@pages': path.resolve(__dirname, 'src/pages')
  }),
  // ? antd 按需加载。
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css'
  })
);
