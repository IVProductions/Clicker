function playCtrl($scope, $location){

	//alert("height:"+window.)
    $scope.changeView=function(view){
        $location.path(view);
    }
};
