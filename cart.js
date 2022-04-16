var Cart_item=JSON.parse(localStorage.getItem("mobile"))
// console.log(Cart_item)
// console.log(Cart_item)
var total=0
display(Cart_item)
  function display(Cart_item)
  {
    var dis_cont=document.getElementById("cont").innerHTML=""
    //   console.log(dis_data)
    
    Cart_item.forEach((e,i) => {
        var data_cont=document.createElement("div")
        data_cont.setAttribute("id","data_cont")
        var pd_img=document.createElement("img")
        pd_img.src=e.image_url
        var pd_name=document.createElement("h4")
        pd_name.innerText=e.name
        var pd_price=document.createElement("b")
        pd_price.innerText=e.price
        var pd_rating=document.createElement("p")
        pd_rating.innerText=`Rating:- ${e.rating}`
        
      
        data_cont.append(pd_img,pd_name,pd_price,pd_rating)
        var dis_cont=document.getElementById("cont")
        dis_cont.append(data_cont)
        total+=e.price
        totalprice(total)

    });
    // console.log(total)
    

   
  }
  function totalprice(total){
    var total_dis=document.getElementById("total")

    total_dis.innerHTML=""
    var t_p=document.createElement("b")
    t_p.innerText=`TOTAL:-${total}`
total_dis.append(t_p)

}
 
  
  function apply(){
    var cp=document.getElementById("couponcode").value
    if(cp=="masai30"){
        var total_dis=(total/100)*30

    }
    // console.log(total_dis)
    total=total-total_dis

    // alert("hiii")
   totalprice(total)
  }