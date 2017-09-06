var pagesArr = ['home', 'profile', 'projects', 'seniorDesign', 'skills', 'hmu'];

var pageBtnColor = {
  'home' : '#EDBD3E',
  'profile' : '#FFAEAE',
  'projects' : '#5B7778',
  'seniorDesign' : '#F06560',
  'skills' : '#C7AFBD',
  'hmu' : '#336666'
}

var pageSetup = {
  'skills' : function(){skillsSetup();}
};

var app = angular.module('myApp', ['ngRoute'])
.config(function ($routeProvider) {

  pagesArr.forEach(function(page){
    var address = page === 'home' ? '' : page;
    $routeProvider.when('/' + address, {
      controller: page + '_controller',
      templateUrl: page + '_view.html'
    });
  });
  $routeProvider.otherwise({
    redirectTo : '/'
  });
}).controller('indexController', function($scope) {});

pagesArr.forEach(function(page){
  app.controller(page + '_controller', function($scope, $location) {
    pageStart($scope, $location, pagesArr, pageBtnColor, page);
    var setup = pageSetup[page];
    if (setup) { setup();}
  });
});

var skillsSetup = function(){
  $(document).ready(function(){
    Chart.defaults.radar.scale.fontSize = 20;
    var pCTX = $("#languagesChart");
    var tCTX = $("#toolsChart");
    Chart.defaults.global.defaultFontSize = 15;

    var pRadarChart = new Chart(pCTX, {
      type:'radar',
      data: {
        labels:['C', 'Java', 'Python', 'JavaScript', 'SQL', 'R', 'NoSQL', 'PHP', 'Node.js','C#','C++'],
        datasets : [
          {
            label: "Programming Languages Experience / Year",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [3.5, 3.5, 3.0, 2, 2, 1, 1, 1, 2, 2, 2.5]
          }
        ]
      },
      options: {
        scale: {
          reverse: false,
          ticks: {
            beginAtZero: true
          },
          pointLabels : {
            fontSize: 17
          }
        }
      }
    });

    var tRadarChart = new Chart(tCTX, {
      type:'radar',
      data: {
        labels:['Git', 'Jira', 'UNIX', 'Jenkins', 'Docker', 'Trello', 'Visual Studio'],
        datasets : [
          {
            label: "Tool Experience / Year",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [3, 1.5, 1.5, 1, 1, 2, 3]
          }
        ]
      },
      options: {
        scale: {
          reverse: false,
          ticks: {
            beginAtZero: true
          },
          pointLabels : {
            fontSize: 17
          }
        }
      }
    });
  });
}

$(document).ready(function(){
  change = true
  $('.navbar-toggle').on('click', function(){
    if(change){
      change = false;
      $('#myNavbar').css('background', '#98dafc');
    }
    else{
      change = true;
      $('#myNavbar').css('background', 'transparent');
    }
  });
  $('.nav a').on('click', function(){
    if($('#myNavbar').hasClass('in')){
      $('.navbar-toggle').click();
    }
  });
});
