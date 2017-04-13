//判断是否安卓手机

//首页JS

$('.shade .close').click(function () {
    $('.shade').hide();
})
$('.main .btn2').click(function () {
    $('.shade').show();
});


// 答题页JS

$(function () {
    var i = 0;
    var k = 0;

    var true1 = 0;
    var true2 = 0;
    var true3 = 0;
    var true4 = 0;
    var true5 = 0;
    var true6 = 0;
    $(document).on('click', '.poem .choice', function () {

        $(this).css('background-image', 'url(img/点击效果.png)').siblings().removeAttr('background-image');
        if ($(this).hasClass('choice1')) {
            i = 1
        } else if ($(this).hasClass('choice2')) {
            i = 2
        } else if ($(this).hasClass('choice3')) {
            i = 3
        } else if ($(this).hasClass('choice4')) {
            i = 4
        } else if ($(this).hasClass('choice5')) {
            i = 5
        } else if ($(this).hasClass('choice6')) {
            i = 6
        }

    });
    $(document).on('click', '.answer-box .answer', function () {
        if ($(this).hasClass('answer1')) {
            k = 1
        } else if ($(this).hasClass('answer2')) {
            k = 2
        } else if ($(this).hasClass('answer3')) {
            k = 3
        } else if ($(this).hasClass('answer4')) {
            k = 4
        } else if ($(this).hasClass('answer5')) {
            k = 5
        } else if ($(this).hasClass('answer6')) {
            k = 6
        }
        console.log(i, k);
        if (i == 0) {
            alert('请选择输入框');
            return;
        }
        if (i == 1) {
            if (k == 1) {
                $('.poem .choice1').css('background-image', 'url(img/民.png)');
                true1 = true;
            } else if (k == 2) {
                $('.poem .choice1').css('background-image', 'url(img/宿.png)');
                true1 = false;
            } else if (k == 3) {
                $('.poem .choice1').css('background-image', 'url(img/加.png)');
                true1 = false;
            } else if (k == 4) {
                $('.poem .choice1').css('background-image', 'url(img/上.png)');
                true1 = false;
            } else if (k == 5) {
                $('.poem .choice1').css('background-image', 'url(img/线.png)');
                true1 = false;
            } else if (k == 6) {
                $('.poem .choice1').css('background-image', 'url(img/了.png)');
                true1 = false;
            }
        } else if (i == 2) {
            if (k == 1) {
                $('.poem .choice2').css('background-image', 'url(img/民.png)');
                true2 = false;
            } else if (k == 2) {
                $('.poem .choice2').css('background-image', 'url(img/宿.png)');
                true2 = true;
            } else if (k == 3) {
                $('.poem .choice2').css('background-image', 'url(img/加.png)');
                true2 = false;
            } else if (k == 4) {
                $('.poem .choice2').css('background-image', 'url(img/上.png)');
                true2 = false;
            } else if (k == 5) {
                $('.poem .choice2').css('background-image', 'url(img/线.png)');
                true2 = false;
            } else if (k == 6) {
                $('.poem .choice2').css('background-image', 'url(img/了.png)');
                true2 = false;
            }
        } else if (i == 3) {
            if (k == 1) {
                $('.poem .choice3').css('background-image', 'url(img/民.png)');
                true3 = false;
            } else if (k == 2) {
                $('.poem .choice3').css('background-image', 'url(img/宿.png)');
                true3 = false;
            } else if (k == 3) {
                $('.poem .choice3').css('background-image', 'url(img/加.png)');
                true3 = true;
            } else if (k == 4) {
                $('.poem .choice3').css('background-image', 'url(img/上.png)');
                true3 = false;
            } else if (k == 5) {
                $('.poem .choice3').css('background-image', 'url(img/线.png)');
                true3 = false;
            } else if (k == 6) {
                $('.poem .choice3').css('background-image', 'url(img/了.png)');
                true3 = false;
            }
        } else if (i == 4) {
            if (k == 1) {
                $('.poem .choice4').css('background-image', 'url(img/民.png)');
                true4 = false;
            } else if (k == 2) {
                $('.poem .choice4').css('background-image', 'url(img/宿.png)');
                true4 = false;
            } else if (k == 3) {
                $('.poem .choice4').css('background-image', 'url(img/加.png)');
                true4 = false;
            } else if (k == 4) {
                $('.poem .choice4').css('background-image', 'url(img/上.png)');
                true4 = true;
            } else if (k == 5) {
                $('.poem .choice4').css('background-image', 'url(img/线.png)');
                true4 = false;
            } else if (k == 6) {
                $('.poem .choice4').css('background-image', 'url(img/了.png)');
                true4 = false;
            }
        } else if (i == 5) {
            if (k == 1) {
                $('.poem .choice5').css('background-image', 'url(img/民.png)');
                true5 = false;
            } else if (k == 2) {
                $('.poem .choice5').css('background-image', 'url(img/宿.png)');
                true5 = false;
            } else if (k == 3) {
                $('.poem .choice5').css('background-image', 'url(img/加.png)');
                true5 = false;
            } else if (k == 4) {
                $('.poem .choice5').css('background-image', 'url(img/上.png)');
                true5 = false;
            } else if (k == 5) {
                $('.poem .choice5').css('background-image', 'url(img/线.png)');
                true5 = true;
            } else if (k == 6) {
                $('.poem .choice5').css('background-image', 'url(img/了.png)');
                true5 = false;
            }
        } else if (i == 6) {
            if (k == 1) {
                $('.poem .choice6').css('background-image', 'url(img/民.png)');
                true6 = false;
            } else if (k == 2) {
                $('.poem .choice6').css('background-image', 'url(img/宿.png)');
                true6 = false;
            } else if (k == 3) {
                $('.poem .choice6').css('background-image', 'url(img/加.png)');
                true6 = false;
            } else if (k == 4) {
                $('.poem .choice6').css('background-image', 'url(img/上.png)');
                true6 = false;
            } else if (k == 5) {
                $('.poem .choice6').css('background-image', 'url(img/线.png)');
                true6 = false;
            } else if (k == 6) {
                $('.poem .choice6').css('background-image', 'url(img/了.png)');
                true6 = true;
            }
        }

    })
    $('.explain img').click(function () {
        $('.shade').show();
        $('.shade .wanfa').show().siblings().hide();
    });
    $('.shade .close2').click(function () {
        $('.shade').hide();
    });
    $('.shade  .award').click(function () {
        $('.shade').hide();
        $('.shade2').show();
    });
    $('.poem .btn').click(function () {
        if (true1 === 0 || true2 === 0 || true3 === 0 || true4 === 0 || true5 === 0 || true6 === 0) {
            alert('请答题后再提交')
        } else {
            $('.shade').show();
            if (true1 == true && true2 == true && true3 == true && true4 == true && true5 == true && true6 && true) {
                $('.shade .true1').show().siblings().hide();
            } else {
                $('.shade .true2').show().siblings().hide();
            }
        }
        console.log(true1, true2, true3, true4, true5, true6)
    });
    $('.shade2').click(function () {
        $(this).hide()
    })
    $('.true1 .award-start').click(function () {

        $('.luck').show().siblings().hide()
    });
    $('.luck .choujiang2').click(function () {
        var random = Math.random() * 10;
        random = random.toFixed(2);
        if (random <= 5) {
            $('.luck1').show().siblings().hide();
            $('.luck1 .money span').text(random)
        } else {
            $('.luck2').show().siblings().hide()
        }

    });
})

