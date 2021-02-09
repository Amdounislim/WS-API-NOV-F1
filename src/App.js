import "./App.css";
import { Switch, Route } from "react-router-dom";
import Users from "./components/Users";
import Profile from "./components/Profile/Profile";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Users} />
        <Route
          path="/user/:id"
          render={(defaultProps) => <Profile {...defaultProps} />}
        />
        <Route path="/posts/:id" render={(props) => <Comments {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
