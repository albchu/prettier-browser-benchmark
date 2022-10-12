export default `
@charset "UTF-8";
body, html{margin: 0;
font-family: arial;
height: 100vh;
background: #ccc;
}

*, *:before, *:after{box-sizing: border-box;
}

.nav-mobile{position: fixed;
top: 0;
left: 0;
width: 100%;
background: #181818;
color: #FFF;
padding: 0;
margin: 0;
cursor: auto;
font-size: 18px;
list-style-type: none;
z-index: 999999;
box-shadow: 0 5px 5px -5px #333;
}
.nav-mobile:after{content: "";
display: table;
clear: both;
}
.nav-mobile svg{height: 45px;
width: 65px;
padding: 9px;
}
.nav-mobile svg path{fill: #fff;
}
.nav-mobile svg.icon-close{display: none;
padding: 15px;
}
.nav-mobile li{width: 100%;
height: 45px;
line-height: 46px;
text-align: center;
float: left;
}
.nav-mobile li a{display: block;
color: #333;
width: 100%;
height: 100%;
text-decoration: none;
}
.nav-mobile .menu-button{position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
margin: 0;
cursor: pointer;
display: block;
}
.nav-mobile .menu-button:after{opacity: 0;
top: 45px;
content: "";
width: 100vw;
display: block;
position: fixed;
height: 100vh;
background: rgba(0, 0, 0, 0.5);
content: "";
z-index: 9;
pointer-events: none;
transition: opacity 0.2s cubic-bezier(0, 0, 0.3, 1);
transition-delay: 0.1s;
}
.nav-mobile #menu-toggle{display: none;
}
.nav-mobile #menu-toggle.active ~ .menu-button .icon-close, .nav-mobile #menu-toggle:checked ~ .menu-button .icon-close{display: block;
}
.nav-mobile #menu-toggle.active ~ .menu-button .icon-open, .nav-mobile #menu-toggle:checked ~ .menu-button .icon-open{display: none;
}
.nav-mobile #menu-toggle.active ~ .menu-button:after, .nav-mobile #menu-toggle:checked ~ .menu-button:after{opacity: 1;
pointer-events: auto;
transition: opacity 0.3s cubic-bezier(0, 0, 0.3, 1);
}
.nav-mobile #menu-toggle.active ~ .menu-sidebar, .nav-mobile #menu-toggle:checked ~ .menu-sidebar{transform: translateX(0);
transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
}
.nav-mobile .menu-container{width: 65px;
float: left;
cursor: pointer;
position: absolute;
}
.nav-mobile .menu-container .menu-sidebar{box-shadow: 5px 0 5px -5px #333;
display: block;
width: 65vw;
bottom: 0;
background: white;
color: #333;
position: fixed;
z-index: 9999999;
transform: translateX(-405px);
transition: transform 0.3s cubic-bezier(0, 0, 0.3, 1);
top: 45px;
list-style-type: none;
padding: 0;
max-width: 400px;
}
.nav-mobile .menu-container .menu-sidebar .arrow{position: absolute;
line-height: 50px;
font-size: 32px;
color: #555;
top: 0;
z-index: 0;
}
.nav-mobile .menu-container .menu-sidebar .arrow.left{left: 25px;
}
.nav-mobile .menu-container .menu-sidebar .arrow.right{right: 25px;
}
.nav-mobile .menu-container .menu-sidebar li{height: 55px;
line-height: 55px;
font-size: 16px;
text-align: left;
position: relative;
border-bottom: 1px solid rgba(0, 0, 0, 0.1);
padding-left: 20px;
}
.nav-mobile .menu-container .menu-sidebar li:hover{background: #eee;
}
.nav-mobile .menu-container .menu-sidebar li .menu-sub{position: fixed;
top: 0;
right: 0;
bottom: 0;
width: 0;
overflow: hidden;
background: white;
visibility: hidden;
transition: all 0.3s cubic-bezier(0, 0, 0.3, 1);
border-left: 1px solid #ccc;
list-style-type: none;
padding: 0;
margin: 0;
z-index: 2;
max-width: 400px;
}
.nav-mobile .menu-container .menu-sidebar li .menu-sub li{overflow: hidden;
}
.nav-mobile .menu-container .menu-sidebar li .menu-sub .menu-sub-title{padding-left: 50px;
}
.nav-mobile .menu-container .menu-sidebar li .submenu-label{cursor: pointer;
width: 100%;
height: 100%;
display: block;
}
.nav-mobile .menu-container .menu-sidebar li .submenu-toggle{display: none;
}
.nav-mobile .menu-container .menu-sidebar li .submenu-toggle.active ~ .menu-sub, .nav-mobile .menu-container .menu-sidebar li .submenu-toggle:checked ~ .menu-sub{width: 65vw;
visibility: visible;
z-index: 1;
transition: width 0.35s cubic-bezier(0, 0, 0.3, 1);
}

.carousel-container{list-style-type: none;
padding: 0;
margin: 30px auto;
width: 550px;
height: 338px;
border-radius: 5px;
position: relative;
z-index: 0;
}
.carousel-container .arrow{cursor: pointer;
background: rgba(0, 0, 0, 0.5);
color: rgba(255, 255, 255, 0.5);
display: block;
width: 50px;
font-size: 62px;
text-align: center;
bottom: 0;
top: 0;
line-height: 330px;
position: absolute;
z-index: 9999;
padding-bottom: 4px;
padding-top: 2px;
border-radius: 2px;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
.carousel-container .arrow.next{left: 0px;
background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
}
.carousel-container .arrow.back{right: 0px;
background: linear-gradient(to left, rgba(0, 0, 0, 0.5), transparent);
}
.carousel-container .arrow:hover{color: white;
}
.carousel-container li:nth-child(1) > .dot{margin-left: 44.6%;
}
.carousel-container .carousel-content{height: 0;
overflow: hidden;
line-height: 22px;
background: #000;
position: absolute;
top: 0px;
border-radius: 5px;
box-shadow: 0 5px 5px -5px #333;
list-style-type: none;
padding: 0;
}
.carousel-container .carousel-content img{opacity: 0;
padding: 0;
position: absolute;
left: 0;
top: 0;
width: 100%;
border-radius: 5px;
transition: 0.2s ease-in;
}
.carousel-container .dot{float: left;
cursor: pointer;
opacity: 1;
width: 12px;
height: 12px;
background: rgba(255, 255, 255, 0.5);
position: relative;
margin-top: 56%;
border-radius: 50%;
z-index: 999;
margin-right: 8px;
display: block;
}
.carousel-container .dot:hover{background: #fff;
}
.carousel-container .carousel-toggle{display: none;
}
.carousel-container .carousel-toggle:checked + .dot, .carousel-container .carousel-toggle.active + .dot{background: #fff;
}
.carousel-container .carousel-toggle:checked ~ .carousel-content, .carousel-container .carousel-toggle.active ~ .carousel-content{height: 100%;
width: 100%;
}
.carousel-container .carousel-toggle:checked ~ .carousel-content img, .carousel-container .carousel-toggle.active ~ .carousel-content img{opacity: 1;
}

.tab-container{list-style-type: none;
padding: 0;
margin: 60px auto;
max-width: 350px;
position: relative;
background: #fff;
}
.tab-container:after{content: "";
display: table;
clear: both;
}
.tab-container ul{list-style-type: none;
padding: 0;
}
.tab-container .arrows{display: block;
width: 60px;
font-size: 32px;
bottom: 10px;
right: 0px;
position: absolute;
}
.tab-container .arrows label{display: inline-block;
cursor: pointer;
color: #aaa;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
margin-left: 5px;
}
.tab-container .arrows label:hover{color: #333;
}
.tab-container .tab-content-container{border-bottom-left-radius: 4px;
border-bottom-right-radius: 4px;
height: 0;
opacity: 0;
overflow: hidden;
line-height: 22px;
background: #fff;
position: absolute;
top: 42px;
padding: 0px 40px 0 20px;
border: 2px solid #181818;
border-top: 0;
box-shadow: 0 5px 5px -5px #333;
}
.tab-container .tab-content-container .tab-content{opacity: 0;
padding: 15px 0;
min-height: 185px;
transition: opacity 0.1s ease-in;
}
.tab-container .tab{outline: 0;
float: left;
cursor: pointer;
opacity: 1;
width: 25%;
line-height: 40px;
display: block;
margin: 0;
position: relative;
background: #181818;
color: #fff;
text-align: center;
border-top: 2px solid #181818;
border-right: 2px solid #181818;
}
.tab-container .tab.l-b{border-left: 2px solid #181818;
}
.tab-container .tab:hover{background: #000000;
}
.tab-container .tab-toggle{display: none;
}
.tab-container .tab-toggle.active + .tab, .tab-container .tab-toggle:checked + .tab{background: #fff;
color: #333;
}
.tab-container .tab-toggle.active ~ .tab-content-container, .tab-container .tab-toggle:checked ~ .tab-content-container{height: auto;
opacity: 1;
}
.tab-container .tab-toggle.active ~ .tab-content-container .tab-content, .tab-container .tab-toggle:checked ~ .tab-content-container .tab-content{opacity: 1;
}
.tab-container .tab-toggle.active ~ .tab-content-container .tab-content label, .tab-container .tab-toggle:checked ~ .tab-content-container .tab-content label{opacity: 1;
}

.accordion-container{width: 300px;
margin: 60px auto;
border: 2px solid #181818;
border-radius: 4px;
box-shadow: 0 5px 5px -5px #333;
list-style-type: none;
padding: 0;
}

`;
