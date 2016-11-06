'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RegExpPattern = function () {
  function RegExpPattern(string) {
    _classCallCheck(this, RegExpPattern);

    this.string = string;
  }

  _createClass(RegExpPattern, [{
    key: 'toString',
    value: function toString() {
      return this.string;
    }
  }, {
    key: 'removeAnchors',
    value: function removeAnchors() {
      this.string = this.string.replace(/^\^/, '').replace(/\$$/, '');

      return this;
    }
  }, {
    key: 'removeNonCapturingGroup',
    value: function removeNonCapturingGroup() {
      this.string = this.string.replace(/^(?:\^\(\?:)/, '').replace(/(?:\)\$)$/, '');

      return this;
    }
  }], [{
    key: 'fromRegExp',
    value: function fromRegExp(regExp) {
      var string = regExp.source,
          ///
      regExpPattern = new RegExpPattern(string);

      return regExpPattern;
    }
  }]);

  return RegExpPattern;
}();

module.exports = RegExpPattern;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9yZWdFeHBQYXR0ZXJuLmpzIl0sIm5hbWVzIjpbIlJlZ0V4cFBhdHRlcm4iLCJzdHJpbmciLCJyZXBsYWNlIiwicmVnRXhwIiwic291cmNlIiwicmVnRXhwUGF0dGVybiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsYTtBQUNKLHlCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNEOzs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQSxNQUFaO0FBQ0Q7OztvQ0FFZTtBQUNkLFdBQUtBLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlDLE9BQVosQ0FBb0IsS0FBcEIsRUFBMkIsRUFBM0IsRUFBK0JBLE9BQS9CLENBQXVDLEtBQXZDLEVBQThDLEVBQTlDLENBQWQ7O0FBRUEsYUFBTyxJQUFQO0FBQ0Q7Ozs4Q0FFeUI7QUFDeEIsV0FBS0QsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUMsT0FBWixDQUFvQixjQUFwQixFQUFvQyxFQUFwQyxFQUF3Q0EsT0FBeEMsQ0FBZ0QsV0FBaEQsRUFBNkQsRUFBN0QsQ0FBZDs7QUFFQSxhQUFPLElBQVA7QUFDRDs7OytCQUVpQkMsTSxFQUFRO0FBQ3hCLFVBQUlGLFNBQVNFLE9BQU9DLE1BQXBCO0FBQUEsVUFBNEI7QUFDeEJDLHNCQUFnQixJQUFJTCxhQUFKLENBQWtCQyxNQUFsQixDQURwQjs7QUFHQSxhQUFPSSxhQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCUCxhQUFqQiIsImZpbGUiOiJyZWdFeHBQYXR0ZXJuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBSZWdFeHBQYXR0ZXJuIHtcbiAgY29uc3RydWN0b3Ioc3RyaW5nKSB7XG4gICAgdGhpcy5zdHJpbmcgPSBzdHJpbmc7XG4gIH1cbiAgXG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cmluZztcbiAgfVxuICBcbiAgcmVtb3ZlQW5jaG9ycygpIHtcbiAgICB0aGlzLnN0cmluZyA9IHRoaXMuc3RyaW5nLnJlcGxhY2UoL15cXF4vLCAnJykucmVwbGFjZSgvXFwkJC8sICcnKTtcbiAgICBcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBcbiAgcmVtb3ZlTm9uQ2FwdHVyaW5nR3JvdXAoKSB7XG4gICAgdGhpcy5zdHJpbmcgPSB0aGlzLnN0cmluZy5yZXBsYWNlKC9eKD86XFxeXFwoXFw/OikvLCAnJykucmVwbGFjZSgvKD86XFwpXFwkKSQvLCAnJyk7XG4gICAgXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlZ0V4cChyZWdFeHApIHtcbiAgICB2YXIgc3RyaW5nID0gcmVnRXhwLnNvdXJjZSwgLy8vXG4gICAgICAgIHJlZ0V4cFBhdHRlcm4gPSBuZXcgUmVnRXhwUGF0dGVybihzdHJpbmcpO1xuXG4gICAgcmV0dXJuIHJlZ0V4cFBhdHRlcm47XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSZWdFeHBQYXR0ZXJuO1xuIl19