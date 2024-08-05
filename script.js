const slides = document.querySelectorAll(".slide");

var counter = 0;

slides.forEach(
    (slide,index) =>{
        slide.style.bottom = `${index *100}%` //moving every image to the left of previous image
    }
)

const slideImage = () =>{
    slides.forEach(
        (slide) =>{
            slide.style.transform=`translateY(+${counter*100}%)`
        }
    )
}

const goNext = () =>{
    if(counter >= slides.length - 1) return;
    counter++;
    slideImage();
}

const goPrev = () =>{
    if(counter==0) return;
    counter--;
    slideImage();
}