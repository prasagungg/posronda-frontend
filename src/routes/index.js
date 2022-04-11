import { Route, Switch } from "react-router-dom";
import { AuthRoute, ShouldRoute } from "../utils";

//pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";

function index() {
  return (
    <Switch>
      <ShouldRoute path="/login" component={Login} />
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute exact path="/" component={Profile} />
      <Route exact path="/404" component={NotFound} />
    </Switch>
  );
}

export default index;
