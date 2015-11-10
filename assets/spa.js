angular.module('Platzi', []);
angular.module('Platzi').controller('BaseCtrl', ['$scope', function ($scope){

    $scope.emojis = [{
        id: 1,
        text: '=)'
    },{
        id: 2,
        text: '=('
    },{
        id: 3,
        text: '=)='
    },{
        id: 4,
        text: '8)'
    },{
        id: 5,
        text: '=)~~~~~~'
    }];

}]);