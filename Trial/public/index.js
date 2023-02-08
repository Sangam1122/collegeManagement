var Toggle = $("#btnToggle");
var hideList =$(".hideList");

var WScreenBtn = $("#WScreenBtn");

var NotbtnToggle =$("#NotbtnToggle");
var hideList1 = $(".hideList1");



Toggle.click(function(){

  if(hideList.css("display")=='none'){
    hideList.css('display','block');
    WScreenBtn.removeClass('hidden');

  }else{
    hideList.css('display','none');
    WScreenBtn.addClass('hidden');

  }
});

WScreenBtn.click(function(){
  WScreenBtn.addClass('hidden');
  hideList.css('display','none');
  hideList1.css('display','none');
});


NotbtnToggle.click(function(){
  if(hideList1.css("display")=='none'){
    hideList1.css('display','block');
    WScreenBtn.removeClass('hidden');

  }else{
    hideList1.css('display','none');
    WScreenBtn.addClass('hidden');
  }
});



function Check(){
var showPassword =$('.pass');
if(showPassword.attr('type')==="Password") {
   showPassword.attr('type','text');
}else{
  showPassword.attr('type','Password');
}
}



function closeNotification(){
  var close = $('.close');
  close.addClass('hidden')
}
function close1(){

  console.log("hello");
}


// -------------------settings/createToggle-------------------------


$('.CrBtn1').click(function(){
  var s1 = $('.s1');
  var s2 = $('.s2');
  var s3 = $('.s3');

  if(s1.hasClass('.hidden')){
    console.log("true");
    s1.removeClass('.hidden');
  }else{
    console.log("false");
  }

})


// function createToggle(){
// var s1 = $('.s1');
// var s2 = $('.s2');
// var s3 = $('.s3');
//
// if(s1.hasClass('.hidden')){
//   console.log("true");
//   s1.removeClass('.hidden');
// }else{
//   console.log("false");
// }
//
//
// }
