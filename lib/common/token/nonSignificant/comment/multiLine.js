'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NonSignificantToken = require('../../../token/nonSignificant');

var MultiLineCommentToken = function (_NonSignificantToken) {
  _inherits(MultiLineCommentToken, _NonSignificantToken);

  function MultiLineCommentToken() {
    _classCallCheck(this, MultiLineCommentToken);

    return _possibleConstructorReturn(this, (MultiLineCommentToken.__proto__ || Object.getPrototypeOf(MultiLineCommentToken)).apply(this, arguments));
  }

  _createClass(MultiLineCommentToken, [{
    key: 'clone',
    value: function clone(Class, startPosition, endPosition) {
      return _get(MultiLineCommentToken.prototype.__proto__ || Object.getPrototypeOf(MultiLineCommentToken.prototype), 'clone', this).call(this, Class, startPosition, endPosition);
    }
  }], [{
    key: 'fromMatch',
    value: function fromMatch(Class, match) {
      return NonSignificantToken.fromMatch(Class, match);
    }
  }, {
    key: 'fromContent',
    value: function fromContent(Class, content) {
      return NonSignificantToken.fromContent(Class, content);
    }
  }, {
    key: 'fromWithinContent',
    value: function fromWithinContent(Class, content) {
      return NonSignificantToken.fromWithinContent(Class, content);
    }
  }, {
    key: 'positionWithinContent',
    value: function positionWithinContent(Class, content) {
      return NonSignificantToken.positionWithinContent(Class, content);
    }
  }]);

  return MultiLineCommentToken;
}(NonSignificantToken);

module.exports = MultiLineCommentToken;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2VzNi9jb21tb24vdG9rZW4vbm9uU2lnbmlmaWNhbnQvY29tbWVudC9tdWx0aUxpbmUuanMiXSwibmFtZXMiOlsiTm9uU2lnbmlmaWNhbnRUb2tlbiIsInJlcXVpcmUiLCJNdWx0aUxpbmVDb21tZW50VG9rZW4iLCJDbGFzcyIsInN0YXJ0UG9zaXRpb24iLCJlbmRQb3NpdGlvbiIsIm1hdGNoIiwiZnJvbU1hdGNoIiwiY29udGVudCIsImZyb21Db250ZW50IiwiZnJvbVdpdGhpbkNvbnRlbnQiLCJwb3NpdGlvbldpdGhpbkNvbnRlbnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsc0JBQXNCQyxRQUFRLCtCQUFSLENBQTVCOztJQUVNQyxxQjs7Ozs7Ozs7Ozs7MEJBQ0VDLEssRUFBT0MsYSxFQUFlQyxXLEVBQWE7QUFBRSxpSkFBbUJGLEtBQW5CLEVBQTBCQyxhQUExQixFQUF5Q0MsV0FBekM7QUFBd0Q7Ozs4QkFFbEZGLEssRUFBT0csSyxFQUFPO0FBQUUsYUFBT04sb0JBQW9CTyxTQUFwQixDQUE4QkosS0FBOUIsRUFBcUNHLEtBQXJDLENBQVA7QUFBcUQ7OztnQ0FFbkVILEssRUFBT0ssTyxFQUFTO0FBQUUsYUFBT1Isb0JBQW9CUyxXQUFwQixDQUFnQ04sS0FBaEMsRUFBdUNLLE9BQXZDLENBQVA7QUFBeUQ7OztzQ0FFckVMLEssRUFBT0ssTyxFQUFTO0FBQUUsYUFBT1Isb0JBQW9CVSxpQkFBcEIsQ0FBc0NQLEtBQXRDLEVBQTZDSyxPQUE3QyxDQUFQO0FBQStEOzs7MENBRTdFTCxLLEVBQU9LLE8sRUFBUztBQUFFLGFBQU9SLG9CQUFvQlcscUJBQXBCLENBQTBDUixLQUExQyxFQUFpREssT0FBakQsQ0FBUDtBQUFtRTs7OztFQVRoRlIsbUI7O0FBWXBDWSxPQUFPQyxPQUFQLEdBQWlCWCxxQkFBakIiLCJmaWxlIjoibXVsdGlMaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBOb25TaWduaWZpY2FudFRva2VuID0gcmVxdWlyZSgnLi4vLi4vLi4vdG9rZW4vbm9uU2lnbmlmaWNhbnQnKTtcblxuY2xhc3MgTXVsdGlMaW5lQ29tbWVudFRva2VuIGV4dGVuZHMgTm9uU2lnbmlmaWNhbnRUb2tlbiB7XG4gIGNsb25lKENsYXNzLCBzdGFydFBvc2l0aW9uLCBlbmRQb3NpdGlvbikgeyByZXR1cm4gc3VwZXIuY2xvbmUoQ2xhc3MsIHN0YXJ0UG9zaXRpb24sIGVuZFBvc2l0aW9uKTsgfVxuXG4gIHN0YXRpYyBmcm9tTWF0Y2goQ2xhc3MsIG1hdGNoKSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21NYXRjaChDbGFzcywgbWF0Y2gpOyB9XG5cbiAgc3RhdGljIGZyb21Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLmZyb21Db250ZW50KENsYXNzLCBjb250ZW50KTsgfVxuXG4gIHN0YXRpYyBmcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCkgeyByZXR1cm4gTm9uU2lnbmlmaWNhbnRUb2tlbi5mcm9tV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCk7IH1cblxuICBzdGF0aWMgcG9zaXRpb25XaXRoaW5Db250ZW50KENsYXNzLCBjb250ZW50KSB7IHJldHVybiBOb25TaWduaWZpY2FudFRva2VuLnBvc2l0aW9uV2l0aGluQ29udGVudChDbGFzcywgY29udGVudCk7IH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNdWx0aUxpbmVDb21tZW50VG9rZW47XG4iXX0=