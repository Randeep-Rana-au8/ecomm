import "./App.css";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";

export const Hats = (props) => {
  <div>
    <h1>Hi there</h1>
  </div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="shop/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
