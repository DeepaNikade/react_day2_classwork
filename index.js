// vanilla js
// const div=document.createElement("div");

// const h2=document.createElement("h2");
// h2.innerText="hello";
// const p=document.createElement("p");
// p.innerText="heelo p";

// div.appendChild(h2);
// div.appendChild(p);
// document.getElementById("root").appendChild(div);


// react approch
// const h2=React.createElement('h2',{style:{backgroundColor:'red'},id:"h2-root",className:"blue-text italic"},'hello i am h2-React')
// const p=React.createElement('h2',{},'hello i am h2-React')
// const div=React.createElement("div",{},[h2,p])


const h1=React.createElement('h1',{},'Learn web development');
const p=React.createElement('p',{},'Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.');
const span=React.createElement('span',{},'The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from ');
const  span2=React.createElement('span',{},'the and other intermediate to advanced resources that assume a lot of previous knowledge.')

const a=React.createElement('a',{href:"https://developer.mozilla.org/en-US/"}," rest of MDN,")

const wholesecondP=React.createElement("p",{},[span,a,span2]);

const thirdp=React.createElement('p',{},'If you are a complete beginner, web development can be challenging — we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.')



const div=React.createElement("div",{style:{display:"flex",flexDirection:"column",fontSize:"20px",fontFamily:"Italic"}},[h1,p,wholesecondP,thirdp])

ReactDOM.render(div,document.getElementById("root"))
