// Linked to html
// Always read getting started 

$('#searchBtn').on('click',function () {


var searchTerm = "";
console.log (searchTerm,);
var NumberOfRecords = 0;
var startYear= 0;
var endYear= 0;

 var APIKey = "W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
 console.log (APIKey);

 var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;
 console.log (queryURL, "Only the NY empty search");
// OR put search item at the end. Have to add extra "& " before "q="
// "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" +APIKey+  "&q=" +searchTerm+ "&""

// variable to track number of articles
var articleCounter= 0;


// $(document).ready(function () {
        

        // runQuery (10, queryUrl);
        console.log (searchBtn, "button works"); 


      // get element value with jquery
      searchTerm = $("#searchTerm").val();
      $("#searchTerm").val(""); //not sure what this means
    // add in search term 
        console.log ("You searched for", searchTerm);

        // ***** LEARNING POINT: HAVE TO CALL THE WEBSITE WITHIN FUNCTION TO REGISTER *********
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;


    console.log (queryURL, "This link with searchTerm results ");

    // get number of records


    //get the start and end year
    startYear = $('#startYear').val().trim(); //format has to be month and year 
    endYear = $('#endYear').val().trim(); //format has to be month and year 

    if (parseInt(startYear)) {
        startYear = startYear + "0101";
        queryURL = queryURL + "&begin_date=" + startYear;
    }
    if (parseInt(endYear)) {
        endYear = endYear +"0101";
        queryURL = queryURL + "&end_date=" + endYear; 
    }

    // var newURL= 
    // queryURL = queryURL + "&begin_date=" + startYear + "&end_date=" + endYear;
    console.log (queryURL, "link article with with dates");


    // articleSearch(searchTerm);


    // articleSearch(searchTerm); // if you do NOT add searchTerm here then var searchTerm is not used. will NOT print in console. 
    // Need to take the seachTerm and apply
    // WHEN i comment out line 52 then ajax line line 71 works

    return false; 


   
   


    function runQuery (numArticle, queryURL) {
        var searchTerm = "";
        var NumberOfRecords = 0;

        var APIKey = "W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
        // console.log (APIKey);
       
        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;
        // console.log (queryURL, "2link With the search term"); // taking user input into search 
    
    // console.log (APIKey);
    //API key does not print to console inside of the function
    // queryURL does not print inside of the function either. 

        $.ajax({
            url: queryURL,
             method: "GET",
        }).then(function(NYData) {

        
        console.log(queryUrl);
        console.log(numArticle);
        console.log (NYData, "link with search term");

           
        // })
        // console.log("This is NY article search: ", response);

        articleSearch (searchTerm);
        
    });

    }

});



