(function() {

	'use strict';

	// Creating Service
	angular
		.module('aga.wishlist')
		.factory('WishService', WishService);

	function WishService() {

		let wishes = [
			{
				id: '1',
				wish: 'Heaven',
				edit: false
			},
			{
				id: '2',
				wish: 'High-Quality University',
				edit: false
			},
			{
				id: '3',
				wish: 'House',
				edit: false
			},
			{
				id: '4',
				wish: 'ASUS ROG GL502VS G-SYNC',
				edit: false
			},
			{
				id: '5',
				wish: 'Apple iPhone 7',
				edit: false
			},
			{
				id: '6',
				wish: 'Health',
				edit: false
			},
			{
				id: '7',
				wish: 'Unlimited Stamina',
				edit: false
			},
			{
				id: '8',
				wish: 'Proto Mighty Action X Gashat & Gamer Driver',
				edit: false
			},
			{
				id: '9',
				wish: 'Dangerous Zombie Gashat & Gashacon Bugvisor',
				edit: false
			}
		];

		// Get wish index based on ID
		function getIndex(id) {
			for (let i in wishes) {	
				if (wishes[i].id == id) return i;
			}

			return -1;
		}

		// Get last wish
		function getLastWish() {
			let lastIndex = wishes.length - 1;
			return wishes[lastIndex];
		}

		// Create new wish
		function create(wish) {
			let last = getLastWish();
			let id   = last.id;

			wishes.push({ id: ++id, wish: wish });
			$("#new-wish").modal('hide');
		}

		// Delete exising wish
		function remove(id) {
			wishes.splice(getIndex(id), 1);
		};

		return {
			wishes : wishes,
			add    : create,
			delete : remove
		};

	}

})();