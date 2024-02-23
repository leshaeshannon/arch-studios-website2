const sliderImages = () => {
    var counter = 2;
    const firstLabel = document.getElementById('slide-label1');
    const secondLabel = document.getElementById('slide-label2');
    const thirdLabel = document.getElementById('slide-label3');
    const fourthLabel = document.getElementById('slide-label4');
    firstLabel.classList.add('background_black')
    setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        if (counter == 1) {
            firstLabel.classList.add('background_black')
        } else {
            firstLabel.classList.remove('background_black')
        }
        if (counter == 2) {
            secondLabel.classList.toggle('background_black')
        } else {
            secondLabel.classList.remove('background_black')
        }
        if (counter == 3) {
            thirdLabel.classList.toggle('background_black')
        } else {
            thirdLabel.classList.remove('background_black')
        }
        if (counter == 4) {
            fourthLabel.classList.toggle('background_black')
        } else {
            fourthLabel.classList.remove('background_black')
        }
        counter++;
        if(counter > 4){
            counter = 1;
        }
    },5000);
}

const clickSlider = () => {
    const firstLabel = document.getElementById('slide-label1');
    const secondLabel = document.getElementById('slide-label2');
    const thirdLabel = document.getElementById('slide-label3');
    const fourthLabel = document.getElementById('slide-label4');

    firstLabel.addEventListener('click', function() {
        firstLabel.classList.add('background_black')
        if (secondLabel.classList.contains('background_black')){
            secondLabel.classList.remove('background_black');
        };
        if (thirdLabel.classList.contains('background_black')){
            thirdLabel.classList.remove('background_black');
        };
        if (fourthLabel.classList.contains('background_black')){
            fourthLabel.classList.remove('background_black');
        };
    });

    secondLabel.addEventListener('click', function() {
        secondLabel.classList.add('background_black')
        if (firstLabel.classList.contains('background_black')){
            firstLabel.classList.remove('background_black');
        };
        if (thirdLabel.classList.contains('background_black')){
            thirdLabel.classList.remove('background_black');
        };
        if (fourthLabel.classList.contains('background_black')){
            fourthLabel.classList.remove('background_black');
        };
    });

    thirdLabel.addEventListener('click', function() {
        thirdLabel.classList.add('background_black')
        if (firstLabel.classList.contains('background_black')){
            firstLabel.classList.remove('background_black');
        };
        if (secondLabel.classList.contains('background_black')){
            secondLabel.classList.remove('background_black');
        };
        if (fourthLabel.classList.contains('background_black')){
            fourthLabel.classList.remove('background_black');
        };
    });

    fourthLabel.addEventListener('click', function() {
        fourthLabel.classList.add('background_black')
        if (firstLabel.classList.contains('background_black')){
            firstLabel.classList.remove('background_black');
        };
        if (secondLabel.classList.contains('background_black')){
            secondLabel.classList.remove('background_black');
        };
        if (thirdLabel.classList.contains('background_black')){
            thirdLabel.classList.remove('background_black');
        };
    });

}

const changeImages= () =>  {
    var imgOne = document.getElementById('slider-img1');
    var imgTwo = document.getElementById('slider-img2');
    var imgThree = document.getElementById('slider-img3');
    var imgFourth = document.getElementById('slider-img4');
    if (window.matchMedia("(min-width: 1300px)").matches) {
        imgOne.setAttribute('src', 'assets/home/desktop/image-hero-paramour.jpg');
        imgTwo.setAttribute('src',"assets/home/desktop/image-hero-seraph.jpg");
        imgThree.setAttribute('src',"assets/home/desktop/image-hero-federal.jpg");
        imgFourth.setAttribute('src', "assets/home/desktop/image-hero-trinity.jpg");
    } else if ((window.matchMedia("(max-width: 1300px)").matches) &&
     (window.matchMedia("(min-width: 768px)").matches)) {
        imgOne.setAttribute('src', "assets/home/tablet/image-hero-paramour.jpg");
        imgTwo.setAttribute('src', "assets/home/tablet/image-hero-seraph.jpg");
        imgThree.setAttribute('src', "assets/home/tablet/image-hero-federal.jpg");
        imgFourth.setAttribute('src', "assets/home/tablet/image-hero-trinity.jpg");
    } else if (window.matchMedia("(max-width: 768px)").matches) {
        imgOne.setAttribute('src', "assets/home/mobile/image-hero-paramour.jpg");
        imgTwo.setAttribute('src', "assets/home/mobile/image-hero-seraph.jpg");
        imgThree.setAttribute('src', "assets/home/mobile/image-hero-federal.jpg");
        imgFourth.setAttribute('src', "assets/home/mobile/image-hero-trinity.jpg");
    }
}

sliderImages();
clickSlider();
changeImages();

export { sliderImages };
export { clickSlider };
export { changeImages };