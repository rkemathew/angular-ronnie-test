angular.module('app').directive('levelSliderBar', function() {
	return {
		restrict: 'E',
		templateUrl: 'app/templates/home/directives/levelSliderBar.html',
		scope: {
			subCategory: '='
		},
		link: function(scope, element, attributes) {
			var subCategory = scope.subCategory;

			if (typeof subCategory.levelDescription != 'undefined') {
				var maxLevel = subCategory.levelDescription.maxLevel;
				var level = subCategory.descriptions[0].level;

				var levels = [];
				for (var i=1; i<=maxLevel; i++) {
					if (i <= level) {
						levels.push({ cssclass: 'level-slider-bar-block-primary' });
					} else {
						levels.push({ cssclass: 'level-slider-bar-block-secondary' });
					}
				}
				scope.level = level;
				scope.maxLevel = maxLevel;
				scope.levels = levels;
				scope.levelBlockWidth = 100 / maxLevel + "%";

				console.log('scope.level', scope.level);
				console.log('scope.maxLevel', scope.maxLevel);
				console.log('scope.levels', scope.levels);
				console.log('scope.levelBlockWidth', scope.levelBlockWidth);
			}
		}
	};
});
