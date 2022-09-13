let div=document.createElement("div");
div.style.textAlign="center";
div.style.fontFamily="vederna"
document.body.style.backgroundColor = "lightblue";


var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","country");
// input.style.marginLeft="450px";
// document.body.append(input);
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.addEventListener("click",foo);

//for active cases
let deaths=document.createElement("div");
deaths.setAttribute("id","deaths");
//let Recovered=document.createElement("div");
//Recovered.setAttribute("id","recovered");
//<div id="active">total active cases:4312345</div>
let active=document.createElement("div");
active.setAttribute("id","active");
let recovered=document.createElement("div");
recovered.setAttribute("id","recovered");
div.append(input,button,deaths,active,recovered);
document.body.append(div);



async function foo(){
let countryname=document.getElementById("country").value;
console.log(countryname);
let url=`https://api.covid19api.com/dayone/country/${countryname}`;
let res= await fetch(url);
let res1=await res.json();
console.log(res1);
let index=res1.length-1;
console.log(res1[index].Deaths);
deaths.innerHTML=`total deaths cases:${res1[index].Deaths}`;
console.log(res1[index].Active);
active.innerHTML=`total active cases:${res1[index].Active}`;
console.log(res1[index].Recovered);
recovered.innerHTML=`total recovered cases:${res1[index].Recovered}`;
//console.log(res1[index].Recovered);
//Recovered.innerHTML=`total recovered cases:${res1[index].Recovered}`;
}