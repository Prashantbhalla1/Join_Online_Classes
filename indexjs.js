let t = JSON.parse(localStorage.getItem('time'))||[];
let d = JSON.parse(localStorage.getItem('date'))|| [];
let l = JSON.parse(localStorage.getItem('linking'))||[];
let checked=JSON.parse(localStorage.getItem('ch'))||[]

ini();
let i = JSON.parse(localStorage.getItem('i'))||0;
let c;
let s=[];
let y=[];
let move = -1;
let yy, mm, dd;
setInterval(() => {
  c = new Date();

  h = c.getHours();
  mi = c.getMinutes();
  yy = c.getFullYear();
  mm = c.getMonth();
  dd = c.getDate();
mm++;
if(mm<10){
  mm='0'+mm;
}
if(dd<10){
  dd='0'+dd;
}
  y[0] = yy + "-" + mm + "-" + dd;
 

  if (mi < 10) {s[0] = h + ":0" + mi;


}
  else {
    s[0] = h + ":" + mi;
  }
  chk();
}, 1000);

$(".bt").click((e) => {
  e.preventDefault();

  console.log("H");

  let a = $(".da").val();
  let b = $(".ti").val();
  let c = $(".li").val();
  $(".da").val("");
  $(".ti").val("");
  $(".li").val("");
  if (a != "" && b != "" && c != "") {
      let lo=d.length;
      i=lo;
    d.push(a);
    t.push(b);
    l.push(c);
   

checked.push(1);
    localStorage.setItem('date',JSON.stringify(d));
    localStorage.setItem('time',JSON.stringify(t)); localStorage.setItem('linking',JSON.stringify(l));localStorage.setItem('ch',JSON.stringify(checked));
   
    document.querySelector(
      ".out"
    ).innerHTML += `    <div id="dd${i}" class="link  d${i} ">
         Meeting
        <i class="fa fa-trash-o ii"  id="d${i}" aria-hidden="true"></i>
        <span class="get ad${i}" style="display:none;">${i}</span>
        <span class="ap date"> ${a} </span>
        <span class="ap time"> ${b} </span>
      </div>`;

  } else {
    alert("Enter the Details Fully");
  }
});

function chk() {
  $(".ii").click(function () {
    let vv = $(this).attr("id");
    let inn = $(".a" + vv).html();
    t[inn] = -1;
    l[inn] = -1;
    d[inn] = -1;
    localStorage.setItem('date',JSON.stringify(d));
    localStorage.setItem('time',JSON.stringify(t)); localStorage.setItem('linking',JSON.stringify(l));localStorage.setItem('ch',JSON.stringify(checked));
    let gg = document.querySelector("#d" + vv);
    gg.remove();
  });

  for (let i = 0; i < t.length; i++) {
  
    if (t[i] <= s[0] && d[i] <= y[0] && checked[i]==1) {
    
     
      checked[i]=0;
      move = i;
      localStorage.setItem('ch',JSON.stringify(checked));
      break;
    }
  }
  if (move != -1) {
  
    win(move);
    move = -1;
  }
}
function win(key) {

  let dddd = key;
  
  
  $("#dd" + dddd).addClass("un");

  window.open(l[key], "_blank");
  l[key] = 0;
}


function ini(){
    let aa=[];
    let bb=[];
    let cc=[];
    let oo=[];

for(let i=0;i<t.length;i++){

let a=d[i];
let b=t[i];
let c=l[i];


 
  
if(a!=-1 && b!=-1 && c!=-1)
{
    aa.push(a);
    bb.push(b);
    cc.push(c);oo.push(checked[i]);
        document.querySelector(
          ".out"
        ).innerHTML += `    <div id="dd${i}" style="text-decoration:${checked[i]==0? 'line-through':'none'};" class="link  d${i} ">
             Meeting
            <i class="fa fa-trash-o ii"  id="d${i}" aria-hidden="true"></i>
            <span class="get ad${i}" style="display:none;">${i}</span>
            <span class="ap date"> ${a} </span>
            <span class="ap time"> ${b} </span>
          </div>`;
    
}
      


}

localStorage.setItem('date',JSON.stringify(aa));
localStorage.setItem('time',JSON.stringify(bb)); localStorage.setItem('linking',JSON.stringify(cc));localStorage.setItem('ch',JSON.stringify(oo));


}