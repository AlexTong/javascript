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
		//像我们所知道的，用 instanceof 和 constructor 是最直接的、简单的方式：
		// var arr = [];
		// arr instanceof Array; // true
		// arr.constructor == Array; //true
		// 只是，由于在不同 iframe 中创建的 Array 并不共享 prototype。如果这样用。麻烦就来了。那么，如果要应用在框架中，这种方式肯定是行不通的。
		isArray: function(obj) {
			return toString.call(obj) === "[object Array]";
		}
	}
})();