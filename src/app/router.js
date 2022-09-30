import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { PagePostCode } from '../pages';
import { Home } from '../pages/home';

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
        <Route exact path='/message'></Route>
        <Route exact path='/wtt'></Route>
        <Route exact path='/done'></Route>
      </Switch>
    </BrowserRouter>
  );
};
