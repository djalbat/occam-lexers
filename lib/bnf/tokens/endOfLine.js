'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tokens = require('../../common/tokens'),
    EndOfLineNonSignificantToken = require('../../common/token/nonSignificant/endOfLine');

var EndOfLineToken = EndOfLineNonSignificantToken; ///

var EndOfLineTokens = function () {
  function EndOfLineTokens() {
    _classCallCheck(this, EndOfLineTokens);
  }

  _createClass(EndOfLineTokens, null, [{
    key: 'pass',
    value: function pass(tokensOrContents) {
      Tokens.pass(tokensOrContents, EndOfLineToken);
    }
  }]);

  return EndOfLineTokens;
}();

module.exports = EndOfLineTokens;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9ibmYvdG9rZW5zL2VuZE9mTGluZS5qcyJdLCJuYW1lcyI6WyJUb2tlbnMiLCJyZXF1aXJlIiwiRW5kT2ZMaW5lTm9uU2lnbmlmaWNhbnRUb2tlbiIsIkVuZE9mTGluZVRva2VuIiwiRW5kT2ZMaW5lVG9rZW5zIiwidG9rZW5zT3JDb250ZW50cyIsInBhc3MiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsU0FBU0MsUUFBUSxxQkFBUixDQUFmO0FBQUEsSUFDTUMsK0JBQStCRCxRQUFRLDZDQUFSLENBRHJDOztBQUdBLElBQU1FLGlCQUFpQkQsNEJBQXZCLEMsQ0FBc0Q7O0lBRWhERSxlOzs7Ozs7O3lCQUNRQyxnQixFQUFrQjtBQUFFTCxhQUFPTSxJQUFQLENBQVlELGdCQUFaLEVBQThCRixjQUE5QjtBQUFnRDs7Ozs7O0FBR2xGSSxPQUFPQyxPQUFQLEdBQWlCSixlQUFqQiIsImZpbGUiOiJlbmRPZkxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XHJcblxyXG5jb25zdCBUb2tlbnMgPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW5zJyksXHJcbiAgICAgIEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW4gPSByZXF1aXJlKCcuLi8uLi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvZW5kT2ZMaW5lJyk7XHJcblxyXG5jb25zdCBFbmRPZkxpbmVUb2tlbiA9IEVuZE9mTGluZU5vblNpZ25pZmljYW50VG9rZW47ICAvLy9cclxuXHJcbmNsYXNzIEVuZE9mTGluZVRva2VucyB7XHJcbiAgc3RhdGljIHBhc3ModG9rZW5zT3JDb250ZW50cykgeyBUb2tlbnMucGFzcyh0b2tlbnNPckNvbnRlbnRzLCBFbmRPZkxpbmVUb2tlbik7IH1cclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBFbmRPZkxpbmVUb2tlbnM7XHJcbiJdfQ==