    const typed = new Typed(".typed-2", {
        strings: [ "<i>El Capital</i>" ],
        startDelay:300,
        loop: true,
        loopCount: false,
        typeSpeed:400,
        backDelay: 200,
    });

    const navigator= document.getElementById("navigator");
    const navigatorBtn=document.getElementById("navigatorbtn");
    let statusnavigatorChecker= 0;
    const navigatorIcon= document.getElementById("iconmenuBotton");

    navigatorBtn.addEventListener("click", function(){
        if(statusnavigatorChecker==0){
            navigator.classList.remove("unshowed-menu");
            navigator.classList.add("showed-menu");
            statusnavigatorChecker=1;
            // 
            navigatorIcon.classList.remove("icon-menu-botton-waiting");
            navigatorIcon.classList.add("icon-menu-botton-working");
        }
        else{
            navigator.classList.remove("showed-menu");
            navigator.classList.add("unshowed-menu");
            statusnavigatorChecker=0;
            // 
            navigatorIcon.classList.remove("icon-menu-botton-working");
            navigatorIcon.classList.add("icon-menu-botton-waiting");
        }
    });