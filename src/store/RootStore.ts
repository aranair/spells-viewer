import { AppStore } from '../interface/app-store.interface';
import { UserStore } from './UserStore';

export class RootStore implements AppStore {
  public user: UserStore;

  constructor() {
    this.user = new UserStore(this);
  }
}

const store = new RootStore();
export default store;
