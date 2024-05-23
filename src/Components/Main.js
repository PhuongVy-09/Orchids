import React, { Component } from 'react'
import { Orchids } from '../Shared/ListOfOrchids'
import OrchidsPresentation from './OrchidsPresentation';
export class Main extends Component {
  constructor() {
    super();
    this.state = {
        orichids: Orchids
    };
}
  render() {
    return <OrchidsPresentation orchids={this.state.orichids}/>

  }
}

export default Main
