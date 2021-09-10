import { ethers, Signer } from 'ethers';
import { action, extendObservable } from 'mobx';
import { spellsAddress } from '../constants';
import { Spells__factory } from '../contracts';
import { SpellData } from '../interface/spell-data.interface';
import { RootStore } from './RootStore';

import spellsList from '../spells.json';

export class UserStore {
  private store: RootStore;

  public wallet?: Signer;
  public collection?: number[];
  public spells?: SpellData[];
  public address?: string;
  public display?: number;

  constructor(store: RootStore) {
    this.store = store;

    extendObservable(this, {
      wallet: this.wallet,
      collection: this.collection,
      spells: this.spells,
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
        console.log('account connected')
        const provider = new ethers.providers.Web3Provider(app.ethereum);
        this.wallet = await provider.getSigner();
        this.address = await this.wallet.getAddress();
        const spellsContract = Spells__factory.connect(spellsAddress, this.wallet);

        // Get spells
        const spellIds = []
        const balance = await spellsContract.balanceOf(this.address);
        for(var i = 0; i < Number(balance); i++){
          const spellId = await spellsContract.tokenOfOwnerByIndex(this.address, i);
          spellIds.push(spellId)
        }

        // Numbers
        const collection = spellIds.map((id) => Number(id.toString()));
        this.collection = collection;
        const ownedSpells = spellsList.filter(spell => collection.includes(spell.id));
        console.log(ownedSpells)
        this.spells = ownedSpells;
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
