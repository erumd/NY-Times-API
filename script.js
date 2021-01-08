// Linked to html

// $(document).ready(function () {
//     $('#search').on('click',function () {
//       // get element value with jquery
//       var searchValue = $("#searchValue").val();
//       $("#searchValue").val("");
//       // run logic to get data from API
//       // tutor help
//       weatherSearch(searchValue);
//     });
  
//       // var input = document.getElementById("myInput");TRYING TO GET ENTER KEY TO WORK
//       $("searchValue").keypress(function (event) {
//         if (event.keyCode === 7) {
//           event.preventDefault();
//           $("#search").click();
//         }
//       });

var searchTerm = "";
var NumberOfRecords = 0;
var StartYear= 0;
var EndYear= 0;

 var APIKey = "7W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
 console.log (APIKey);

 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;
 console.log (queryURL);
// OR put search item at the end. Have to add extra "& " before "q="
// "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +APIKey+  "&q=" +searchTerm+ "&""

// variable to track number of articles
var articleCounter= 0;


    function queryURl (numArticles, queryURL) {
    // var APIKey = "7W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
    // console.log (APIKey);
    //API key does not print to console inside of the function
    // queryURL does not print inside of the function either. 

        // $.ajax({url: queryURL, method: "GET",})
        //     .then(function(response) {
        //     console.log("This is article search: ",response);
        // });

        $.ajax({url: queryURL, method: "GET",})
        // will store the information in the NYData
        .then(function(NYData) {
        console.log(NYData);
        });

        return false;
        
    }



    // $("searchBtn").on("click", function() {
    //     // In this case, the "this" keyword refers to the button that was clicked
    //     queryURL(10, queryURL)
    
    // });
    // $('#searchBtn').on('click', function () {
    //     queryURL;
    // });
