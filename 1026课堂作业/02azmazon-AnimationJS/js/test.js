var timer;
function startTimer(speed){
    timer=window.setInterval(changeNum,speed);
}
startTimer(1000);

var h2Obj=document.querySelector('h2')
var imgObj=document.querySelector('h2>img');

console.log(h2Obj)
var currentNo=0;

function changeNum()
{  
        if(currentNo<8) currentNo++;
        else currentNo=1;
        h2Obj.innerHTML='<img src="./images/0'+currentNo+'.jpg" alt="">';
        

}
// console.log(timer);
var btnObj=document.getElementById('btnObj');


// console.log(btnObj);
// btnObj.addEventListener('click',stopChangeNum);
// function stopChangeNum(){
//     if(flag){
//         window.clearInterval(timer);
//         btnObj.textContent='启动'
//         flag=false;
//     }
//    else{
//        startTimer(500);
//        btnObj.textContent='停止'
//        flag=true;
//    }
// }

function startChange(){
    startTimer(1000);
    btnObj.textContent='停止';
}


function stopChange(){
    window.clearInterval(timer);
    btnObj.textContent='启动'
}
btnObj.addEventListener('mouseover',stopChange);
btnObj.addEventListener('mouseout',startChange);
