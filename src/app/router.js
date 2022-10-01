import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PagePostCode, PageHome, PageMessage, PageWtt, PageDone } from '../pages';

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <PageHome />
        </Route>
        <Route exact path='/postcode'>
          <PagePostCode />
        </Route>
        <Route exact path='/message'>
          <PageMessage />
        </Route>
        <Route exact path='/wtt'>
          <PageWtt />
        </Route>
        <Route exact path='/done'>
          <PageDone />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
