function loadJson(file,callback){
  var xhr= new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState === 4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  }
  xhr.send();
}

loadJson("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  profile(data.profile);
  carrer(data.carrer);
  education(data.education);
  skills(data.skills);
})

var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

  var h2=document.createElement("h2");
  h2.textContent=p.name;
  left.append(h2);
  var h3=document.createElement("h3");
  h3.textContent=p.design;
  left.append(h3);
  var h3=document.createElement("h3");
  h3.textContent=p.mobile;
  left.append(h3);
  var h3=document.createElement("h3");
  h3.textContent=p.email;
  left.append(h3);
}

var right=document.querySelector(".right");
function carrer(ca){
  var h1=document.createElement("h1");
  h1.textContent="Career Objective";
  right.append(h1);


  var hr=document.createElement("hr");
  right.append(hr);



  var ka=document.createElement("ka");
  ka.textContent=ca.info;
  right.append(ka);
}
//Educational details
function education(e){
  var hhh=document.createElement("h2");
  hhh.textContent="education";
  right.append(hhh);
  var hr=document.createElement("hr");
  right.append(hr);

  var table=document.createElement("table");
  right.append(table);
   var tr1="<tr><th>qualification</th><th>institute</th><th>percentage</th><th>yop</th></tr>";
   var tr2=" ";
   for(i=0;i<e.length;i++)
   {
     tr2=tr2+"<tr><td>"+e[i].qualification+"</td><td>"+e[i].institute+"</td><td>"+e[i].percentage+"</td><td>"+e[i].yop+"</td></tr>";
    }
   table.innerHTML=tr1+tr2;
   right.append(table);
}
function skills(s){
  var h1=document.createElement("h1");
  h1.textContent="skills";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var ul=document.createElement("ul");
  for(var i in s){
    var li=document.createElement("li");
    li.innerHTML=s[i].name+":"+s[i].info;
    ul.append(li);
  }
  right.append(ul);
}
