import React, { Component } from 'react';

class Openinvoice  extends Component {
    state = { }   

    render() { 
        return ( 
          <tr>
          <td>{this.props.openinvoice.invoice}</td>
          <td>{this.props.openinvoice.customer}</td>
          <td>{this.props.openinvoice.shipping}</td>
          <td className="font-weight-bold">{this.props.openinvoice.currency}{this.props.openinvoice.bestPrice}</td>
          <td>{this.props.openinvoice.currency}{this.props.openinvoice.purchasedPrice}</td>
          <td><div className="badge badge-success badge-fw">{this.props.openinvoice.status}</div></td>
        </tr>
       );
    }
  }
 
export default Openinvoice; 