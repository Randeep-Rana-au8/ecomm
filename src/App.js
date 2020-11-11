import "./App.css";
import Homepage from "./pages/Homepage";
import { Switch, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import Header from "./components/header/Header";
import signInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={signInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
