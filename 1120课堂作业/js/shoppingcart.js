localStorage.setItem("key","value");//存储变量名为key，值为value的变量 

localStorage.getItem("key");//获取存储的变量key的值

localStorage.removeItem("key")//删除变量名为key的存储变量


class Product{
    constructor(id,title,imgSrc,price){
        this.id=id;
        this.title=title;
        this.imgSrc=imgSrc;
        this.price=price;
    }
}


class Order{
    constructor(product,qty,selectStatus){
        this.id=product.id;
        this.title=product.title;
        this.imgSrc=product.imgSrc;
        this.price=product.price;
        this.qty=qty;
        this.selectStatus=selectStatus;
    }
}

class CartData{
    constructor(){
        this.orderList=new Array();
        this.totalQty=0;
        this.totalAmount=0;
        this.units=0;
    }
}

class ShoppingCart{

    getDataFromLocalStorage(){

        let lzzyCart=localStorage.getItem('lzzyCart');
        //判断购物车是否为空
        if(lzzyCart==null||lzzyCart==''){
            return new cartData();
        }

        else{
            return JSON.parse(lzzyCart);
        }
        // return localStorage.getItem('test');

    }


    setDataToLocalStorage(cartData){

        // var cartDataString=JSON.stringify(cartData);
        // localStorage.setItem('test',cartDataString);

        // localStorage.setItem('test',JSON.stringify(cartDate));

        localStorage.removeItem('lzzyCart');
        localStorage.setItem('lzzyCart',JSON.stringify(cartData));
       
    }

  
    

    getSelectedList(){

    }






}