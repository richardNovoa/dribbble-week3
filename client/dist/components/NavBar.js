"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
require("../assets/style.css");
var _wfLogo = _interopRequireDefault(require("../assets/wfLogo.svg"));
var _NavLink = _interopRequireDefault(require("./NavLink"));
var _TextInput = _interopRequireDefault(require("./TextInput"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const NavBar = props => {
  return props.type === 'primary' ? /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar--primary"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar--container container--between"
  }, /*#__PURE__*/_react.default.createElement("img", {
    className: "navbar__logo",
    src: _wfLogo.default,
    alt: "wells fargo"
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar__wrapper"
  }, /*#__PURE__*/_react.default.createElement(_NavLink.default, {
    href: "#",
    label: "Sign On",
    type: "primary"
  }), /*#__PURE__*/_react.default.createElement(_NavLink.default, {
    href: "#",
    label: "Contact Us",
    type: "primary"
  }), /*#__PURE__*/_react.default.createElement(_NavLink.default, {
    href: "#",
    label: "Open an Account",
    type: "primary"
  }), /*#__PURE__*/_react.default.createElement(_TextInput.default, {
    placeholder: "Search",
    iconRight: "fa-solid fa-magnifying-glass"
  })))) : /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar--secondary"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar--container container--start"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar__wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "header"
  }, "Wells Fargo Advisors"), /*#__PURE__*/_react.default.createElement("div", {
    className: "divider"
  })), /*#__PURE__*/_react.default.createElement(_NavLink.default, {
    href: "#",
    label: "Why Invest With Us",
    type: "secondary"
  }), /*#__PURE__*/_react.default.createElement(_NavLink.default, {
    href: "#",
    label: "Ways to Work With Us",
    type: "secondary"
  }), /*#__PURE__*/_react.default.createElement(_NavLink.default, {
    href: "#",
    label: "Planning For Life",
    type: "secondary"
  }), /*#__PURE__*/_react.default.createElement(_NavLink.default, {
    href: "#",
    label: "Our Insights",
    type: "secondary"
  }))));
};
var _default = NavBar;
exports.default = _default;