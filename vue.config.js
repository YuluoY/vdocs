
module.exports = {
  // 基本路径
  publicPath: "./",
  // 输出目录
  outputDir: "dist",

  // 在保持时不使用eslint检查
  lintOnSave: false,

  // devServer: {
  //   proxy: {
  //     "./api": {
  //       target: "http://localhost:3000/",
  //       changeOrigin: true,
  //       // secure: false,
  //       pathRewrite: {
  //         "^/api": "",
  //       },
  //     },
  //   },
  // },
};
