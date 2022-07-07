setTimeout("moveObject()", 10);
function moveObject() {
     $('.object').css("left", parseInt($('#object').css("left")) + 1);
}
