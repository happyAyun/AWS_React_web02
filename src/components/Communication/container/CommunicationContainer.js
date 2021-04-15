import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';

@inject('CommunicationStore')
@observer
class CommunicationContainer extends Component {
  componentDidMount() {
    this.props.CommunicationStore.selectAll();
  }

    onSelectCom =(id)=>{
      this.props.CommunicationStore.selectCom(id);
    }

    render() {
      return (
            <CommunicationListView comm={this.props.CommunicationStore.comm}
                          onSelectCom={this.onSelectCom}/>
      );
    }
}

export default CommunicationContainer;
