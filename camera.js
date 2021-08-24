var video = document.querySelector("#videoElement");

if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: {facingMode: 'environment'} })
    .then(function (stream) {
      video.srcObject = stream;
    })
    .catch(function (err0r) {
      console.log("Something went wrong!");
    });
}

function feedTheVoid() {
  let filledSpace = document.getElementsByClassName("app").length;
  let root = document.getElementsByClassName("homescreen")[0];
  for( ; filledSpace < 24; filledSpace++) {
    let emptySpace = document.createElement("div");
   emptySpace.setAttribute("class", "app");
    root.append(emptySpace);
  }
}

window.onload = feedTheVoid();