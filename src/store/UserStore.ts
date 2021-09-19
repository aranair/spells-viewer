import { ethers, Signer } from 'ethers';
import { runInAction, action, extendObservable } from 'mobx';
import { spellsAddress, wizardsAddress } from '../constants';
import { Spells__factory, Wizards__factory } from '../contracts';
import { SpellData } from '../interface/spell-data.interface';
import { WizardData } from '../interface/wizard-data.interface';
import { RootStore } from './RootStore';

import spellsList from '../spells.json';
import wizardsList from '../wizard-summary-stripped.json';

export class UserStore {
  private store: RootStore;

  public wallet?: Signer;
  public collection?: number[];
  public spells?: SpellData[];
  public wizards?: WizardData[];
  public address?: string;
  public display?: number;

  constructor(store: RootStore) {
    this.store = store;

    extendObservable(this, {
      wallet: this.wallet,
      collection: this.collection,
      spells: this.spells,
      wizards: this.wizards,
      address: this.address,
    });

    this.connect();
  }

  connect = action(async (): Promise<void> => {
    if (this.wallet) {
      return;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const app = window as any;

    if (app.ethereum) {
      const account = await app.ethereum.request({ method: 'eth_requestAccounts' });

      if (account) {
        const provider = new ethers.providers.Web3Provider(app.ethereum);
        const wallet = await provider.getSigner();
        const address = await wallet.getAddress();

        runInAction(() => {
          this.wallet = wallet;
          this.address = address;
        });

        const spellsContract = Spells__factory.connect(spellsAddress, wallet);
        const wizardsContract = Wizards__factory.connect(wizardsAddress, wallet);

        // Get spells
        const spellIds: Array<any> = []
        const balance = await spellsContract.balanceOf(address);
        for(var i = 0; i < Number(balance); i++){
          const spellId = await spellsContract.tokenOfOwnerByIndex(address, i);
          spellIds.push(spellId)
        }


        // Get wizards
        const wizardIds = await wizardsContract.tokensOfOwner(address);

        runInAction(() => {
          // Numbers
          const collection = spellIds.map(id => Number(id.toString()));
          this.collection = collection;
          const ownedSpells = spellsList.filter(spell => collection.includes(spell.id));
          this.spells = ownedSpells;

          const wizCollection = wizardIds.map(id => Number(id.toString()));
          this.wizards = wizardsList.filter(wiz => wizCollection.includes(wiz.id))
        });
      }
    }
  });

  get displaySpells(): SpellData[] {
    return this.spells || [];
  };

  updateSpells = action((spells: SpellData[]): void => {
    this.spells = spells;
  });
}
