import React, { Component } from 'react'
import { Orchids } from '../Shared/ListOfOrchids'
import OrchidsComponent from './Orchids';
export class Main extends Component {
  constructor() {
    super();
    this.state = {
        orichids: Orchids
    };
}
  render() {
    return <OrchidsComponent orichids={this.state.orichids}/>
  }
}

export default Main
