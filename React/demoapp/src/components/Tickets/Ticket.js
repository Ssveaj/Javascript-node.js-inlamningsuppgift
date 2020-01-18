import React, { Component } from 'react';

class Ticket extends Component {
    state = {  }
    render() { 
        return ( 
            <tr>
                          <td className="pl-0">
                            <div className="icon-rounded-primary icon-rounded-md">
                              <h4 className="font-weight-medium">AL</h4>
                            </div>
                          </td>
                          <td>
                           <p className="mb-0">{this.props.ticket.name}</p>
                            <p className="text-muted mb-0">{this.props.ticket.city}</p>
                          </td>
                          <td>
                            <p className="mb-0">{this.props.ticket.date}</p>
                            <p className="text-muted mb-0">9:30 am</p>
                          </td>
                          <td>
                            <p className="mb-0">{this.props.ticket.project}</p>
                            <p className="text-muted mb-0">{this.props.ticket.other}</p>
                          </td>
                          <td className="pr-0">
                            <i className="mdi mdi-dots-horizontal icon-sm cursor-pointer"></i>
                          </td>
                        </tr>
         );
    }
}
 
export default Ticket;