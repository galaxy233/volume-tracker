import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class CoinTableRow extends Component {
  render() {
    return (
      <Link to={"/" + this.props.name}>
        <div className="coin-table-row">
          <div className="coin-table-row-name">
            {this.props.name.replace('_', '/')}
          </div>

          <div className="coin-table-row-volume">
            {this.props.volume}
          </div>
        </div>
      </Link>
    )
  }
}

export default CoinTableRow;
