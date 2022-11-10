let offset = 0 ; //смещение от левого края
const sliderLine= document.querySelector('.features__slider__line')
document.querySelector('.features__slider__button__left').addEventListener('click',function (){
    offset= offset+288; //offset+ширина картинки
    //смещение не должно быть больше ширины к-ва картинок-1 картинка = закицливание слайдера
    if (offset>288){
        offset =0;
    }
    sliderLine.style.left = -offset +'px'
})
document.querySelector('.features__slider__button__right').addEventListener('click',function (){
    offset= offset-288; //offset+ширина картинки
    //смещение не должно быть больше ширины к-ва картинок-1 картинка = закицливание слайдера
    if (offset<0){
        offset =288;
    }
    sliderLine.style.left = -offset +'px'
})
