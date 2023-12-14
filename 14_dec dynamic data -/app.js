// <!-- <ul class="ultag">
// <li>
//     <img src="https://variety.com/wp-content/uploads/2022/12/Animal-first-look.jpg" alt="" />
// </li>

// <li>
//     <span> Movie Name - </span>
//     <span class="moviename"> Animal</span>
// </li>


// <li>
//     <span> Release Year - </span>
//     <span class="movieyear"> 2023 </span>
// </li>

// <li>
//     <span> Total Collection - </span>
//     <span class="movieCollection"> 700cr </span>
// </li>
// </ul> -->


var storeMovieList = []

var showdata = (object)=>{



        console.log(object);

    var ultag = document.createElement ("ul") ;
    ultag.setAttribute("class" , "ultag");
    
    // li 1
    
    var li1 = document.createElement ("li") ; 
    
    var img = document.createElement("img");
    img.setAttribute("src", object.image )
    li1.append(img);
    
    ultag.append(li1);
    
    
    // li2
    
    var li2 = document.createElement ("li"); 
    
    var span1 = document.createElement ("span"); 
    span1.innerHTML = " Movie Name - ";
    li2.append(span1)
    
    var span2 = document.createElement ("span"); 
    span2.setAttribute("class" , "moviename");
    span2.innerHTML = object.movieName;
    li2.append(span2)
    
    ultag.append(li2);
    
    
    
    // li 3
    
    var li3 = document.createElement ("li"); 
    
    var span3 = document.createElement ("span"); 
    span3.innerHTML = " Release Year - "
    li3.append(span3)
    
    var span4 = document.createElement ("span"); 
    span4.setAttribute("class" , "movieyear");
    span4.innerHTML = object.ReleaseYear;
    li3.append(span4)
    
    ultag.append(li3);
    
    
    // li 4
    
    var li4 = document.createElement ("li"); 
    
    var span5 = document.createElement ("span"); 
    span5.innerHTML = " Total Collection - "
    li4.append(span5)
    
    var span6 = document.createElement ("span"); 
    span6.setAttribute("class" , "moviecollection");
    span6.innerHTML = object.TotalCollection;
    li4.append(span6)
    
    ultag.append(li4);
    
    // -------------------------------------------
    
    document.querySelector(".maincontainer").append(ultag)



}


 var store ; 



var clickbtn = document.querySelector(".btn")

clickbtn.addEventListener("click" , ()=>{

            document.querySelector(".loadingimg").style.display = "block"
            document.querySelector(".serverdown").style.display = "none"

    $.ajax({
        url : "http://localhost:8081/Durga%20sir%20web%20course/Ajax/13_dec%20dynamic%20data/movielist.json",
    
        method : "get",
    
        datatype : "json",
    
    
        success : function(resopnse){
            console.log("Communication Successfull")
    
            console.log(resopnse.Movieslist[1]);
    
            storeMovieList = resopnse.Movieslist
            console.log(storeMovieList);
           
           setTimeout(()=>{
            for(var i = 0 ; i < storeMovieList.length ; i ++ ){
    
                document.querySelector(".loadingimg").style.display = "none"
                showdata(storeMovieList[i]);  
            }
    
           } , 3000)
      
            
            
        },
    
        error : function(error){

            setTimeout(()=>{

            document.querySelector(".loadingimg").style.display = "none"
            document.querySelector(".serverdown").style.display = "block"
            console.log("communication failed")
                
            } , 3000)
       
        }
    })
    
});