"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return EntriesTextarea;
    }
});
var _textarea = /*#__PURE__*/ _interop_require_default(require("../textarea"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _is_native_reflect_construct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
var EntriesTextarea = /*#__PURE__*/ function(Textarea) {
    _inherits(EntriesTextarea, Textarea);
    var _super = _create_super(EntriesTextarea);
    function EntriesTextarea() {
        _class_call_check(this, EntriesTextarea);
        return _super.apply(this, arguments);
    }
    _create_class(EntriesTextarea, [
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
_define_property(EntriesTextarea, "defaultProperties", {
    className: "entries",
    spellCheck: "false"
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9leGFtcGxlL3ZpZXcvdGV4dGFyZWEvZW50cmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IFRleHRhcmVhIGZyb20gXCIuLi90ZXh0YXJlYVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbnRyaWVzVGV4dGFyZWEgZXh0ZW5kcyBUZXh0YXJlYSB7XG4gIGdldEVudHJpZXMoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCksXG4gICAgICAgICAgZW50cmllcyA9IEpTT04ucGFyc2UodmFsdWUpO1xuXG4gICAgcmV0dXJuIGVudHJpZXM7XG4gIH1cblxuICBzZXRFbnRyaWVzKGVudHJpZXMpIHtcbiAgICBjb25zdCB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KGVudHJpZXMsIG51bGwsIFwiICBcIik7XG5cbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgZ2V0RW50cmllcyA9IHRoaXMuZ2V0RW50cmllcy5iaW5kKHRoaXMpLFxuICAgICAgICAgIHNldEVudHJpZXMgPSB0aGlzLnNldEVudHJpZXMuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoe1xuICAgICAgZ2V0RW50cmllcyxcbiAgICAgIHNldEVudHJpZXNcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwiZW50cmllc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuIl0sIm5hbWVzIjpbIkVudHJpZXNUZXh0YXJlYSIsImdldEVudHJpZXMiLCJ2YWx1ZSIsImdldFZhbHVlIiwiZW50cmllcyIsIkpTT04iLCJwYXJzZSIsInNldEVudHJpZXMiLCJzdHJpbmdpZnkiLCJzZXRWYWx1ZSIsInBhcmVudENvbnRleHQiLCJiaW5kIiwiVGV4dGFyZWEiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsInNwZWxsQ2hlY2siXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O2VBSXFCQTs7OytEQUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVOLElBQUEsQUFBTUEsZ0NBQUQsQUFBTDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7a0JBQUFBOztZQUNuQkMsS0FBQUE7bUJBQUFBLFNBQUFBO2dCQUNFLElBQU1DLFFBQVEsSUFBSSxDQUFDQyxRQUFRLElBQ3JCQyxVQUFVQyxLQUFLQyxLQUFLLENBQUNKO2dCQUUzQixPQUFPRTtZQUNUOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLFdBQVdILE9BQU87Z0JBQ2hCLElBQU1GLFFBQVFHLEtBQUtHLFNBQVMsQ0FBQ0osU0FBUyxNQUFNO2dCQUU1QyxJQUFJLENBQUNLLFFBQVEsQ0FBQ1A7WUFDaEI7OztZQUVBUSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTVQsYUFBYSxJQUFJLENBQUNBLFVBQVUsQ0FBQ1UsSUFBSSxDQUFDLElBQUksR0FDdENKLGFBQWEsSUFBSSxDQUFDQSxVQUFVLENBQUNJLElBQUksQ0FBQyxJQUFJO2dCQUU1QyxPQUFRO29CQUNOVixZQUFBQTtvQkFDQU0sWUFBQUE7Z0JBQ0Y7WUFDRjs7O1dBdEJtQlA7RUFBd0JZLGlCQUFRO0FBd0JuRCxpQkF4Qm1CWixpQkF3QlphLHFCQUFvQjtJQUN6QkMsV0FBVztJQUNYQyxZQUFZO0FBQ2QifQ==