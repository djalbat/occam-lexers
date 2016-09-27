'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../../common/token');

var BracketToken = function (_Token) {
  _inherits(BracketToken, _Token);

  function BracketToken(str) {
    _classCallCheck(this, BracketToken);

    return _possibleConstructorReturn(this, (BracketToken.__proto__ || Object.getPrototypeOf(BracketToken)).call(this, str));
  }

  _createClass(BracketToken, [{
    key: 'html',
    value: function html() {
      var str = this.getStr(),
          html = str; ///

      return html;
    }
  }, {
    key: 'clone',
    value: function clone() {
      var str = this.getStr();

      return new BracketToken(str);
    }
  }]);

  return BracketToken;
}(Token);

module.exports = BracketToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9mbG9yZW5jZUxleGVyL3Rva2VuL2JyYWNrZXQuanMiXSwibmFtZXMiOlsiVG9rZW4iLCJyZXF1aXJlIiwiQnJhY2tldFRva2VuIiwic3RyIiwiZ2V0U3RyIiwiaHRtbCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxvQkFBUixDQUFaOztJQUVNQyxZOzs7QUFDSix3QkFBWUMsR0FBWixFQUFpQjtBQUFBOztBQUFBLHVIQUNUQSxHQURTO0FBRWhCOzs7OzJCQUVNO0FBQ0wsVUFBSUEsTUFBTSxLQUFLQyxNQUFMLEVBQVY7QUFBQSxVQUNJQyxPQUFPRixHQURYLENBREssQ0FFVzs7QUFFaEIsYUFBT0UsSUFBUDtBQUNEOzs7NEJBRU87QUFDTixVQUFJRixNQUFNLEtBQUtDLE1BQUwsRUFBVjs7QUFFQSxhQUFPLElBQUlGLFlBQUosQ0FBaUJDLEdBQWpCLENBQVA7QUFDRDs7OztFQWhCd0JILEs7O0FBbUIzQk0sT0FBT0MsT0FBUCxHQUFpQkwsWUFBakIiLCJmaWxlIjoiYnJhY2tldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vLi4vY29tbW9uL3Rva2VuJyk7XG5cbmNsYXNzIEJyYWNrZXRUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY29uc3RydWN0b3Ioc3RyKSB7XG4gICAgc3VwZXIoc3RyKTtcbiAgfVxuXG4gIGh0bWwoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyKCksXG4gICAgICAgIGh0bWwgPSBzdHI7IC8vL1xuXG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHIoKTtcblxuICAgIHJldHVybiBuZXcgQnJhY2tldFRva2VuKHN0cik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBCcmFja2V0VG9rZW47XG5cbiJdfQ==