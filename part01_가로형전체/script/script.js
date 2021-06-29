/*eslint-disable*/

$(function(){

    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").stop().slideDown(500);
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").stop().slideUp(300);
    });





});
