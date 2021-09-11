import { Route, Switch } from 'react-router-dom';
import MySpells from '../pages/MySpells';
import SpellList from '../pages/SpellList';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <MySpells />
      </Route>
      <Route path="/explore">
        <SpellList />
      </Route>
    </Switch>
  );
}
