import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./Components/Details/Details";
import Post from "./Components/Post/Post";
import AllPost from "./Components/AllPost/AllPost";
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route path="/details/:userId">
            <Details></Details>
          </Route>
          <Route path="/post/:userId">
            <Post></Post>
          </Route>
          <Route path="/comment/:postId">
            <AllPost></AllPost>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
