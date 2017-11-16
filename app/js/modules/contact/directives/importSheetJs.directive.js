angular.module('app').directive('importSheetJs', function() {
	return {
		scope: {},
        link: function (scope, elm, attrs) {
            elm.on('change', function (changeEvent) {
                scope.$emit('sheetjs:file:uploaded', changeEvent.target.files[0])
            });
        }
    };
});
