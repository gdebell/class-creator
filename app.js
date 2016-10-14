(function() {
  'use strict';

  var app = angular.module('classCreator', []);

  app.controller('GradeController', function($rootScope) {


    this.increaseGrade = (grade) => {
      if (grade == 'F') {
        $rootScope.grade = 'D';
      } else if (grade == 'D') {
        $rootScope.grade = 'C';
      } else if (grade == 'C') {
        $rootScope.grade = 'B';
      } else if (grade == 'B') {
        $rootScope.grade = 'A';
      }
      console.log('root scope new grade', $rootScope.grade);
    }

  });


  app.controller('DataController', function($rootScope) {
    this.newGrade = $rootScope.grade;
  });

})()
