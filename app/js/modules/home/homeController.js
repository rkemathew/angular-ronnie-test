angular.module('app').controller('HomeCtrl', ['$scope', function($scope) {
    $scope.pct1 = "40";
    $scope.pct2 = "45";
    $scope.pct3 = "100";

    $scope.subCategory = {
        "id": 49,
        "shortProfile": "A1",
        "type": "C",
        "userEdited": false,
        "descriptions": [
            {
                "name": "Computer skills",
                "level": 3,
                "description": "Acts as the organization's authority and established expert on understanding and using standard office equipment and standard software packages to support business processes."
            }
        ],
        "levelDescription": {
            "id": 49,
            "maxLevel": 5,
            "descriptions": [
                {
                    "name": "Computer skills",
                    "level": 1,
                    "levelLabel": null,
                    "description": "Supports business processes under supervision by applying an elementary understanding and effective use of standard office equipment and standard software packages.",
                    "default": false
                },
                {
                    "name": "Computer skills",
                    "level": 2,
                    "levelLabel": null,
                    "description": "Supports business processes with guidance but not constant supervision by understanding and effectively using standard office equipment and standard software packages.",
                    "default": false
                },
                {
                    "name": "Computer skills",
                    "level": 3,
                    "levelLabel": null,
                    "description": "Supports business processes without supervision by understanding and effectively using standard office equipment and standard software packages, while providing technical guidance as needed.",
                    "default": false
                },
                {
                    "name": "Computer skills",
                    "level": 4,
                    "levelLabel": null,
                    "description": "Independently supports business processes with comprehensive understanding and effective use of standard office equipment and standard software packages, while also providing guidance and training to others.",
                    "default": false
                },
                {
                    "name": "Computer skills",
                    "level": 5,
                    "levelLabel": null,
                    "description": "Acts as the organization's authority and established expert on understanding and using standard office equipment and standard software packages to support business processes.",
                    "default": false
                }
            ]
        }

        

    };
}]);
