var app = angular.module('myApp', ['moment-picker']);

// -----------------applications_list start--------------------------
app.controller('headerCtrl', function($scope) { 
    //init navigation
    $scope.fullUserName = "Chrismrs Wong";

});

app.controller('myCaseCtrl', function($scope) {
    //init MY CASES
    $scope.pendingCCCAllocation = 23;
    $scope.pendingForHanding = 17;
    $scope.All = 18;

});

app.controller('searchCtrl', function($scope) { 

    $scope.Status = ["a", "b", "c"];
    $scope.selectedStatus = "a";
    
    $scope.BusinessCenters = ["1", "2", "3","4","5","6","7"];
    $scope.selectedBusinessCenter = "1";

    $scope.BBOAssigneds = ["a", "b", "c"];
    $scope.selectedBBOAssigned = "a";
    

});

app.controller('applicationCtrl', function($scope) { 

    //set content of toast
    $scope.toastContent = "Save successful !";

    //set Assign modal's mentionBox auto-close
    $scope.SaveAssign = function(){
        // setTimeout(function(){
        //     $("#AssignModal").modal('hide')
        // },500);
        $("#AssignToast").toast('show')
    };

    //table with json data
    $('#appli_list_table').bootstrapTable({
        url: 'json/application_list.json',
        // height:500,
        columns: [{
            checkbox:true,
        }, {
            field: 'id',
            title: 'Application ID',
            sortable:true,
            align: 'center',
            formatter:function(value, row, index){
                var html = '<a href="application_detail.html">'+ value +'</a>';
                return html;
            }
        },
        {
            field: 'quick_view',
            title: 'Quick View',
            sortable:true,
            align: 'center',
            formatter:function(value, row, index){
                var html = '';
                html += '<i data-toggle="modal" data-target="#quickViewModal"><img src="img/binoculars-solid.svg" height="16" alt="Responsive image"></i>';
                return html;
            }
        },{
            field: 'type',
            title: 'Type',
            sortable:true,
            align: 'center',
        }, 
         {
            field: 'entityType',
            title: 'Entity Type',
            sortable:true,
            align: 'center',
        }, {
            field: 'companyName',
            title: 'Company Name',
            sortable:true,
            align: 'center',
        }, {
            field: 'remark',
            title: 'Remark',
            align: 'center',
            formatter:function(value, row, index){
                var html = '';
                // html += '<i data-toggle="modal" data-target="#ApplistRemarkModal"><img src="img/file-regular.svg" height="16" alt="Responsive image"></i>';
                // html += '<i data-toggle="modal" data-target="#ApplistRemarkModal"><img src="img/file-solid.svg" height="16" alt="Responsive image"></i>';
                html += '<i data-toggle="modal" data-target="#ApplistRemarkModal"><img src="img/comment-empty.svg" height="16" alt="Responsive image"></i>';
                return html;
            }
        },{
            field: 'customerId',
            title: 'Customer ID',
            sortable:true,
            align: 'center',
        }, {
            field: 'category',
            title: 'Category',
            align: 'center',
        }, {
            field: 'status',
            title: 'Status',
            align: 'center',
        }, {
            field: 'appointmentDate',
            title: 'Appointment Date & Time',
            sortable:true,
            align: 'center',
        }, {
            field: 'confirmedVenue',
            title: 'Confirmed Venue',
            align: 'center',
        }, {
            field: 'handlingCallAgent',
            title: 'Handling Call Agent',
            align: 'center',
        },  {
            field: 'taskDueDate',
            title: 'Handling Call Agent',
            align: 'center',
        }, {
            field: 'documentLastUploadDate',
            title: 'Document Last Upload Date',
            align: 'center',
        }, {
            field: 'lastModifiedDate',
            title: 'Last Modified Date',
            align: 'center',
        },]
    })
     // remove table's border 
     $('#appli_list_table,#progress_table').removeClass('table-bordered');
   
});

// ------------------applications_list end-------------------------



// -----------------Progress_filter start--------------------------
app.controller('progressFilterCtrl', function($scope) { 
    // controlling whether the datepicker of 'Compleded Date' is available.
    $scope.ischeckedRP = true;
    $scope.ischeckedAppli = true;
    var selectedRadio = $('#ProgressRadio label input[type="radio"]')
    selectedRadio.change(function(){
        var radioVal = $('#ProgressRadio label input[type="radio"]:checked').val();
        if (radioVal === "InProgress"){
            $scope.completedDateStart = "";
            $scope.completedDateEnd = "";
            $('#CompletedDateBox input').attr("disabled","disabled");
        };
        if (radioVal === "Completed"){
            $('#CompletedDateBox input').removeAttr("disabled");
        };
    })
    $('#progress_table').removeClass('table-bordered');
});

// ------------------Progress_filter end-------------------------

// -----------------application_detail start--------------------------
app.controller('bodyleftCtrl', function($scope) { 
    $scope.toastContent2 = "Save successful !";
    $scope.ReactivateToastClick = function(){
        $("#ReactivateToast").toast('show')
    }
});


// Application Form's Tab
$(function(){
    $('#attenBtns span').click(function(){
        // 获取需要传入两个参数 tab 的id 和 需要定位的 filed的index
        var id = $(this).data("id");
        var index = $(this).data("index");
        // 获取当前点击的Nav 的头和内容
        var navCurrent = $('.nav a')[id-1];
        var navs_contCurrent = $('.tab-content>div')[id-1];
        $(navCurrent).addClass("active").siblings().removeClass("active");
        $(navs_contCurrent).attr("class","active show tab-pane fade").siblings().attr("class","tab-pane fade");
        // 获取到需要定位的文本框
        var inputsCurrent = $(navs_contCurrent).find('input')[index-1];
        $(inputsCurrent).focus();
    });
    // header 部分点击下拉导航
    $('#collapsibleNavbar .nav-item ul li a').click(function(){
        $(this).css({
            "background": "green",
            "color": "#fff"
        }).parent().siblings().find('a').css({
            "background": "#fff",
            "color": "#212529"
        })
    })

})
// ------------------application_detail end-------------------------

// -----------------notification start--------------------------
app.controller('bodyCtrl', function($scope) { 
    // $scope.todayCounts = 12;
    // $scope.yesterdayCounts = 5;
    // $scope.thisWeekCounts = 4;
    // $scope.olderCounts = 1;
});
// ------------------notification end-------------------------
