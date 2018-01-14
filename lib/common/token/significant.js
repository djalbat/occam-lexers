'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var tokenUtilities = require('../../utilities/token');

var sanitiseContent = tokenUtilities.sanitiseContent;

var SignificantToken = function () {
  function SignificantToken(content, line, type, innerHTML) {
    _classCallCheck(this, SignificantToken);

    this.content = content;
    this.line = line;
    this.type = type;
    this.innerHTML = innerHTML;
  }

  _createClass(SignificantToken, [{
    key: 'isSignificant',
    value: function isSignificant() {
      var significant = true;

      return significant;
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.content;
    }
  }, {
    key: 'getLine',
    value: function getLine() {
      return this.line;
    }
  }, {
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getInnerHTML',
    value: function getInnerHTML() {
      return this.innerHTML;
    }
  }, {
    key: 'asHTML',
    value: function asHTML(filePath) {
      var className = this.type,
          ///
      html = '<span class="' + className + '">' + this.innerHTML + '</span>';

      return html;
    }
  }, {
    key: 'getLength',
    value: function getLength() {
      return this.content.length; ///
    }
  }, {
    key: 'clone',
    value: function clone(startPosition, endPosition) {
      return SignificantToken.clone(SignificantToken, this, startPosition, endPosition);
    }
  }], [{
    key: 'clone',
    value: function clone() {
      var Class = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SignificantToken;
      var significantToken = arguments[1];
      var startPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var endPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : significantToken.getLength();

      var clonedSignificantToken = null;

      if (startPosition !== endPosition) {
        var content = significantToken.getContent();

        var line = significantToken.getLine(),
            type = significantToken.getType();

        content = content.substring(startPosition, endPosition); ///

        clonedSignificantToken = Class.fromContentLineAndType(content, line, type);
      }

      return clonedSignificantToken;
    }
  }, {
    key: 'fromContentLineAndType',
    value: function fromContentLineAndType(Class, content, line, type) {
      if (type === undefined) {
        type = line;
        line = content;
        content = Class;
        Class = SignificantToken;
      }

      for (var _len = arguments.length, remainingArguments = Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        remainingArguments[_key - 4] = arguments[_key];
      }

      var sanitisedContent = sanitiseContent(content),
          innerHTML = sanitisedContent,
          ///
      significantToken = new (Function.prototype.bind.apply(Class, [null].concat([content, line, type, innerHTML], remainingArguments)))();

      return significantToken;
    }
  }]);

  return SignificantToken;
}();

module.exports = SignificantToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vc2lnbmlmaWNhbnQuanMiXSwibmFtZXMiOlsidG9rZW5VdGlsaXRpZXMiLCJyZXF1aXJlIiwic2FuaXRpc2VDb250ZW50IiwiU2lnbmlmaWNhbnRUb2tlbiIsImNvbnRlbnQiLCJsaW5lIiwidHlwZSIsImlubmVySFRNTCIsInNpZ25pZmljYW50IiwiZmlsZVBhdGgiLCJjbGFzc05hbWUiLCJodG1sIiwibGVuZ3RoIiwic3RhcnRQb3NpdGlvbiIsImVuZFBvc2l0aW9uIiwiY2xvbmUiLCJDbGFzcyIsInNpZ25pZmljYW50VG9rZW4iLCJnZXRMZW5ndGgiLCJjbG9uZWRTaWduaWZpY2FudFRva2VuIiwiZ2V0Q29udGVudCIsImdldExpbmUiLCJnZXRUeXBlIiwic3Vic3RyaW5nIiwiZnJvbUNvbnRlbnRMaW5lQW5kVHlwZSIsInVuZGVmaW5lZCIsInJlbWFpbmluZ0FyZ3VtZW50cyIsInNhbml0aXNlZENvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0FBRUEsSUFBTUEsaUJBQWlCQyxRQUFRLHVCQUFSLENBQXZCOztJQUVRQyxlLEdBQW9CRixjLENBQXBCRSxlOztJQUVGQyxnQjtBQUNKLDRCQUFZQyxPQUFaLEVBQXFCQyxJQUFyQixFQUEyQkMsSUFBM0IsRUFBaUNDLFNBQWpDLEVBQTRDO0FBQUE7O0FBQzFDLFNBQUtILE9BQUwsR0FBZUEsT0FBZjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7Ozs7b0NBRWU7QUFDZCxVQUFNQyxjQUFjLElBQXBCOztBQUVBLGFBQU9BLFdBQVA7QUFDRDs7O2lDQUVZO0FBQ1gsYUFBTyxLQUFLSixPQUFaO0FBQ0Q7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0MsSUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7O21DQUVjO0FBQ2IsYUFBTyxLQUFLQyxTQUFaO0FBQ0Q7OzsyQkFFTUUsUSxFQUFVO0FBQ2YsVUFBTUMsWUFBWSxLQUFLSixJQUF2QjtBQUFBLFVBQThCO0FBQ3hCSywrQkFBdUJELFNBQXZCLFVBQXFDLEtBQUtILFNBQTFDLFlBRE47O0FBR0EsYUFBT0ksSUFBUDtBQUNEOzs7Z0NBRVc7QUFDVixhQUFPLEtBQUtQLE9BQUwsQ0FBYVEsTUFBcEIsQ0FEVSxDQUNrQjtBQUM3Qjs7OzBCQUVLQyxhLEVBQWVDLFcsRUFBYTtBQUFFLGFBQU9YLGlCQUFpQlksS0FBakIsQ0FBdUJaLGdCQUF2QixFQUF5QyxJQUF6QyxFQUErQ1UsYUFBL0MsRUFBOERDLFdBQTlELENBQVA7QUFBbUY7Ozs0QkFFQztBQUFBLFVBQTNHRSxLQUEyRyx1RUFBbkdiLGdCQUFtRztBQUFBLFVBQWpGYyxnQkFBaUY7QUFBQSxVQUEvREosYUFBK0QsdUVBQS9DLENBQStDO0FBQUEsVUFBNUNDLFdBQTRDLHVFQUE5QkcsaUJBQWlCQyxTQUFqQixFQUE4Qjs7QUFDdEgsVUFBSUMseUJBQXlCLElBQTdCOztBQUVBLFVBQUlOLGtCQUFrQkMsV0FBdEIsRUFBbUM7QUFDakMsWUFBSVYsVUFBVWEsaUJBQWlCRyxVQUFqQixFQUFkOztBQUVBLFlBQU1mLE9BQU9ZLGlCQUFpQkksT0FBakIsRUFBYjtBQUFBLFlBQ01mLE9BQU9XLGlCQUFpQkssT0FBakIsRUFEYjs7QUFHQWxCLGtCQUFVQSxRQUFRbUIsU0FBUixDQUFrQlYsYUFBbEIsRUFBaUNDLFdBQWpDLENBQVYsQ0FOaUMsQ0FNeUI7O0FBRTFESyxpQ0FBeUJILE1BQU1RLHNCQUFOLENBQTZCcEIsT0FBN0IsRUFBc0NDLElBQXRDLEVBQTRDQyxJQUE1QyxDQUF6QjtBQUNEOztBQUVELGFBQU9hLHNCQUFQO0FBQ0Q7OzsyQ0FFNkJILEssRUFBT1osTyxFQUFTQyxJLEVBQU1DLEksRUFBNkI7QUFDL0UsVUFBSUEsU0FBU21CLFNBQWIsRUFBd0I7QUFDdEJuQixlQUFPRCxJQUFQO0FBQ0FBLGVBQU9ELE9BQVA7QUFDQUEsa0JBQVVZLEtBQVY7QUFDQUEsZ0JBQVFiLGdCQUFSO0FBQ0Q7O0FBTjhFLHdDQUFwQnVCLGtCQUFvQjtBQUFwQkEsMEJBQW9CO0FBQUE7O0FBUS9FLFVBQU1DLG1CQUFtQnpCLGdCQUFnQkUsT0FBaEIsQ0FBekI7QUFBQSxVQUNNRyxZQUFZb0IsZ0JBRGxCO0FBQUEsVUFDb0M7QUFDOUJWLDREQUF1QkQsS0FBdkIsaUJBQTZCWixPQUE3QixFQUFzQ0MsSUFBdEMsRUFBNENDLElBQTVDLEVBQWtEQyxTQUFsRCxHQUFnRW1CLGtCQUFoRSxLQUZOOztBQUlBLGFBQU9ULGdCQUFQO0FBQ0Q7Ozs7OztBQUdIVyxPQUFPQyxPQUFQLEdBQWlCMUIsZ0JBQWpCIiwiZmlsZSI6InNpZ25pZmljYW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCB0b2tlblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxpdGllcy90b2tlbicpO1xuXG5jb25zdCB7IHNhbml0aXNlQ29udGVudCB9ID0gdG9rZW5VdGlsaXRpZXM7XG5cbmNsYXNzIFNpZ25pZmljYW50VG9rZW4ge1xuICBjb25zdHJ1Y3Rvcihjb250ZW50LCBsaW5lLCB0eXBlLCBpbm5lckhUTUwpIHtcbiAgICB0aGlzLmNvbnRlbnQgPSBjb250ZW50O1xuICAgIHRoaXMubGluZSA9IGxpbmU7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLmlubmVySFRNTCA9IGlubmVySFRNTDtcbiAgfVxuICBcbiAgaXNTaWduaWZpY2FudCgpIHtcbiAgICBjb25zdCBzaWduaWZpY2FudCA9IHRydWU7XG4gICAgXG4gICAgcmV0dXJuIHNpZ25pZmljYW50O1xuICB9XG4gIFxuICBnZXRDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQ7XG4gIH1cbiAgXG4gIGdldExpbmUoKSB7XG4gICAgcmV0dXJuIHRoaXMubGluZTtcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldElubmVySFRNTCgpIHtcbiAgICByZXR1cm4gdGhpcy5pbm5lckhUTUw7XG4gIH1cblxuICBhc0hUTUwoZmlsZVBhdGgpIHtcbiAgICBjb25zdCBjbGFzc05hbWUgPSB0aGlzLnR5cGUsICAvLy9cbiAgICAgICAgICBodG1sID0gYDxzcGFuIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+JHt0aGlzLmlubmVySFRNTH08L3NwYW4+YDtcblxuICAgIHJldHVybiBodG1sO1xuICB9XG5cbiAgZ2V0TGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmNvbnRlbnQubGVuZ3RoOyAvLy9cbiAgfVxuXG4gIGNsb25lKHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB7IHJldHVybiBTaWduaWZpY2FudFRva2VuLmNsb25lKFNpZ25pZmljYW50VG9rZW4sIHRoaXMsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKSB9XG5cbiAgc3RhdGljIGNsb25lKENsYXNzID0gU2lnbmlmaWNhbnRUb2tlbiwgc2lnbmlmaWNhbnRUb2tlbiwgc3RhcnRQb3NpdGlvbiA9IDAsIGVuZFBvc2l0aW9uID0gc2lnbmlmaWNhbnRUb2tlbi5nZXRMZW5ndGgoKSkge1xuICAgIGxldCBjbG9uZWRTaWduaWZpY2FudFRva2VuID0gbnVsbDtcblxuICAgIGlmIChzdGFydFBvc2l0aW9uICE9PSBlbmRQb3NpdGlvbikge1xuICAgICAgbGV0IGNvbnRlbnQgPSBzaWduaWZpY2FudFRva2VuLmdldENvbnRlbnQoKTtcblxuICAgICAgY29uc3QgbGluZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0TGluZSgpLFxuICAgICAgICAgICAgdHlwZSA9IHNpZ25pZmljYW50VG9rZW4uZ2V0VHlwZSgpO1xuXG4gICAgICBjb250ZW50ID0gY29udGVudC5zdWJzdHJpbmcoc3RhcnRQb3NpdGlvbiwgZW5kUG9zaXRpb24pOyAgLy8vXG5cbiAgICAgIGNsb25lZFNpZ25pZmljYW50VG9rZW4gPSBDbGFzcy5mcm9tQ29udGVudExpbmVBbmRUeXBlKGNvbnRlbnQsIGxpbmUsIHR5cGUpO1xuICAgIH1cblxuICAgIHJldHVybiBjbG9uZWRTaWduaWZpY2FudFRva2VuO1xuICB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50TGluZUFuZFR5cGUoQ2xhc3MsIGNvbnRlbnQsIGxpbmUsIHR5cGUsIC4uLnJlbWFpbmluZ0FyZ3VtZW50cykge1xuICAgIGlmICh0eXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHR5cGUgPSBsaW5lO1xuICAgICAgbGluZSA9IGNvbnRlbnQ7XG4gICAgICBjb250ZW50ID0gQ2xhc3M7XG4gICAgICBDbGFzcyA9IFNpZ25pZmljYW50VG9rZW47XG4gICAgfVxuXG4gICAgY29uc3Qgc2FuaXRpc2VkQ29udGVudCA9IHNhbml0aXNlQ29udGVudChjb250ZW50KSxcbiAgICAgICAgICBpbm5lckhUTUwgPSBzYW5pdGlzZWRDb250ZW50LCAvLy9cbiAgICAgICAgICBzaWduaWZpY2FudFRva2VuID0gbmV3IENsYXNzKGNvbnRlbnQsIGxpbmUsIHR5cGUsIGlubmVySFRNTCwgLi4ucmVtYWluaW5nQXJndW1lbnRzKTtcblxuICAgIHJldHVybiBzaWduaWZpY2FudFRva2VuO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gU2lnbmlmaWNhbnRUb2tlbjtcbiJdfQ==