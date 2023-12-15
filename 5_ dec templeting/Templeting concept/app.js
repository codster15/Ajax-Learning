




// let's start

// 3rd party apis -handlebar


// inorder to do templating few steps need to be follow


//         take the static template 
//         fill the dynamic data ( --data--) within static template 
//         show the template with data on the page 

// ============================================================================================



// template structure--> html file got loaded------

    // var scoolTemplateStructure;
    // $.ajax({

    //   url: "htmlTemplet/product_Template.htm",

    //   method: "GET",

    //   success(responseTemplate) {
    //     scoolTemplateStructure = responseTemplate;
    //     // console.log(scoolTemplateStructure);
    //   },
    //   error(error) {
    //     console.log(error);
    //   },
    // });

// ===========================================================







// filling data in html template...........

// var loadData  = (schoolList) => {

//   var template = Handlebars.compile(scoolTemplateStructure); 
//   console.log(template);
//   var SchoolTemplateWithData =  template(schoolList)
  
//   document.querySelector(".maincontainer").append(SchoolTemplateWithData);

// }
// =================================================================================




// var responseSave = [];

// var storeSchoollist = [];

// var btn = document.querySelector(".btn");




// fetching the data from the server-----------------

// btn.addEventListener("click", () => {
//   myurl =
//     "http://localhost:8081/Durga%20sir%20web%20course/Ajax/ajax%203dec%202023/school%20project%20%20ajax%20call%20%20show%20error%20loading%20msg/urlData.json";

//   document.querySelector(".showloading").style.display = "block";



//   $.ajax({
//     url: myurl,

//     method: "GET",
//     datatype: "JSON",
//     success: function (response) {
//       responseSave = response.schoolList;
//       console.log(response);
//       setTimeout(() => {
//         document.querySelector(".showloading").style.display = "none";
//         storeSchoollist = response.schoolList;

       
//         loadData()


        
//       }, 2000);
//     },

//     error: function (error) {
//       setTimeout(() => {
//         document.querySelector(".showloading").style.display = "none";
//         document.querySelector("#showerror").innerHTML =
//           "Server is not Responding try After Some time ...!";
//         document.querySelector("#showerror").style.display = "block";
//         console.log("Failed");
//         console.log(error);
//       }, 2000);
//     },
//   });
// });






var scoolTemplateStructure;
var responseSave = [];
var storeSchoollist = [];
var btn = document.querySelector(".btn");



  




btn.addEventListener("click", () => {
  var myurl =
    "http://localhost:8081/Durga%20sir%20web%20course/Ajax/ajax%203dec%202023/school%20project%20%20ajax%20call%20%20show%20error%20loading%20msg/urlData.json";

  document.querySelector(".showloading").style.display = "block";

  $.ajax({
    url: "htmlTemplet/product_Template.htm",
    method: "GET",
    success(responseTemplate) {
      
      scoolTemplateStructure = responseTemplate;    // template got loaded and make a copy in --> ( scoolTemplateStructure ) .


      // Now that the template is loaded, make the second AJAX call
      $.ajax({
        url: myurl,
        method: "GET",
        datatype: "JSON",
        success: function (response) {
          responseSave = response.schoolList;  // school list data got stored in (responseSave)
          console.log(responseSave);

          setTimeout(() => {
            document.querySelector(".showloading").style.display = "none";
            storeSchoollist = response.schoolList;

            // Call the loadData function inside the success callback

       
            for(var i = 0 ; i < responseSave.length ; i++){
              loadData(storeSchoollist[i]);
            }
              
            

            
          }, 2000);
        },

        error: function (error) {
          setTimeout(() => {
            document.querySelector(".showloading").style.display = "none";
            document.querySelector("#showerror").innerHTML =
              "Server is not Responding try After Some time ...!";
            document.querySelector("#showerror").style.display = "block";
            console.log("Failed");
            console.log(error);
          }, 2000);
        },
      });
    },
    error(error) {
      console.log(error);
    },
  });
});



var loadData = (schoolList) => {
  var template = Handlebars.compile(scoolTemplateStructure);   // handle bar is saying if you have the template give it to me i will compile it

  console.log(typeof(template));
  var SchoolTemplateWithData = template(schoolList);  // now you have compiled template give me the json and my responsibilty is make the look and feel  (template (schoolList)) --> this is what we have did ==>   var SchoolTemplateWithData = template(schoolList);

  document.querySelector(".maincontainer").innerHTML += SchoolTemplateWithData; // += plus is most important because withoutusing plus ---> every iteration loadData(storeSchoollist[i]); this will override 
}





