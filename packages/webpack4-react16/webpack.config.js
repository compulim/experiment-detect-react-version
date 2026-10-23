import path from 'node:path';
import { fileURLToPath } from 'node:url';
import webpack from 'webpack';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  mode: 'development',
  entry: './lib/index.jsx',
  output: {
    path: path.resolve(__dirname, '../../public/asset/js/webpack4-react16/'),
    publicPath: '/asset/js/webpack4-react16/',
    filename: 'index.js'
  },
  plugins: [
    new webpack.IgnorePlugin({ resourceRegExp: /^react-dom\/client$/ }),
    new webpack.DefinePlugin({ FLAVOR: JSON.stringify('webpack4-react16') })
  ],
  module: {
    rules: [
      {
        test: /\.(?:jsx?|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-react',
                {
                  runtime: 'classic'
                }
              ]
            ]
          }
        }
      }
    ]
  }
};
