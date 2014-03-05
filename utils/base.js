/**
 * Created with JetBrains WebStorm.
 * User: Alex Tong(mailto:alex.tong@bstek.com)
 * Date: 14-2-17
 * Time: 下午2:17
 * To change this template use File | Settings | File Templates.
 */
(function() {
	var base = {
		isFunction: function(obj) {
			return toString.call(obj) === "[object Function]";
		},

		isArray: function(obj) {
			return toString.call(obj) === "[object Array]";
		}
	}
})();