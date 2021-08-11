const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/main.js',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './dist',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['main'],
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/Best-Tools-for-Developers-and-Designers.html',
      inject: true,
      chunks: ['main'],
      filename: 'Best-Tools-for-Developers-and-Designers.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/Powerful-Techniques-For-Responsive-Web-Design.html',
      inject: true,
      chunks: ['main'],
      filename: 'Powerful-Techniques-For-Responsive-Web-Design.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/CSS-Vertical-Alignment-Tips-and-Techniques.html',
      inject: true,
      chunks: ['main'],
      filename: 'CSS-Vertical-Alignment-Tips-and-Techniques.html',
    }),
    new HtmlWebpackPlugin({
      template: './src/Introduction-to-GitHub-and-Git-Bash.html',
      inject: true,
      chunks: ['main'],
      filename: 'Introduction-to-GitHub-and-Git-Bash.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/Best-Visual-Studio-Code-Extensions.html',
      inject: true,
      chunks: ['main'],
      filename: 'Best-Visual-Studio-Code-Extensions.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images/',
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
    ],
  },
};
