import React, { Component , useState }from 'react';
import { Link, Switch, Redirect } from 'react-router-dom';
import Downloads from './downloads';
import { Outlet } from "react-router-dom";
import divider from '../asset/layered-waves-haikei (2).svg';
import background from '../asset/stacked-steps-haikei.svg';
import './appduty';

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

      Download =  () => {
        this.context.router.replace('/downloads');
      };
      githubprojects = (url) => {
        window.open(url);
    };
    urllink = [
        "https://github.com/Akshaibiju/amazone",
        "https://github.com/Akshaibiju/React_ProfilePage",
        "https://github.com/Akshaibiju/LandingPage",
        "https://github.com/Akshaibiju/Profile-Apk",
        "https://github.com/DELTA-ORB/GLOBAL-ARC",
        "https://github.com/DELTA-ORB/CALCULATOR",
        "https://github.com/Akshaibiju/Python-Voice-Assistant",
        "https://github.com/Akshaibiju/ShoppingPage",
        "https://github.com/Akshaibiju/YT-Downloader",
        "https://github.com/Akshaibiju/Google.com",
        "https://github.com/Akshaibiju/Twitter",
        "https://github.com/Akshaibiju/custom_coding_theme_BrowserHome"
    ]

    pack1 = () => {
        this.githubprojects(this.urllink[0]);
    };
    pack2 = () => {
        this.githubprojects(this.urllink[1]);
    };
    pack3 = () => {
        this.githubprojects(this.urllink[2]);
    };
    pack4 = () => {
        this.githubprojects(this.urllink[3]);
    };
    pack5 = () => {
        this.githubprojects(this.urllink[4]);
    };
    pack6 = () => {
        this.githubprojects(this.urllink[5]);
    };
    pack7 = () => {
        this.githubprojects(this.urllink[6]);
    };
    pack8 = () => {
        this.githubprojects(this.urllink[7]);
    };
    pack9 = () => {
        this.githubprojects(this.urllink[8]);
    };
    pack10 = () => {
        this.githubprojects(this.urllink[9]);
    };
    pack11 = () => {
        this.githubprojects(this.urllink[10]);
    };
    pack12 = () => {
        this.githubprojects(this.urllink[11]);
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
                        <input className="search" id="search" placeholder="Take A Dive in .." />
                        </div>
                        <div className="nav-content n3">
                        <a className="projects" href="#projects-i">Projects</a>
                        <a className="Products" href="#product-i">Products</a>
                        <Link to="/downloads">Downloads</Link>
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
                                {/* <span className='discover'>Discover</span>
                                <div className='discover-content'>
                                    <div className='content c1'><img src='https://th.bing.com/th/id/OIP.XvcfWo0lEin33ACFNsriMwAAAA?pid=ImgDet&w=430&h=315&rs=1'/></div>
                                    <div className='content c2'></div>
                                    <div className='content c3'></div>
                                    <div className='content c4'></div>
                                </div> */}

                                
                                <div className='Into' >
                                    <img src='https://www.forextradingtools.eu/wp-content/uploads/2018/01/avataaars-15-283x300.png' className='profile-img'/>
                                    <h1>Welcome ,<br />
                                        Its Me AkshaiBiju
                                    </h1>
                                    <span className='discription'>Introducing my self a frontent developer and a student<br /> This website is made with React.js and wish you Best Experience</span>
                                    <img src={divider} className='divider'/>
                                </div>
                            </div>



                           
                            <div className="Project-mini content-mx" id='projects-i'>
                                <div className={randomId+1} id='amazonebox' onClick={this.pack1}>
                                    <span className='pr-head'>Amazone Web Application</span>
                                    <img src='https://i.pinimg.com/736x/12/f6/97/12f697f4e7baca40fea6dd7bd596731f.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="24" height="24" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/24/external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo.png" alt="external-jquery-is-a-javascript-library-designed-to-simplify-html-logo-shadow-tal-revivo"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        {/* <a className='btn-a aclass' id='1'>Visit</a> */}
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+2} onClick={this.pack2}>
                                <span className='pr-head'>Profile Web Application</span>
                                    <img src='https://i.pinimg.com/736x/4d/27/a0/4d27a0aaad240d51ab037dbb0e994e96.jpg' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/html-5--v1.png" alt="html-5--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/css3.png" alt="css3"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/javascript--v1.png" alt="javascript--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/react-native.png" alt="react-native"/>
                                        <img width="16" height="16" src="https://img.icons8.com/small/16/nodejs.png" alt="nodejs"/>
                                        {/* <a className='btn-a aclass' id='2'>Visit</a> */}
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+3} onClick={this.pack3}>
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
                                <div className={randomId+4} onClick={this.pack4} >
                                    <span className='pr-head'>Profile Mobile Application</span>
                                    <img src='https://tse1.mm.bing.net/th?id=OIP.6vHT-IpTPkgDXcey1Z0GnAAAAA&pid=ImgDet&rs=1' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png" alt="java-coffee-cup-logo--v1"/>
                                        <img width="48" height="48" src="https://img.icons8.com/color/48/xml-file.png" alt="xml-file"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+5} onClick={this.pack5} >
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
                                <div className={randomId+6} onClick={this.pack6} >
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
                                <div className={randomId+7} onClick={this.pack7} >
                                <span className='pr-head'>Python Voice Assistant</span>
                                    <img src='https://tse3.mm.bing.net/th?id=OIP.lpU8sQbAXs-ova7EVVrtfwHaFj&pid=ImgDet&w=768&h=576&rs=1' className='pr-img'/>
                                    <div className='pr-badge'>
                                        <badge className='badge'>
                                        <img width="48" height="48" src="https://img.icons8.com/fluency/48/python.png" alt="python"/>
                                        </badge>
                                    </div>
                                </div>
                                <div className={randomId+8} onClick={this.pack8} >
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
                                <div className={randomId+9} onClick={this.pack9} >
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
                                <div className={randomId+10} onClick={this.pack10} >
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
                                <div className={randomId+11} onClick={this.pack11} >
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
                                <div className={randomId+12} onClick={this.pack12} >
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
                                    <button className='tryout' id='tryout' ><Link to="/downloads">Try it out</Link></button>
                                    </span>
                                    
                                </div>
                                
                            </div>

                            <div className="Project-mini content-my content-mz" id='product-i'>
                                <div className={randomId+13}>
                                
                                    <img className='pro-img' src='https://i.pinimg.com/originals/61/54/80/6154808ef736363c6a7b682cd8f06ec5.png'/>
                                    <span className='pr-body'>
                                        <span className='pr-head'>Fitness Pro</span><br />&nbsp;<br />
                                        Fintess Pro is a fitness home workout Application which shedules best workout for you according to your fitness<br />&nbsp;<br />&nbsp;<br />
                                    <span className='free-tag'><img width="24" height="24" src="https://img.icons8.com/external-those-icons-fill-those-icons/24/external-free-shopping-those-icons-fill-those-icons.png" alt="external-free-shopping-those-icons-fill-those-icons"/>FREE</span><br />&nbsp;<br />
                                    <button className='tryout' id='tryout'><Link to="/downloads">Try it out</Link></button>
                                    </span>
                                    
                                </div>
                                
                            </div>
                    </header>
                </div>
                <Outlet />
                <script async type="text/javascript" defer src="./appduty.js"></script>
        </div>
        );
    }
}
 
export default Counter;