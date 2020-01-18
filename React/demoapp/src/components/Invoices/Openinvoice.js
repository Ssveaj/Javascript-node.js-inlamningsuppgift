import React, { Component } from 'react';
class Openinvoice extends Component {
    state = { 
        openinvoice: ""
    }
    componentDidMount() {
        var status = this.state.status;
        switch (status) {
            case "Progress":
          return "badge-success"
            case "Open":
          return "badge-warning"
            case "On hold":
          return "badge-danger"
          default: 
          return "badge-secondary"
             
        }
    }

    render() { 
        return ( 
<tr>
    <td>{this.props.openinvoice.invoice}</td>
    <td>{this.props.openinvoice.customer}</td>
    <td>{this.props.openinvoice.shipping}</td>
    <td className="font-weight-bold">{this.props.openinvoice.currency}{this.props.openinvoice.bestPrice}</td>
    <td>{this.props.openinvoice.currency}{this.props.openinvoice.purchasedPrice}</td>
    <td>
    <div className={"badge badge-fw" + this.props.status + '' }>{this.props.openinvoice.status}</div>
    </td>
</tr>
        );
    }   
}
export default Openinvoice;

