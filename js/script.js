let score = 0;
let time = 100;
let circle;
let timeSpeed = 900;
let circleSpeed = 900;
var clickSound = new Audio('../sound/hit-sound.mp3');
let randomNumber = (max) =>{
    return Math.floor(Math.random()* max)
}

let colors = [
    '#ff000090',
    '#0000ff90',
    '#00ff0090'
];

// Süre geri sayım
setInterval(() => {
    if (time > 0) {
        time-=10;
        $('.time').val(time);
    } else if (time == 0 ) {
        $('.lose').show();
    }
}, timeSpeed);

// Random Circle
setInterval(() => {
    $('.container').append('<div class="circle" style="left: '+randomNumber(75)+'%; top: '+randomNumber(80)+'%; background-color: '+colors[randomNumber(3)]+'"></div>');
    circle = [document.querySelectorAll('.circle')];
}, circleSpeed );


// önceki oluşturulmuş daireleri sil
setInterval(() => {
    circle.forEach((element) => {
        if (element.length > 3) {
            $('.circle:first').remove();
        }
    });
}, 1000);


$(function () {
    $('.container').on('click', '.circle',function(){
        $(this).animate({
            'width': '90px',
            'height': '90px'
        },100, function () {
            $(this).remove();
        });
        score+=10;
        time+=10;
        $('.time').val(time);
        $('.score').html(score);
        clickSound.play();
    });
});

