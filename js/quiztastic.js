angular.module('quiztastic', ['ui'])
	.directive('quiz', function() {
		return {
			restrict :'E',
			replace:'true',
			templateUrl: "templates/quiz.html",
			controller:function($scope, $attrs) {
				var url = $attrs.data;
				var correct_answer = function(q,a) {
					return q.options[q.answer] == a;
				};
				$scope.answer = function(q,a) {
					q.response = a;
					if (correct_answer(q,a)) {
						q.correct = true;
						q.explanation = a + " is correct!";
					}
				};
				$.getJSON(url).then(function(data) {
					$scope.$apply(function() {
						$scope.questions = data.questions;
					});
				}).fail(function(err) {
					console.error('Could not load ' + url + ' - check your syntax and path and try again', err);
				});
			}
		};
	});