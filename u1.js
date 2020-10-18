//var currentShown = 0;
//
//window.onload = function (){
//    document.getElementById("title").innerHTML = 'Image: ' + currentShown;
//    console.log(title);
//    document.getElementById("img0").classList.remove("hideImage");
//};
//
//
//function previousImage() {
//    let currentImage = "img" + currentShown;
//    let imageCount = currentShown <= 0 ? 4 : currentShown - 1; 
//    let previousImage = "img" + imageCount;
//    currentShown = imageCount;
//    document.getElementById(currentImage).classList.add("hideImage");
//    document.getElementById(previousImage).classList.remove("hideImage");
//    document.getElementById("title").innerHTML = 'Image: ' + currentShown;
//    console.log("prev: " + currentShown);
//}
//
//function nextImage() {
//    let currentImage = "img" + currentShown;
//    let nextImage = "img" + ((currentShown + 1)%5);
//    currentShown = (currentShown + 1)%5;
//    document.getElementById(currentImage).classList.add("hideImage");
//    document.getElementById(nextImage).classList.remove("hideImage");
//    console.log("next: " + currentShown);
//    document.getElementById("title").innerHTML = 'Image: ' + currentShown;
//
//}
