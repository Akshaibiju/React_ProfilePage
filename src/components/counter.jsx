import React, { Component , router , route , routes } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Downloads from './downloads';


class Counter extends Component {
    state = { 
        Count: 0,
        id : 0
     } 
    handleIncriment = () => {
        this.setState({Count: this.state.Count + 1 });
      };
      Github = () => {
        window.open("https://github.com/AkshaiBiju/");
      };
      Instagram = () => {
        window.open("https://www.instagram.com/_fire_fist__ace_/");
      };
      Twitter = () => {
        window.open("https://twitter.com/AkshaiBiju3");
      };
      Facebook = () => {
        window.open("https://www.facebook.com/Akshai.0.0");
      };

    render() { 
        let randomId = "content-id "+ "c-"+Math.random().toString(36).substr(2, 9);;
          
        return (
            <div className="App">
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
                        <a className="Feature" href="#">Downloads</a>
                        </div>
                    </nav>
                    <div className='App-interface'>
                        <header className="App-header">
                            <img src="https://www.neenopal.com/images/saas/dev4.png" className="App-logo" alt="logo" />
                            <p>
                            Its Me Akshai Biju
                            </p>
                            <button className="github-tab bind" onClick={this.Github}>Github</button>
                            <button className="instagram-tab bind" onClick={this.Instagram}>Instagram</button>
                            <button className="facebook-tab bind" onClick={this.Facebook}>Facebook</button>
                            <button className="twitter-tab bind" onClick={this.Twitter}>Twitter</button>
                        </header>

                        <header className="App-project">
                            <div className="Project-mini url">
                                <span className='discover'>Discover</span>
                                <div className='discover-content'>
                                    <div className='content c1'></div>
                                    <div className='content c2'></div>
                                    <div className='content c3'></div>
                                    <div className='content c4'></div>
                                </div>
                            </div>



                           
                            <div className="Project-mini content-mx" id='projects-i'>
                                <div className={randomId+1} >
                                    <span className='pr-head'>Amazone Web Application</span>
                                    <img src='https://i.pinimg.com/736x/12/f6/97/12f697f4e7baca40fea6dd7bd596731f.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+2} >
                                <span className='pr-head'>Profile Web Application</span>
                                    <img src='https://i.pinimg.com/736x/4d/27/a0/4d27a0aaad240d51ab037dbb0e994e96.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
                                        <img width="16" height="16" src="https://img.icons8.com/small/16/nodejs.png" alt="nodejs"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+3} >
                                <span className='pr-head'>Landing website</span>
                                    <img src='https://cdn.dribbble.com/users/2236928/screenshots/5855314/saas_landing_page.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+4} >
                                    <span className='pr-head'>Profile Mobile Application</span>
                                    <img src='https://tse1.mm.bing.net/th?id=OIP.6vHT-IpTPkgDXcey1Z0GnAAAAA&pid=ImgDet&rs=1' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/xml-file.png" alt="xml-file"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+5} >
                                <span className='pr-head'>Chatting Mobile Application</span>
                                    <img src='https://i.pinimg.com/originals/38/2f/5f/382f5fc785c002bd9f4f513dfdfbc3a3.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/external-kotlin-a-cross-platform-statically-typed-general-purpose-programming-language-with-type-inference-logo-color-tal-revivo.png" alt="external-kotlin-a-cross-platform-statically-typed-general-purpose-programming-language-with-type-inference-logo-color-tal-revivo"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-shadow-tal-revivo.png" alt="external-firebase-a-googles-mobile-platform-that-helps-you-quickly-develop-high-quality-apps-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/xml-file.png" alt="xml-file"/>
                                        <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/database.png" alt="database"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+6} >
                                <span className='pr-head'>Calculator Mobile Application</span>
                                    <img src='https://cdn.dribbble.com/users/2583563/screenshots/5329997/calculator.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+7} >
                                <span className='pr-head'>Python Voice Assistant</span>
                                    <img src='https://tse3.mm.bing.net/th?id=OIP.lpU8sQbAXs-ova7EVVrtfwHaFj&pid=ImgDet&w=768&h=576&rs=1' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/python.png" alt="python"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+8} >
                                <span className='pr-head'>Shopping WebPages</span>
                                    <img src='https://static.vecteezy.com/system/resources/previews/000/518/577/original/modern-flat-web-page-design-template-concept-of-online-shopping-decorated-people-character-for-website-and-mobile-website-development-flat-landing-page-template-vector-illustration.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                    <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+9} >
                                <span className='pr-head'>Youtube Video Downloader Web</span>
                                <img src='https://stileex.xyz/wp-content/uploads/2019/06/download-youtube-video-youtubnow1-450x323.png' className='pr-img p-sp'/>
                                    <div className='pr-badge'>
                                    <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+10} >
                                <span className='pr-head'>Google Webpage</span>
                                <img src='https://th.bing.com/th/id/R.e875cb097b2ff521ad166d76ea5ab64a?rik=592R4kVChH0KaA&riu=http%3a%2f%2flongislandeoc.org%2fwp-content%2fuploads%2f2020%2f03%2fdevices1-1024x673.png&ehk=6yKMLG262hqaCnoDfxLrzmCgpFseGQY1vc%2b9RqWrC9M%3d&risl=&pid=ImgRaw&r=0' className='pr-img p-sp'/>
                                    <div className='pr-badge'>
                                    <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+11} >
                                <span className='pr-head'>Twitter Webpage</span>
                                <img src='https://techcrunch.com/wp-content/uploads/2019/07/Twitter-Web-Light2.png?w=620' className='pr-img p-sp'/>
                                    <div className='pr-badge'>
                                    <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+12} >
                                <span className='pr-head'>custom chrome Homepage</span>
                                <img src='https://lh3.googleusercontent.com/MB8QVmMfL4U7_l764IMZ9FrtjxuUnR145KNrmvh_MOzideKtQitxJ6ylXgCifmh7EEZ9nFvH4w=w1280-h800-e365' className='pr-img p-sp'/>
                                    <div className='pr-badge'>
                                    <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        </badge>
                                    </div>
                                </div>
                            </div>

                            <div className="Project-mini content-my" id='product-i'>
                                <div className={randomId+13}>
                                
                                    <img className='pro-img' src='https://cdn.dribbble.com/users/3041456/screenshots/9170914/__app-_____4x.jpg'/>
                                    <span className='pr-body'>
                                        <span className='pr-head'>GLOBAL ARC MESSENGER</span><br />&nbsp;<br />
                                        GLOBAL ARC MESSENGER is a chatting application which help you to connect with others FAST and EASY<br />&nbsp;<br />&nbsp;<br />
                                    <span className='free-tag'><img width="24" height="24" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-free-shopping-those-icons-fill-those-icons.png" alt="external-free-shopping-those-icons-fill-those-icons"/>FREE</span><br />&nbsp;<br />
                                    <button className='tryout' id='tryout' >Try it out</button>
                                    </span>
                                    
                                </div>
                            </div>
                    </header>
                </div>
        </div>
        );
    }
}
 
export default Counter;