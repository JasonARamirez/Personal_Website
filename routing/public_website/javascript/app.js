var homePage = '/';
var homeController = 'home_controller';
var profilePage = '/profile';
var profileController = 'profile_controller';
var projectsPage = '/projects';
var projectsController = 'projects_controller';
var skillsPage = '/skills';
var skillsController = 'skills_controller';
var hmuPage = '/hmu';
var hmuController = 'hmu_controller';

var app = angular.module('myApp', ['ngRoute', 'ngAnimate'])
.config(function ($routeProvider) {
    $routeProvider.when(homePage, {
      controller: homeController,
      templateUrl: 'home_view.html'
    })
    .when(profilePage,{
      controller: profileController,
      templateUrl: 'profile_view.html'
    })
    .when(projectsPage, {
      controller: projectsController,
      templateUrl: 'projects_view.html'
    })
    .when(skillsPage, {
      controller: skillsController,
      templateUrl: 'skills_view.html'
    })
    .when(hmuPage, {
      controller: hmuController,
      templateUrl: 'hmu_view.html'
    })
    .otherwise({
      redirectTo : homePage
    });
}).controller('indexController', function($scope) {});

app.controller(homeController, function($scope, $location) {
  pageStart($scope, $location, '#homeBtn', '#hmuBtn', hmuPage, '#profileBtn', profilePage);
});


app.controller(profileController, function($scope, $location) {
  $(document).ready(function(){
    pageStart($scope, $location, '#profileBtn', '#homeBtn', homePage, '#projectsBtn', projectsPage);
  });
});

app.controller(projectsController, function($scope, $location) {
  $(document).ready(function(){
    pageStart($scope, $location, '#projectsBtn', '#profileBtn', profilePage, '#skillsBtn', skillsPage);
  });
});

app.controller(skillsController, function($scope, $location) {
  $(document).ready(function(){
    Chart.defaults.radar.scale.fontSize = 20
    pageStart($scope, $location, '#skillsBtn', '#projectsBtn', projectsPage, '#humBtn', hmuPage);
    var pCTX = $("#languagesChart");
    var tCTX = $("#toolsChart");
    Chart.defaults.global.defaultFontSize = 15;

    var pRadarChart = new Chart(pCTX, {
      type:'radar',
      data: {
        labels:['C', 'Java', 'Python', 'JavaScript', 'R', 'Swift', 'VHDL', 'PHP', 'Node.js','C#','C++'],
        datasets : [
          {
            label: "Programming Languages Experience per year",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [3, 3, 2.5, 1.5, 1, 0.5, 0.5, 1, 1.5, 2, 2.5]
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
        labels:['Git', 'Jira', 'UNIX', 'Docker', 'Trello', 'Visual Studio'],
        datasets : [
          {
            label: "Software & Tool Experience per year",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            pointBackgroundColor: "rgba(255,99,132,1)",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(255,99,132,1)",
            data: [2.5, 1.5, 1.5, 1, 2, 2.5]
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
});

app.controller(hmuController, function($scope, $location) {
  $(document).ready(function(){
    pageStart($scope, $location, '#hmuBtn', '#skillsBtn', skillsPage, '#homeBtn', homePage);
  });
});

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
