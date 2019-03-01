$(document).ready(function () {
    // 鼠标悬停展开dropdown_list
    dropdownOpen();
    // $(document).off('click.bs.dropdown.data-api');
     
    // 鼠标点击打开popover
    $('[data-toggle="popover"]').popover( { html : true });

    // 控制 Compleded Date 的radioBtn是否可用
    var selectedRadio = $('#ProgressRadio label input[type="radio"]')

    selectedRadio.change(function(){
        var radioVal = $('#ProgressRadio label input[type="radio"]:checked').val();
        // console.log(radioVal);
        if (radioVal === "InProgress"){
            $('#CompletedDateBox input').attr("disabled","disabled");
        };
        if (radioVal === "Completed"){
            $('#CompletedDateBox input').removeAttr("disabled");
        };
    })


 });



 // 鼠标划过就展开子菜单，免得需要点击才能展开
 function dropdownOpen() {
     var $dropdownLi = $('li.dropdown');
     var $dropdownMenu = $('ul.dropdown-menu');
     $dropdownLi.mouseover(function() {
         $dropdownMenu.addClass('d-block');
     }).mouseout(function() {
         $dropdownMenu.removeClass('d-block');
     });
 }

  // 设置提醒框定时关闭
 function SetMentionBox(ModalName,toastName){
    setTimeout(function(){
        $("#"+ ModalName).modal('hide')
    },500);

    $("#"+ toastName).slideDown(500).delay(2000).fadeOut(500);
}
