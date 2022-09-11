let score = 0;
let time = 100;
let circle;
let timeSpeed = 900;
let circleSpeed = 900;
let removeSpeed = 900;
let hitSound = document.querySelector('.hitSound');
let randomNumber = (max) =>{
    return Math.floor(Math.random()* max)
}

let colors = [
    '#ff000090',
    '#0000ff90',
    '#00ff0090'
];

// Süre geri sayım
function startTimer() {
    setTimeout(() => {
        if (time > 0) {
            time-=10;
            $('.time').val(time);
        } else if (time == 0 ) {
            $('.lose').show();
        }
        timeSpeed -= 10;
        startTimer();
    }, timeSpeed);
}

startTimer();

// Random Circle
function startGenerateRandom() {
    setTimeout(() => {
        $('.container').append('<div class="circle" style="left: '+randomNumber(75)+'%; top: '+randomNumber(80)+'%; background-color: '+colors[randomNumber(3)]+'"></div>');
        circle = [document.querySelectorAll('.circle')];
        if (circleSpeed > 300) {
            circleSpeed -= 10;
            console.log(circleSpeed)
        }
        startGenerateRandom();
    }, circleSpeed );
}

startGenerateRandom();

// önceki oluşturulmuş daireleri sil
function startRemoveRandom() {
    setTimeout(() => {
        circle.forEach((element) => {
            if (element.length > 3) {
                $('.circle:first').remove();
            }
        });
        if (removeSpeed > 300) {
            removeSpeed -= 10;
        }
        startRemoveRandom();
    }, removeSpeed);
}

startRemoveRandom();


$(function () {
    $('.container').on('click', '.circle', function () {
        $(this).animate({
            'width': '90px',
            'height': '90px'
        },100, function () {
            $(this).remove();
        });
        hitSound.play();
        score+=10;
        time+=10;
        $('.time').val(time);
        $('.score').html(score);
    });
});

