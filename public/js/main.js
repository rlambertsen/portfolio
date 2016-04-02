function progress(value, divId) {
    var progressWidth = value * divId.width() / 100;
    divId.find('div').animate({ width: progressWidth }, 500).html(value);
}
$(function(){
    $(".name").typed({
        strings: ['Rylan Lambertsen'],
        typeSpeed: 50,
        showCursor: false
    });

    $('.work-title').typed({
        strings: ['Front End Developer / Designer <a href="https://twitter.com/LotVantage" target="_blank">@LotVantage</a>'],
        startDelay: 1000,
        typeSpeed: 100,
        loop: true
    });

    progress(75, $('#progressBar-html'));
    progress(75, $('#progressBar-css'));
    progress(75, $('#progressBar-js'));
    progress(75, $('#progressBar-adobe'));
    progress(75, $('#progressBar-blade'));
});