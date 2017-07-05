import React, { Component } from 'react';
import VolumeData from './VolumeData';
var BarChart = require("react-chartjs").Bar;
var Loader = require('halogen/PulseLoader');

class Chart extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data:{},
      loading:true
    }
  }
  generateLabels(arr) {
    // Takes in array of unix timestamps and converts them to string of dates in format "MM/DD"
    return arr.map(function(timestamp) {
      var date = new Date(timestamp * 1000);
      var month = date.getMonth() + 1;
      var day = date.getDate();
      return month + '/' + day;
    })
  }
  componentDidMount() {
    var vd = new VolumeData();
    vd.getVolumeData(this.props.pair, 30).then(function(data) {
      var labels = this.generateLabels(data.map(e => e.date));
      var chartData = {
        labels: labels,
        datasets: [{
          label: "Daily volume over 30 days",
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: data.map(e => e.volume)
        }]
      }
      this.setState({
        data:chartData,
        loading:false
      })
    }.bind(this))
  }
  render() {
    if (!this.state.loading) {
      return (
        <BarChart data={this.state.data} options={{}} width="800" height="400"/>
      )
    } else {
      return (
        <Loader color="#26A65B" size="16px" margin="4px"/>
      )
    }
  }
}

export default Chart;
