import React, { Component } from 'react';
import Chart from './Chart'


class CoinView extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>{this.props.match.params.pair}</h1>
        </header>
        <Chart pair={this.props.match.params.pair}/>
      </div>
    )
  }
}

export default CoinView;
