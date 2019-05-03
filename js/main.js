$(document).ready(function () {
    $("#myCarousel").carousel({ interval: 2000 });
    $("#myCarousel").mouseover(function () {
        $("#myCarousel").carousel('pause');
    });
    $("#myCarousel").mouseout(function () {
        $("#myCarousel").carousel('cycle');
    });
    // $("#myCarousel").carousel('pause');
/*
*   遍历到所有的.cards-slider
*   对每一个carsds添加一个鼠标访问事件
*   对每个cards添加一个鼠标离开事件
*/
    var lastPrijectCardsslides = $('.latest-project .latest-project-cards .cards-slider');
    $.each(lastPrijectCardsslides, function (index, value) { 
       $(this).mouseover(function(){
        $(this).find('.cards').css("transform","scale(1)");
      }).mouseout(function () {
        $(this).find('.cards').css("transform","scale(0)");
      });
    });
    
});