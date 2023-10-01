let links=document.getElementById("links");
let intro=document.getElementById("intro");
let htmlTopics=document.getElementById("html");
let cssTopics=document.getElementById("css");
let jsTopics=document.getElementById("js");
let footer=document.getElementById("footer1");
let contentContainer=document.getElementById("content-container");
let bars=document.getElementById("bars");
let courses=document.getElementById("courses");
let examples=document.getElementById("examples");
let contentHtml=document.getElementsByClassName("contentHtml");
let contentCss=document.getElementsByClassName("contentCss");
let contentJs=document.getElementsByClassName("contentJs");
let topicHtml=document.getElementsByClassName("topicHtml");
let topicCss=document.getElementsByClassName("topicCss");
let topicJs=document.getElementsByClassName("topicJs");
let topicLinks=document.getElementsByClassName("topic-links");
let menuBtns=document.querySelectorAll(".header #links button");
let tag;
let a,c;
let scrollId;
// go home
function showHome(){
  unActive();
  intro.style.display="block";
  contentContainer.style.display="none";
  footer.style.display="block";
  examples.style.display="none";
  closeTopics();
  if(bars.style.display=="block"){
  bars.style.display="none";
  }
  mActive(0);
  if(links.style.height=="260px"){
    showLinks();
    }
  scrollTop();
}
// dropdown menu
function showLinks(){
  if(links.style.height!="260px"){
    links.style.position="absolute";
    links.style.top="60px";
    links.style.height="260px";
    courses.classList.toggle("rotate");
  }else{
    links.style.position="absolute";
    links.style.height="0px";
    courses.classList.toggle("rotate");
  }
}
// display structure 
function showTutorial(){
  intro.style.display="none";
  contentContainer.style.display="block";
  contentContainer.style.height="562px";
  footer.style.display="none";
  scrollTop();
}
// open html 
function showHtml(){
  a=1;
  unActive();
  closeTopics();
  examples.style.display="none";
  htmlTopics.style.display="block";
  tag="html";
  scrollId=0;
  showContent(a);
  mActive(1);
  if(links.style.height=="260px"){
  showLinks();
  }
  scrollTop();
}
// open css 
function showCss(){
  a=1;
  unActive();
  closeTopics();
  examples.style.display="none";
  cssTopics.style.display="block";
  tag="css";
  scrollId=1;
  showContent(a);
  mActive(2);
  if(links.style.height=="260px"){
    showLinks();
    }
    scrollTop();
}
// open javascript 
function showJs(){
  a=1;
  unActive();
  closeTopics();
  examples.style.display="none";
  jsTopics.style.display="block";
  tag="js";
  scrollId=2;
  showContent(a);
  mActive(3);
  if(links.style.height=="260px"){
    showLinks();
    }
  scrollTop();
}
// display content 
function showContent(n){
  let content,topic;
  if(tag=="html"){
    content=contentHtml;
    topic=topicHtml;
  }else if(tag=="css"){
    content=contentCss;
    topic=topicCss;
  }else if(tag=="js"){
    content=contentJs;
    topic=topicJs;
  }
  if(n<=0){a=1;}
  if(n>=content.length){a=content.length;}
  for(let i=0;i<contentHtml.length;i++){
    contentHtml[i].style.display="none";
  }
  for(let i=0;i<contentCss.length;i++){
    contentCss[i].style.display="none";
  }
  for(let i=0;i<contentJs.length;i++){
    contentJs[i].style.display="none";
  }
  for(let i=0;i<topic.length;i++){
    topic[i].className=topic[i].className.replace(" active","");
  }
  content[a-1].style.display="block";
  topic[a-1].className+=" active";
  c=topic[a-1];
  closeTopics();
}
// move content forward 
function forward(){
   a=a+1;
  showContent(a);
  scrollDown();
}
function backward(){
  a=a-1;
  showContent(a);
  scrollUp();
}
// close opened topics 
function closeTopics(){
  if(tag=="html"){
    if(htmlTopics.style.display=="block"){
      htmlTopics.style.display="none";
    }
  }else if(tag=="css"){
    if(cssTopics.style.display=="block"){
      cssTopics.style.display="none";
    }
  }else if(tag=="js"){
    if(jsTopics.style.display=="block"){
      jsTopics.style.display="none";
    }
  }else{;}
  bars.style.display="block";
}
// open closed topics on the page 
function openTopics(){
  if(tag=="html"){
    htmlTopics.style.display="block";
  }else if(tag=="css"){
    cssTopics.style.display="block";
  }else if(tag=="js"){
    jsTopics.style.display="block";
  }
  c.scrollIntoView();
  bars.style.display="none";
}
// open Examples 
function showExamples(){
  unActive();
  intro.style.display="none";
  contentContainer.style.display="none";
  footer.style.display="block";
  closeTopics();
  bars.style.display="none";
  examples.style.display="block";
  mActive(4);
  if(links.style.height=="260px"){
    showLinks();
    }
}
// remove menu-active 
function unActive(){
  for(let i=0;i<menuBtns.length;i++){
    menuBtns[i].className=menuBtns[i].className.replace("menu-active","");
  }
}
// add menu-active 
mActive(0);
function mActive(m){
  menuBtns[m].className+="menu-active";
}
//scroll top
function scrollTop(){
  contentContainer.scrollTop=0;
}