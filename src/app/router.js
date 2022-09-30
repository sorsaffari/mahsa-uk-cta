import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { PagePostCode } from "../pages";
import { Home } from "../pages/home";
import { YourMessage } from "../pages/your-message/your-message";


export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/postcode">
          <PagePostCode />
        </Route>
        <Route exact path="/message">
            <YourMessage />
        </Route>
        <Route exact path="/wtt">
        </Route>
        <Route exact path="/done">
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
