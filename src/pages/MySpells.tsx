import { observer } from 'mobx-react-lite';
import Spellbook  from '../components/Spellbook';
import Header  from '../components/Header';

const MySpells = observer((): JSX.Element | null => {
  return (
    <>
      <Header text="Spells (for Wizards and other Adventurers)" />
      <Spellbook spells={[]} wizards={[]} filteredByUser={true} />
    </>
  );
});

export default MySpells;
