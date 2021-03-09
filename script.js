document.getElementById("submit").addEventListener("click", function() {
  const message = document.getElementById("message")

  if(message.value.length >= 20) {
    
    let messageWords = []
    let theMostFrequentWord;
    
    messageWords = message.value.split(" ");
    for (let i = 0; i < messageWords.length; i++) {
      messageWords[i] = messageWords[i].toLowerCase();
    }

    theMostFrequentWord = modeString(messageWords);
    numberOfElementsInTheArray = messageWords.length;
    console.log(`The most frequent word of the message is "${theMostFrequentWord.split(" ")[0]}"`)
    console.log(`The number of words in the message is ${numberOfElementsInTheArray}`);
    
    const phrases = [
      {
        "phrase": "A wizard is never late, nor is he early. He arrives precisely when he means to.",
        "src": "1.jpg"
      },
      {
        "phrase": "We must all face the choice between what is right and what is easy.",
        "src": "2.jpg"
      },
      {
        "phrase": "You are a wizard, Harry",
        "src": "3.jpg"
      }
    ];

    const randomPhrase = Math.floor(Math.random() * (2 - 0 + 1)) + 0;

    document.getElementById("phrase").innerText = phrases[randomPhrase].phrase;
    document.getElementById("picture").src = phrases[randomPhrase].src;
    

    // // Random phrases and its pictures (represented as an array of objects)
    // imagesArray = new Array(3);
    // imagesArray[0] = new Image();
    // imagesArray[0].src = new "1.jpg";
    // imagesArray[1] = new Image();
    // imagesArray[1].src = new "2.jpg";
    // imagesArray[2] = new Image();
    // imagesArray[2].src = new "3.jpg";
    
    // function displayImage() {
    //   var num = Math.floor(Math.random());
    //   document.getElementById(imagesArray[num]);
    // }
  }
  else {
    alert("the input message must be at least 20 characters long");
  }
 
});

function modeString(array) {
  if (array.length == 0) return null;

  var modeMap = {},
    maxEl = array[0],
    maxCount = 1;

  for (var i = 0; i < array.length; i++) {
    var el = array[i];

    if (modeMap[el] == null) modeMap[el] = 1;
    else modeMap[el]++;

    if (modeMap[el] > maxCount) {
      maxEl = el;
      maxCount = modeMap[el];
    } else if (modeMap[el] == maxCount) {
      maxEl += " " + el;
      maxCount = modeMap[el];
    }
  }
  return maxEl;
}