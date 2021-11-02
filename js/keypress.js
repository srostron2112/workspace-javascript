function showkeyCode(e) {
    var lastkeyE = document.getElementById('lastKey');
    lastkeyE.textContent = "last key in ASCII code : " + e.keyCode;

}

//bind this action
$('#message').keyup(showkeyCode);

// press s key, move the plus sign
var posX = 100;
var posY = 10;

function moveIt(e){
    if (e.key = "s") {
        //animation
        $('img').animate({left: "400px"},500,'linear');
    }
    else if (e.key = "ArrowUp") {
        $('img').animate({right: "400px"},500,'linear');
    }

}

document.addEventListener('keydown', moveIt);

function showMouse(e){
    var lastKeyE = document.getElementById('lastKey');
    lastKeyE.textContent = "postion (" + e.pageX + " , " + e.pageY + ")";
}

document.addEventListener('mousemove', showMouse);