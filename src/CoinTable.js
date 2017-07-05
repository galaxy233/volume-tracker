import React, { Component } from 'react';
import CoinTableRow from './CoinTableRow';

class CoinTable extends Component {

  render() {
    var coinTable = this.props.coinData.map(coinObj => <CoinTableRow name={coinObj.name} volume={coinObj.volume} />)
    return (
      <div className="coin-table">
        { coinTable }
      </div>
    )
  }
}

export default CoinTable;
