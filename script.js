// Linked to html
// Always read getting started 




var searchTerm = "";
var numResults = 0;
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



    function runQuery (numArticle, queryURL) {
        // var searchTerm = "";

        // var APIKey = "W5lPM8CLniwWl0pIXqH00aXvT8feUKyz";
        // // console.log (APIKey);
       
        // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&api-key=" + APIKey;
        // console.log (queryURL, "2link With the search term"); // taking user input into search 
    
    // console.log (APIKey);
    //API key does not print to console inside of the function
    // queryURL does not print inside of the function either. 

        $.ajax({
            url: queryURL,
             method: "GET",
        }).then(function(NYData) {


            // clear the wells from the previous run
            $('#wellSection').empty();

        for (var i=0; i<numArticle; i++) {
            console.log("headline)");
            console.log(NYData.response.docs[i].headline.main)
            console.log(NYData.response.docs[i].section.main);
            console.log(NYData.response.docs[i].pub_date);
            console.log(NYData.response.docs[i].byline.original);
            console.log(NYData.response.docs[i].web_url);




            // start dumping to HTML here
            var wellSection = $('<div>');
            wellSection.addClass("well");
            wellSection.attr('id', (wellSection));
            $('wellSection').append(wellSection);

            // check if things exist 
            if(NYData.response.docs[i].headline != "null") {
                console.log(NYData.response.docs[i].byline.original);
                $('#articleWell' + i).append('<h3>' + NYData.responsr.docs[i].headline.main+ "</h3>");
            }

            if(NYData.response.docs[i] && NYData.response.docs[i].byline.hadOwnProperty('original')){
                console.log(NYData.response.docs[i].byline.original);
            }

            // attach content to approprraiate well
            $('#articleWell-' + i).append("<h3>" + NYData.response.docs[i].headline.main + "</h3>");
            $('#articleWell-' + i).append("<h5>" + NYData.response.docs[i].section_name + "</h5>");
            $('#articleWell-' + i).append("<h5>" + NYData.response.docs[i].pub_date + "</h5>");
            $('#articleWell-' + i).append("<h5>" + NYData.response.docs[i].byline.original + "</h5>");
            $('#articleWell-' + i).append("<a href=" + NYData.response.docs[i].web_url + ">" + NYData.response.docs[i].web_url + "<a>");

        }
        })

        
        console.log(queryUrl);
        console.log(numArticle);
        console.log (NYData, "link with search term");
        // })
        // console.log("This is NY article search: ", response);
        // articleSearch (searchTerm);
        
    };

    $('#searchBtn').on('click',function () {
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
    numResults = $('#numberRecords').val();

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

    runQuery (numResults, queryURL); //******************************************ERROR */

    return false; 
});

    





