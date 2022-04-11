import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";

import Routes from "./routes";

import configureStore from "./redux/store";
import history from "./utils/history";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <ToastContainer />
          <Routes />
        </ConnectedRouter>
      </Provider>
    </div>
  );
}

export default App;
