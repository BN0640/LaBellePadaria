
function uploadFile(image){
    var fileInput = document.getElementById('file-input');
    fileInput.addEventListener("change", function() {
        var file = fileInput.files[0];
        var reader = new FileReader();
        reader.addEventListener("load", function(){
            image.src = reader.result;
        })
        reader.readAsDataURL(file);
    });
    var event = new Event('change');
    fileInput.dispatchEvent(event);
};

function refreshItem(){
    var title = document.getElementById('aid-title').innerHTML = document.getElementById('title-input');
}