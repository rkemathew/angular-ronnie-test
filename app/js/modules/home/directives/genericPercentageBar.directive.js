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
			var DEFAULT_BG_COLOR = '#f1f1f1';
			var DEFAULT_COLOR = '#007DA4';
			var DEFAULT_WIDTH = 200;
			var DEFAULT_HEIGHT = 15;
			var DEFAULT_STAT_HEIGHT = 20;

			scope.$watch('[pct, bgcolor, color, width, height]', function() {
				renderView(+scope.pct);
			}, true);

			function renderView(pct) {
				var backgroundColor = scope.bgcolor ? scope.bgcolor : DEFAULT_BG_COLOR;
				var color = scope.color ? scope.color : DEFAULT_COLOR;
				var width = (scope.width ? scope.width : DEFAULT_WIDTH);
				var height = (scope.height ? scope.height : DEFAULT_HEIGHT);
				var marginTop = (DEFAULT_STAT_HEIGHT - height) / 2; // This is to vertical align the pct stat displayed with the bar

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
