// 1
let elSliderImg = document.querySelectorAll('.slider__img');
let elActiveImg = document.querySelector('.active_img');
let elSliderBtn = document.querySelectorAll('.slider__btn');

// 2
let elSliderImgTwo = document.querySelectorAll('.slider__imgTwo');
let elActiveImgTwo = document.querySelector('.active_img2');
let elSliderBtnTwo = document.querySelectorAll('.slider__btnTwo');

// 3
let elSliderImgThree  = document.querySelectorAll('.slider__imgThree');
let elActiveImgThree = document.querySelector('.active_img3');
let elSliderBtnThree  = document.querySelectorAll('.slider__btnThree');

// 1
for(let i = 0; i < elSliderBtn.length; i++) {

    elSliderBtn[i].addEventListener('click', function() {

        for(let x = 0; x < elSliderBtn.length; x++) {
            elSliderBtn[x].classList.remove('active__btn');                 
        }

        elSliderBtn[i].classList.add('active__btn');   
    })
    
    for(let y = 0; y < elSliderImg.length; y++) {
        elSliderBtn[i].addEventListener('click', function () {
            
            for(let x = 0; x < elSliderImg.length; x++) {
                elSliderImg[x].classList.remove('active_img');
         }
         
         elSliderImg[i].classList.add('active_img');
        })
    }
}


// 2
for(let i = 0; i < elSliderBtnTwo.length; i++) {

    elSliderBtnTwo[i].addEventListener('click', function() {

        for(let x = 0; x < elSliderBtnTwo.length; x++) {
            elSliderBtnTwo[x].classList.remove('active__btn2');                 
        }

        elSliderBtnTwo[i].classList.add('active__btn2');   
    })
    
    for(let y = 0; y < elSliderImgTwo.length; y++) {
        elSliderBtnTwo[i].addEventListener('click', function () {
            
            for(let x = 0; x < elSliderImgTwo.length; x++) {
                elSliderImgTwo[x].classList.remove('active_img2');
         }
         
         elSliderImgTwo[i].classList.add('active_img2');
        })
    }
}


// 3
for(let i = 0; i < elSliderBtnThree.length; i++) {

    elSliderBtnThree[i].addEventListener('click', function() {

        for(let x = 0; x < elSliderBtnThree.length; x++) {
            elSliderBtnThree[x].classList.remove('active__btn3');                 
        }

        elSliderBtnThree[i].classList.add('active__btn3');   
    })
    
    for(let y = 0; y < elSliderImgThree.length; y++) {
        elSliderBtnThree[i].addEventListener('click', function () {
            
            for(let x = 0; x < elSliderImgThree.length; x++) {
                elSliderImgThree[x].classList.remove('active_img3');
         }
         
         elSliderImgThree[i].classList.add('active_img3');
        })
    }
}