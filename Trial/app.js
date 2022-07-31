

var Toggle = $("#btnToggle");
var hideList =$(".hideList");

Toggle.click(function(){

  if(hideList.css("display")=='none'){
    hideList.css('display','block');
  }else{
    hideList.css('display','none');
  }
});
