'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Token = function () {
  function Token(str) {
    _classCallCheck(this, Token);

    this.str = str;
  }

  _createClass(Token, [{
    key: 'getString',
    value: function getString() {
      return this.str;
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
    key: 'trimFromStart',
    value: function trimFromStart(start) {
      this.str = this.str.substring(start);
    }
  }, {
    key: 'trimToEnd',
    value: function trimToEnd(end) {
      this.str = this.str.substring(0, end);
    }
  }]);

  return Token;
}();

module.exports = Token;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi90b2tlbi5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInN0ciIsInN0YXJ0IiwiZW5kIiwic3Vic3RyaW5nIiwibGVuZ3RoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxLO0FBQ0osaUJBQVlDLEdBQVosRUFBaUI7QUFBQTs7QUFDZixTQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFDRDs7OztnQ0FFVztBQUNWLGFBQU8sS0FBS0EsR0FBWjtBQUNEOzs7aUNBRVlDLEssRUFBT0MsRyxFQUFLO0FBQ3ZCLGFBQU8sS0FBS0YsR0FBTCxDQUFTRyxTQUFULENBQW1CRixLQUFuQixFQUEwQkMsR0FBMUIsQ0FBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtGLEdBQUwsQ0FBU0ksTUFBaEIsQ0FEVSxDQUNjO0FBQ3pCOzs7a0NBRWFILEssRUFBTztBQUNuQixXQUFLRCxHQUFMLEdBQVcsS0FBS0EsR0FBTCxDQUFTRyxTQUFULENBQW1CRixLQUFuQixDQUFYO0FBQ0Q7Ozs4QkFFU0MsRyxFQUFLO0FBQ2IsV0FBS0YsR0FBTCxHQUFXLEtBQUtBLEdBQUwsQ0FBU0csU0FBVCxDQUFtQixDQUFuQixFQUFzQkQsR0FBdEIsQ0FBWDtBQUNEOzs7Ozs7QUFHSEcsT0FBT0MsT0FBUCxHQUFpQlAsS0FBakIiLCJmaWxlIjoidG9rZW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNsYXNzIFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgdGhpcy5zdHIgPSBzdHI7XG4gIH1cblxuICBnZXRTdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyO1xuICB9XG4gIFxuICBnZXRTdWJzdHJpbmcoc3RhcnQsIGVuZCkge1xuICAgIHJldHVybiB0aGlzLnN0ci5zdWJzdHJpbmcoc3RhcnQsIGVuZCk7XG4gIH1cblxuICBnZXRMZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RyLmxlbmd0aDsgLy8vXG4gIH1cblxuICB0cmltRnJvbVN0YXJ0KHN0YXJ0KSB7XG4gICAgdGhpcy5zdHIgPSB0aGlzLnN0ci5zdWJzdHJpbmcoc3RhcnQpO1xuICB9XG5cbiAgdHJpbVRvRW5kKGVuZCkge1xuICAgIHRoaXMuc3RyID0gdGhpcy5zdHIuc3Vic3RyaW5nKDAsIGVuZCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBUb2tlbjtcbiJdfQ==