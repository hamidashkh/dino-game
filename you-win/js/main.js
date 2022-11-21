let dino=document.getElementById('dino');
let left=0;
let topPx = 0;
let x=40;
let y=40;
let area=document.getElementById('area')
let count=0

document.body.onkeydown=(e)=>{
    if(e.keyCode===39){
        console.log(left);
        left+=5;
        dino.style.left=`${left}%`;
    }
    if(e.keyCode===40){
        topPx+=5;
        dino.style.top=`${topPx}%`;
    }
    if(e.keyCode===37){
        left-=5;
        dino.style.left=`${left}%`  
    }if(e.keyCode===38){
        topPx-=5;
        dino.style.top=`${topPx}%`
    }
    console.log("left "+dino.style.left);
    console.log("top "+dino.style.top);
    if(dino.style.top==='40%' && dino.style.left==='40%')
    {
        area.style.backgroundColor='green'
        count++
        document.getElementById('span').innerText=`You Win...! ${count}`;
        dino.style.left=0
        dino.style.top=0


    }
}
