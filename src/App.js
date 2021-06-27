import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Page2 from "./page2";
import Page3 from "./page3";
import Login from "./login";
import Loading from "./loading";
import NotFound from "./404";

function App() {
  const [state, setstate] = useState(false);
  const [green, setgreen] = useState(false);
  const [modal, setmodal] = useState(false);
  const [email, setemail] = useState("");
  const [message, setmessage] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setmodal(true);
  };
  const handleModalSubmit = () => {
    setmessage(true);
    setmodal(false);
  };
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/Loading" />
        </Route>
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/Loading" component={Loading} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/auth" component={Page2} />
        <Route exact path="/success" component={Page3} />
      </Switch>
    </>
  );
}

export default App;
