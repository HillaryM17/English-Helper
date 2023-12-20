


// Hello World!

  

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



