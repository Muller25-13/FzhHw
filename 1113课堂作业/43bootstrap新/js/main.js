var btnList=document.querySelectorAll('.btn-group .btn');
var totalQty=document.getElementsByName('totalQty')[0];

for (const key in btnList) {
    if (btnList.hasOwnProperty(key)) {
        const element = btnList[key];
        switch(element.name){
            case 'increase':element.addEventListener('click',increaseValue);break;
            case 'decrease':element.addEventListener('click',decreaseValue);break;
            case 'addToCart':element.addEventListener('click',addToCart);break;
        }        
    }
}
function increaseValue(e){
      var qtyObj=  e.target.nextElementSibling;
      var qty=parseInt(qtyObj.innerText);
      qty++;
      qtyObj.innerText=qty;
      console.log(qty);        
}
function decreaseValue(e){
    var qtyObj=  e.target.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
   if(qty>1) qty--;
   else qty=0;
    qtyObj.innerText=qty;
    console.log(qty);        
}

function addToCart(e){
    var qtyObj=  e.target.previousElementSibling.previousElementSibling;
    var qty=parseInt(qtyObj.innerText);
    var total=parseInt(totalQty.innerText);
    total+=qty;
    totalQty.innerText=total;  
}

function bind() {
    function fn(){
      var node = this.parentNode.parentNode;
      node.parentNode.removeChild(node);
      var sum = 0,num=0;
      var tbody = document.getElementById('cartContent');
    //   var tr = tbody.getElementsByTagName("");
    //   for (var i = 0; i < tr.length; i++) {
    //     var a = tr[i].getElementsByTagName('td')[1];
    //     sum += parseFloat(a.innerHTML);
    //     num++;
    //   }
    //   num = tbody.getElementsByTagName("tr").length;
    //   price.innerHTML = sum.toFixed(2)+"("+num+"件商品)";
    }
    var del = document.getElementsByName('deleteItem');
    for (var i = 0; i < del.length; i++) {
      del[i].onclick = fn;
    }
}
bind();