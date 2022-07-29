let par = document.querySelector("#game");
let ch = document.getElementById("maze");
if (par.clientHeight > par.clientWidth) {
  ch.style.width = "95%";
} else {
  ch.style.height = "95%";
}
// window.addEventListener("resize", function () {
//   if (par.clientHeight > par.clientWidth) {
//     ch.style.width = "95%";
//   } else {
//     ch.style.height = "95%";
//   }
// });

// // let par = document.getElementById("game");
// // let ch = document.getElementById("maze");
// // let w = (100 / window.innerWidth) * par.clientWidth;
// // let h = (100 / window.innerHeight) * par.clientHeight;
// // ch.style.height = `${w}vw`;
// // ch.style.width = `${h}vh`;

// let box = document.querySelector(".tick");
// box.addEventListener("click", function () {
//   box.style.backgroundImage = 'url("o.png")';
// });
let count=0;
let win=document.getElementById("winner");
let arr = [-1,-2,-3,-4,-5,-6,-7,-8,-9];
let sc1=Number(document.getElementById("sc1").textContent);
let sc2=Number(document.getElementById("sc2").textContent);

function bgshow(part,ind)
{
  
  if(part.style.backgroundImage==="")
  {
    
    if(count===0)
  {
  part.style.backgroundImage='url("o.png")';
  count=1;
  arr[ind]=0;
  if((arr[0]===arr[1] && arr[1]===arr[2] )||( arr[3]===arr[4] && arr[4]===arr[5] )||(arr[6]===arr[7] && arr[7]===arr[8] )||( arr[0]===arr[3] && arr[3]===arr[6] )||( arr[1]===arr[4] && arr[4]===arr[7] )||( arr[2]===arr[5] && arr[5]===arr[8] )||( arr[0]===arr[4] && arr[4]===arr[8] )|| (arr[2]===arr[4] && arr[4]===arr[6]))
{
  let winaud=new Audio("win.mp3");
  winaud.play();
  document.getElementById("expand").style.opacity="1";
  // document.getElementById("again").style.opacity="0";/*if removed then bounce effect*/
  sc1++;
  document.getElementById("sc1").textContent=sc1;
  win.innerHTML="PLAYER 1 WINS !";
  ch.style.pointerEvents="none";
  if((arr[0]===arr[1] && arr[1]===arr[2] ))
  {
    document.getElementById("s1").style.visibility="visible";
    document.getElementById("s1").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }
  else
  if(( arr[3]===arr[4] && arr[4]===arr[5] ))
  {
    document.getElementById("s2").style.visibility="visible";
    document.getElementById("s2").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }else if((arr[6]===arr[7] && arr[7]===arr[8] ))
  {
    document.getElementById("s3").style.visibility="visible";
    document.getElementById("s3").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }else if(( arr[0]===arr[3] && arr[3]===arr[6] ))
  {
    document.getElementById("s4").style.visibility="visible";
    document.getElementById("s4").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }else if(( arr[1]===arr[4] && arr[4]===arr[7] ))
  {
    document.getElementById("s5").style.visibility="visible";
    document.getElementById("s5").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }else if(( arr[2]===arr[5] && arr[5]===arr[8] ))
  {
    document.getElementById("s6").style.visibility="visible";
    document.getElementById("s6").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }else if(( arr[0]===arr[4] && arr[4]===arr[8] ))
  {
    document.getElementById("s7").style.visibility="visible";
    document.getElementById("s7").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }else if((arr[2]===arr[4] && arr[4]===arr[6]))
  {
    document.getElementById("s8").style.visibility="visible";
    document.getElementById("s8").style.backgroundColor="rgba(0, 149, 255,0.5)";
  }
  
}
else
{
  let audio = new Audio("move.mp3");
    audio.play();
  let k=0;
  for(let i=0;i<9;i++)
  {
    if(arr[i]===0 || arr[i]===1)
    {
      k=1;
    }
    else
    {
      k=0;
      break;
    }
  }
  if(k===1)
  {
    win.innerHTML="TIE !";
    ch.style.pointerEvents="none";
    document.getElementById("expand").style.opacity="1";
    // document.getElementById("again").style.opacity="0";
  }
  else{
    document.getElementById("cp1").style.visibility="hidden";
    document.getElementById("cp2").style.visibility="visible";

  }
}
  }
  else
  {
    arr[ind]=1;
  part.style.backgroundImage='url("x.png")';
  count=0;
  if((arr[0]===arr[1] && arr[1]===arr[2] )||( arr[3]===arr[4] && arr[4]===arr[5] )||(arr[6]===arr[7] && arr[7]===arr[8] )||( arr[0]===arr[3] && arr[3]===arr[6] )||( arr[1]===arr[4] && arr[4]===arr[7] )||( arr[2]===arr[5] && arr[5]===arr[8] )||( arr[0]===arr[4] && arr[4]===arr[8] )|| (arr[2]===arr[4] && arr[4]===arr[6]))
{
  let winaud=new Audio("win.mp3");
 winaud.play();
  // document.getElementById("again").style.opacity="0";
  document.getElementById("expand").style.opacity="1";
  sc2++;
  document.getElementById("sc2").textContent=sc2;
  win.innerHTML="PLAYER 2 WINS !";
  ch.style.pointerEvents="none";
  if((arr[0]===arr[1] && arr[1]===arr[2] ))
  {
    document.getElementById("s1").style.visibility="visible";
    document.getElementById("s1").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }else
  if(( arr[3]===arr[4] && arr[4]===arr[5] ))
  {
    document.getElementById("s2").style.visibility="visible";
    document.getElementById("s2").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }else if((arr[6]===arr[7] && arr[7]===arr[8] ))
  {
    document.getElementById("s3").style.visibility="visible";
    document.getElementById("s3").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }else if(( arr[0]===arr[3] && arr[3]===arr[6] ))
  {
    document.getElementById("s4").style.visibility="visible";
    document.getElementById("s4").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }else if(( arr[1]===arr[4] && arr[4]===arr[7] ))
  {
    document.getElementById("s5").style.visibility="visible";
    document.getElementById("s5").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }else if(( arr[2]===arr[5] && arr[5]===arr[8] ))
  {
    document.getElementById("s6").style.visibility="visible";
    document.getElementById("s6").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }else if(( arr[0]===arr[4] && arr[4]===arr[8] ))
  {
    document.getElementById("s7").style.visibility="visible";
    document.getElementById("s7").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }else if((arr[2]===arr[4] && arr[4]===arr[6]))
  {
    document.getElementById("s8").style.visibility="visible";
    document.getElementById("s8").style.backgroundColor="rgba(245, 76, 73, 0.5)";
  }
 
}
else
{
  let audio = new Audio("move.mp3");
    audio.play();
  let k=0;
  for(let i=0;i<9;i++)
  {
    if(arr[i]===0 || arr[i]===1)
    {
      k=1;
    }
    else
    {
      k=0;
      break;
    }
  }
  if(k===1)
  {
    // document.getElementById("again").style.opacity="0";
    win.innerHTML="TIE !";
    ch.style.pointerEvents="none";
    document.getElementById("expand").style.opacity="1";
  }
  else{
    document.getElementById("cp2").style.visibility="hidden";
    document.getElementById("cp1").style.visibility="visible";

  }
}
  }
}
}


function reset()
{
  arr = [-1,-2,-3,-4,-5,-6,-7,-8,-9];
  count=0;
  
  document.getElementById("expand").style.opacity="0";
  document.getElementById("cp1").style.visibility="visible";
  document.getElementById("cp2").style.visibility="hidden";
  win.innerHTML="";
  ch.style.pointerEvents="auto";
  let children=ch.children;
  for(let i=0;i<9;i++)
  {
    let child=children[i];
    child.style.backgroundImage="";
  }
  for(let i=9;i<=16;i++)
  {
    let child=children[i];
    child.style.visibility="hidden";
  }
  
}

