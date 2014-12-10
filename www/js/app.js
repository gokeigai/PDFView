// PDF View

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


angular.module('pdfview', ['ionic'])

.factory('pdfService', function($http){
	
	return{
		getPdfs: function(callback) {
			return $http.get("https://learndev.vch.ca/m2/vch_custom/016_app/generate_pdf_list.php").success(callback);
		}
	}
})

.controller('MainController', function($scope, $stateParams, pdfService) {
	pdfService.getPdfs(function(results){
		$scope.pdfs = results.pdfs;		
	
	});
	
})

.controller('PdfController', function($scope) {
	$scope.openPdf = function(url){
		window.open(url, '_blank', 'location=yes')
	}

})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
});
