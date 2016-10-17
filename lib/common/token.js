'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(str, type, line) {
    _classCallCheck(this, Token);

    this.str = str;
    this.type = type;
    this.line = line;
  }

  _createClass(Token, [{
    key: 'getString',
    value: function getString() {
      return this.str;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getSubstring',
    value: function getSubstring(start, end) {
      return this.str.substring(start, end);
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.str.length; ///
    }
  }, {
    key: 'setString',
    value: function setString(str) {
      this.str = str;
    }
  }, {
    key: 'trimFromStart',
    value: function trimFromStart(start) {
      this.str = this.str.substring(start);
    }
  }, {
    key: 'trimToEnd',
    value: function trimToEnd(end) {
      this.str = this.str.substring(0, end);
    }
  }, {
    key: 'getHTML',
    value: function getHTML() {
      var innerHTML = this.str,
          ///
      className = this.type,
          ///
      html = '<span class="' + className + '">' + innerHTML + '</span>';

      return html;
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9jb21tb24vdG9rZW4uanMiXSwibmFtZXMiOlsiVG9rZW4iLCJzdHIiLCJ0eXBlIiwibGluZSIsInN0YXJ0IiwiZW5kIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7SUFFTUEsSztBQUNKLGlCQUFZQyxHQUFaLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkI7QUFBQTs7QUFDM0IsU0FBS0YsR0FBTCxHQUFXQSxHQUFYO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0Q7Ozs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLEdBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLQyxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7aUNBRVlDLEssRUFBT0MsRyxFQUFLO0FBQ3ZCLGFBQU8sS0FBS0osR0FBTCxDQUFTSyxTQUFULENBQW1CRixLQUFuQixFQUEwQkMsR0FBMUIsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtKLEdBQUwsQ0FBU00sTUFBaEIsQ0FEVSxDQUNjO0FBQ3pCOzs7OEJBRVNOLEcsRUFBSztBQUNiLFdBQUtBLEdBQUwsR0FBV0EsR0FBWDtBQUNEOzs7a0NBRWFHLEssRUFBTztBQUNuQixXQUFLSCxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTSyxTQUFULENBQW1CRixLQUFuQixDQUFYO0FBQ0Q7Ozs4QkFFU0MsRyxFQUFLO0FBQ2IsV0FBS0osR0FBTCxHQUFXLEtBQUtBLEdBQUwsQ0FBU0ssU0FBVCxDQUFtQixDQUFuQixFQUFzQkQsR0FBdEIsQ0FBWDtBQUNEOzs7OEJBRVM7QUFDUixVQUFJRyxZQUFZLEtBQUtQLEdBQXJCO0FBQUEsVUFBMEI7QUFDdEJRLGtCQUFZLEtBQUtQLElBRHJCO0FBQUEsVUFDNEI7QUFDeEJRLCtCQUF1QkQsU0FBdkIsVUFBcUNELFNBQXJDLFlBRko7O0FBSUEsYUFBT0UsSUFBUDtBQUNEOzs7Ozs7QUFHSEMsT0FBT0MsT0FBUCxHQUFpQlosS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyLCB0eXBlLCBsaW5lKSB7XG4gICAgdGhpcy5zdHIgPSBzdHI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmxpbmUgPSBsaW5lO1xuICB9XG5cbiAgZ2V0U3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0cjtcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG4gIFxuICBnZXRMaW5lKCkge1xuICAgIHJldHVybiB0aGlzLmxpbmU7XG4gIH1cbiAgXG4gIGdldFN1YnN0cmluZyhzdGFydCwgZW5kKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyLnN1YnN0cmluZyhzdGFydCwgZW5kKTtcbiAgfVxuXG4gIGdldExlbmd0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdHIubGVuZ3RoOyAvLy9cbiAgfVxuICBcbiAgc2V0U3RyaW5nKHN0cikge1xuICAgIHRoaXMuc3RyID0gc3RyO1xuICB9XG4gIFxuICB0cmltRnJvbVN0YXJ0KHN0YXJ0KSB7XG4gICAgdGhpcy5zdHIgPSB0aGlzLnN0ci5zdWJzdHJpbmcoc3RhcnQpO1xuICB9XG5cbiAgdHJpbVRvRW5kKGVuZCkge1xuICAgIHRoaXMuc3RyID0gdGhpcy5zdHIuc3Vic3RyaW5nKDAsIGVuZCk7XG4gIH1cblxuICBnZXRIVE1MKCkge1xuICAgIHZhciBpbm5lckhUTUwgPSB0aGlzLnN0ciwgLy8vXG4gICAgICAgIGNsYXNzTmFtZSA9IHRoaXMudHlwZSwgIC8vL1xuICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHtpbm5lckhUTUx9PC9zcGFuPmA7XG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFRva2VuO1xuIl19