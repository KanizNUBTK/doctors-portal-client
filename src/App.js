import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Appointment from './component/Appointment/Appointment/Appointment';
import Footer from './component/Shared/Footer/Footer';
import Login from './component/Login/Login/Login';
import Register from './component/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './component/Login/PrivateRoute/PrivateRoute';
import Dashboard from './component/Dashboard/Dashboard/Dashboard';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/appointment">
              <Appointment></Appointment>
            </PrivateRoute>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
              </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
