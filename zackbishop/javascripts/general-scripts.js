function goURL(url) {
    window.open(url);
}

function showModal(bool) {
    if (bool == true) {
       $('#modalOverlay').css("display", "block");
    } else {
        $('#modalOverlay').css("display","none");
    }
}