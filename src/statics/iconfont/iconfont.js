import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
    @font-face {
      font-family: "iconfont";
      src: url('./iconfont.eot?t=1557400443956'); /* IE9 */
      src: url('./iconfont.eot?t=1557400443956#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
      url('./iconfont.woff?t=1557400443956') format('woff'),
      url('./iconfont.ttf?t=1557400443956') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url('./iconfont.svg?t=1557400443956#iconfont') format('svg'); /* iOS 4.1- */
    }

    .iconfont {
      font-family: "iconfont" !important;
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;











