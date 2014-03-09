function playCtrl($scope, $location){
    $scope.changeView=function(view){
        $location.path(view);
    }
};
