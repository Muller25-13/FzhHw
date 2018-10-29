// // css选择器--document.querySelector()
// var ima4=document.querySelector('#images a :nth-child(4)');
// // ID--document.getElementById()
// var img4=document.getElementById('images').children[4];
// // 类名--document.getElementsByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];
// // 标签名--document.getElementsByTagName()
// var img4=document.getElementsByTagName('a')[4];


// 获取一组超链接图像
var imagesA=document.getElementById("images").children;
// imagesA[0].style.display='none';
// imagesA[4].style.display='block';

// imagesA[0].className="hiddenImg";

var currentNo=0;
function changeImg(){

    //排他原理,先去掉同类
    for(var i=0;i<imagesA.length;i++)
    {
        imagesA[i].className="hiddenImg";
    }

//     for(const item of imagesA)
// {
//     item.className="hiddenImg";

// }
//再突出自己
imagesA[currentNo].className='displayImg';

//换个元素,为下一次计时器调用做准备
if(currentNo<7) {currentNo++;}
else{
    currentNo=0;
}

}

var timer=window.setInterval(changeImg,1000);





var img4=document.getElementById("images")

function startChange(){
    timer=window.setInterval(changeImg,1000);
    
}


function stopChange(){
    window.clearInterval(timer);
   
}
img4.addEventListener('mouseover',stopChange);
img4.addEventListener('mouseout',startChange);

