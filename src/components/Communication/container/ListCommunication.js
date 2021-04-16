import React, {Component } from 'react';
import { inject, observer } from 'mobx-react';
import CommunityListView from '../view/CommunityListView';

@inject('CommunityStore')
@observer
class ListCommunication extends Component {
  onSetCommunityProp(name, value) {
    this.props.CommunityStore.setCommunityProp(name, value);
  }

  onAddCommunity() {
    this.props.CommunityStore.addCommunity();
  }

  onRemoveCommunity() {
    this.props.CommunityStore.removeCommunity();
  }

  onModifyCommunity() {
    this.props.CommunityStore.modifyCommunity();
  }

  render() {
    return (
          <div>
            <CommunityListView
                communities = {CommunityStore.communities}
                onSetCommunityProp={onSetCommunityProp}
                onAddCommunity={onAddCommunity}
                onRemoveCommunity={onRemoveCommunity}
                onModifyCommunity={onModifyCommunity}
            />
          </div>
    );
  }
}

export default ListCommunication;
