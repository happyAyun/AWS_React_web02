import axios from 'axios';

class TmpCommunicationApi {
    URL = '/community/'; // http://IP:8000/community

    communityCreate(communication_title) {
      return axios.post(this.URL + 'create/', {communication_title: `${communication_title}`})
        .then((response)=>response.data); // resolve
      // .catch(()=>{})  //예외발생 reject
      // .finally(()=>{}); //resolve. reject 모든 경우
    }

    communityUpdate(id, title) {
      return axios.put(this.URL + `update/${id}/`, {title: `${title}`})
        .then((response)=>response.data);
    }

    communityDelete(id) {
      return axios.delete(this.URL + `delete/${id}/`)
        .then((response)=>response.data);
    }

    communityDetail(id) {
      return axios.get(this.URL + `detail/${id}/`)
        .then((response)=>response.data);
    }

    communityList() {
      return axios.get(this.URL)
        .then((response)=>response.data);
    }
}

export default TmpCommunicationApi;
