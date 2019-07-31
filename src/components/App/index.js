import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import ReduxToastr from 'react-redux-toastr';

import '~/config/reactotron';

import { store, persistor } from '~/store';
import Navbar from '~/components/Navbar';
import history from '~/routes/history';
import Routes from '~/routes';

import GlobalStyle from '~/styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ConnectedRouter history={history}>
          <>
            <GlobalStyle />
            <Navbar />
            <Routes />

            <ReduxToastr
              closeOnToastrClick
              transitionIn="fadeIn"
              transitionOut="fadeOut"
              position="bottom-center"
            />
          </>
        </ConnectedRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
