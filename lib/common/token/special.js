'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Token = require('../token');

var SpecialToken = function (_Token) {
  _inherits(SpecialToken, _Token);

  function SpecialToken(str, line) {
    _classCallCheck(this, SpecialToken);

    var _this = _possibleConstructorReturn(this, (SpecialToken.__proto__ || Object.getPrototypeOf(SpecialToken)).call(this, str));

    _this.line = line;
    return _this;
  }

  _createClass(SpecialToken, [{
    key: 'clone',
    value: function clone() {
      var str = this.getString(),
          line = this.getLine();

      return new SpecialToken(str, line);
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
    key: 'getHTML',
    value: function getHTML() {
      var str = this.getString(),
          type = SpecialToken.type,
          html = '<span class="' + type + '">' + str + '</span>';

      return html;
    }
  }]);

  return SpecialToken;
}(Token);

SpecialToken.type = 'special';

module.exports = SpecialToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc3BlY2lhbC5qcyJdLCJuYW1lcyI6WyJUb2tlbiIsInJlcXVpcmUiLCJTcGVjaWFsVG9rZW4iLCJzdHIiLCJsaW5lIiwiZ2V0U3RyaW5nIiwiZ2V0TGluZSIsInR5cGUiLCJodG1sIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxRQUFRLFVBQVIsQ0FBWjs7SUFFTUMsWTs7O0FBQ0osd0JBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQXVCO0FBQUE7O0FBQUEsNEhBQ2ZELEdBRGU7O0FBR3JCLFVBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUhxQjtBQUl0Qjs7Ozs0QkFFTztBQUNOLFVBQUlELE1BQU0sS0FBS0UsU0FBTCxFQUFWO0FBQUEsVUFDSUQsT0FBTyxLQUFLRSxPQUFMLEVBRFg7O0FBR0EsYUFBTyxJQUFJSixZQUFKLENBQWlCQyxHQUFqQixFQUFzQkMsSUFBdEIsQ0FBUDtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtHLElBQVo7QUFDRDs7OzhCQUVTO0FBQ1IsYUFBTyxLQUFLSCxJQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQUlELE1BQU0sS0FBS0UsU0FBTCxFQUFWO0FBQUEsVUFDSUUsT0FBT0wsYUFBYUssSUFEeEI7QUFBQSxVQUVJQyxPQUFPLGtCQUFrQkQsSUFBbEIsR0FBeUIsSUFBekIsR0FBZ0NKLEdBQWhDLEdBQXNDLFNBRmpEOztBQUlBLGFBQU9LLElBQVA7QUFDRDs7OztFQTVCd0JSLEs7O0FBK0IzQkUsYUFBYUssSUFBYixHQUFvQixTQUFwQjs7QUFFQUUsT0FBT0MsT0FBUCxHQUFpQlIsWUFBakIiLCJmaWxlIjoic3BlY2lhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIFRva2VuID0gcmVxdWlyZSgnLi4vdG9rZW4nKTtcblxuY2xhc3MgU3BlY2lhbFRva2VuIGV4dGVuZHMgVG9rZW4ge1xuICBjb25zdHJ1Y3RvcihzdHIsIGxpbmUpIHtcbiAgICBzdXBlcihzdHIpO1xuICAgIFxuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gIH1cblxuICBjbG9uZSgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgbGluZSA9IHRoaXMuZ2V0TGluZSgpO1xuXG4gICAgcmV0dXJuIG5ldyBTcGVjaWFsVG9rZW4oc3RyLCBsaW5lKTtcbiAgfVxuICBcbiAgZ2V0VHlwZSgpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlO1xuICB9XG5cbiAgZ2V0TGluZSgpIHtcbiAgICByZXR1cm4gdGhpcy5saW5lO1xuICB9XG5cbiAgZ2V0SFRNTCgpIHtcbiAgICB2YXIgc3RyID0gdGhpcy5nZXRTdHJpbmcoKSxcbiAgICAgICAgdHlwZSA9IFNwZWNpYWxUb2tlbi50eXBlLFxuICAgICAgICBodG1sID0gJzxzcGFuIGNsYXNzPVwiJyArIHR5cGUgKyAnXCI+JyArIHN0ciArICc8L3NwYW4+JztcblxuICAgIHJldHVybiBodG1sO1xuICB9XG59XG5cblNwZWNpYWxUb2tlbi50eXBlID0gJ3NwZWNpYWwnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNwZWNpYWxUb2tlbjtcbiJdfQ==