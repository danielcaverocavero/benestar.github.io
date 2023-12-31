window.addEventListener('load', () => {


    // initial slide
    let slide = 0;

    // total slides
    let slides = document.querySelectorAll(".slider ul li");
    total = slides.length;

    // show first side
    //showSlide(1);

    next = document.querySelector(".next");
    prev = document.querySelector(".prev")
    
    // showSlideContinue();


    /**
     * event next button
     */
    next.addEventListener('click', (evt) => {
        evt.preventDefault();
        slide++;
        if (slide > total) { slide = 1; }
        showSlide(slide);
    })

    /** 
     * event prev button
     */
    prev.addEventListener("click", (evt) => {
        evt.preventDefault();
        slide--;
        if (slide < 1) { slide = total; }
        showSlide(slide);
    })

    /**
     * show slides
     * 
     * @param {number} n 
     * @return {null}
     * 
     */
    function showSlide(n) {
        n--; // decrement 1
        for (i = 0; i < slides.length; i++) {
            (i == n) ? slides[n].style.display = "block" : slides[i].style.display = "none";
        }          
    } 

    // slideshow automatico // 
    
    function showSlideContinue(){        
        
        let slides = document.querySelectorAll(".slider ul li");
        for (let i = 0; i < slides.length; i++) {
                slides[i].style.display="none";
        }
        slide++;
        if(slide>slides.length){
            slide=1;
        }
        slides[slide-1].style.display="block";
        setTimeout(showSlideContinue,4000);

    };
    

})