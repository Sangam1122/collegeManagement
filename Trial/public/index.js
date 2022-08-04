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
