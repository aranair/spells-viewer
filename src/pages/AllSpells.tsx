import { observer } from 'mobx-react-lite';
import Spellbook  from '../components/Spellbook';
import Header  from '../components/Header';
import spellsList from '../spells.json';

const AllSpells = observer((): JSX.Element | null => {
  return (
    <>
      <Header text="The Hidden Book of All Spells" />
      <Spellbook spells={spellsList} filteredByUser={false} />
    </>
  );
});

export default AllSpells;
