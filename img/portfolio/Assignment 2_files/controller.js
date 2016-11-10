angular.module('App')
.controller('loadCtrl', function($scope, $stateParams, CategoryService){
	//business logic here
	//$scope.myVar = "Cheese
	CategoryService.getAll()
	.then(function(response){
		$scope.allData = response.data;
	//	console.log($scope.allData);
		
		});
		
	},function(response){
		
	
	})

angular.module('App')
.controller('categoryCtrl', function($scope , $stateParams, CategoryService ){
	$scope.catid = $stateParams.catid;
	
	//business logic here
	//$scope.myVar = "Cheese";
	CategoryService.getOne()
	.then(function(response){
		$scope.booksData = response.data.books;
		//console.log($scope.booksData);
		$scope.data= $scope.booksData.filter(x => x.cat_id[0] == [$stateParams.catid]);
	//	console.log($scope.data);
		});
		
	},function(response){
		
	
	})
//	$scope.item = {};
//CategoryService.getOne($scope.catid)
//	.then(function(response){
//	var items = response.data.books;
//	items.forEach(function(i){
//		if(i.cat_id == $stateParams.catid){
//			
//			$scope.item=i;
//	
//			console.log($scope.item);
//		}
//	});
//		
//	},function(response){
//		
//	
//	})
//})

.controller('detailsCtrl', function($scope , $stateParams, ProductService){
	//business logic here
	//$scope.myVar = "Cheese";
	$scope.itemid= $stateParams.itemid;
	$scope.item={};
	ProductService.getProducts()
	.then(function(response){
		var items = response.data.books;
		items.forEach(function(i){
			if(i._id == $stateParams.itemid){
			
				$scope.item=i;
	
			console.log($scope.item);
		}
	});
		
		
		
	},function(response){
		
	
	})



});