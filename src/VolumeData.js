class VolumeData {
  getUnixTimestamp(days) {
    // Returns a UNIX timestamp going back a certain number of days.
    // getUnixTimestamp(10) will return the UNIX timestamp 10 days ago.
    // If called with 0, the current UNIX timestamp will be returned
    var currentTimestamp = Math.floor(Date.now() / 1000);
    if (days) {
      return currentTimestamp - (86400 * days);
    } else {
      return currentTimestamp;
    }
  }
  get24hrVolume() {
    var promise = fetch("https://poloniex.com/public?command=return24hVolume");
    return promise.then(function(res) {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("There was a problem with the network request.")
      }
    }).catch(function(err) {
      console.log(err.message);
    })
  }
  getVolumeData(currencyPair, start) {
    // Returns a promise resolving to the JSON data provided by the API
    start = this.getUnixTimestamp(start)
    var promise = fetch(`https://poloniex.com/public?command=returnChartData&currencyPair=${currencyPair}&start=${start}&end=9999999999&period=86400`);
    return promise.then(function(res) {
      if (res.ok) {
        return res.json()
      } else {
        throw new Error("There was a problem with the network request.")
      }
    }).catch(function(err) {
      console.log(err.message);
    })
  }
}

export default VolumeData;
