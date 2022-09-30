import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PageWtt } from '../pages/wtt/page-wtt';
import { YourMessage } from '../pages/your-message/your-message';
import { PagePostCode, PageHome } from "../pages";
import { AlmostDone } from "../pages/almost-done/almost-done";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <PageHome />
        </Route>
        <Route exact path="/postcode">
          <PagePostCode />
        </Route>
        <Route exact path='/message'>
          <YourMessage />
        </Route>
        <Route exact path='/wtt'>
          <PageWtt />
        </Route>
        <Route exact path="/done">
          <AlmostDone />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
