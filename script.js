// Linked to html
// Always read getting started 

var searchTerm = "";
console.log (searchTerm,);
var NumberOfRecords = 0;
var StartYear= 0;
var EndYear= 0;

 var APIKey = "W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
 console.log (APIKey);

 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;
 console.log (queryURL, "Only the NY empty search");
// OR put search item at the end. Have to add extra "& " before "q="
// "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +APIKey+  "&q=" +searchTerm+ "&""

// variable to track number of articles
var articleCounter= 0;




// $(document).ready(function () {
    $('#searchBtn').on('click',function () {
        console.log (searchBtn, "button works"); 


      // get element value with jquery
      var searchTerm = $("#searchTerm").val();
      $("#searchTerm").val(""); //not sure what this means
    


    // add in search term 
    console.log ("You searched for", searchTerm);

    // get number of records


    //get the start and end year
    startYear = $('#startYear').val
    endYear = $('#endYear').val

    queryURL = queryURL + '&begin_date=' + startYear + '&end-date' + endYear;





    articleSearch(searchTerm); // if you do NOT add searchTerm here then var searchTerm is not used. will NOT print in console. 
    // Need to take the seachTerm and apply

    return false; 

    });

    function articleSearch (searchTerm) {
        // var APIKey = "W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
        // console.log (APIKey);
       
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;
        console.log (queryURL, "link With the search term"); // taking user input into search 
    // var APIKey = "7W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
    // console.log (APIKey);
    //API key does not print to console inside of the function
    // queryURL does not print inside of the function either. 

        // $.ajax({url: queryURL, method: "GET",})
        //     .then(function(response) {
        //     console.log("This is article search: ",response);
        // });

        // $.ajax({url: queryURL, method: "GET",})
        // // will store the information in the NYData
        // .then(function(NYData) {
        // console.log(NYData);
        // });

        // return false;
        
    }



    // $("#searchBtn").on("click", function() {
    //     alert("test");
    //     // In this case, the "this" keyword refers to the button that was clicked
    //     queryURL(10, queryURL)
    //     return false;
    // });

    // console.log('saveBtn');

    
    // });
    // $('#searchBtn').on('click', function () {
    //     queryURL;


// });
   
