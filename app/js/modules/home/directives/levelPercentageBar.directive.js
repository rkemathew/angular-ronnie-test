angular.module('app').directive('levelPercentageBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/templates/home/directives/levelPercentageBar.html',
		scope: {
			subCategory: '='
		},
		link: function(scope, element, attributes) {
			var subCategory = scope.subCategory;

			if (typeof subCategory.levelDescription != 'undefined') {
				var maxLevel = subCategory.levelDescription.maxLevel;
				var level = subCategory.descriptions[0].level;
				var pct = level / maxLevel * 100;

				var levels = [];
				for (var i=1; i<=10; i++) {
					if (i <= pct / 10) {
						levels.push({ cssclass: 'level-percentage-bar-block' });
					}
				}

				scope.level = level;
				scope.maxLevel = maxLevel;
				scope.levels = levels;
				scope.pct = pct;
			}
		}
	};
});
