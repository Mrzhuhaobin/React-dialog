// eslint-disable-next-line
import React, { useContext, useEffect, useState } from 'react';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link, Redirect, Switch, useParams, useHistory,  useLocation, useRouteMatch } from 'react-router-dom';
import PageA from './pages/dashboard/index';
import PageB from './pages/about/index';
import PageC from './pages/like/index';
// import MenuLink from './components/menuLink';
import './App.scss';



function App () {
  return (
    <Router>
      <Route path="/" component={Demo}></Route>
    </Router>
  )
}

function MenuLink ({ label, to, activePoint }) {
  const match = useRouteMatch({
      path: to,
      exact: activePoint
  });
  return (
      <div className={match ? 'active' : ''}>
          {match && ">"}
          <Link to={to}>{label}</Link>
      </div>
  )
}

function Demo() {
  return (
    <div className="app-page">
      <ProvideAuth>
        <AuthButton></AuthButton>
        <h1 className="app-page-title">My App</h1>
        <div className="nav-wrap">
            <MenuLink to="/index" label="首页" activePoint={true}></MenuLink>
            <MenuLink to="/about:0" label="关于"></MenuLink>
            <MenuLink to="/like" label="喜欢"></MenuLink>
        </div>
        <main className="route-view">
          <Switch>
            <PrivateRoute path="/like">
              <Route path="/like" component={PageC}></Route>
            </PrivateRoute>
            <Route path="/index" exact component={PageA}></Route>
            <Route path="/about:num" component={PageB}></Route>
            <Route path="/login"><LoginPage /></Route>
          </Switch>
          {/* <Redirect from="/" to="/index"></Redirect> */}
        </main>
      </ProvideAuth>
      
  </div>
  );
}

const fakeAuth = {
  isAuthenticated: false,
  signin(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

/** For more details on
 * `authContext`, `ProvideAuth`, `useAuth` and `useProvideAuth`
 * refer to: https://usehooks.com/useAuth/
 */
const authContext = React.createContext();

function ProvideAuth({ children }) {
  const auth = useProvideAuth();
  return (
    <authContext.Provider value={auth}>
      {children}
    </authContext.Provider>
  );
}

function useAuth() {
  return useContext(authContext);
}

function useProvideAuth() {
  const [user, setUser] = useState(null);

  const signin = cb => {
    return fakeAuth.signin(() => {
      setUser("user");
      cb();
    });
  };

  const signout = cb => {
    return fakeAuth.signout(() => {
      setUser(null);
      cb();
    });
  };

  return {
    user,
    signin,
    signout
  };
}

function AuthButton() {
  let history = useHistory();
  let auth = useAuth();

  return auth.user ? (
    <p>
      Welcome!{" "}
      <button
        onClick={() => {
          auth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p style={{backgroundColor: '#acb567'}}>You are not logged in.</p>
  );
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}


function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let auth = useAuth();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = () => {
    auth.signin(() => {
      history.replace(from);
    });
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}



export default App;
