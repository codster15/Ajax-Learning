

var myurl = "http://localhost:8081/Ajax/Ajax%2030-11-2023/Ajax%20call%20full%20dynamic%20through%20server/pdetails.json"


myurl = "http://localhost:8081/Durga%20sir%20web%20course/Ajax/Ajax%202%20dec%202023/Ajax%20call%20full%20dynamic%20through%20server%202%20dec%202023/pdetails.json"


 
 var product = [];

 var productdetails = (product) => {

/**
 * <ul class="pdetails">



    <li>Product name : </li>

    <li>Product price: </li>
    <span class="actual"></span>
    <span class="discount"></span>


    <li>Manufacturer :</li>


    <li>Rating : </li>


    <li><img src="" alt=""></li>


</ul>

 * 
 * 
 */






    var ultag = document.createElement("ul");
    ultag.setAttribute("class", "pdetails");


    var li1 = document.createElement("li")
    li1.innerText = "product name : " +  product.productname;
    ultag.append(li1);

    var li2 = document.createElement("li");
    li2.innerText = 'Product Price : ';
    

    var span1 = document.createElement("span");
    span1.setAttribute("class", "actual")
    span1.innerText = product.actualprice;
    li2.append(span1);

    var span2 = document.createElement("span");
    span2.setAttribute("class", "discount")
    span2.innerText = product.actualprice - (product.actualprice * product.discount) / 100;
    li2.append(span2);

    ultag.append(li2);  

    var li3 = document.createElement("li");
    li3.innerHTML = "manufacturer : " + product.manufacturer;
    ultag.append(li3);

    var li4 = document.createElement("li");
    li4.innerHTML = "Rating : " + product.rating;
    ultag.append(li4);

    var li5 = document.createElement("li");
    ultag.append(li5);
     
    var imgtag = document.createElement("img");
    imgtag.setAttribute("src" , product.Image);
    li5.append(imgtag);

   

     
    document.querySelector(".productcontainer").append(ultag);

 }


 var getDetailsFromServer = ()=>{
   
   
      $.ajax({
         url : myurl,
         method : "GET",
         datatype : "json",
         success : (response)=>{
            console.log("welcome")
            

            product = response.productList;
            
            
            for(var i = 0; i < product.length ; i++ ){

               
               productdetails(product[i])
               console.log(response.productList[i]);


            }
           
          
         
         },
         error(error){
            console.log("failed");
         }

    
     
      })



  
 }

 



//  for(var i = 0; i < product.length ; i++ ){


//    productdetails(product[i]);
// }

 

 


 