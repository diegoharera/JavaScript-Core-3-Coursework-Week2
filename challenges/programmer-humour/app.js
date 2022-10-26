function setup() {
  fetch("https://xkcd.now.sh/?comic=latest")
    .then(function (response) {
      return response.text();
    })
    .then(function (imageMessage) {
      // Write the code to display the greeting text here
      let img = document.getElementById('images')
      // display.innerText = greeting
      let imageMessage2 = JSON.parse(imageMessage)
      // image.src = imageLink.message;
      img.src = imageMessage2.img;

    })
    // If something goesng","title":"What If? 2 Flowchart","day":"13"} wrong
    .catch((error) => console.log(error));
}
window.onload = setup();