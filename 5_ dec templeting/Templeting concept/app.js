// let's start

// 3rd party apis -handlebar


// inorder to do templating few steps need to be follow


        //take the static template 
        //fill the dynamic data ( --data--) within static template 
        //show the template with data on the page 

// ============================================================================================



// template structure--> html file got loaded------

    var scoolTemplateStructure;
    $.ajax({
      url: "htmlTemplet/product_Template.htm",
      method: "GET",

      success(responseTemplate) {
        scoolTemplateStructure = responseTemplate;
        console.log(scoolTemplateStructure);
      },
      error(error) {
        console.log(error);
      },
    });
// ===========================================================







// filling data in html template...........

var loadData  = (schoolList) => {
  
  var template = Handlebars.compile(scoolTemplateStructure); 
  // console.log(template);
  var SchoolTemplateWithData =  template(schoolList)

  document.querySelector(".maincontainer").append(SchoolTemplateWithData);

}
// =================================================================================




var responseSave = [];

var storeSchoollist = [];

var btn = document.querySelector(".btn");




// fetching the data from the server-----------------

btn.addEventListener("click", () => {
  myurl =
    "http://localhost:8081/Durga%20sir%20web%20course/Ajax/ajax%203dec%202023/school%20project%20%20ajax%20call%20%20show%20error%20loading%20msg/urlData.json";

  document.querySelector(".showloading").style.display = "block";



  $.ajax({
    url: myurl,

    method: "GET",
    datatype: "JSON",
    success: function (response) {
      responseSave = response.schoolList;
      console.log(response);
      setTimeout(() => {
        document.querySelector(".showloading").style.display = "none";
        storeSchoollist = response.schoolList;

        console.log(storeSchoollist);
        loadData()


        
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
});
