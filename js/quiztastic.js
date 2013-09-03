angular.module('quiztastic', ['ui'])
	.directive('quiz', function() { 
		return {
			restrict :'E',
			replace:'true',
			templateUrl: "templates/quiz.html", 
			controller:function($scope, $attrs) {
				var url = $attrs.data;
				console.log('getting data from ', url);
				var correct_answer = function(q,a) {
					return q.options[q.answer] == a;
				};
				$scope.answer = function(q,a) {
					console.log('got a question - ', q, 'answer', a);
					q.response = a;
					if (correct_answer(q,a)) {
						console.log('answer is correct', a);
						q.correct = true; 
						q.explanation = a + " is correct!";
					} 
				};
				$.get(url).then(function(data) {
					try {
						data = JSON.parse(data);
						console.log('data is ', data);
						$scope.$apply(function() {
							$scope.questions = data.questions;
						});
					} catch(e) {
						console.error('Malformed JSON in ' + url + ' - check your syntax and path and try again', e)
					}
				});
			}
		};	
	});