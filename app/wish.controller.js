(function() {

	'use strict';

	// Creating Controller
	angular
		.module('aga.wishlist')
		.controller('WishController', WishController);

	function WishController($scope, WishService) {

		$scope.wishes 		= WishService.wishes;
		$scope.newWish 		= '';
		$scope.search 		= '';
		$scope.openModal 	= openModal;
		$scope.add			= add;
		$scope.edit   		= edit;
		$scope.delete 		= WishService.delete;

		// Open modal to add new wish
		function openModal() {
			$("#new-wish").modal('show');
		}

		// Add new wish
		function add() {
			WishService.add($scope.newWish);
			$scope.newWish = '';
		}

		// Edit existing wish
		function edit(wish) {
			wish.edit = wish.edit ? false : true;
		}
		
	}

})();