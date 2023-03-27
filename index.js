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

function refresh(){
    titleText = document.getElementById('title-input').value
    document.getElementById("title-output").innerText = titleText

    descriptionText = document.getElementById('description-input').value
    document.getElementById("description-output").innerText = descriptionText

    priceText = document.getElementById('price-input').value
    document.getElementById("price-output").innerText = priceText

    availableText = document.getElementById('available-input').value
    document.getElementById("available-output").innerText = availableText

    color_title = document.getElementById('color-picker-title').value
    document.getElementById("title-output").style.color = color_title

    color_description = document.getElementById('color-picker-description').value
    document.getElementById("description-output").style.color = color_description

    color_price = document.getElementById('color-picker-price').value
    document.getElementById("price-output").style.color = color_price

    color_available = document.getElementById('color-picker-available').value
    document.getElementById("available-output").style.color = color_available
}

function refreshBg(){
    color_bg = document.getElementById('color-picker-bg').value
    document.getElementById("pv-description").style.backgroundColor = color_bg  
}
function changeCheckbox(){
    checkBox = document.getElementById("tranparent-checkbox");
    description = document.getElementById("pv-description");
    imgBox = document.getElementById("pv-img-box")
    if (checkBox.checked) {
        description.style.backgroundColor = "#10101000";
        description.style.borderTop = "none"
        imgBox.style.height = "100%"
    } else {
        description.style.backgroundColor = "#101010";
        description.style.borderTop = "1px solid #FFFFFF"
        imgBox.style.height = "60%"
    };
    
}