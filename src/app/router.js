<<<<<<< HEAD
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { PagePostCode } from "../pages";
import { Home } from "../pages/home";
import { YourMessage } from "../pages/your-message/your-message";

=======
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PagePostCode } from '../pages';
import { Home } from '../pages/home';
>>>>>>> 2a5fe0484c58b2df9b92814498300dd8e18683d5

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/postcode'>
          <PagePostCode />
        </Route>
<<<<<<< HEAD
        <Route exact path="/message">
            <YourMessage />
        </Route>
        <Route exact path="/wtt">
        </Route>
        <Route exact path="/done">
        </Route>
=======
        <Route exact path='/message'></Route>
        <Route exact path='/wtt'></Route>
        <Route exact path='/done'></Route>
>>>>>>> 2a5fe0484c58b2df9b92814498300dd8e18683d5
      </Switch>
    </BrowserRouter>
  );
};
