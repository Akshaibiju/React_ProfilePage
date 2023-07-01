import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import Counter from './counter';
import { Outlet , Link } from "react-router-dom";


class Downloads extends Component {
    state = {
        Count: 0,
        id: 0
    }

    render() {
        return (
            <div className="downloads">
                <nav className="navbar navbar-top">
                        <div className="nav-content n1">
                        <tag>Akshai Biju</tag>
                        </div>
                        <div className="nav-content n2">
                        <input className="search" id="search" placeholder="Take A Dive in .."/>
                        </div>
                        <div className="nav-content n3">
                        <a className="projects" href="#projects-i">Projects</a>
                        <a className="Products" href="#product-i">Products</a>
                        <Link to="/">Home</Link>
                        </div>
                    </nav>
                    <div className='App-interface code-1'>

                    </div>
                    <Outlet />
            </div>
        );
    };
}
export default Downloads;