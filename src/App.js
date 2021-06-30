import './App.css';
import AppRouter from "./config/Router";
import { Provider } from "react-redux";
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>

      <AppRouter />

    </Provider>
    
  );
}

export default App;
