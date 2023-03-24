
function uploadFile(path){
    var fileInput = document.getElementById('file-input');
    fileInput.addEventListener("change", function() {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function(){
            path.src = reader.result;
        })
        reader.readAsDataURL(file);
    });
    var event = new Event('change');
    fileInput.dispatchEvent(event);
};

function refreshTitleText(){
    titleText = document.getElementById('title-input').value
    document.getElementById("title-output").innerText = titleText
}
function refreshDescriptionText(){
    descriptionText = document.getElementById('description-input').value
    document.getElementById("description-output").innerText = descriptionText
}
function refreshPriceText(){
    priceText = document.getElementById('price-input').value
    document.getElementById("price-output").innerText = priceText
}
function refreshAvailableText(){
    availableText = document.getElementById('available-input').value
    document.getElementById("available-output").innerText = availableText
}
function refreshColorTitle(){
    color_title = document.getElementById('color-picker-title').value
    document.getElementById("title-output").style.color = color_title
}
function refreshColorDescription(){
    color_description = document.getElementById('color-picker-description').value
    document.getElementById("description-output").style.color = color_description
}
function refreshColorPrice(){
    color_price = document.getElementById('color-picker-price').value
    document.getElementById("price-output").style.color = color_price
}
function refreshColorAvailable(){
    color_available = document.getElementById('color-picker-available').value
    document.getElementById("available-output").style.color = color_available
}
function refreshColorBg(){
    color_bg = document.getElementById('color-picker-bg').value
    document.getElementById("pv-description").style.backgroundColor = color_bg  
}