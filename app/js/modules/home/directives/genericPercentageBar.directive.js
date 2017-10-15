angular.module('app').directive('genericPercentageBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/templates/home/directives/genericPercentageBar.html',
		scope: {
			pct: '=',
			bgcolor: '=?',
			color: '=?',
			width: '=?',
			height: '=?'
		},
		link: function(scope, element, attributes) {
			var defaultBgColor = '#f1f1f1';
			var defaultColor = '#007DA4';
			var defaultWidth = 200;
			var defaultHeight = 15;
			var defaultStatHeight = 20;

			var backgroundColor = scope.bgcolor ? scope.bgcolor : defaultBgColor;
			var color = scope.color ? scope.color : defaultColor;
			var width = (scope.width ? scope.width : defaultWidth);
			var height = (scope.height ? scope.height : defaultHeight);
			var marginTop = (defaultStatHeight - height) / 2;            // This is to vertical align the pct stat displayed with the bar

			scope.$watch('pct', function() {
				renderView(+scope.pct);
			});

			function renderView(pct) {
				scope.pctbarContainerStyle = {
					'background-color': backgroundColor,
					'width': width + 'px',
					'height': height + 'px',
					'border-radius': height + 'px',
					'margin-top': marginTop + 'px'
				};

				scope.pctbarStyle = { 
					'width': pct + '%',
					'background-color': color
				};
			}
		}
	};
});
