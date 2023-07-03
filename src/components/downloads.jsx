import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
import Counter from './counter';
import { Outlet , Link } from "react-router-dom";
import scrollgif from '../asset/output-onlinegiftools.gif';
import messenger from '../property/GlobalMessenger.apk';
import profile from '../property/profile.zip';


class Downloads extends Component {
    state = {
        Count: 0,
        id: 0
    }

    fitnesspro = () => {
        window.open("https://github.com/Akshaibiju/FitnessPro");
    }

    globalarc = () => {
        window.open("https://github.com/DELTA-ORB/GLOBAL-ARC");
    }

    profile = () => {
        window.open("https://github.com/Akshaibiju/Profile-Apk");
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
                        <div className='main-download'>
                            <span className='down-head'>Ow Reached My Projects <br />Scroll Down to See Wonders <br /> <img src={scrollgif} className='scroll'/></span>
                        </div>

                        <div className='products-download'>
                            <div className='product-item'>
                                
                                <div className='product-img'>
                                    <img src='https://th.bing.com/th/id/OIP.2Q5wKtPIOsYwNKV0htnhXQAAAA?pid=ImgDet&rs=1' className='img-responsive img-1'/>
                                </div>
                                <div className='product-name'>
                                    <span className='product-head'>Fitness Pro</span>
                                </div>
                                <div className='product-detail'>
                                    <span className='product-disc'>A Fitness Training Application To maintain shape and buildup Muscles <br /> <button className='btn  btn-primary' onClick={this.fitnesspro}>Try This Out</button> &nbsp; <button className='btn  btn-primary'><a>Download</a></button></span>
                                </div>
                            </div>

                            <div className='product-item'>
                                
                                <div className='product-img'>
                                    <img src='https://connecteam.com/wp-content/uploads/2019/02/Great-features-mobile@2x.png' className='img-responsive img-1'/>
                                </div>
                                <div className='product-name'>
                                    <span className='product-head'>Globel Arc Messenger</span>
                                </div>
                                <div className='product-detail'>
                                    <span className='product-disc'>A chatting Apllication which can connect you with your friends and family around world <br /> <button className='btn  btn-primary' onClick={this.globalarc}>Try This Out</button> &nbsp; <button className='btn  btn-primary'><a href={messenger}>Download</a></button></span>
                                </div>
                            </div>

                            <div className='product-item'>
                                
                                <div className='product-img'>
                                    <img src='https://th.bing.com/th/id/OIP.lFZ3_v6g7Nponv2ZcsqZrgAAAA?pid=ImgDet&rs=1' className='img-responsive img-1'/>
                                </div>
                                <div className='product-name'>
                                    <span className='product-head'>Profile</span>
                                </div>
                                <div className='product-detail'>
                                    <span className='product-disc'>Its my first ever made profile static application with java kind of like memmories to me<br /> <button className='btn  btn-primary' onClick={this.profile}>Try This Out</button> &nbsp; <button className='btn  btn-primary'><a href={profile}>Download</a></button></span>
                                </div>
                            </div>

                            {/* <div className='product-item'>
                                
                                <div className='product-img'>
                                    <img src='https://th.bing.com/th/id/OIP.2Q5wKtPIOsYwNKV0htnhXQAAAA?pid=ImgDet&rs=1' className='img-responsive img-1'/>
                                </div>
                                <div className='product-name'>
                                    <span className='product-head'>Fitness Pro</span>
                                </div>
                                <div className='product-detail'>
                                    <span className='product-disc'>A Fitness Training Application To maintain shape and buildup Muscles <br /> <button className='btn  btn-primary'>Try This Out</button> &nbsp; <button className='btn  btn-primary'>Download</button></span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <Outlet />
            </div>
        );
    };
}
export default Downloads;