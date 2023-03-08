"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavLink = props => {
  return props.type === 'primary' ? /*#__PURE__*/_react.default.createElement("a", {
    href: props.href,
    className: "navbar__nav-link navlink--light"
  }, props.label) : /*#__PURE__*/_react.default.createElement("a", {
    href: props.href,
    className: "navbar__nav-link navlink--dark"
  }, props.label);
};
var _default = NavLink;
exports.default = _default;