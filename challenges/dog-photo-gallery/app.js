function displayPhoto() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(function (response) {
      return response.text();
    })

    .then(function (photo) {
      // Write the code to display the greeting text here
      let display = document.querySelector('#ul');
      // display.innerText = greeting
      let image = document.createElement('img');
      image.setAttribute("style", "margin-top: 80px;");

      const imageLink = JSON.parse(photo)
      image.src = imageLink.message;

      display.appendChild(image)

      let div = document.querySelector(".container");
      div.appendChild(img);
      div.setAttribute("style", "text-align:center");

    })
    // If something goes wrong
    .catch((error) => console.log(error));

}
document.querySelector('.btn-success').addEventListener("click", displayPhoto());