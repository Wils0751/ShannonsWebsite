angular.module('App')
.factory('CategoryService', function ItemsFactory($http) {
  return{
  	  getAll: function(){
	  	return $http({method:'GET', url:'data.json'}); 
	  },
	  getOne:function(cat_id){
		  return $http({method:'GET', url:'data.json'});
	  }
	 
  }

})
.factory('ProductService',function ProductFactory($http){
  return{
	  getProducts: function(){
		  return $http({method:'GET', url:'data.json'})
	  },
	  getProduct:function(_id){
	  	return $http({method:'GET', url:'data.json'})
  	  }
  }	
});