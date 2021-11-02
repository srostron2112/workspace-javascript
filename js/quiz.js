// event click
function changestyle(e){
    //this ---> represents the element

    //e ---> event triggered
    e.preventDefault();
    //if the class is answer,
    var currenctclass = this.getAttribute('class');
    // if answer isn't selected change it to selected
    // else revert back to unselect
    if (currenctclass == "answer") {
        this.setAttribute('class',"answer selected");
        
    }
    else{
        this.setAttribute('class',"answer");
        this.children[0].children[0].checked = false;
    }
    this.children[0].children[0].checked = true;
        var staterotation="rotate(360deg)";
        this.animate([{transform: 'rotate(0deg)'},{transform:'rotate(180deg)'}],{duration:3000,fill:"forwards"});
}


// change style when clicked
var elist = document.getElementsByClassName("answer");
for(var i = 0; i<elist.length; i++) {
    elist[i].addEventListener('click',changestyle);
}