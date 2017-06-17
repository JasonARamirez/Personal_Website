var btnColorDict = {
  '#homeBtn' : '#EDBD3E',
  '#profileBtn' : '#FFAEAE',
  '#projectsBtn' : '#5B7778',
  '#skillsBtn' : '#C7AFBD',
  '#hmuBtn' : '#336666'
}
var pageStart = function($scope, $location, pageBtn, leftBtn, leftPage, rightBtn, rightPage){
  var pageBtnArr = ['#homeBtn', '#profileBtn', '#projectsBtn', '#skillsBtn', '#hmuBtn'];
  resetAllBtnColors(pageBtnArr);
  $(pageBtn).css("background-color", btnColorDict[pageBtn]);
  $(pageBtn).off('mouseout');
  $(document).off('keyup');
  $(document).on('keyup', function(e) {
    switch(e.which) {
        // left
        case 37: $scope.$apply(function(){
                   $scope.animationClass = "left-enter";
                   $location.path(leftPage);
                 });
        break;

        // right
        case 39: $scope.$apply(function(){
                   $scope.animationClass = "right-enter";
                   $location.path(rightPage);
                 });
        break;
        default: return; // exit this handler for other keys
    }
  });
}

var resetAllBtnColors = function(pageBtnArr){
  pageBtnArr.forEach(function(pageBtn){
    resetBtnColor(pageBtn);
  });
}

var resetBtnColor = function(pageBtn){
  $(pageBtn).off('mouseover');
  $(pageBtn).off('mouseout');
  $(pageBtn).mouseover(function(){
        $(pageBtn).css("background-color", btnColorDict[pageBtn]);
  });
  $(pageBtn).mouseout(function(){
      $(pageBtn).css("background-color", '#98dafc');
  });
  $(pageBtn).css("background-color", '#98dafc');
}
