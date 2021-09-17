import { Route, Switch } from 'react-router-dom';
import MySpells from '../pages/MySpells';
import SpellList from '../pages/SpellList';
import AllSpells from '../pages/AllSpells';

export default function Routes(): JSX.Element {
  return (
    <Switch>
      <Route exact path="/">
        <MySpells />
      </Route>
      <Route path="/list">
        <SpellList />
      </Route>
      <Route path="/explore">
        <AllSpells />
      </Route>
    </Switch>
  );
}
