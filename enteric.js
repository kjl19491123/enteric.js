const HERE = `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=0.5">
    <title>enterics</title>
    <style>
  
.notShow {
  display: none;
}



div{
  background-color: lightgray; 
}

a, a:visited {
  text-decoration:none;
  color: black;
}

nav.test1 .test1,
nav.test2 .test2,
nav.result .result{
  color: black;
  background-color: lightgray;
  border-bottom: 1px solid lightgray;
}


</style>  
     
<script type="text/javascript">
var baary=[
{
name: "Cedecea davisae",
pos: [0,0.5,0.95,0,0.7,0,0,0,0.95,0.95,0,1,0,0.5,0,0,0.86,0.19,0.91,1,0,0.9,0.1,0,1,0,1,1],
cp: 0
},
{
name: "Cedecea neteri",
pos: [0,1,1,0,1,0,0,0,1,0,0,1,0,0.5,0,0,0.65,0.35,1,1,0,1,0,0,1,1,1,1],
cp: 0
},
{
name: "Citrobacter amalonaticus",
pos: [0,0.85,0.85,0,0.97,0,1,0,0.98,0.95,0,0.15,0.8,0,1,0,0.95,0.5,0,1,0.05,1,0.05,1,0.4,1,1,1],
cp: 0
},
{
name: "Citrobacter diversus",
pos: [0.98,0.65,1,0,0.98,0,1,0,0.95,1,0,0.2,0.75,0,1,0,0,0.35,0.9,1,0,0.96,0,1,0.2,0.98,1,1],
cp: 0
},
{
name: "Citrobacter freundii",
pos: [0,0.65,0.95,0,0.95,0.8,0.05,0,0.95,0.2,0,0.3,0.7,0,1,0.03,0.96,0.5,0.15,1,0.5,0.95,0.3,1,0.05,0.98,1,1],
cp: 0
},
{
name: "Edwardsiella tarda",
pos: [0,0,0,0,1,1,1,1,0.98,1,0,0,0,0,0.09,0,0,0,0,0,0,0,0,0,0,0,0,0],
cp: 0
},
{
name: "Enterobacter aerogenes",
pos: [1,0,0.95,0,1,0,0,0.98,0.97,0.98,0,1,0.02,0.98,1,1,0.98,0.95,0.85,1,1,1,0.96,1,1,1,1,1],
cp: 0
},
{
name: "Enterobacter agglomerans",
pos: [0.07,0,0.5,0,0.2,0,0.2,0,0.85,0,0.2,0.75,0.2,0.7,0.95,0.15,0.35,0.4,0.65,1,0.5,0.9,0.3,0.85,0.65,0.3,0.97,0.93],
cp: 0
},
{
name: "Enterobacter cloacae",
pos: [0.25,0.97,1,0,1,0,0,0,0.95,0.96,0,0.97,0.65,1,1,0.15,0.98,0.93,0.75,1,0.9,1,0.97,0.92,0.75,0.95,1,1],
cp: 0
},
{
name: "Enterobacter gergoviae",
pos: [0,0,0.98,0,0.98,0,0,0.9,0.9,1,0,0.98,0.93,1,0.98,0,0,0.55,0.96,1,0.97,0.97,0.97,0.98,0.98,0,1,0.98],
cp: 0
},
{
name: "Enterobacter sakazakii",
pos: [0,1,1,0,0.98,0,0.11,0,0.91,0.91,0.5,1,0,1,1,0.75,1,1,0.18,1,1,1,1,1,1,0,1,1],
cp: 0
},
{
name: "Escherichia coli",
pos: [0.05,0.17,0,0,0.9,0,0.95,0.9,0.8,0.65,0,0.5,0,0,1,0,0.03,0.9,0,0.98,0.75,0.95,0.5,0.8,0.4,0.94,0.98,0.95],
cp: 0
},
{
name: "Escherichia fergusonii",
pos: [0.96,0.04,0.19,0,0.92,0,0.96,0.92,0.92,1,0,0,0,0,0.96,0,0,0,0.3,1,0,0.83,0,0.92,0.54,0,0.96,0.96],
cp: 0
},
{
name: "Ewingella americana",
pos: [0,0,0.97,0,0,0,0,0,0.6,0,0,0,0,0.97,0,0,0.07,0.7,0,1,0,0.96,0,0.23,0.9,0,1,0.13],
cp: 0
},
{
name: "Hafnia alvei",
pos: [0,0.06,0.1,0,0.98,0,0,1,0.9,0.98,0,0.1,0.04,0.85,0.95,0,0.95,0.05,0.7,1,0,0.9,0.02,0.97,0.13,0,1,0.98],
cp: 0
},
{
name: "Klebsiella oxytoca",
pos: [1,0,0.95,0,0.97,0,1,0.98,0,0.02,0.02,1,0.9,0.9,0.98,0.98,0.97,1,0.98,1,1,1,1,1,1,1,1,1],
cp: 0
},
{
name: "Klebsiella ozaenae",
pos: [0.97,0.06,0.3,0,0.5,0,0,0.4,0,0.03,0,0.2,0.1,0,0.98,0.55,0.88,0.3,0.03,1,0.97,0.8,0.9,0.55,0.97,0.75,0.98,0.95],
cp: 0
},
{
name: "Klebsiella planticola",
pos: [1,0,1,0,1,0,0.2,1,0,0,0,1,0.98,0.98,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
cp: 0
},
{
name: "Klebsiella pneumoniae",
pos: [0.9,0,0.98,0,0.97,0,0,0.98,0,0,0,1,0.95,0.95,1,0.95,0.98,0.98,0.93,1,1,1,1,1,1,1,1,1],
cp: 0
},
{
name: "Klebsiella rhinoscleromatis",
pos: [1,0,0,0,0,0,0,0,0,0,0,0.75,0,0,1,0.95,0.9,0,0.95,1,1,0,0.75,0.96,0.98,1,1,1],
cp: 0
},
{
name: "Kluyvera ascobata",
pos: [0,0,0.96,0,0.93,0,0.89,0.97,0.98,1,0,0.98,0,0,1,0,0.92,0.98,0.96,1,1,1,0.98,1,1,0.4,1,1],
cp: 0
},
{
name: "Kluyvera cryocrescens",
pos: [0,0,0.76,0,0.95,0,0.86,0.35,0.86,1,0,0.81,0,0,1,0,0.86,0.95,0.86,0.95,1,1,1,1,1,0.45,1,0.91],
cp: 0
},
{
name: "Morganella morganii",
pos: [0,0,0,0,0.87,0.02,0.98,0,0.95,0.98,0.95,0,0.98,0,0,0,1,0,0.02,0,0,0.05,0,0,0,0,0.13,0],
cp: 0
},
{
name: "Proteus mirabilis",
pos: [0,0,0.65,0,0.96,0.95,0.02,0,0.95,1,0.98,0.15,0.9,0.25,0,0,0.98,0.02,0.02,0,0,0,0,0.02,0,0,0.98,0.98],
cp: 0
},
{
name: "Proteus penneri",
pos: [0,0,0,0.25,0.45,0.1,0,0,0.85,0,1,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0.55,1],
cp: 0
},
{
name: "Proteus vulgaris",
pos: [0,0,0.15,0.6,0.85,0.95,0.98,0,0.95,0,1,0.97,0.95,0,0,0,1,0.02,0,0,0,0.1,0.05,0.05,0.75,0,0.3,0.95],
cp: 0
},
{
name: "Providencia alcalifaciens",
pos: [1,0,0.98,0,0.85,0,1,0,0.96,0,0.98,0.15,0,0,0,0,1,0,0,0.02,0,0,0,0,0,0,0,0],
cp: 0
},
{
name: "Providencia rettgeri",
pos: [1,0,0.95,0,0.1,0,1,0,0.94,0,0.98,0.15,0.98,0,0,0.9,0.97,0.05,0,1,0.05,0.05,0.05,0.7,0.5,0,0,0.1],
cp: 0
},
{
name: "Providencia stuartii",
pos: [0.05,0,0.93,0.02,0,0,0.98,0,0.85,0,0.95,0.5,0.3,0,0,0.95,1,0.02,0,0.1,0,0.1,0.07,0,0.02,0,0.98,0.07],
cp: 0
},
{
name: "Salmonella choleraesuis",
pos: [0,0.55,0.25,0,0.95,0.5,0,0.95,0.95,1,0,0,0,0,0,0,0,0,0,0.98,0.45,0,0,1,0,0.9,0,0.98],
cp: 0
},
{
name: "Salmonella paratyphi A",
pos: [0,0.15,0,0,1,0.1,0,0,0.95,0.95,0,0,0,0,1,0,0,0,0,1,0.95,0,0,1,0,0.95,1,0],
cp: 0
},
{
name: "Salmonella typhi",
pos: [0,0.03,0,0,0,0.97,0,0.98,0.97,0,0,0,0,0,0.02,0,0,0.02,0,1,1,0,0,0,0,0.98,1,0.82],
cp: 0
},
{
name: "Salmonella, other serotypes",
pos: [0,0.7,0.95,0.02,0.96,0.95,0,0.98,0.95,0.97,0,0.02,0,0,1,0.35,0,0.02,0,1,0.95,0.02,0.02,0.95,0,0.95,1,0.97],
cp: 0
},
{
name: "Serratia liquefaciens group",
pos: [0.05,0,0.9,0.85,0.75,0,0.02,0.9,0.95,1,0,0.98,0.03,0.93,0.98,0.6,0.9,0.1,0.02,1,0.75,0.93,0.85,0.15,0.97,0.95,1,1],
cp: 0
},
{
name: "Serratia marcescens",
pos: [0.4,0,0.98,0.98,0.55,0,0.02,1,0.97,1,0,1,0.15,0.98,0,0.75,0.95,0.02,0.03,1,0,0.95,0.02,0,0.95,1,1,0.07],
cp: 0
},
{
name: "Serratia odorifera",
pos: [0.55,0,0.98,1,0.08,0,0.55,0.96,1,0.4,0,0.4,0.02,0.81,1,1,0.35,0.87,0,0.98,0.98,1,0.45,0.94,0.65,1,1,1],
cp: 0
},
{
name: "Serratia rubidaea",
pos: [0.98,0,0.95,0.98,0.3,0,0.02,0.55,0.85,0,0,0.98,0.02,1,1,0.2,0.25,1,0.94,1,0.98,1,0.98,0.02,0.98,0.02,1,0.98],
cp: 0
},
{
name: "Shigella boydii",
pos: [0,0.18,0,0,0,0,0.25,0,0,0.02,0,0,0,0,0.94,0,0,0.02,0,0.97,0.15,0.1,0.02,0,0,0.45,0.85,0.11],
cp: 0
},
{
name: "Shigella dysenteriae",
pos: [0,0.03,0,0,0,0,0.45,0,0,0,0,0,0,0,0.45,0,0,0,0,0,0,0.4,0,0.3,0,0.3,0.85,0.04],
cp: 0
},
{
name: "Shigella flexneri",
pos: [0,0.02,0,0,0.03,0,0.5,0,0,0,0,0.02,0,0,0.6,0,0,0.02,0,0.95,0.55,0.02,0.4,0.05,0,0.3,0.65,0.02],
cp: 0
},
{
name: "Shigella sonnei",
pos: [0,0.02,0,0,0,0,0,0,0,0.98,0,0.02,0,0,0.95,0,0,0.02,0,1,0.25,0.9,0.03,0.75,0,0.02,1,0.02],
cp: 0
},
{
name: "Tatumella ptyseos",
pos: [0,0,0.02,0,0,0,0,0,0,0,0.9,0.98,0,0.05,0,0,0,0,0,0,0.25,0,0.11,0,0.55,0,0.93,0.09],
cp: 0
},
{
name: "Yersinia enterocolitica",
pos: [0,0,0,0.09,0.05,0,0.5,0,0.02,0.95,0,0.95,0.75,0.02,0.98,0.3,0.02,0.05,0,0.98,0,0.95,0.05,0,0.2,0.98,0.98,0.7],
cp: 0
},
{
name: "Yersinia frederiksenii",
pos: [0,0,0.15,0,0.4,0,1,0,0,0.92,0,1,0.6,0,1,0.07,0,0.4,0,1,0,1,0.3,1,0.92,1,1,1],
cp: 0
},
{
name: "Yersinia kristensenii",
pos: [0,0,0,0,0.23,0,0.3,0,0.08,0.92,0,0,0.77,0,0.77,0.15,0,0.08,0,1,0,0.7,0,0,0.15,1,1,0.85],
cp: 0
},
{
name: "Yersinia pestis",
pos: [0,0,0,0,0,0,0,0,0,0,0,0,0.05,0,1,0,0,0,0,0.97,0.5,0.5,0,0.02,0.7,0.5,1,0.9],
cp: 0
},
{
name: "Yersinia pseudotuberculosis",
pos: [0,0,0,0,0,0,0,0,0,0,0,0,0.95,0,0.5,0,0,0,0,1,0.7,0.7,0.15,0.7,0.25,0,1,1],
cp: 0
},
{
name: "Yersinia intermedia",
pos: [0,0.01,0,0,0.18,0,0.99,0,0.06,1,0,1,0.77,0.12,1,0.18,0.06,0.35,0.06,1,0.8,0.93,0.45,1,1,1,1,1],
cp: 0
}
];

var chary1 = [
"adonitol","arginine_dihydrolase","citrate","DNase","gas_from_glucose","hydrogen_sulfide","indole","lysine_decarboxylase","motility","ornithine_decarboxylase","phenylalanine_deaminase","sucrose","urease","Voges-Proskauer"
];

var chary2=[
"arabinose","inositol","growth_in_KCN","lactose","malonate","mannitol","melibiose","ONPG","raffinose","rhamnose","salicin","sorbitol","trehalose","xylose"
];

var chary=chary1.concat(chary2);
var inputnodes;
var bn = baary.length;
var cn = chary.length;
var pat=new Array(cn);
var c1;
var c2;
var c3;
var n1;

function init(){
c1=document.getElementById("c1");
c2=document.getElementById("c2");
c3=document.getElementById("c3");
n1=document.getElementById("n1");  
var text="<table>";
for(var i=0; i<chary1.length; i++){
  text=text+"<tr><td align=right>"+chary1[i] + "</td>"+
  '<td><input class="kjin" type=radio name="r' + i + '" value="+">Postive</td>'+
  '<td><input class="kjin" type=radio name="r' + i + '" value="-">negative</td>'+
  '<td><input class="kjin" type=radio name="r' + i + '" value="n" checked>notdone</td></tr>';
}
text=text+'<tr><td align=right><input type=button value=compute onClick="compute()"></td>'+
'<td align=right><input type=reset value=reset onClick="ensure()"></td></tr></table>';
c1.innerHTML=text;

text="<table>";
for(var i=0; i<chary2.length; i++){
  text=text+"<tr><td align=right>"+chary2[i] + "</td>"+
  '<td><input class="kjin" type=radio name="s' + i + '" value="+">Postive</td>'+
  '<td><input class="kjin" type=radio name="s' + i + '" value="-">negative</td>'+
  '<td><input class="kjin" type=radio name="s' + i + '" value="n" checked>notdone</td></tr>';
}
text=text+'<tr><td align=right><input type=button value=compute onClick="compute()"></td>'+
'<td align=right><input type=reset value=reset onClick="ensure()"></td></tr></table>';
c2.innerHTML=text; 

c3.innerHTML="";

inputnodes=document.querySelectorAll('input.kjin');
};

function ensure(){
  for(var i=2; i < cn*3; i += 3)
    inputnodes[i].checked=true;
  c3.innerHTML("");
}

function setcp(ba){
    var ap=1.0;
    for(var i=0; i < pat.length; i++){
      if(pat[i] == "+") ap *= ba.pos[i];
      if(pat[i] == "-") ap *= (1 - ba.pos[i]);
    }
    var cp=1.0;
    for(var i=0; i < pat.length; i++){
      if(pat[i] == "+" || pat[i] == "-"){
        if(ba.pos[i] > 0.5){
          cp *= ba.pos[i];
        }else{
          cp *= (1 - ba.pos[i]);
        }
      }
    }
    cp = ap/cp; 
    ba.cp=cp;
}

function order(a, b){
  if(a.cp < b.cp) return 1;
  if(a.cp > b.cp) return -1;
  if(a.cp == b.cp){
    if(a.name < b.name) return -1;
    if(a.name > b.name) return 1;
    if(a.name == b.name) return 0;
  }
}

function compute(){
  var k, r;
  for(var i=0, j=0; i<cn; i++, j += 3){
    if(inputnodes[j].checked)
      pat[i]=inputnodes[j].value;
    else if(inputnodes[j+1].checked)
      pat[i]=inputnodes[j+1].value;
    else
      pat[i]=inputnodes[j+2].value;
  }
  for(var i=0; i<bn; i++)
    setcp(baary[i]);
  baary.sort(order);
  r="";
  for(var i=0; i<bn; i++){ 
    k=(i+1 < bn) ? (i+1) : 0; 
    if(baary[i].cp > 0.000001){   
      r = r + "<b>" + baary[i].name + " " + baary[i].cp + "</b><br>";
      if(baary[k].cp > 0.000001){
        for(var j=0; j<cn; j++){
          if(baary[i].pos[j]-baary[k].pos[j] >= 0.5 && pat[j] == "n")
            r = r + "[" + chary[j] + "+] ";
          if(baary[i].pos[j]-baary[k].pos[j] < -0.5 && pat[j] == "n")
            r = r + "[" + chary[j] + "-] ";
        }
      } 
      r = r + "<br>";
    }
  }
  c3.innerHTML="";
  c3.innerHTML=r;
  c1.classList.add('notShow');
  c2.classList.add('notShow');
  c3.classList.remove('notShow');
  n1.classList.remove('test1', 'test2', 'result');
  n1.classList.add('result');
}

  </script>
  </head>
  <body onLoad="init()">
    
  <nav id='n1' class='test1'>
    <a href="#" class='test1' onClick="n1.classList.remove('test1', 'test2', 'result');n1.classList.add('test1');c1.classList.remove('notShow');c2.classList.add('notShow');c3.classList.add('notShow');">test1</a>
    <a href="#" class='test2' onClick="n1.classList.remove('test1', 'test2', 'result');n1.classList.add('test2');c2.classList.remove('notShow');c1.classList.add('notShow');c3.classList.add('notShow');">test2</a>
    <a href="#" class='result' onClick="n1.classList.remove('test1', 'test2', 'result');n1.classList.add('result');c3.classList.remove('notShow');c1.classList.add('notShow');c2.classList.add('notShow');">result</a>
  </nav>
  
  



      
        <div id="c1">
        </div>
        <div id="c2" class="notShow">
        </div>
        <div id="c3" class="notShow">
        </div>
      


  
  </body>
</html>`

addEventListener("fetch", (event) => {
  event.respondWith(
    new Response(HERE, {
      status: 200,
      headers: {
        server: "denosr",
        "content-type": "text/html",
      },
    }),
  );
});