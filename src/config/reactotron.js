/* eslint-disable */

if (process.env.NODE_ENV === 'development') {
  const Reactotron = require('reactotron-react-js').default;
  const { reactotronRedux } = require('reactotron-redux');
  const sagaPlugin = require('reactotron-redux-saga');

  const tron = Reactotron.configure()
    .use(reactotronRedux())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;

  console.tron.log('reactotron on');
}
