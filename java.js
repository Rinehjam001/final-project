
var story = document.getElementById("story");
var i1 = document.getElementById("i1")
var list = ["story1.pdf","story2.pdf","story3.pdf"];
story.addEventListener("click", function(){
    i1.setAttribute("style", "opacity: 100%");
    i1.setAttribute("className", "fade-in-iframe");
    var dest = prompt("where to?");
    var wrong = true;
    console.log(dest);
    for(var i = 0; i <= 3; i++){
        if(dest == i){
            console.log(dest)
            wrong = false;
            i1.setAttribute("src", list[dest-1])
        }
    }
    if(wrong){
        alert("need a valid number input 1-3");
    }
});