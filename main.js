let imagePerfil = [];

function showPhoto(event) {
    let imageSource = event.target.result;
    let visualizeImage = document.getElementById("photo")
    visualizeImage.src = imageSource
}

function processImage(event) {
    let image = event.target.files[0];
    let lector = new FileReader();

    lector.addEventListener("load", showPhoto)
    lector.readAsDataURL(image)
    lector.onload = function () {
        localStorage.setItem("photo", JSON.stringify(lector.result))
    }
}

document.getElementById("btn-change").addEventListener("change", processImage)
