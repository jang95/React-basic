const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.module\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

// eslint-disable-next-line no-undef
const env = getClientEnvironment(paths.publicUrlOrPath.slice(0, -1));

module.exports = {
  mode: "production", // 프로덕션 모드로 설정하여 최적화 옵션들을 활성화
  entry: paths.ssrIndexJs, // 엔트리 경로
  target: "node", // node 환경에서 실행될 것이라는 점을 명시
  output: {
    path: paths.srrBuild, // 빌드 경로
    filename: "server.js", // 파일 이름
    chunkFilename: "js/[name]/chunk.js", // 청크 파일 이름
    publicPath: "paths.publickUrlOrPath", // 정적 파일이 제공될 경로
  },
  module: {
    rules: [
      {
        oneOf: [
          // 자바스크립트를 위한 처리
          // 기존 webpack.config.js를 참고하여 작성
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
            loader: require.resolve("babel-loader"),
            option: {
              customize: require.resolve(
                "babel-preset-react-app/webpack-overrides"
              ),
              presets: [
                [
                  require.resolve("babel-preset-react-app"),
                  {
                    runtime: "automatic",
                  },
                ],
              ],
              plugin: [
                [
                  require.resolve("babel-plugin-named-asset-import"),
                  {
                    loaderMap: {
                      svg: {
                        ReactComponent:
                          "@svgr/webpack?-svgo, +titleProp,+ref![path]",
                      },
                    },
                  },
                ],
              ],
              cachDirectory: true,
              cacheCompression: false,
              compact: false,
            },
          },
          // css를 위한 처리
          {
            test: cssRegex,
            exclude: cssModuleRegex,
            // exportOnlyLocals: true 옵션을 설정해야 실제 css 파일을 생성하지 않습니다.
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
              },
            },
          },
          // css Module을 위한 처리
          {
            test: cssModuleRegex,
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
                getLocalIdent: getCSSModuleLocalIdent,
              },
            },
          },
          // sass를 위한 처리
          {
            test: sassRegex,
            exclude: sassModuleRegex,
            // exportOnlyLocals: true 옵션을 설정해야 실제 css 파일을 새엇하지 않습니다.
            loader: require.resolve("css-loader"),
            options: {
              importLoaders: 1,
              modules: {
                exportOnlyLocals: true,
              },
            },
          },
        ],
      },
    ],
  },
};
