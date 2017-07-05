import React, { Component } from 'react';
import VolumeData from './VolumeData';
import CoinTable from './CoinTable';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coinData:[]
    }
  }

  componentDidMount() {
    var vd = new VolumeData();
    vd.get24hrVolume().then(function(data) {
      var coinData = [];
      for (var key in data) {
        if (key.substr(0,3) === "BTC") {
          coinData.push(
            {
              name : key,
              volume : data[key]["BTC"]
            }
          )
        }
      }
      coinData.sort((a,b) => b.volume - a.volume);
      this.setState({
        coinData:coinData
      })
    }.bind(this)).catch(function(err) {
      console.log(err.message);
    })
  }

  render() {
    return (
      <div>
        <CoinTable coinData={this.state.coinData} />
      </div>
    )
  }
}

export default Home;
