document.getElementById('hamburger').addEventListener('click', navStatus);

function navStatus() {
    if (document.body.classList.contains('hamburger-active')) {
        navClose();
    }
    else {
        navOpen();
    }
}

function navClose() {
    $('body').removeClass('active-menu')
    document.body.classList.remove('hamburger-active');
}

function navOpen() {
    $('body').addClass('active-menu')
    document.body.classList.add('hamburger-active');
    var height = $('header').innerHeight();
    var height2 = $('.header-bottom').innerHeight();
    if($('body').hasClass('fixed')){
        $('.header-bottom__container').css({'top':height2+'px', 'height': 'calc(100vh - '+height2+'px)'})
    }else{
        $('.header-bottom__container').css({'top':height+'px', 'height': 'calc(100vh - '+height+'px)'})
    }

}

$('select').each(function (){
    $(this).selectric()
})
let item = $('.header-bottom');
let item_top = item.offset().top;
console.log(item_top)
$(window).on('scroll', () => {
    if($(this).scrollTop() > item_top){
        $('body').addClass('fixed')
    }else{
        $('body').removeClass('fixed')
    }
})

$('.index-slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
})

$('.phone').mask('+7 (999) 999-99-99')

$('.header-search__fixed__icon').click(function (){
    if($(this).closest('.header-search__fixed').hasClass('active')){
        $(this).closest('.header-search__fixed').removeClass('active');
        $('body').removeClass('blackout');
    }else{
        $(this).closest('.header-search__fixed').addClass('active');
        $('body').addClass('blackout');
    }
})

$('.header-menu__item_dropdown').hover(function (){
    $('body').addClass('blackout');
}, function (){
    $('body').removeClass('blackout');
})

if($(window).width() < 991){
   $('.header-menu__item_dropdown > a').click(function (e){
       e.preventDefault();

       if($(this).hasClass('active')){
           $(this).removeClass('active');
           $(this).next().css({'display':'none'})
       }else{
           $(this).addClass('active');
           $(this).next().css({'display':'block'})
       }
   })
}