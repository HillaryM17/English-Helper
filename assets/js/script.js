//text to speech API
const speechURL = 'https://voicerss-text-to-speech.p.rapidapi.com/?key=%3CREQUIRED%3E&src=Hello%2C%20world!&hl=en-us&r=0&c=mp3&f=8khz_8bit_mono';
const speechOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '6258e18b25mshd96a594dcf7fcb5p1b1fd6jsn955bae6d8f8b',
      'X-RapidAPI-Host': 'voicerss-text-to-speech.p.rapidapi.com'
   }
};
const wordsURL = 'https://wordsapiv1.p.rapidapi.com/words/incredible/definitions';
const wordsOptions = {
   method: 'GET',
   headers: {
      'X-RapidAPI-Key': '6258e18b25mshd96a594dcf7fcb5p1b1fd6jsn955bae6d8f8b',
      'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
   }
};

//$(".search-button").on("click", function () {

//});

function populateSearchHistory() {
   // Get a string from local storage
   let getPreviousSearches = localStorage.getItem("selectedWord");
   getPreviousSearches = JSON.parse(getPreviousSearches);
   // Check if getPreviousSearches is an array
   if (Array.isArray(getPreviousSearches) && getPreviousSearches.length > 0) {
      //const searchButtons = ["button1", "button2", "button3"];
      // Loop through the buttons and update their text content
      for (let i = 0; i < getPreviousSearches.length && i < searchButtons.length; i++) {
         const newValue = getPreviousSearches[i];
         $("div#search-history-items").add("div").addClass("rounded-pill search-history-item w-100 d-flex align-items-center justify-content-between py-1");
         $("div.").add("p").addClass("m-0");
         $("p.m-0").text = newValue;
      }
   }
}

function populateDefinition(data, selectedWord) {
   selectedWord = selectedWord || "Select a word";
   $("#selectedWord").text = selectedWord;// chg to HTML
   $("#description").text = data;
   populateSearchHistory();
};

function getPronunciation(selectedWord) {
   fetch(speechURL, speechOptions).then(function (response) {
      console.log(response)
   })
   populateDefinition(data, selectedWord)
};

function getDescription(selectedWord) { // was onsearch()
   fetch(wordsURL, wordsOptions).then(function (response) {
      return response.json()
   }).then(function (data) {
      console.log("words data: ", data);
   })
   getPronunciation()
};

// Needs a butten in the HTML with id clearAllButton
// Add a click event handler to clear localstorage
$("#clearAllButton").on("click", function (event) {
   event.preventDefault;
   localStorage.clear();
   location.reload(true);
});

$("#search").on("change", function (event) {
   event.preventDefault();
   // This line grabs the input from the textbox
   let selectedWord = $("#search-input").val().trim();
   if (selectedWord) {
      getDescription(selectedWord); // change from
   } else {
      alert("You need to input a word");//change to modal?
      return false;
   }
});

