import {makeObservable, action, observable, runInAction} from 'mobx';
import MemberApi from '../api/MemberApi';

class MemberStore {
    @observable members = [];

    @observable member = {id: '', user_pk: '', email: '', nickname: '', photo: '', myInfo: '', user_id: ''} ;

    @observable message ='';

    memberApi = new MemberApi();

    constructor() {
      makeObservable(this);
    }

    @action
    setMemberProp(name, value) {
      this.member = {
        ...this.member,
        [name]: value,
      };
    }

    @action
    async signUpMember() {
      const result = await this.memberApi.memberCreate(this.member);
      // if (result == null) {
      //   this.message = `${this.member.nickname} 일정이 추가되지 않았습니다.`;
      // }
      this.members = this.members.concat(this.member);
      const memberList = await this.memberApi.memberList();
      runInAction(()=>{ this.members = memberList; });

      // user data와 token정보가 일치하면 로그인 성공
      if (json.user && json.user.username && json.token) {
        // eslint-disable-next-line max-len
        props.userHasAuthenticated(true, json.user.username, json.token);
        history.push('/');
        props.setModal(true);
      } else {
        alert('아이디 또는 비밀번호를 확인해주세요.');
      }
    }

    @action
    async removeTodo() {
      await this.todoApi.todoDelete(this.todo.id);
      // this.todos = this.todos.filter((element) => element.id !== this.todo.id);
      const result = await this.todoApi.todoList();
      runInAction(()=>{ this.todos = result; });
      runInAction(()=>{ this.todo = {}; });
    }

    @action
    async modifyTodo() {
      await this.todoApi.todoUpdate(this.todo.id, this.todo.title);
      // this.todos = this.todos.map((element) =>
      // element.id === this.todo.id ? this.todo : element);
      const result = await this.todoApi.todoList();
      runInAction(()=>{ this.todos = result; });
      runInAction(()=>{ this.todo = {}; });
    }

    @action
    async selectTodo(id) {
      const result = await this.todoApi.todoDetail(id);
      runInAction(()=>{ this.todo = result; });
      // this.todo =this.todos.find((element) => element.id === id)
    }

    @action
    async selectAll() {
      const reuslt = await this.todoApi.todoList();
      runInAction(() => { this.todos = reuslt; });
    }

  // @computed
  // get getTodo(){
  //     return this.todo ? this.todo : {};
  // }

  // @computed
  // get getTodos(){
  //     return this.todos ? this.todos.slice() : [];
  // }
}

export default new TodoStore();
