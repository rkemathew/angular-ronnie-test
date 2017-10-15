angular.module('app').directive('gradeLevelPie', ['$timeout', function($timeout) {
	return {
		restrict: 'E',
		templateUrl: 'app/templates/home/directives/gradeLevelPie.html',
		scope: {
			size: '@?',
			grade: '='
		},
		link: function(scope, element, attributes) {
			// Seed the dataset with 20 items with a distinct chunk value and 5 for the value attribute
			var dataset = [];
			for (var i=0; i<20; i++) {
				dataset.push({ chunk: ''+i, value: 5 });
			}

			// predefined sizes for the grade wheel
			var sizes = {
				'XS': { width:  80, height:  80, donutWidth:  9, outerSize: 90,  labelFontSize: '8px',  statFontSize: '26px', translateYPos: 13 },
				'S':  { width: 100, height: 100, donutWidth: 12, outerSize: 110, labelFontSize: '10px', statFontSize: '32px', translateYPos: 17 },
				'M':  { width: 150, height: 150, donutWidth: 16, outerSize: 160, labelFontSize: '14px', statFontSize: '50px', translateYPos: 25 },
				'L':  { width: 200, height: 200, donutWidth: 20, outerSize: 210, labelFontSize: '16px', statFontSize: '70px', translateYPos: 33 },
				'XL': { width: 250, height: 250, donutWidth: 24, outerSize: 260, labelFontSize: '18px', statFontSize: '96px', translateYPos: 44 }
			};

			// Clockwise colors from the 6 O'Clock position
			var colorsArray = [
				'#5a63d3', '#5a7cd3', '#5a95d3', '#5aaed3', '#5ac7d3',
				'#5ad3c5', '#5ad3ac', '#5ad393', '#5ad37a', '#5ad361',
				'#6dd35a', '#86d35a', '#9fd35a', '#b8d35a', '#d1d35a',
				'#d3bb5a', '#d3a25a', '#d3895a', '#d3705a', '#d35a5e',
			];

			// Default width, height and donutWidth to pick if size for directive not provided
			var width  = 150;
			var height = 150;
			var donutWidth = 16;

			// If size for directive provided, determine the width, height and donutWidth from the sizes array
			if (scope.size && sizes.hasOwnProperty(scope.size)) {
				width = sizes[scope.size].width;
				height = sizes[scope.size].height;
				donutWidth = sizes[scope.size].donutWidth;
			}

			// validation for the grade parameter;
			var numGrade = +scope.grade;
			if (numGrade < 1) {
				numGrade = 1;
			} else if (numGrade > 20) {
				numGrade = 20;
			}

			// Grayout the colors array corresponding to the grade
			for (var i=numGrade; i<=20; i++) {
				colorsArray[i] = 'lightgray';
			}

			// Calculations and d3 Magic
			var radius = Math.min(width, height) / 2;
			var color = d3.scaleOrdinal().range(colorsArray);

			var gradeChartDiv = $(element[0]).find('.grade-level-chart')[0];
			var svg = d3.select(gradeChartDiv)
				.append('svg')
				.attr('width', width)
				.attr('height', height)
				.append('g')
				.attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

			var arc = d3.arc()
				.innerRadius(radius - donutWidth)
				.outerRadius(radius)
				.startAngle(function(d) { return d.startAngle + Math.PI; })
				.endAngle(function(d) { return d.endAngle + Math.PI; });

			var pie = d3.pie()
			    .padAngle(0.02)
				.value(function(d) { return d.value; })
				.sort(null);

			var path = svg.selectAll('path')
				.data(pie(dataset))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function(d, i) {
					return color(d.data.chunk);
				});

			var labelText = svg.append('text')
				.attr('class', 'grade-label')
				.attr('transform', 'translate(0, ' + -1 * sizes[scope.size].translateYPos + ')')
				.attr('text-anchor', 'middle')
				.text('Grade');
				
			var gradeText = svg.append('text')
				.attr('class', 'grade-stat')
				.attr('transform', 'translate(0, ' + sizes[scope.size].translateYPos + ')')
				.attr('text-anchor', 'middle')
				.text(numGrade);

			$('.grade-level-chart').css('width', sizes[scope.size].outerSize);
			$('.grade-level-chart').css('height', sizes[scope.size].outerSize);
			$('.grade-level-chart').css('border-radius', sizes[scope.size].outerSize);
			$('.grade-label').css('font-size', sizes[scope.size].labelFontSize);
			$('.grade-stat').css('font-size', sizes[scope.size].statFontSize);
		}
	};
}]);
