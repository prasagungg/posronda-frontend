import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./routes";

import configureStore from "./redux/store";
import history from "./utils/history";

export const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
