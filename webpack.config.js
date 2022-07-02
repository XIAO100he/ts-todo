const { resolve } =require('path')

module.exports = {
  mode: 'development', //どの環境に向けてビルドするか
  devtool: 'inline-source-map', //ソールマップ生成方法指定
  entry: resolve(__dirname,'ts/index.ts'), //バンドルするファイルのエントリーポイントとなるファイルのバス
  output: {
    filename: 'index.js',
    path: resolve(__dirname,'dist'),
  }, //バンドルするファイルを出力する場所、ファイル名
  resolve: {
    extensions: ['.ts', '.js'],
  }, //モジュールの解決方法指定
  module: {
    rules: [
      {
        test: /\.ts/,
        use: {
          loader: 'ts-loader',
        },
      },
    ],
  } //js以外のファイルをmoduleとして扱うよう指定
}