"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _textarea = _interopRequireDefault(require("../textarea"));
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var EntriesTextarea = function(Textarea) {
    _inherits(EntriesTextarea, _textarea.default);
    function EntriesTextarea() {
        _classCallCheck(this, EntriesTextarea);
        return _possibleConstructorReturn(this, _getPrototypeOf(EntriesTextarea).apply(this, arguments));
    }
    _createClass(EntriesTextarea, [
        {
            key: "getEntries",
            value: function getEntries() {
                var value = this.getValue(), entries = JSON.parse(value);
                return entries;
            }
        },
        {
            key: "setEntries",
            value: function setEntries(entries) {
                var value = JSON.stringify(entries, null, "  ");
                this.setValue(value);
            }
        },
        {
            key: "parentContext",
            value: function parentContext() {
                var getEntries = this.getEntries.bind(this), setEntries = this.setEntries.bind(this);
                return {
                    getEntries: getEntries,
                    setEntries: setEntries
                };
            }
        }
    ]);
    return EntriesTextarea;
}(_textarea.default);
_defineProperty(EntriesTextarea, "defaultProperties", {
    className: "entries",
    spellCheck: "false"
});
exports.default = EntriesTextarea;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL3RleHRhcmVhL2VudHJpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBUZXh0YXJlYSBmcm9tIFwiLi4vdGV4dGFyZWFcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW50cmllc1RleHRhcmVhIGV4dGVuZHMgVGV4dGFyZWEge1xuICBnZXRFbnRyaWVzKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpLFxuICAgICAgICAgIGVudHJpZXMgPSBKU09OLnBhcnNlKHZhbHVlKTtcblxuICAgIHJldHVybiBlbnRyaWVzO1xuICB9XG5cbiAgc2V0RW50cmllcyhlbnRyaWVzKSB7XG4gICAgY29uc3QgdmFsdWUgPSBKU09OLnN0cmluZ2lmeShlbnRyaWVzLCBudWxsLCBcIiAgXCIpO1xuXG4gICAgdGhpcy5zZXRWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICBwYXJlbnRDb250ZXh0KCkge1xuICAgIGNvbnN0IGdldEVudHJpZXMgPSB0aGlzLmdldEVudHJpZXMuYmluZCh0aGlzKSxcbiAgICAgICAgICBzZXRFbnRyaWVzID0gdGhpcy5zZXRFbnRyaWVzLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKHtcbiAgICAgIGdldEVudHJpZXMsXG4gICAgICBzZXRFbnRyaWVzXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcImVudHJpZXNcIixcbiAgICBzcGVsbENoZWNrOiBcImZhbHNlXCJcbiAgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLFNBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxlQUFBLFlBQUEsUUFBQTtjQUFBLGVBQUEsRUFGQSxTQUFBO2FBRUEsZUFBQTs4QkFBQSxlQUFBO2dFQUFBLGVBQUE7O2lCQUFBLGVBQUE7O0FBQ0EsZUFBQSxHQUFBLFVBQUE7NEJBQUEsVUFBQTtvQkFDQSxLQUFBLFFBQUEsUUFBQSxJQUNBLE9BQUEsR0FBQSxJQUFBLENBQUEsS0FBQSxDQUFBLEtBQUE7dUJBRUEsT0FBQTs7OztBQUdBLGVBQUEsR0FBQSxVQUFBOzRCQUFBLFVBQUEsQ0FBQSxPQUFBO29CQUNBLEtBQUEsR0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE9BQUEsRUFBQSxJQUFBLEdBQUEsRUFBQTtxQkFFQSxRQUFBLENBQUEsS0FBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7b0JBQ0EsVUFBQSxRQUFBLFVBQUEsQ0FBQSxJQUFBLFFBQ0EsVUFBQSxRQUFBLFVBQUEsQ0FBQSxJQUFBOztBQUdBLDhCQUFBLEVBQUEsVUFBQTtBQUNBLDhCQUFBLEVBQUEsVUFBQTs7Ozs7V0FwQkEsZUFBQTtFQUZBLFNBQUE7Z0JBRUEsZUFBQSxHQXdCQSxpQkFBQTtBQUNBLGFBQUEsR0FBQSxPQUFBO0FBQ0EsY0FBQSxHQUFBLEtBQUE7O2tCQTFCQSxlQUFBIn0=