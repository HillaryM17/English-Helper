var searchInput = $("#search");
var wordDefinitionArea = $(".definition"); // to be amended 
var wordPronunciationArea = $("#audio");
var wordExamples = $("#examples");
var historyContainer = $(".previous-searches"); 
var searchButton = $("#search-button"); 
var history = [];
var favourites = [];


const speechURL = "https://voicerss-text-to-speech.p.rapidapi.com/?key=171ec3cab6f247b4b6e7f596d9171ae7&src=" + searchWord + "&hl=en-us&r=0&c=mp3&f=8khz_8bit_mono";
const speechOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6258e18b25mshd96a594dcf7fcb5p1b1fd6jsn955bae6d8f8b',
		'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
	}
};

const wordsURL = "https://wordsapiv1.p.rapidapi.com/words/" + searchWord + "/definitions";
const wordsOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '6258e18b25mshd96a594dcf7fcb5p1b1fd6jsn955bae6d8f8b',
		'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
	}
};

//$(".search-button").on("click", function () {
    
  //});


  function onsearch() {
   
         fetch(wordsURL, wordsOptions).then(function(response){
            return response.json()
         }) .then(function(data){
            console.log("words data: ",data);
         })

    
         fetch(speechURL, speechOptions).then(function(response){
            console.log(response)           
        })
    
  };

  onsearch();



//wordsapi



