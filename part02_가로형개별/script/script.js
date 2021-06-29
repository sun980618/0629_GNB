/*eslint-disable*/

$(function(){

    $("li.mainLi").mouseover(function(){
        $(this).children("ul.subMenu").stop().slideDown();
    });

    $("li.mainLi").mouseout(function(){
        $(this).children("ul.subMenu").stop().slideUp();
    });





});d
