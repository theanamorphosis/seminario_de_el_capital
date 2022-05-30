let closerFullphoto=document.getElementById("closer_fullphoto");
let fullphotoWindow=document.getElementById("fullphoto_window");
closerFullphoto.addEventListener("click", function(){
        fullphotoWindow.classList.remove("showed-fullphoto-window");
        fullphotoWindow.classList.add("unshowed-fullphoto-window");
});

let fullphotoObject=document.getElementById("fullimage");
function openFullphoto(reference){
    fullphotoWindow.classList.remove("unshowed-fullphoto-window");
    fullphotoWindow.classList.add("showed-fullphoto-window");
    fullphotoObject.src=reference;
}; 
