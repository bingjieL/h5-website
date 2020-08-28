import { Module, VuexModule, getModule, Action, Mutation, } from 'vuex-module-decorators';
import store from '../index';


@Module({
  name: 'user',
  namespaced: true,
  dynamic: true,
  store: store(),
})
export default class User extends VuexModule {

  public userName: string = 'bjl';

  @Action
  async getUserName() {
    const t: number  = window.setTimeout(() => {
      this.changeUserName('bjl222');
      clearTimeout(t)
    }, 100);
  }

  @Mutation
  changeUserName(name: string) {
    this.userName = name;
  }
}

export const VuexUser = getModule(User);
