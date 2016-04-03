function progress(value, divId) {
    var progressWidth = value * divId.width() / 100;
    divId.find('div').animate({ width: progressWidth }, 500).html(value + '%');
}
$(function(){
    $('#nav').hide();
    $(".name").typed({
        strings: ['Rylan Lambertsen'],
        typeSpeed: 50,
        showCursor: false
    });

    $('.work-title').typed({
        strings: ['Front End Developer / Designer <a href="https://twitter.com/LotVantage" target="_blank">@LotVantage</a>'],
        startDelay: 1000,
        typeSpeed: 100,
        backDelay: 5000,
        loop: true
    });

    $('.work-title--4wheel').typed({
        strings: ['Product Page Developer / YouTube Channel Talent', '<a href="https://twitter.com/4WheelOnline" target="_blank">@4wheelonline</a>  <a href="https://www.youtube.com/user/4wheelonlinevideos" target="_blank">YouTube Channel</a>'],
        startDelay: 1000,
        typeSpeed: 100,
        backDelay: 5000,
        loop: true
    });

    $('.work-title--free-lance').typed({
        strings: ['Freelance Front End Developer / Designer'],
        startDelay: 1000,
        typeSpeed: 100,
        backDelay: 5000,
        loop: true
    });

    $('.work-title--previous-profession').typed({
        strings: ['Food Service Profesional'],
        startDelay: 1000,
        typeSpeed: 100,
        backDelay: 5000,
        loop: true
    });

    $('.education-title').typed({
        strings: ['Saint Petersburg College <a href="https://twitter.com/spcnews" target="_blank">@SPCnews</a>'],
        startDelay: 1000,
        typeSpeed: 100,
        backDelay: 5000,
        loop: true
    });

    $('.education-title-2').typed({
        strings: ['Clearwater High School <a href="https://twitter.com/clearwaterhigh" target="_blank">@clearwaterhigh</a>'],
        startDelay: 1000,
        typeSpeed: 100,
        backDelay: 5000,
        loop: true
    });

    progress(90, $('#progressBar-html'));
    progress(45, $('#progressBar-js'));
    progress(65, $('#progressBar-adobe'));
    progress(35, $('#progressBar-blade'));
    progress(25, $('#progressBar-laravel'));


});
