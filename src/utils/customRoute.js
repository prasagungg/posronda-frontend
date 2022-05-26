import { Route, Redirect } from "react-router-dom";

export const OtherRoute = () => (
  <Route
    path="*"
    render={(props) =>
      localStorage.getItem("user") ? (
        <Redirect
          to={{
            pathname: "/404",
            state: { from: props.location },
          }}
        />
      ) : (
        <Redirect
          to={{
            pathname: "/404", // should redirect to sign in page, but for initialization set to 404 page
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      const isLoggedIn = Boolean(localStorage.getItem("user"));
      return isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: props.location },
          }}
        />
      );
    }}
  />
);

export const ShouldRoute = ({ component: Component, location, ...rest }) => {
  const { from } = location.state || {
    from: { pathname: "/", state: { from: location } },
  };
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem("user") ? (
          <Component {...props} />
        ) : (
          <Redirect to={from} />
        )
      }
    />
  );
};
