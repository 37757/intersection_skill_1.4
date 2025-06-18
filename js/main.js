let observer = new IntersectionObserver(
    function(entries){
        if(entries[0].isIntersecting === true){
            console.log("voor 50% in beeld!");
            document.getElementsByTagName("main")[0].classList.add("a-popup");
            observer.disconnect();
        }
        else{
            console.log("minder 50%");
        }
    }, {
        threshold: 0.5,
    }
);

observer.observe(document.getElementsByTagName("main")[0]);