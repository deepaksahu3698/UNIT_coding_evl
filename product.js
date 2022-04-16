var mydata = [
    {
      name: "SAMSUNG Galaxy F12",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kn22m4w0/mobile/a/q/8/galaxy-f12-sm-f127gzgiins-samsung-original-imagftmjw3xqg4yk.jpeg?q=70",
      price: 11499,
    },
    {
      name: "SAMSUNG Galaxy F42",
      rating: 4.2,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku4ezrk0/mobile/v/5/e/galaxy-f42-5g-sm-e426bzahins-samsung-original-imag7anfwxsgumgz.jpeg?q=70",
      price: 12199,
    },
    {
      name: "Apple Iphone 12",
      rating: 4.6,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8dqgncgbcb.jpeg?q=70",
      price: 59999,
    },
    {
      name: "APPLE iPhone 12 Mini",
      rating: 4.5,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/d/g/b/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfhfevaajh.jpeg?q=70",
      price: 49999,
    },
    {
      name: "OPPO A12",
      rating: 3.8,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kb1470w0/mobile/q/g/g/oppo-a12-cph2083-original-imafsh2hfkyamqyt.jpeg?q=70",
      price: 9490,
    },
    {
      name: "ASUS ROG Phone 3",
      rating: 4.9,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kcuug7k0/mobile/g/h/e/asus-rog-phone-3-zs661ks-6a006in-original-imaftwc6nmyuyekd.jpeg?q=70",
      price: 46999,
    },
    {
      name: "DIZO Star 300",
      rating: 3.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/kqpj4i80/mobile/e/i/r/star-300-dh2001-dizo-original-imag4nmpv7zahzs2.jpeg?q=70",
      price: 1299,
    },
    {
      name: "Micromax IN Note 1 ",
      rating: 4.4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ku5ufm80/mobile/v/t/1/in-note-1-e7746-micromax-original-imag7cdgz6tqychm.jpeg?q=70",
      price: 10999,
    },
    {
      name: "SAMSUNG Galaxy Z Fold3 5G",
      rating: 4,
      image_url:
        "https://rukminim1.flixcart.com/image/312/312/ksqeky80/mobile/x/7/1/galaxy-z-fold3-5g-sm-f926bzgdinu-samsung-original-imag68q6hpdwmngw.jpeg?q=70",
      price: 149999,
    },
  ];
  localStorage.setItem("mydata",JSON.stringify(mydata))
  var dis_data=JSON.parse(localStorage.getItem("mydata"))
  display(dis_data)
  function display(dis_data)
  {
    var dis_cont=document.getElementById("cont").innerHTML=""
    //   console.log(dis_data)
    dis_data.forEach((e,i) => {
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
        var add_btn=document.createElement("button")
        add_btn.innerText="Add to Cart"
        add_btn.addEventListener("click",function(){
            tocart(e)
        })
        data_cont.append(pd_img,pd_name,pd_price,pd_rating,add_btn)
        var dis_cont=document.getElementById("cont")
        dis_cont.append(data_cont)

    });
  }
 
document.getElementById("sel").addEventListener("change",function(){
    var sot_val=document.getElementById("sel").value
    if(sot_val=="none"){
        display(dis_data);
    }
    else{
        dis_data.sort(function(a, b) {
            if(sot_val ==='high') {
              return b.price - a.price;
            } 
          
        
               return a.price - b.price;
            
          });
          display(dis_data);
        
    }
})
document.getElementById("sel_rating").addEventListener("change",function(){
    var sot_rating=document.getElementById("sel_rating").value
    if(sot_rating=="none"){
        display(dis_data);
    }
    else{
        dis_data.sort(function(a, b) {
            if(sot_rating ==='high') {
              return b.rating - a.rating;
            } 
          
        
               return a.rating - b.rating;
            
          });
          display(dis_data);
        
    }
})
function tocart(e){
    let arr=localStorage.getItem("mobile")?JSON.parse(localStorage.getItem("mobile")):[];
    arr.push(e)
    localStorage.setItem("mobile",JSON.stringify(arr))
    alert("Add to cart sucessfully")
    
}
// console.log(sort_price_val)



  