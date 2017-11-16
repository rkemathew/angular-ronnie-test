angular.module('app').controller('AboutCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.upload = function(file) {
        console.log('file', $scope.file);

        var presignedUrl = 'https://uzy3l1ubd3.execute-api.us-east-1.amazonaws.com/test/haygroup-files-upload';
        $http.post(presignedUrl, { filename: $scope.file.name })
//        $http.post(presignedUrl)
            .success(function(resp) {
                console.log('success', resp);

                var payload = new FormData();
                payload.append('file', $scope.file);

                $http({
                    url: resp,
                    method: 'PUT',
                    data: payload,
                    headers: {
                        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                    }
                }).success(function(resp) {
                    console.log('Successfully Uploaded file', resp);
                }).error(function(resp) {
                    console.log('Failed Uploading file', resp);
                });
            })
            .error(function(resp) {
                console.log('error', resp);
            });
    }
}]);
