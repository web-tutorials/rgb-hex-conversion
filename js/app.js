var hexrgbconversion = angular.module("hexrgbconversion", []);
hexrgbconversion.controller('default', function ($scope) {
    $scope.hex = "#";
    $scope.rgb = {
        "red": 0,
        "green": 0,
        "blue": 0
    };
    $scope.convertRGBToHex = function () {
        $scope.hex = "#".concat(($scope.rgb.blue | $scope.rgb.green << 8 | $scope.rgb.red << 16 | 1 << 24).toString(16).slice(1));
    };

    $scope.convertHexToRGB = function () {

        var b = $scope.hex.indexOf("#") == 0 ? parseInt($scope.hex.substring(1), 16) : $scope.hex;
        $scope.rgb = {
            "red": b >> 16,
            "green": b >> 8 & 255,
            "blue": b & 255
        };
    };
});