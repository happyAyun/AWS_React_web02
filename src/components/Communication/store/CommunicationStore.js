import {makeObservable, action, observable, runInAction} from 'mobx';
import tmpCommunicationApi from '../api/tmpCommunicationApi';

class CommunicationStore {
  @observable comm = [];

  @observable com = {
    communication_id: '',
    communication_title: '',
    communication_content: '',
    communication_img: '',
    communication_date: '',
    communication_views: '',
    communication_category: '',
  } ;

  @observable message ='';

  comApi = new tmpCommunicationApi();

  constructor() {
    makeObservable(this);
  }

  @action
  setComProp(name, value) {
    this.com = {
      ...this.com,
      [name]: value,
    };
  }

  @action
  async addCom() {
    const result = await this.comApi.communityCreate(this.com.communication_title);
    const comList = await this.comApi.communityList();
    runInAction(()=>{ this.comm = comList; });
  }

  @action
  async removeCom() {
    await this.comApi.communityDelete(this.todo.id);
    // this.todos = this.todos.filter((element) => element.id !== this.todo.id);
    const result = await this.comApi.communityList();
    runInAction(()=>{ this.comm = result; });
    runInAction(()=>{ this.com = {}; });
  }

  @action
  async modifyCom() {
    await this.comApi.communityUpdate(this.todo.id, this.todo.title);
    // this.todos = this.todos.map((element) =>
    // element.id === this.todo.id ? this.todo : element);
    const result = await this.comApi.communityList();
    runInAction(()=>{ this.comm = result; });
    runInAction(()=>{ this.com = {}; });
  }

  @action
  async selectCom(id) {
    const result = await this.comApi.communityDetail(id);
    runInAction(()=>{ this.com = result; });
    // this.todo =this.todos.find((element) => element.id === id)
  }

  @action
  async selectAll() {
    const result = await this.comApi.communityList();
    runInAction(() => { this.comm = result; });
  }
}

export default new CommunicationStore();
