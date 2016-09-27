'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var WhitespaceToken = function (_Token) {
  _inherits(WhitespaceToken, _Token);

  function WhitespaceToken() {
    _classCallCheck(this, WhitespaceToken);

    return _possibleConstructorReturn(this, (WhitespaceToken.__proto__ || Object.getPrototypeOf(WhitespaceToken)).apply(this, arguments));
  }

  _createClass(WhitespaceToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString();

      return new WhitespaceToken(str);
    }
  }, {
    key: 'html',
    value: function html() {
      var str = this.getString(),
          html = str; ///

      return html;
    }
  }], [{
    key: 'fromContent',
    value: function fromContent(content) {
      var matches = content.match(/^([\t ]+)/);

      if (!matches) {
        return null;
      }

      var firstMatch = first(matches),
          str = firstMatch,
          ///
      whitespaceToken = new WhitespaceToken(str);

      return whitespaceToken;
    }
  }, {
    key: 'positionInContent',
    value: function positionInContent(content) {
      var position = content.search(/[\t ]+/);

      return position;
    }
  }]);

  return WhitespaceToken;
}(Token);

module.exports = WhitespaceToken;

function first(array) {
  return array[0];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi90b2tlbi93aGl0ZXNwYWNlLmpzIl0sIm5hbWVzIjpbIlRva2VuIiwicmVxdWlyZSIsIldoaXRlc3BhY2VUb2tlbiIsInN0ciIsImdldFN0cmluZyIsImh0bWwiLCJjb250ZW50IiwibWF0Y2hlcyIsIm1hdGNoIiwiZmlyc3RNYXRjaCIsImZpcnN0Iiwid2hpdGVzcGFjZVRva2VuIiwicG9zaXRpb24iLCJzZWFyY2giLCJtb2R1bGUiLCJleHBvcnRzIiwiYXJyYXkiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsUUFBUSxVQUFSLENBQVo7O0lBRU1DLGU7Ozs7Ozs7Ozs7OzRCQUNJO0FBQ04sVUFBSUMsTUFBTSxLQUFLQyxTQUFMLEVBQVY7O0FBRUEsYUFBTyxJQUFJRixlQUFKLENBQW9CQyxHQUFwQixDQUFQO0FBQ0Q7OzsyQkFFTTtBQUNMLFVBQUlBLE1BQU0sS0FBS0MsU0FBTCxFQUFWO0FBQUEsVUFDSUMsT0FBT0YsR0FEWCxDQURLLENBRVc7O0FBRWhCLGFBQU9FLElBQVA7QUFDRDs7O2dDQUVrQkMsTyxFQUFTO0FBQzFCLFVBQUlDLFVBQVVELFFBQVFFLEtBQVIsQ0FBYyxXQUFkLENBQWQ7O0FBRUEsVUFBSSxDQUFDRCxPQUFMLEVBQWM7QUFDWixlQUFPLElBQVA7QUFDRDs7QUFFRCxVQUFJRSxhQUFhQyxNQUFNSCxPQUFOLENBQWpCO0FBQUEsVUFDSUosTUFBTU0sVUFEVjtBQUFBLFVBQ3NCO0FBQ2xCRSx3QkFBa0IsSUFBSVQsZUFBSixDQUFvQkMsR0FBcEIsQ0FGdEI7O0FBSUEsYUFBT1EsZUFBUDtBQUNEOzs7c0NBRXdCTCxPLEVBQVM7QUFDaEMsVUFBSU0sV0FBV04sUUFBUU8sTUFBUixDQUFlLFFBQWYsQ0FBZjs7QUFFQSxhQUFPRCxRQUFQO0FBQ0Q7Ozs7RUFoQzJCWixLOztBQW1DOUJjLE9BQU9DLE9BQVAsR0FBaUJiLGVBQWpCOztBQUVBLFNBQVNRLEtBQVQsQ0FBZU0sS0FBZixFQUFzQjtBQUFFLFNBQU9BLE1BQU0sQ0FBTixDQUFQO0FBQWtCIiwiZmlsZSI6IndoaXRlc3BhY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBUb2tlbiA9IHJlcXVpcmUoJy4uL3Rva2VuJyk7XG5cbmNsYXNzIFdoaXRlc3BhY2VUb2tlbiBleHRlbmRzIFRva2VuIHtcbiAgY2xvbmUoKSB7XG4gICAgdmFyIHN0ciA9IHRoaXMuZ2V0U3RyaW5nKCk7XG5cbiAgICByZXR1cm4gbmV3IFdoaXRlc3BhY2VUb2tlbihzdHIpO1xuICB9XG5cbiAgaHRtbCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgaHRtbCA9IHN0cjsgLy8vXG5cbiAgICByZXR1cm4gaHRtbDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tQ29udGVudChjb250ZW50KSB7XG4gICAgdmFyIG1hdGNoZXMgPSBjb250ZW50Lm1hdGNoKC9eKFtcXHQgXSspLyk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBmaXJzdE1hdGNoID0gZmlyc3QobWF0Y2hlcyksXG4gICAgICAgIHN0ciA9IGZpcnN0TWF0Y2gsIC8vL1xuICAgICAgICB3aGl0ZXNwYWNlVG9rZW4gPSBuZXcgV2hpdGVzcGFjZVRva2VuKHN0cik7XG5cbiAgICByZXR1cm4gd2hpdGVzcGFjZVRva2VuO1xuICB9XG5cbiAgc3RhdGljIHBvc2l0aW9uSW5Db250ZW50KGNvbnRlbnQpIHtcbiAgICB2YXIgcG9zaXRpb24gPSBjb250ZW50LnNlYXJjaCgvW1xcdCBdKy8pO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2hpdGVzcGFjZVRva2VuO1xuXG5mdW5jdGlvbiBmaXJzdChhcnJheSkgeyByZXR1cm4gYXJyYXlbMF07IH1cbiJdfQ==