var pageStart = function($scope, $location, pagesArr, pageBtnColor, page){
  resetAllBtnColors(pageBtnColor, pagesArr);
  var pageBtn = '#' + page + 'Btn';
  var leftPage = getAdjacentPage(pagesArr, page, -1);
  var rightPage = getAdjacentPage(pagesArr, page, 1);
  $(pageBtn).css("background-color", pageBtnColor[page]);
  $(pageBtn).off('mouseout');
  $(document).off('keyup');
  $(document).on('keyup', function(e) {
    switch(e.which) {
        // left
        case 37: $scope.$apply(function(){
                   $location.path(leftPage);
                 });
        break;
        // right
        case 39: $scope.$apply(function(){
                   $location.path(rightPage);
                 });
        break;
    }
  });
}

var getAdjacentPage = function(pagesArr, page, offset){
  var pageI = pagesArr.indexOf(page);
  var adjacentPageI = ((pageI + offset) + pagesArr.length) % pagesArr.length;
  return '/' + pagesArr[adjacentPageI];
}

var resetAllBtnColors = function(pageBtnColor, pagesArr){
  pagesArr.forEach(function(page){
    resetBtnColor(pageBtnColor, page);
  });
}

var resetBtnColor = function(pageBtnColor, page){
  var pageBtn = '#' + page + 'Btn';
  $(pageBtn).off('mouseover');
  $(pageBtn).off('mouseout');
  $(pageBtn).mouseover(function(){
        $(pageBtn).css("background-color", pageBtnColor[page]);
  });
  $(pageBtn).mouseout(function(){
      $(pageBtn).css("background-color", '#98dafc');
  });
  $(pageBtn).css("background-color", '#98dafc');
}
