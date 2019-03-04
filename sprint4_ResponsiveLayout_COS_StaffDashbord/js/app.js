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
    
});

// ------------------applications_change_log end-------------------------