var app = angular.module('myApp', ['moment-picker']);

// -----------------applications_list start--------------------------
app.controller('headerCtrl', function($scope) { 
    //init navigation
    $scope.fullUserName = "Chrismrs Wong";
    $scope.simpleUserName = "CW";
    $scope.selectedLanguage = "English";

});

app.controller('summaryCtrl', function($scope) {
    //init summary
    $scope.pendingCCCAllocation = 23 ;
    $scope.pendingForHanding = 17;

});

app.controller('searchCtrl', function($scope) { 

});

app.controller('applicationCtrl', function($scope) { 

    //set content of toast
    $scope.toastContent = "Save successful !";

    //set Assign modal's mentionBox auto-close
    $scope.SaveAssign = function(){
        setTimeout(function(){
            $("#AssignModal").modal('hide')
        },500);

        $("#AssignToast").slideDown(500).delay(2000).fadeOut(500);
    };

    //table with json data
    // window.sessionStorage.setItem("ID",value);
    $('#appli_list_table').bootstrapTable({
        url: 'json/application_list.json',
        columns: [{
            checkbox:true
        }, {
            field: 'id',
            title: 'ID',
            sortable:true,
            formatter:function(value, row, index){
                return [
                '<a href="applications_change_log.html">'+ value +'</a>'
                ].join("")
            }
        },{
            field: 'type',
            title: 'Type',
            sortable:true,
        }, {
            field: 'entityType',
            title: 'Entity Type',
            sortable:true,
        }, {
            field: 'companyName',
            title: 'Company Name',
            sortable:true
        }, {
            field: 'customerId',
            title: 'Customer ID',
            sortable:true
        }, {
            field: 'category',
            title: 'Category'
        }, {
            field: 'status',
            title: 'Status'
        },{
            field: 'remark',
            title: 'Remark',
            formatter:function(value, row, index){
                return [
                '<img class="btn ml-1" height="40px" src="img/search.svg" data-toggle="popover" aria-hidden="true">',
            ].join("")
            }
        }, {
            field: 'appointmentDate',
            title: 'Appointment Date & Time',
            sortable:true
        }, {
            field: 'confirmedVenue',
            title: 'Confirmed Venue'
        }, {
            field: 'handlingCallAgent',
            title: 'Handling Call Agent'
        },  {
            field: 'taskDueDate',
            title: 'Handling Call Agent'
        }, {
            field: 'documentLastUploadDate',
            title: 'Document Last Upload Date'
        }, {
            field: 'lastModifiedDate',
            title: 'Last Modified Date'
        },]
    });

    // click to open popover -> col [Remarks]
    $('[data-toggle="popover"]').popover( { 
        trigger:'click', 
        title:"Remark Details",
        html: true, 
        content:"<br> Customer ID <br> 28882888 <br><br>Remarks <br> Some remarks content <br><br>Document Last Uploaded Date <br> 31 Dec 2020 <br><br>Contact Person <br> Johnny Chan <br><br>Contact Number <br> 852 3999 8833<br><br>",
    });
    // close popover when click on the area outside of popover 
    $('body').on('click', function(event) {
        var target = $(event.target);
        if (!target.hasClass('popover') 
                && target.parent('.popover-content').length === 0
                && target.parent('.popover-title').length === 0
                && target.parent('.popover').length === 0
                && target.data("toggle") !== "popover") {
            $('[data-toggle="popover"]').popover('hide');
        }
    });



});

// ------------------applications_list end-------------------------


// -----------------Manage_Team_Progress start--------------------------
app.controller('manageTeamProgressSearchCtrl', function($scope) { 
    //activation datepicker
    // myApp = angular.module('myApp', ['moment-picker']);
    
    // controlling whether the datepicker of 'Compleded Date' is available.
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
});

// ------------------Manage_Team_Progress end-------------------------

// -----------------applications_change_log start--------------------------
app.controller('bodyleftCtrl', function($scope) { 
    var id =window.sessionStorage.getItem("ID");
    console.log(id);
});

// ------------------applications_change_log end-------------------------