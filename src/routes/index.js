import { Route, Switch } from "react-router-dom";
import { AuthRoute, ShouldRoute } from "../utils";

//pages
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";

function index() {
  return (
    <Switch>
      <ShouldRoute path="/login" component={Login} />
      <ShouldRoute path="/register" component={Register} />
      <AuthRoute exact path="/" component={Home} />
      <AuthRoute exact path="/:username" component={Profile} />
      <Route exact path="/404" component={NotFound} />
    </Switch>
  );
}

export default index;
