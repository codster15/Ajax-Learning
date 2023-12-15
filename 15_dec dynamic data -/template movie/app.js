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




 var store ; 
var makeTemplateCopy ;
var MakejsonDataCopy ; 
var jsonDataUrl = "http://localhost:8081/Durga%20sir%20web%20course/Ajax/15_dec%20dynamic%20data%20-/movielist.json"

var clickbtn = document.querySelector(".btn")

clickbtn.addEventListener("click" , ()=>{

            document.querySelector(".loadingimg").style.display = "block"
            document.querySelector(".serverdown").style.display = "none"


            $.ajax({
                url : "Movie_template.htm",
                method : "get",
                success : function(template){
                    console.log(template);
                    makeTemplateCopy = template

                    $.ajax({
                        url : jsonDataUrl,
                        method : "get",
                        datatype : "json",
                        success :function(jsonDataReceiving){
                            MakejsonDataCopy = jsonDataReceiving.Movieslist;
                            console.log(MakejsonDataCopy);
                            
                            for( var i = 0 ; i < MakejsonDataCopy.length ; i ++ ){
                                loadAndShowDate(MakejsonDataCopy[i]);
                            }

                            
                        },
                        error : function (error){

                            setTimeout(()=>{
                                document.querySelector(".loadingimg").style.display = "none"
                                document.querySelector(".serverdown").style.display = "block"
                            } , 3000)

                            console.log(error)

                        }
                    })

                },
                error: function(error){

                    console.log(error)
                } 
            })
            


});

var loadAndShowDate = (jsonData)=>{


        var template = Handlebars.compile(makeTemplateCopy);
        var loadtemplateAndJson = template(jsonData);

        setTimeout(()=>{
            document.querySelector(".maincontainer").innerHTML += loadtemplateAndJson;
            document.querySelector(".loadingimg").style.display = "none"
        } , 3000)
       

        console.log(typeof(template));


}


// $.ajax({
//     url : "http://localhost:8081/Durga%20sir%20web%20course/Ajax/13_dec%20dynamic%20data/movielist.json",

//     method : "get",

//     datatype : "json",


//     success : function(resopnse){
//         console.log("Communication Successfull")

//         console.log(resopnse.Movieslist[1]);

//         storeMovieList = resopnse.Movieslist
//         console.log(storeMovieList);
       
//        setTimeout(()=>{
//         for(var i = 0 ; i < storeMovieList.length ; i ++ ){

//             document.querySelector(".loadingimg").style.display = "none"
//             showdata(storeMovieList[i]);  
//         }

//        } , 3000)
  
        
        
//     },

//     error : function(error){

//         setTimeout(()=>{

//         document.querySelector(".loadingimg").style.display = "none"
//         document.querySelector(".serverdown").style.display = "block"
//         console.log("communication failed")
            
//         } , 3000)
   
//     }
// })
