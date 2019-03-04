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
    //set Assign modal's mentionBox auto-close
    $scope.SaveAssign = function(){
        setTimeout(function(){
            $("#AssignModal").modal('hide')
        },500);

        $("#AssignToast").slideDown(500).delay(2000).fadeOut(500);
    };

    // click to open popover ---- col [Remarks]
    $('[data-toggle="popover"]').popover( { html : true });
});

// ------------------applications_list end-------------------------


// -----------------Manage_Team_Progress start--------------------------
app.controller('searchCtrl', function($scope) { 
    //激活datepicker
    // myApp = angular.module('myApp', ['moment-picker']);
    
    // 控制 Compleded Date 的datepicker是否可用
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

// ------------------Manage_Team_Progress end-------------------------

// -----------------applications_change_log start--------------------------
app.controller('bodyleftCtrl', function($scope) { 
    
});

// ------------------applications_change_log end-------------------------