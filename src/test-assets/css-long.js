export default `
body, html{ margin: 0; font-family: arial; height: 100vh; background:  #ccc; }*, *:before, *:after{ box-sizing: border-box; }
.nav-mobile{  position: fixed;
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
  &:after{ content: ""; display: table; clear: both; }  svg{height: 45px;
width: 65px;
padding: 9px;
path{ fill: #fff; }&.icon-close{   display: none; 
  padding: 15px;
}
  }
  li{width: 100%;
height: 45px;
line-height: 46px;
text-align: center;
float: left;
a{  display: block;
  color: #333;
  width: 100%;
  height: 100%; 
  text-decoration: none;   
}  
  }
  .menu-button{position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
margin: 0;
cursor: pointer;
display: block;
&:after{  opacity: 0;
  top: 45px;
  content: "";
  width: 100vw;
  display: block;
  position: fixed;
  height: 100vh;
  background: rgba(0,0,0,0.5);  
  content: "";
  z-index: 9;
  pointer-events: none;
  transition: opacity 0.2s cubic-bezier(0,0,0.3,1);  
  transition-delay: 0.1s;  
}
  }  
  #menu-toggle{display: none;
&.active ~ .menu-button,
&:checked ~ .menu-button{  .icon-close{ display: block; }  .icon-open{ display: none; }  &:after{opacity: 1;
pointer-events: auto;
transition: opacity 0.3s cubic-bezier(0,0,0.3,1);
  }
}   
&.active ~ .menu-sidebar, 
&:checked ~ .menu-sidebar{  transform: translateX(0);
  transition: transform 0.3s cubic-bezier(0,0,0.3,1);
}
  }
  .menu-container{width: 65px;
float: left;
cursor: pointer;
position: absolute;
.menu-sidebar{   box-shadow: 5px 0 5px -5px #333;
  display: block;
  width: 65vw;
  bottom: 0;
  background: white;
  color: #333;
  position: fixed;
  z-index: 9999999;
  transform: translateX(-405px);
  transition: transform 0.3s cubic-bezier(0,0,0.3,1);   
  top: 45px;
  list-style-type: none;
  padding: 0;
  max-width: 400px;
  .arrow{position: absolute;
line-height: 50px;
font-size: 32px;
color: #555;
top: 0;
z-index: 0;
&.left{ left: 25px; }&.right{ right: 25px; }  }  
  li{height: 55px;
line-height: 55px;
font-size: 16px; 
text-align: left;
position: relative;
border-bottom: 1px solid rgba(0,0,0,0.1);
padding-left: 20px;
&:hover{ background: #eee; }  .menu-sub{  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 0;
  overflow: hidden;
  background: white;
  visibility: hidden;
  transition: all 0.3s cubic-bezier(0,0,0.3,1);
  border-left: 1px solid #ccc;  
  list-style-type: none;
  padding: 0;
  margin: 0;
  z-index: 2;
  max-width: 400px;
  li{ overflow: hidden; }  .menu-sub-title{ padding-left: 50px; } }
.submenu-label{  cursor: pointer;
  width: 100%;
  height: 100%;
  display: block;
}
.submenu-toggle{  display: none; 
  &.active ~ .menu-sub,
  &:checked ~ .menu-sub{width: 65vw;
visibility: visible;
z-index: 1;
transition: width 0.35s cubic-bezier(0,0,0.3,1);
  }
}   
  }   
}
  }
}


.carousel-container{  list-style-type: none;
  padding: 0;
  margin: 30px auto;
  width: 550px;
  height: 338px;
  border-radius: 5px;
  position: relative;
  z-index: 0;
  .arrow{ cursor: pointer; 
background: rgba(0,0,0,0.5);
color: rgba(255,255,255,0.5); 
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
&.next{   left: 0px; 
  background: linear-gradient(to right, rgba(0,0,0,0.5), transparent)
}
&.back{   right: 0px; 
  background: linear-gradient(to left, rgba(0,0,0,0.5), transparent)  
}
&:hover{ color: rgba(255,255,255,1); }  }
  li:nth-child(1) > .dot{ margin-left: 44.6% }  .carousel-content{ height: 0; 
overflow: hidden; 
line-height: 22px;
background: #000;
position: absolute;
top: 0px;
border-radius: 5px;
box-shadow: 0 5px 5px -5px #333; 
list-style-type: none;
padding: 0; 
img{  opacity: 0;
  padding: 0;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  border-radius: 5px;
  transition: 0.2s ease-in;
}
  }
  .dot{float: left;
cursor: pointer;
opacity: 1;
width: 12px;
height: 12px;
background: rgba(255,255,255,0.5);
position: relative;
margin-top: 56%;
border-radius: 50%;
z-index: 999;
margin-right: 8px;
display: block;  
&:hover{ background: #fff; }    }  
  .carousel-toggle{display: none;
&:checked + .dot,
&.active + .dot{ background: #fff; }&:checked ~ .carousel-content,
&.active ~ .carousel-content{   height: 100%;
  width: 100%;
  img{ opacity: 1; }}
  }
}


.tab-container{  list-style-type: none;
  padding: 0;
  margin: 60px auto;
  max-width: 350px;
  position: relative;
  background: #fff;
  &:after{ content: ""; display: table; clear: both; }  ul{ list-style-type: none; padding: 0; }  .arrows{ display: block;
width: 60px;
font-size: 32px;
bottom: 10px;
right: 0px;
position: absolute;
label{   display: inline-block; 
  cursor: pointer; 
  color: #aaa; 
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none; 
  user-select: none;  
  margin-left: 5px;  
  &:hover{ color: #333; }}
  }
  .tab-content-container{ border-bottom-left-radius: 4px;
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
.tab-content{  opacity: 0;
  padding: 15px 0;
  min-height: 185px;  
  transition: opacity 0.1s ease-in;
}
  }
  .tab{outline: 0;
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
&.l-b{ border-left: 2px solid #181818; }&:hover{ background: #000000; }    }
  .tab-toggle{display: none;
&.active + .tab,
&:checked + .tab{   background: #fff; 
  color: #333; 
}
&.active ~ .tab-content-container,
&:checked ~ .tab-content-container{   height: auto;
  opacity: 1;
  .tab-content{ opacity: 1; 
label{ opacity: 1; }  }
}
  }
}


.accordion-container{   width: 300px; 
  margin: 60px auto; 
  border: 2px solid #181818; 
  border-radius: 4px;
  box-shadow: 0 5px 5px -5px #333;
  list-style-type: none; 
  padding: 0;  
  ul{ list-style-type: none; padding-left: 0; }    .accordion-category{position: relative;
background: #fff;
.accordion-title{  padding-left: 20px;
  height: 40px;
  font-size: 18px;
  line-height: 40px;
  background: #181818;
  color: #fff;
  position: relative;
  display: block;
  cursor: pointer;
  &:hover{background: #000000;
  }
}
.accordion-items{  max-height: 0;
  height: 0;
  margin: 0;
  overflow: hidden;
  transition: 0.6s ease-in;  
  li{ padding: 5px 20px; 
&:first-child{ padding-top: 10px }&:last-child{ padding-bottom: 10px; }  }
}
input{  display: none;
  &.active ~ .accordion-items,
  &:checked ~ .accordion-items{height: auto;
max-height: 900px;
-webkit-transform: translate3d(0,0,0);
  }
  &.active ~ .accordion-title,
  &:checked ~ .accordion-title,
  &:hover ~ .accordion-title{  &:after{  content: "203A";
  position: absolute;
  width: 40px;
  font-size: 32px;
  right: 0;
  padding-left: 15px;
  top: 0;
  bottom: 0;
  transform: rotate(90deg);
}
  }
}
  }
}

.modal-container{  margin: 60px auto;
  padding-top: 0px;
  position: relative;
  width: 160px;
  .modal-btn{display: block;
margin: 0 auto;  
color: #fff;  
width: 160px;
height: 50px;
line-height: 50px;
background: #181818;
font-size: 22px;   
border: 0;
border-radius: 3px;  
cursor: pointer;
text-align: center;
box-shadow: 0 5px 5px -5px #333;  
transition: background 0.3s ease-in;
&:hover{ background: #000000; }  }
  .modal-content, 
  .modal-backdrop{height: 0; 
width: 0; 
opacity: 0;
visibility: hidden;
overflow: hidden; 
cursor: pointer;
transition: opacity 0.2s ease-in; 
  }
  .modal-close{color: #aaa;
position: absolute;
right: 5px;
top: 5px;
padding-top: 3px;
background: #fff;
font-size: 16px;
width: 25px;
height: 25px;
font-weight: bold;
text-align: center;
cursor: pointer;
&:hover{ color: #333; }  }  
  .modal-content-btn{position: absolute;
text-align: center;
cursor: pointer;
bottom: 20px;
right: 30px;
background: #181818;
color: #fff;
width: 50px;
border-radius: 2px;
font-size: 14px;
height: 32px;
padding-top: 9px;
font-weight: normal;
&:hover{ color: #fff; background: #000000; }  }
  #modal-toggle{display: none;  
&.active ~ .modal-backdrop,
&:checked ~ .modal-backdrop{  background-color: rgba(0, 0, 0, 0.6);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  visibility: visible;
  opacity: 1;  
  transition: opacity 0.2s ease-in; 
}
&.active ~ .modal-content,
&:checked ~ .modal-content{  opacity: 1;
  background-color: #fff;
  max-width: 400px;
  width: 400px;
  height: 280px;
  padding: 10px 30px;
  position: fixed;
  left: calc(50% - 200px);
  top: 12%;
  border-radius: 4px;
  z-index: 999;
  pointer-events: auto;
  cursor: auto;
  visibility: visible;  
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);  
  @media (max-width: 400px){ left: 0; }   }  
  }
}

.tooltip-container{  margin: 60px auto;
  padding-top: 0px;
  position: relative;
  width: 160px;
  .tooltip-btn{display: block;
margin: 0 auto;  
color: #fff;  
width: 160px;
height: 50px;
line-height: 50px;
background: #181818;
font-size: 22px;   
border: 0;
border-radius: 3px;  
cursor: pointer;
text-align: center;
box-shadow: 0 5px 5px -5px #333;  
transition: background 0.3s ease-in;
&:hover{ background: #000000; }&.tooltip-toggle:hover ~ .tooltip-content{  opacity: 1;
  background-color: #fff;
  max-width: 400px;
  width: 200px;
  min-height: 70px;
  padding: 0px 20px;
  position: absolute;
  left: calc(50% - 100px);
  top: 145%;
  border-radius: 4px;
  z-index: 999;
  pointer-events: auto;
  cursor: auto;
  visibility: visible;  
  overflow: visible;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);  
  @media (max-width: 400px){ left: 0; };  &:before{content: "";
width: 0;
height: 0;
border-style: solid;
border-width: 0 10px 10px 10px;
border-color: transparent transparent #ffffff transparent;  
position: absolute;
top: -10px;
left: 30px;
  }
}
  }
  .tooltip-content, 
  .tooltip-backdrop{height: 0; 
width: 0; 
opacity: 0;
visibility: hidden;
overflow: hidden; 
transition: opacity 0.2s ease-in; 
  }
  #tooltip-toggle{display: none;  
&.active ~ .tooltip-backdrop,
&:checked ~ .tooltip-backdrop{  background-color: transparent;
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9;
  visibility: visible;
  opacity: 1;  
  transition: opacity 0.2s ease-in; 
}
&.active ~ .tooltip-content,
&:checked ~ .tooltip-content{  opacity: 1;
  background-color: #fff;
  max-width: 400px;
  width: 200px;
  min-height: 70px;
  padding: 0px 20px;
  position: absolute;
  left: calc(50% - 100px);
  top: 145%;
  border-radius: 4px;
  z-index: 999;
  pointer-events: auto;
  visibility: visible;  
  overflow: visible;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.6);  
  @media (max-width: 400px){ left: 0; };  &:before{content: "";
width: 0;
height: 0;
border-style: solid;
border-width: 0 10px 10px 10px;
border-color: transparent transparent #ffffff transparent;  
position: absolute;
top: -10px;
left: 30px;
  }
}  
  }
}


.star-container{  text-align: center;
  font-size: 0;
  label{display: inline-block;
cursor: pointer;
&:after{   content: "2605";
  font-size: 46px;
  color: #999;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
}
&:hover:after{ color: #F89406; }   }   
  input{ display: none; }   #one:checked ~ label[for=one]:after,
  #two:checked ~ label[for=two]:after,
  #three:checked ~ label[for=three]:after,
  #four:checked ~ label[for=four]:after,
  #five:checked ~ label[for=five]:after,{ color: #F89406; }  #two:checked ~ label[for=one]:after{ color: #F89406; }  #three:checked{& ~ label[for=one]:after,
& ~ label[for=two]:after{ color: #F89406; }  }
  #four:checked{& ~ label[for=one]:after,
& ~ label[for=two]:after,
& ~ label[for=three]:after{ color: #F89406; }  }
  #five:checked{& ~ label[for=one]:after,
& ~ label[for=two]:after,
& ~ label[for=three]:after, 
& ~ label[for=four]:after{ color: #F89406; }  }   
}


.readmo{  width: 400px;
  border: 2px solid #181818;
  margin: 30px auto;
  padding: 0px 0 30px;
  background: white;
  position: relative;
  p{ padding: 0px 10px 0px;
margin-bottom: 10px;
max-height: 50px;
overflow: hidden;
transition: max-height 0.1s ease-in;
  }
  label{display: block;
cursor: pointer;
text-align: center;
padding: 0px 0 0px;
margin: 0px 0 0 0;
position: absolute;
width: 100%;
bottom: 0px;
background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 5%, rgba(255,255,255,0.94) 95%, rgba(255,255,255,1) 100%); /* w3c */

&:after{  content: "203A";
  color: #999;
  position: relative;
  width: 100%;
  font-size: 32px;
  padding: 0;
  display: block;
  transform: rotate(90deg);
  
}
&:hover:after{ color: #333; }  }  
  input[type=checkbox]{display: none;
&:checked + label:after{  transform: rotate(270deg);
}
&:checked ~ p{  max-height: 200px;
  transition: max-height 0.1s ease-in;
}
  }
}


.step-container{  width: 400px;
  margin: 30px auto;
  min-height: 200px;
  position: relative;
  &:after{ content: ""; display: table; clear: both; }  .step-content{display: none;
border: 2px solid #181818;
border-radius: 2px;
background: #fff;
min-height: 150px;  
position: absolute;
top: 70px;
.text{ padding: 15px; }    }
  .step-dot{float: left;
width: 33.333%;
text-align: center;
padding-top: 40px;
position: relative;
&:after{  content: "";
  width: 30px;
  height: 30px;
  background: #fff;
  color: #666;
  display: block;
  border-radius: 50%;
  border: 2px solid #219150;
  padding-top: 5px;
  position: absolute;
  top: 0px;
  left: 41%;
  z-index: 99;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);  
  transition: 0.1s ease-in;
}
&.one:after{ content: "1"; }&.two:after{ content: "2"; }&.three:after{ content: "3" }&.one:before{ display: none; }  &:before{  content: "";
  width: 100%;
  height: 4px;
  background: #999;
  display: block;
  position: absolute;
  top: 12px;
  left: -41%;
  box-shadow: 0px 1px 1px 0 rgba(0, 0, 0, 0.3);
  transition: 0.1s ease-in;
}
  }
  label{cursor: pointer;
padding: 10px 0;
display: block;
width: 100px;
float: right;
user-select: none;
-webkit-user-select: none;
text-align: center;
background: #181818;
color: #fff;
margin-left: 15px;
border-bottom-left-radius: 2px;
&:hover{ background: #000000; }  }
  input[name='toggler']{ display: none; 
&:checked + .step-dot + .step-content{ display: block; } &:checked + .step-dot:after{ background: #219150; color: #fff; }&:checked ~ input:checked + .step-dot:before{ background: #219150; }&:checked ~ input:not(:checked) + .step-dot{  color: #888;
  &:after{ border-color: #888; color: #888; }}
  }
}

*, *:before, *:after{box-sizing: border-box;
  }
  
  html{font-size: 18px;
  }
  
  body{font-family: "Open Sans", sans-serif;
font-size: 1em;
line-height: 1.6;
background: #dbdbdb;
  }
  body > div{position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
  }
  
  label{transform: scale(1.5);
display: block;
width: 160px;
background: #CCC;
height: 80px;
border-radius: 40px;
background: linear-gradient(to bottom, #9e9e9e 30%, #f4f4f4);
box-shadow: 0 2px 0 0 #fff, 0 -2px 0 0 #969494;
position: relative;
-webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  label input{display: none;
  }
  label div{display: block;
width: 120px;
height: 50px;
position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
background: linear-gradient(to bottom, #8b8c8e 20%, #f4f4f4);
border-radius: 25px;
  }
  label div:after{content: "";
position: absolute;
display: block;
height: 46px;
width: 116px;
left: 2px;
top: 2px;
border-radius: 23px;
background: #828080;
box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.8);
transition: 0.2s;
  }
  label i{display: block;
width: 60px;
height: 60px;
position: absolute;
background: linear-gradient(to top, #9e9e9e 20%, #f4f4f4);
border-radius: 50%;
box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.7);
top: 10px;
left: 15px;
transition: 0.25s;
  }
  label i:after{content: "";
position: absolute;
display: block;
width: 52px;
height: 52px;
left: 4px;
top: 4px;
border-radius: 50%;
background: #d5d4d4;
z-index: 1;
  }
  label input:checked ~ i{top: 10px;
left: 86px;
  }
  label input:checked + div:after{background: #f7931e;
box-shadow: inset 0 0 30px 0 rgba(0, 0, 0, 0.6);
  }
  label input:checked + div > .off{color: transparent;
text-shadow: 0 1px 0 rgba(255, 255, 255, 0);
  }
  label input:checked + div > .on{color: #c6631d;
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.3);
  }
  label:after{content: "";
position: absolute;
display: block;
width: 164px;
height: 84px;
border-radius: 42px;
background: red;
top: -2px;
left: -2px;
z-index: -1;
background: linear-gradient(to bottom, #969494, #fff);
  }
  label:hover{cursor: pointer;
  }
  label:focus, label:active{outline: 0;
  }
  
  .on, .off{text-transform: uppercase;
position: absolute;
left: 17px;
top: 50%;
transform: translateY(-50%);
font-size: 1.2em;
font-weight: 600;
z-index: 2;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
letter-spacing: 1px;
transition: 0.25s;
  }
  
  .on{color: transparent;
text-shadow: 0 1px 0 rgba(255, 255, 255, 0);
  }
  
  .off{left: initial;
right: 17px;
color: #444;
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.2);
  }

  body{margin: 0;
  }
  h1{padding: 0;
margin: 0;
color: white;
font-weight: lighter;
font-family: 'Open sans', sans-serif;
left: 15%;
top: 50px;
font-size: 2.5em;
position: absolute;
  }
  h2{font-family: 'open sans', sans-serif;
font-weight: lighter;
color: #fff;
opacity: 0.5;
position: absolute;
left: 15%;
top: 90px;
  }
  header{position: relative;
width: 100%;
height: 200px;
background-color: #3f51b5;
  }
  header .btn-multi{position: absolute;
z-index: 999;
right: 15%;
bottom: -54px;
  }
  .btn{display: inline-flex;
font-family: 'Roboto', sans-serif;
text-decoration: none;
justify-content: center;
align-items: center;
text-align: center;
cursor: pointer;
white-space: nowrap;
padding: 8px 20px;
font-size: 14px;
background-color: #E91E63;
border-radius: 2px;
color: white;
text-transform: uppercase;
border: none;
transition: all 0.2s ease-in;
background-position: 50%;
outline: none !important;
  }
  .btn.btn-circle{height: 50px;
width: 50px;
border-radius: 50%;
padding: 0 !important;
font-size: 18px;
  }
  .btn-multi input{display: none;
  }
  .btn-multi input:not(:checked) ~ label{transform: rotate(0);
  }
  .btn-multi input:not(:checked) ~ label .btn{border-radius: 0;
height: 30px;
width: 30px;
box-shadow: none;
  }
  .btn-multi input:not(:checked) ~ label .btn:first-child{border-top-left-radius: 100%;
transform: translate(25px, 25px);
  }
  .btn-multi input:not(:checked) ~ label .btn:nth-child(2){border-top-right-radius: 100%;
transform: translate(55px, 25px);
  }
  .btn-multi input:not(:checked) ~ label .btn:nth-child(3){border-bottom-left-radius: 100%;
transform: translate(25px, 55px);
  }
  .btn-multi input:not(:checked) ~ label .btn:nth-child(4){border-bottom-right-radius: 100%;
transform: translate(55px, 55px);
  }
  .btn-multi input:not(:checked) ~ label .btn .icon{opacity: 0;
  }
  .btn-multi input:not(:checked) ~ label > .icon{opacity: 1;
cursor: pointer;
  }
  .btn-multi label{position: relative;
height: 110px;
width: 110px;
display: block;
transform: rotate(45deg);
transition: all 0.2s ease-in;
cursor: default;
border-radius: 30px;
  }
  .btn-multi label .btn{position: absolute;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  }
  .btn-multi label .btn:nth-child(2){transform: translate(60px, 0);
  }
  .btn-multi label .btn:nth-child(3){transform: translate(0, 60px);
  }
  .btn-multi label .btn:nth-child(4){transform: translate(60px, 60px);
  }
  .btn-multi label .btn .icon{opacity: 1;
transition: all 0.15s ease-in-out;
transform: rotate(-45deg);
  }
  .btn-multi label > .icon{color: white;
position: absolute;
border-radius: 50%;
display: flex;
font-size: 30px;
align-items: center;
justify-content: center;
height: 60px;
width: 60px;
top: 25px;
left: 25px;
opacity: 0;
transition: all 0.25s ease-in-out;
  }
  .btn-multi label .icon{-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
  }
  main{position: absolute;
left: 15%;
right: 15%;
top: 250px;
margin-bottom: 50px;
font-family: 'open sans', sans-serif;
font-weight: lighter;
  }
  body {
    margin: 0;
    display: flex;
    height: 100vh;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    background: black;
  }
  
  .mommy {
    width: 500px;
    height: 500px;
    position: relative;
    perspective: 800px;
  }
  
  .daddy {
    width: 500px;
    height: 500px;
    transform-style: preserve-3d;
    animation: rotate 25s infinite linear;
  }
  
  span {
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 50%;
    perspective: 800px;
    transform-style: preserve-3d;
    width: 0;
    height: 0;
  }
  span:before {
    content: "";
    width: 4px;
    height: 4px;
    display: inline-block;
    position: absolute;
    top: calc(50% - 2px);
    left: calc(50% - 2px);
    background: currentColor;
    color: inherit;
    border-radius: 50%;
    animation: invertRotate 25s infinite linear, scale 2s infinite linear;
    box-shadow: 0 0 10px currentColor;
  }
  
  .mommy span:nth-child(1) {
    transform: translate3d(2.41129px, 1.01948px, 249.98629px);
    color: #ff0500;
  }
  .mommy span:nth-child(1):before {
    animation-delay: 0s, -0.00667s;
  }
  
  .mommy span:nth-child(2) {
    transform: translate3d(3.64768px, 3.75579px, 249.94517px);
    color: #ff0a00;
  }
  .mommy span:nth-child(2):before {
    animation-delay: 0s, -0.01333s;
  }
  
  .mommy span:nth-child(3) {
    transform: translate3d(2.84548px, 7.31901px, 249.87664px);
    color: #ff0f00;
  }
  .mommy span:nth-child(3):before {
    animation-delay: 0s, -0.02s;
  }
  
  .mommy span:nth-child(4) {
    transform: translate3d(-0.30569px, 10.46445px, 249.78071px);
    color: #ff1400;
  }
  .mommy span:nth-child(4):before {
    animation-delay: 0s, -0.02667s;
  }
  
  .mommy span:nth-child(5) {
    transform: translate3d(-5.44486px, 11.89724px, 249.65738px);
    color: #ff1a00;
  }
  .mommy span:nth-child(5):before {
    animation-delay: 0s, -0.03333s;
  }
  
  .mommy span:nth-child(6) {
    transform: translate3d(-11.57533px, 10.60317px, 249.50668px);
    color: #ff1f00;
  }
  .mommy span:nth-child(6):before {
    animation-delay: 0s, -0.04s;
  }
  
  .mommy span:nth-child(7) {
    transform: translate3d(-17.25167px, 6.13348px, 249.32862px);
    color: #ff2400;
  }
  .mommy span:nth-child(7):before {
    animation-delay: 0s, -0.04667s;
  }
  
  .mommy span:nth-child(8) {
    transform: translate3d(-20.88379px, -1.22116px, 249.12321px);
    color: #ff2900;
  }
  .mommy span:nth-child(8):before {
    animation-delay: 0s, -0.05333s;
  }
  
  .mommy span:nth-child(9) {
    transform: translate3d(-21.09811px, -10.41121px, 248.89049px);
    color: #ff2e00;
  }
  .mommy span:nth-child(9):before {
    animation-delay: 0s, -0.06s;
  }
  
  .mommy span:nth-child(10) {
    transform: translate3d(-17.08109px, -19.77685px, 248.63047px);
    color: #ff3300;
  }
  .mommy span:nth-child(10):before {
    animation-delay: 0s, -0.06667s;
  }
  
  .mommy span:nth-child(11) {
    transform: translate3d(-8.83099px, -27.34361px, 248.34319px);
    color: #ff3800;
  }
  .mommy span:nth-child(11):before {
    animation-delay: 0s, -0.07333s;
  }
  
  .mommy span:nth-child(12) {
    transform: translate3d(2.74163px, -31.21313px, 248.02868px);
    color: #ff3d00;
  }
  .mommy span:nth-child(12):before {
    animation-delay: 0s, -0.08s;
  }
  
  .mommy span:nth-child(13) {
    transform: translate3d(15.89625px, -29.97464px, 247.68696px);
    color: #ff4200;
  }
  .mommy span:nth-child(13):before {
    animation-delay: 0s, -0.08667s;
  }
  
  .mommy span:nth-child(14) {
    transform: translate3d(28.32425px, -23.05434px, 247.31808px);
    color: #ff4700;
  }
  .mommy span:nth-child(14):before {
    animation-delay: 0s, -0.09333s;
  }
  
  .mommy span:nth-child(15) {
    transform: translate3d(37.55093px, -10.92755px, 246.92209px);
    color: #ff4d00;
  }
  .mommy span:nth-child(15):before {
    animation-delay: 0s, -0.1s;
  }
  
  .mommy span:nth-child(16) {
    transform: translate3d(41.40805px, 4.85919px, 246.49901px);
    color: #ff5200;
  }
  .mommy span:nth-child(16):before {
    animation-delay: 0s, -0.10667s;
  }
  
  .mommy span:nth-child(17) {
    transform: translate3d(38.48926px, 21.87498px, 246.0489px);
    color: #ff5700;
  }
  .mommy span:nth-child(17):before {
    animation-delay: 0s, -0.11333s;
  }
  
  .mommy span:nth-child(18) {
    transform: translate3d(28.49842px, 37.17963px, 245.57181px);
    color: #ff5c00;
  }
  .mommy span:nth-child(18):before {
    animation-delay: 0s, -0.12s;
  }
  
  .mommy span:nth-child(19) {
    transform: translate3d(12.41584px, 47.82911px, 245.06779px);
    color: #ff6100;
  }
  .mommy span:nth-child(19):before {
    animation-delay: 0s, -0.12667s;
  }
  
  .mommy span:nth-child(20) {
    transform: translate3d(-7.56279px, 51.42479px, 244.5369px);
    color: #ff6600;
  }
  .mommy span:nth-child(20):before {
    animation-delay: 0s, -0.13333s;
  }
  
  .mommy span:nth-child(21) {
    transform: translate3d(-28.31983px, 46.60624px, 243.97919px);
    color: #ff6b00;
  }
  .mommy span:nth-child(21):before {
    animation-delay: 0s, -0.14s;
  }
  
  .mommy span:nth-child(22) {
    transform: translate3d(-46.30345px, 33.39159px, 243.39473px);
    color: #ff7000;
  }
  .mommy span:nth-child(22):before {
    animation-delay: 0s, -0.14667s;
  }
  
  .mommy span:nth-child(23) {
    transform: translate3d(-58.1332px, 13.29168px, 242.78357px);
    color: #ff7500;
  }
  .mommy span:nth-child(23):before {
    animation-delay: 0s, -0.15333s;
  }
  
  .mommy span:nth-child(24) {
    transform: translate3d(-61.22048px, -10.83833px, 242.14579px);
    color: #ff7a00;
  }
  .mommy span:nth-child(24):before {
    animation-delay: 0s, -0.16s;
  }
  
  .mommy span:nth-child(25) {
    transform: translate3d(-54.29192px, -35.20076px, 241.48146px);
    color: #ff8000;
  }
  .mommy span:nth-child(25):before {
    animation-delay: 0s, -0.16667s;
  }
  
  .mommy span:nth-child(26) {
    transform: translate3d(-37.71495px, -55.65474px, 240.79064px);
    color: #ff8500;
  }
  .mommy span:nth-child(26):before {
    animation-delay: 0s, -0.17333s;
  }
  
  .mommy span:nth-child(27) {
    transform: translate3d(-13.55408px, -68.41812px, 240.07342px);
    color: #ff8a00;
  }
  .mommy span:nth-child(27):before {
    animation-delay: 0s, -0.18s;
  }
  
  .mommy span:nth-child(28) {
    transform: translate3d(14.66872px, -70.75337px, 239.32987px);
    color: #ff8f00;
  }
  .mommy span:nth-child(28):before {
    animation-delay: 0s, -0.18667s;
  }
  
  .mommy span:nth-child(29) {
    transform: translate3d(42.48545px, -61.51483px, 238.56008px);
    color: #ff9400;
  }
  .mommy span:nth-child(29):before {
    animation-delay: 0s, -0.19333s;
  }
  
  .mommy span:nth-child(30) {
    transform: translate3d(65.1913px, -41.45254px, 237.76413px);
    color: #ff9900;
  }
  .mommy span:nth-child(30):before {
    animation-delay: 0s, -0.2s;
  }
  
  .mommy span:nth-child(31) {
    transform: translate3d(78.6388px, -13.20525px, 236.9421px);
    color: #ff9e00;
  }
  .mommy span:nth-child(31):before {
    animation-delay: 0s, -0.20667s;
  }
  
  .mommy span:nth-child(32) {
    transform: translate3d(79.98305px, 19.03396px, 236.09409px);
    color: #ffa300;
  }
  .mommy span:nth-child(32):before {
    animation-delay: 0s, -0.21333s;
  }
  
  .mommy span:nth-child(33) {
    transform: translate3d(68.24586px, 50.13944px, 235.22019px);
    color: #ffa800;
  }
  .mommy span:nth-child(33):before {
    animation-delay: 0s, -0.22s;
  }
  
  .mommy span:nth-child(34) {
    transform: translate3d(44.59143px, 74.86995px, 234.3205px);
    color: #ffad00;
  }
  .mommy span:nth-child(34):before {
    animation-delay: 0s, -0.22667s;
  }
  
  .mommy span:nth-child(35) {
    transform: translate3d(12.25056px, 88.75048px, 233.39511px);
    color: #ffb300;
  }
  .mommy span:nth-child(35):before {
    animation-delay: 0s, -0.23333s;
  }
  
  .mommy span:nth-child(36) {
    transform: translate3d(-23.91129px, 88.87058px, 232.44412px);
    color: #ffb800;
  }
  .mommy span:nth-child(36):before {
    animation-delay: 0s, -0.24s;
  }
  
  .mommy span:nth-child(37) {
    transform: translate3d(-58.12632px, 74.45845px, 231.46765px);
    color: #ffbd00;
  }
  .mommy span:nth-child(37):before {
    animation-delay: 0s, -0.24667s;
  }
  
  .mommy span:nth-child(38) {
    transform: translate3d(-84.64667px, 47.12177px, 230.46579px);
    color: #ffc200;
  }
  .mommy span:nth-child(38):before {
    animation-delay: 0s, -0.25333s;
  }
  
  .mommy span:nth-child(39) {
    transform: translate3d(-98.70889px, 10.69853px, 229.43866px);
    color: #ffc700;
  }
  .mommy span:nth-child(39):before {
    animation-delay: 0s, -0.26s;
  }
  
  .mommy span:nth-child(40) {
    transform: translate3d(-97.3788px, -29.27521px, 228.38636px);
    color: #ffcc00;
  }
  .mommy span:nth-child(40):before {
    animation-delay: 0s, -0.26667s;
  }
  
  .mommy span:nth-child(41) {
    transform: translate3d(-80.12864px, -66.40789px, 227.30903px);
    color: #ffd100;
  }
  .mommy span:nth-child(41):before {
    animation-delay: 0s, -0.27333s;
  }
  
  .mommy span:nth-child(42) {
    transform: translate3d(-49.03685px, -94.47692px, 226.20676px);
    color: #ffd600;
  }
  .mommy span:nth-child(42):before {
    animation-delay: 0s, -0.28s;
  }
  
  .mommy span:nth-child(43) {
    transform: translate3d(-8.5608px, -108.47048px, 225.07969px);
    color: #ffdb00;
  }
  .mommy span:nth-child(43):before {
    animation-delay: 0s, -0.28667s;
  }
  
  .mommy span:nth-child(44) {
    transform: translate3d(35.0977px, -105.47241px, 223.92794px);
    color: #ffe000;
  }
  .mommy span:nth-child(44):before {
    animation-delay: 0s, -0.29333s;
  }
  
  .mommy span:nth-child(45) {
    transform: translate3d(74.94438px, -85.23527px, 222.75163px);
    color: #ffe600;
  }
  .mommy span:nth-child(45):before {
    animation-delay: 0s, -0.3s;
  }
  
  .mommy span:nth-child(46) {
    transform: translate3d(104.31576px, -50.33313px, 221.55089px);
    color: #ffeb00;
  }
  .mommy span:nth-child(46):before {
    animation-delay: 0s, -0.30667s;
  }
  
  .mommy span:nth-child(47) {
    transform: translate3d(117.99266px, -5.85203px, 220.32586px);
    color: #fff000;
  }
  .mommy span:nth-child(47):before {
    animation-delay: 0s, -0.31333s;
  }
  
  .mommy span:nth-child(48) {
    transform: translate3d(113.11821px, 41.34831px, 219.07667px);
    color: #fff500;
  }
  .mommy span:nth-child(48):before {
    animation-delay: 0s, -0.32s;
  }
  
  .mommy span:nth-child(49) {
    transform: translate3d(89.76004px, 83.69463px, 217.80345px);
    color: #fffa00;
  }
  .mommy span:nth-child(49):before {
    animation-delay: 0s, -0.32667s;
  }
  
  .mommy span:nth-child(50) {
    transform: translate3d(51.01026px, 114.11816px, 216.50635px);
    color: yellow;
  }
  .mommy span:nth-child(50):before {
    animation-delay: 0s, -0.33333s;
  }
  
  .mommy span:nth-child(51) {
    transform: translate3d(2.58986px, 127.234px, 215.18551px);
    color: #faff00;
  }
  .mommy span:nth-child(51):before {
    animation-delay: 0s, -0.34s;
  }
  
  .mommy span:nth-child(52) {
    transform: translate3d(-47.99434px, 120.28525px, 213.84107px);
    color: #f5ff00;
  }
  .mommy span:nth-child(52):before {
    animation-delay: 0s, -0.34667s;
  }
  
  .mommy span:nth-child(53) {
    transform: translate3d(-92.6163px, 93.68763px, 212.47317px);
    color: #f0ff00;
  }
  .mommy span:nth-child(53):before {
    animation-delay: 0s, -0.35333s;
  }
  
  .mommy span:nth-child(54) {
    transform: translate3d(-123.83919px, 51.07106px, 211.08198px);
    color: #ebff00;
  }
  .mommy span:nth-child(54):before {
    animation-delay: 0s, -0.36s;
  }
  
  .mommy span:nth-child(55) {
    transform: translate3d(-136.15442px, -1.20519px, 209.66764px);
    color: #e6ff00;
  }
  .mommy span:nth-child(55):before {
    animation-delay: 0s, -0.36667s;
  }
  
  .mommy span:nth-child(56) {
    transform: translate3d(-126.94498px, -55.00099px, 208.23031px);
    color: #e0ff00;
  }
  .mommy span:nth-child(56):before {
    animation-delay: 0s, -0.37333s;
  }
  
  .mommy span:nth-child(57) {
    transform: translate3d(-97.00574px, -101.66609px, 206.77014px);
    color: #dbff00;
  }
  .mommy span:nth-child(57):before {
    animation-delay: 0s, -0.38s;
  }
  
  .mommy span:nth-child(58) {
    transform: translate3d(-50.52153px, -133.43425px, 205.2873px);
    color: #d6ff00;
  }
  .mommy span:nth-child(58):before {
    animation-delay: 0s, -0.38667s;
  }
  
  .mommy span:nth-child(59) {
    transform: translate3d(5.50982px, -144.71544px, 203.78195px);
    color: #d1ff00;
  }
  .mommy span:nth-child(59):before {
    animation-delay: 0s, -0.39333s;
  }
  
  .mommy span:nth-child(60) {
    transform: translate3d(62.33154px, -133.0714px, 202.25425px);
    color: #ccff00;
  }
  .mommy span:nth-child(60):before {
    animation-delay: 0s, -0.4s;
  }
  
  .mommy span:nth-child(61) {
    transform: translate3d(110.79998px, -99.70517px, 200.70437px);
    color: #c7ff00;
  }
  .mommy span:nth-child(61):before {
    animation-delay: 0s, -0.40667s;
  }
  
  .mommy span:nth-child(62) {
    transform: translate3d(142.85929px, -49.37083px, 199.13248px);
    color: #c2ff00;
  }
  .mommy span:nth-child(62):before {
    animation-delay: 0s, -0.41333s;
  }
  
  .mommy span:nth-child(63) {
    transform: translate3d(152.88031px, 10.29808px, 197.53875px);
    color: #bdff00;
  }
  .mommy span:nth-child(63):before {
    animation-delay: 0s, -0.42s;
  }
  
  .mommy span:nth-child(64) {
    transform: translate3d(138.64118px, 69.94754px, 195.92336px);
    color: #b8ff00;
  }
  .mommy span:nth-child(64):before {
    animation-delay: 0s, -0.42667s;
  }
  
  .mommy span:nth-child(65) {
    transform: translate3d(101.77988px, 119.9734px, 194.28649px);
    color: #b3ff00;
  }
  .mommy span:nth-child(65):before {
    animation-delay: 0s, -0.43333s;
  }
  
  .mommy span:nth-child(66) {
    transform: translate3d(47.63117px, 152.07105px, 192.62831px);
    color: #adff00;
  }
  .mommy span:nth-child(66):before {
    animation-delay: 0s, -0.44s;
  }
  
  .mommy span:nth-child(67) {
    transform: translate3d(-15.54148px, 160.61426px, 190.94901px);
    color: #a8ff00;
  }
  .mommy span:nth-child(67):before {
    animation-delay: 0s, -0.44667s;
  }
  
  .mommy span:nth-child(68) {
    transform: translate3d(-77.80901px, 143.63378px, 189.24876px);
    color: #a3ff00;
  }
  .mommy span:nth-child(68):before {
    animation-delay: 0s, -0.45333s;
  }

`;
