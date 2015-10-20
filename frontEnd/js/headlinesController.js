angular
	.module("jogOnTimesApp")
	.controller("HeadlineController", HeadlineController);

	HeadlineController.$inject = ["$http"];

	function HeadlineController($http) {
		var self = this;
		self.all = [];
		// self.getHeadlines = getHeadlines;
		self.getHeadlines =     [{
        "headline": ["Cat Found", "Up Tree"],
        "blankWord": "Stuck",
        "blankWordCharLength": 5
    }];

		// getHeadlines();

		function getHeadlines() {
		 $http
      .get('http://localhost:3000/news/' + self.year + '/' + self.category)
      .then(function(response){
        self.all = response.data.headlines;
    	});
  	}
	}