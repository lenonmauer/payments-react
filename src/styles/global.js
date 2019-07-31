import { createGlobalStyle } from 'styled-components';

import colors from '~/styles/colors';

import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

const globalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  text-rendering: optimizeLegibility !important;
  -webkit-font-smoothing: antialiased !important;
  font-family: 'MontSerrat', Helvetica, sans-serif !important;
  background: ${colors.primary.contrast};
  color: ${colors.primary.contrast};
}

button {
  cursor: pointer;
  font-family: 'MontSerrat', Helvetica, sans-serif !important;
}

#root {
  min-height: 100vh;
}

.redux-toastr  {
  .toastr {
    min-height: 50px !important;
  }

  .rrt-left-container {
    display: none;
  }

  .rrt-middle-container {
    width: 100% !important;
    margin-left: 0px !important;
    min-height: 50px;
    display: flex;
    padding-left: 10px !important;
    align-items: center;
  }

  .toastr.rrt-success {
    background: ${colors.primary.color} !important;
  }

  .toastr.rrt-danger {
    background: ${colors.danger};
    color: ${colors.white};
  }
}
`;

export default globalStyle;
