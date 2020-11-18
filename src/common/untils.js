export default {
	/**
		 * 方法ID: throttle
		 * 方法名称: 节流函数
		 * 方法功能:  限制时间内对执行代码次数
		 * 参数说明:  interval多久
		 * 返回值说明:
		 * 内部处理说明：
		 * 做成日期： 2020/11/18       做成者：Feng
		 */
  throttle(fn, interval) {
    var last;
    var timer;
    var interval = interval || 200;
    return function () {
      var th = this;
      var args = arguments;
      var now = +new Date();
      if (last && now - last < interval) {
        clearTimeout(timer);
        timer = setTimeout(function () {
          last = now;
          fn.apply(th, args);
        }, interval);
      } else {
        last = now;
        fn.apply(th, args);
      }
    }
  }
}
