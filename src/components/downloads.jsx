import React, { Component , router , route , routes } from 'react';
import { useHistory } from 'react-router-dom';


class Downloads extends Component {
    state = {
        Count: 0,
        id: 0
    }

    render() {
        return (
            <div className="downloads"></div>
        );
    };
}
export default Downloads;