import "./global.css";
import AppRouter from "./Routing/AppRouter";
import store from "./Store/Store";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store = {store}>
      <AppRouter />
    </Provider>
  );
}
export default App;
