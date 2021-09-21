(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_layout_Master_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vue_social_sharing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-social-sharing */ "./node_modules/vue-social-sharing/dist/vue-social-sharing.js");
/* harmony import */ var vue_social_sharing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_social_sharing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_github_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-github-buttons */ "./node_modules/vue-github-buttons/dist/vue-github-buttons.es.js");
/* harmony import */ var vue_github_buttons_dist_vue_github_buttons_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-github-buttons/dist/vue-github-buttons.css */ "./node_modules/vue-github-buttons/dist/vue-github-buttons.css");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




vue__WEBPACK_IMPORTED_MODULE_3__["default"].use((vue_social_sharing__WEBPACK_IMPORTED_MODULE_0___default()));
vue__WEBPACK_IMPORTED_MODULE_3__["default"].use(vue_github_buttons__WEBPACK_IMPORTED_MODULE_1__["default"], {
  useCache: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      documentationLink: "https://creativetimofficial.github.io/vue-material-dashboard/documentation",
      shareUrl: "https://www.creative-tim.com/product/vue-material-dashboard",
      buyUrl: "",
      freeUrl: "https://www.creative-tim.com/product/vue-material-dashboard",
      isOpen: false,
      sidebarColors: [{
        color: "purple",
        active: false
      }, {
        color: "blue",
        active: false
      }, {
        color: "green",
        active: true
      }, {
        color: "orange",
        active: false
      }, {
        color: "red",
        active: false
      }],
      sidebarImages: [{
        image: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/img/sidebar-1.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        active: false
      }, {
        image: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/img/sidebar-2.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        active: true
      }, {
        image: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/img/sidebar-3.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        active: false
      }, {
        image: __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@/assets/img/sidebar-4.jpg'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())),
        active: false
      }]
    };
  },
  methods: {
    toggleDropDown: function toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown: function closeDropDown() {
      this.isOpen = false;
    },
    toggleList: function toggleList(list, itemToActivate) {
      list.forEach(function (listItem) {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    updateValue: function updateValue(name, val) {
      console.log(name);
      this.$emit("update:".concat(name), val);
    },
    changeSidebarBackground: function changeSidebarBackground(item) {
      this.$emit("update:color", item.color);
      this.toggleList(this.sidebarColors, item);
    },
    changeSidebarImage: function changeSidebarImage(item) {
      this.$emit("update:image", item.image);
      this.toggleList(this.sidebarImages, item);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Master.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Master.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavbar.vue */ "./resources/js/layout/TopNavbar.vue");
/* harmony import */ var _js_layout_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/js/layout/Footer */ "./resources/js/layout/Footer.vue");
/* harmony import */ var _Content_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue */ "./resources/js/layout/Content.vue");
/* harmony import */ var _Extra_FixedPlugin_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Extra/FixedPlugin.vue */ "./resources/js/layout/Extra/FixedPlugin.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'Master',
  components: {
    TopNavbar: _TopNavbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    DashboardContent: _Content_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    Footer: _js_layout_Footer__WEBPACK_IMPORTED_MODULE_1__["default"],
    FixedPlugin: _Extra_FixedPlugin_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      sidebarBackground: 'green',
      sidebarBackgroundImage: '/assets/img/sidebar-2.jpg'
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/TopNavbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/TopNavbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      selectedEmployee: null,
      employees: ["Jim Halpert", "Dwight Schrute", "Michael Scott", "Pam Beesly", "Angela Martin", "Kelly Kapoor", "Ryan Howard", "Kevin Malone"]
    };
  },
  methods: {
    toggleSidebar: function toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-github-buttons/dist/vue-github-buttons.css":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-github-buttons/dist/vue-github-buttons.css ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@-webkit-keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n.octicon {\n  display: inline-block;\n  fill: currentColor;\n  vertical-align: text-top;\n}\n\n.octicon.spin {\n  -webkit-animation: spin 1s linear 0s infinite;\n          animation: spin 1s linear 0s infinite;\n}\n\n.gh-button-container {\n  display: inline-block;\n  float: left;\n  margin: 0 5px;\n}\n\n.gh-button-container a {\n  text-decoration: none !important;\n}\n\n.gh-button-container.loading {\n  visibility: hidden;\n}\n\n.gh-button {\n  background-color: #eff3f6;\n  background-image: linear-gradient(-180deg, #fafbfc 0%, #eff3f6 90%);\n  background-position: -1px -1px;\n  background-repeat: repeat-x;\n  background-size: 110% 110%;\n  border-radius: 0.25em;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  color: #24292e;\n  cursor: pointer;\n  display: inline-block;\n  float: left;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 3px 10px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  vertical-align: middle;\n  white-space: nowrap;\n}\n\n.gh-button::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n}\n\n.gh-button:hover {\n  background-color: #e6ebf1;\n  background-image: linear-gradient(-180deg, #f0f3f6 0%, #e6ebf1 90%);\n  background-position: 0 -0.5em;\n  background-repeat: repeat-x;\n  border-color: rgba(27, 31, 35, 0.35);\n  text-decoration: none !important;\n}\n\n.gh-button:active {\n  background-color: #e9ecef;\n  background-image: none;\n  border-color: rgba(27, 31, 35, 0.35);\n  box-shadow: inset 0 0.15em 0.3em rgba(27, 31, 35, 0.15);\n}\n\n.gh-button:focus {\n  box-shadow: 0 0 0 0.2em rgba(3, 102, 214, 0.3);\n  outline: 0;\n}\n\n.gh-button.with-count {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\na.social-count {\n  background-color: #fff;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n  border-top: 1px solid rgba(27, 31, 35, 0.2);\n  border-right: 1px solid rgba(27, 31, 35, 0.2);\n  border-bottom: 1px solid rgba(27, 31, 35, 0.2);\n  color: #24292e;\n  float: left;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 20px;\n  padding: 3px 10px;\n  text-decoration: none !important;\n  vertical-align: middle;\n}\n\na.social-count:hover {\n  color: #0366d6;\n  cursor: pointer;\n}\n\na.social-count.no-count::before {\n  content: '\\00A0';\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.fade-enter-active,\n.fade-leave-active {\n  transition: opacity 0.1s;\n}\n.fade-enter,\n  .fade-leave-to\n    /* .fade-leave-active in <2.1.8 */\n\n {\n  opacity: 0;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.centered-row {\n  display: flex;\n  height: 100%;\n  align-items: center;\n}\n.button-container .btn {\n  margin-right: 10px;\n}\n.centered-buttons {\n  display: flex;\n  justify-content: center;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/format-thousands/index.js":
/*!************************************************!*\
  !*** ./node_modules/format-thousands/index.js ***!
  \************************************************/
/***/ ((module) => {

// &nbsp; (Non-Breaking Space)
var NBSP = String.fromCharCode(160);

function parseNumber(number) {
	var isNegative = number < 0;
	var numberString = String(number);
	if (isNegative) {
		numberString = numberString.slice(1);
	}
	var decimal = numberString.split('.');
	return {
		integer: decimal[0],
		fraction: decimal[1] || '',
		sign: isNegative ? '-' : ''
	};
}

function format(number, separator) {
	number = String(number);

	while (number.length % 3) {
		number = '#' + number;
	}

	var result = number.substr(0, 3);
	result = result.replace(/#/g, '');
	var i;
	var length = number.length;
	for (i = 3; i < length; i += 3) {
		result = result + separator + number.substr(i, 3);
	}

	return result;
}

/**
 * @param {Number} number
 * @param {Object|String} [options=' ']
 * @param {String} [options.separator=' ']
 * @param {Boolean} [options.formatFourDigits=true]
 * @returns {String}
 */
module.exports = function (number, options) {
	var result = '';
	var separator = NBSP;
	var formatFourDigits = true;

	if (!number && number !== 0) {
		return result;
	}

	var numberObject = parseNumber(number);
	var numberString = String(number);

	if (typeof options === 'object') {
		if (options.separator) {
			separator = options.separator;
		}

		if (typeof options.formatFourDigits === 'boolean') {
			formatFourDigits = options.formatFourDigits;
		}
	} else if (typeof options !== 'undefined') {
		separator = options;
	}

	if (
		numberObject.integer.length <= 3 ||
		(numberObject.integer.length === 4 && !formatFourDigits)
	) {
		result = numberString;
	} else {
		result += numberObject.sign;
		result += format(numberObject.integer, separator);
		if (numberObject.fraction) {
			result += '.';
			result += numberObject.fraction;
		}
	}

	return result;
};


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {

"use strict";


// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./node_modules/vue-github-buttons/dist/vue-github-buttons.css":
/*!*********************************************************************!*\
  !*** ./node_modules/vue-github-buttons/dist/vue-github-buttons.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_github_buttons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./vue-github-buttons.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-github-buttons/dist/vue-github-buttons.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_github_buttons_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_vue_github_buttons_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FixedPlugin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-github-buttons/dist/vue-github-buttons.es.js":
/*!***********************************************************************!*\
  !*** ./node_modules/vue-github-buttons/dist/vue-github-buttons.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/vue-github-buttons/node_modules/tslib/tslib.es6.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var format_thousands__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! format-thousands */ "./node_modules/format-thousands/index.js");
/* harmony import */ var format_thousands__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(format_thousands__WEBPACK_IMPORTED_MODULE_0__);




function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var vueClassComponent_common = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue$1 = _interopDefault(vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
var reflectionIsSupported = typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
function copyReflectionMetadata(to, from) {
    forwardMetadata(to, from);
    Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
        forwardMetadata(to.prototype, from.prototype, key);
    });
    Object.getOwnPropertyNames(from).forEach(function (key) {
        forwardMetadata(to, from, key);
    });
}
function forwardMetadata(to, from, propertyKey) {
    var metaKeys = propertyKey
        ? Reflect.getOwnMetadataKeys(from, propertyKey)
        : Reflect.getOwnMetadataKeys(from);
    metaKeys.forEach(function (metaKey) {
        var metadata = propertyKey
            ? Reflect.getOwnMetadata(metaKey, from, propertyKey)
            : Reflect.getOwnMetadata(metaKey, from);
        if (propertyKey) {
            Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
        }
        else {
            Reflect.defineMetadata(metaKey, metadata, to);
        }
    });
}

var fakeArray = { __proto__: [] };
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
    return function (target, key, index) {
        var Ctor = typeof target === 'function'
            ? target
            : target.constructor;
        if (!Ctor.__decorators__) {
            Ctor.__decorators__ = [];
        }
        if (typeof index !== 'number') {
            index = undefined;
        }
        Ctor.__decorators__.push(function (options) { return factory(options, key, index); });
    };
}
function mixins() {
    var Ctors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Ctors[_i] = arguments[_i];
    }
    return Vue$1.extend({ mixins: Ctors });
}
function isPrimitive(value) {
    var type = typeof value;
    return value == null || (type !== 'object' && type !== 'function');
}

function collectDataFromConstructor(vm, Component) {
    // override _init to prevent to init as Vue instance
    var originalInit = Component.prototype._init;
    Component.prototype._init = function () {
        var _this = this;
        // proxy to actual vm
        var keys = Object.getOwnPropertyNames(vm);
        // 2.2.0 compat (props are no longer exposed as self properties)
        if (vm.$options.props) {
            for (var key in vm.$options.props) {
                if (!vm.hasOwnProperty(key)) {
                    keys.push(key);
                }
            }
        }
        keys.forEach(function (key) {
            if (key.charAt(0) !== '_') {
                Object.defineProperty(_this, key, {
                    get: function () { return vm[key]; },
                    set: function (value) { vm[key] = value; },
                    configurable: true
                });
            }
        });
    };
    // should be acquired class property values
    var data = new Component();
    // restore original _init to avoid memory leak (#209)
    Component.prototype._init = originalInit;
    // create plain data object
    var plainData = {};
    Object.keys(data).forEach(function (key) {
        if (data[key] !== undefined) {
            plainData[key] = data[key];
        }
    });
    return plainData;
}

var $internalHooks = [
    'data',
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeDestroy',
    'destroyed',
    'beforeUpdate',
    'updated',
    'activated',
    'deactivated',
    'render',
    'errorCaptured',
    'serverPrefetch' // 2.6
];
function componentFactory(Component, options) {
    if (options === void 0) { options = {}; }
    options.name = options.name || Component._componentTag || Component.name;
    // prototype props.
    var proto = Component.prototype;
    Object.getOwnPropertyNames(proto).forEach(function (key) {
        if (key === 'constructor') {
            return;
        }
        // hooks
        if ($internalHooks.indexOf(key) > -1) {
            options[key] = proto[key];
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (descriptor.value !== void 0) {
            // methods
            if (typeof descriptor.value === 'function') {
                (options.methods || (options.methods = {}))[key] = descriptor.value;
            }
            else {
                // typescript decorated data
                (options.mixins || (options.mixins = [])).push({
                    data: function () {
                        var _a;
                        return _a = {}, _a[key] = descriptor.value, _a;
                    }
                });
            }
        }
        else if (descriptor.get || descriptor.set) {
            // computed properties
            (options.computed || (options.computed = {}))[key] = {
                get: descriptor.get,
                set: descriptor.set
            };
        }
    });
    (options.mixins || (options.mixins = [])).push({
        data: function () {
            return collectDataFromConstructor(this, Component);
        }
    });
    // decorate options
    var decorators = Component.__decorators__;
    if (decorators) {
        decorators.forEach(function (fn) { return fn(options); });
        delete Component.__decorators__;
    }
    // find super
    var superProto = Object.getPrototypeOf(Component.prototype);
    var Super = superProto instanceof Vue$1
        ? superProto.constructor
        : Vue$1;
    var Extended = Super.extend(options);
    forwardStaticMembers(Extended, Component, Super);
    if (reflectionIsSupported) {
        copyReflectionMetadata(Extended, Component);
    }
    return Extended;
}
var shouldIgnore = {
    prototype: true,
    arguments: true,
    callee: true,
    caller: true
};
function forwardStaticMembers(Extended, Original, Super) {
    // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
    Object.getOwnPropertyNames(Original).forEach(function (key) {
        // Skip the properties that should not be overwritten
        if (shouldIgnore[key]) {
            return;
        }
        // Some browsers does not allow reconfigure built-in properties
        var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);
        if (extendedDescriptor && !extendedDescriptor.configurable) {
            return;
        }
        var descriptor = Object.getOwnPropertyDescriptor(Original, key);
        // If the user agent does not support `__proto__` or its family (IE <= 10),
        // the sub class properties may be inherited properties from the super class in TypeScript.
        // We need to exclude such properties to prevent to overwrite
        // the component options object which stored on the extended constructor (See #192).
        // If the value is a referenced value (object or function),
        // we can check equality of them and exclude it if they have the same reference.
        // If it is a primitive value, it will be forwarded for safety.
        if (!hasProto) {
            // Only `cid` is explicitly exluded from property forwarding
            // because we cannot detect whether it is a inherited property or not
            // on the no `__proto__` environment even though the property is reserved.
            if (key === 'cid') {
                return;
            }
            var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);
            if (!isPrimitive(descriptor.value) &&
                superDescriptor &&
                superDescriptor.value === descriptor.value) {
                return;
            }
        }
        Object.defineProperty(Extended, key, descriptor);
    });
}

function Component(options) {
    if (typeof options === 'function') {
        return componentFactory(options);
    }
    return function (Component) {
        return componentFactory(Component, options);
    };
}
Component.registerHooks = function registerHooks(keys) {
    $internalHooks.push.apply($internalHooks, keys);
};

exports.default = Component;
exports.createDecorator = createDecorator;
exports.mixins = mixins;
});

var Component = unwrapExports(vueClassComponent_common);
var vueClassComponent_common_1 = vueClassComponent_common.createDecorator;
var vueClassComponent_common_2 = vueClassComponent_common.mixins;

/** vue-property-decorator verson 8.1.0 MIT LICENSE copyright 2018 kaorun343 */
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) && typeof options !== 'function' && typeof options.type === 'undefined') {
            options.type = Reflect.getMetadata('design:type', target, key);
        }
    }
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        vueClassComponent_common_1(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

/**
 * GitHub site URL
 */
var GH_URL = 'https://github.com';
/**
 * GitHub API root URL
 */
var GH_ROOT_URL = 'https://api.github.com';

/**
 * Vue GitHub Buttons cacher.
 *
 * @export
 * @class Cacher
 */
var Cacher = /** @class */ (function () {
    /**
     * Creates an instance of `Cacher`.
     *
     * @param {boolean} [autoCommit=true] Automatically commit cache to session storage
     * @memberof Cacher
     */
    function Cacher(autoCommit) {
        if (autoCommit === void 0) { autoCommit = true; }
        /**
         * Cache
         *
         * @private
         * @type {Cache}
         * @memberof Cacher
         */
        this.cache = {
            repo: {},
            user: {}
        };
        this.autoCommit = autoCommit;
        if (this.exist()) {
            this.retrieve();
        }
        else {
            this.commit();
        }
    }
    Object.defineProperty(Cacher, "CACHE_NAME", {
        /**
         * Cache name constant
         *
         * @readonly
         * @static
         *
         * @memberOf Cacher
         */
        get: function () {
            return 'vue-github-buttons';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Check session storage API support.
     *
     * @static
     * @returns {boolean}
     *
     * @memberOf Cacher
     */
    Cacher.supportSession = function () {
        return (typeof window !== 'undefined') && window.sessionStorage ? true : false;
    };
    /**
     * Check cache existence in session storage.
     *
     * @returns {boolean}
     *
     * @memberOf Cacher
     */
    Cacher.prototype.exist = function () {
        if (Cacher.supportSession()) {
            var cache = sessionStorage.getItem(Cacher.CACHE_NAME);
            return cache ? true : false;
        }
        return false;
    };
    /**
     * Write cache data to session storage.
     *
     * @returns {boolean} Commit result.
     *
     * @memberOf Cacher
     */
    Cacher.prototype.commit = function () {
        try {
            if (Cacher.supportSession()) {
                sessionStorage.setItem(Cacher.CACHE_NAME, JSON.stringify(this.cache));
            }
            return true;
        }
        catch (_) {
            return false;
        }
    };
    /**
     * Retrieve cache data from session storage.
     *
     *
     * @memberOf Cacher
     */
    Cacher.prototype.retrieve = function () {
        if (Cacher.supportSession()) {
            var cache = sessionStorage.getItem(Cacher.CACHE_NAME);
            if (cache) {
                this.cache = JSON.parse(cache);
            }
        }
    };
    /**
     * Clear cache.
     *
     *
     * @memberOf Cacher
     */
    Cacher.prototype.clear = function () {
        this.cache = {
            repo: {},
            user: {}
        };
        if (Cacher.supportSession()) {
            sessionStorage.removeItem(Cacher.CACHE_NAME);
        }
    };
    /**
     * Get repository data from cache.
     *
     * @param {string} slug GitHub slug.
     * @returns {any}
     *
     * @memberOf Cacher
     */
    Cacher.prototype.getRepo = function (slug) {
        if (typeof slug === 'string' && this.cache.repo[slug]) {
            return this.cache.repo[slug];
        }
        else {
            return null;
        }
    };
    /**
     * Set repository data to cache.
     *
     * @param {string} slug GitHub slug.
     * @param {any} data Repository data.
     *
     * @memberOf Cacher
     */
    Cacher.prototype.setRepo = function (slug, data) {
        if (typeof slug === 'string' && data) {
            this.cache.repo[slug] = data;
            if (this.autoCommit) {
                this.commit();
            }
        }
    };
    /**
     * Get user data from cache.
     *
     * @param {string} username GitHub user's name.
     * @returns {any}
     *
     * @memberOf Cacher
     */
    Cacher.prototype.getUser = function (username) {
        if (typeof username === 'string' && this.cache.user[username]) {
            return this.cache.user[username];
        }
        else {
            return null;
        }
    };
    /**
     * Set user data to cache.
     *
     * @param {string} username GitHub user's name.
     * @param {any} data User data.
     *
     * @memberOf Cacher
     */
    Cacher.prototype.setUser = function (username, data) {
        if (typeof username === 'string' && data) {
            this.cache.user[username] = data;
            if (this.autoCommit) {
                this.commit();
            }
        }
    };
    return Cacher;
}());

/**
 * Repo path RegEx.
 */
var repo = /^(\/repos\/)(.+)/;
/**
 * User path RegEx.
 */
var user = /^(\/users\/)(.+)/;

/**
 * Check if repo path or not.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {boolean}
 */
function isRepoPath(path) {
    return repo.test(path);
}

/**
 * Get a repo slug from GitHub API relative path.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {string} Repo slug
 */
function getRepoFromPath(path) {
    return isRepoPath(path) ? path.match(repo)[2] : null;
}

/**
 * Check if user path or not.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {boolean}
 */
function isUserPath(path) {
    return user.test(path);
}

/**
 * Get a user name from GitHub API relative path.
 *
 * @export
 * @param {string} path GitHub API relative path
 * @returns {string} User name
 */
function getUserFromPath(path) {
    return isUserPath(path) ? path.match(user)[2] : null;
}

/**
 * Path action executor.
 *
 * @export
 * @class PathActionExecutor
 */
var PathActionExecutor = /** @class */ (function () {
    /**
     * Creates an instance of `PathActionExecutor`.
     *
     * @param {string} path GitHub API relative path
     * @memberof PathActionExecutor
     */
    function PathActionExecutor(path) {
        this.path = path;
        this.clear();
    }
    /**
     * Define repo action.
     *
     * @param {RepoAction} action An action
     * @returns {this}
     * @memberof PathActionExecutor
     */
    PathActionExecutor.prototype.repo = function (action) {
        this.repoAction = action;
        return this;
    };
    /**
     * Define user action.
     *
     * @param {UserAction} action An action
     * @returns {this}
     * @memberof PathActionExecutor
     */
    PathActionExecutor.prototype.user = function (action) {
        this.userAction = action;
        return this;
    };
    /**
     * Clear actions.
     *
     * @memberof PathActionExecutor
     */
    PathActionExecutor.prototype.clear = function () {
        this.repoAction = function () { };
        this.userAction = function () { };
    };
    /**
     * Execute an appropriate action.
     *
     * @param {any} [payload] Payload
     * @memberof PathActionExecutor
     */
    PathActionExecutor.prototype.execute = function (payload) {
        var _a = this, path = _a.path, repoAction = _a.repoAction, userAction = _a.userAction;
        if (isRepoPath(path)) {
            repoAction(getRepoFromPath(path), payload);
        }
        else if (isUserPath(path)) {
            userAction(getUserFromPath(path), payload);
        }
    };
    return PathActionExecutor;
}());

var requestHeaders = {
    Accept: 'application/vnd.github.v3+json'
};
/**
 * Send GET request to GitHub API.
 *
 * @export
 * @param {string} path Request relative path
 * @param {Middleware} [middleware=() => {}] Middleware
 * @returns {Promise<any>} GitHub API data
 */
function sendGhRequest(path, middleware) {
    if (middleware === void 0) { middleware = function () { }; }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
        var fullUrl, res, data, errorMsg;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (path.charAt(0) !== '/') {
                        path = "/" + path;
                    }
                    fullUrl = "" + GH_ROOT_URL + path;
                    return [4 /*yield*/, fetch(fullUrl, {
                            method: 'GET',
                            headers: requestHeaders,
                            cache: 'no-store',
                            redirect: 'follow'
                        })];
                case 1:
                    res = _a.sent();
                    if (!res.ok) return [3 /*break*/, 3];
                    return [4 /*yield*/, res.json()];
                case 2:
                    data = _a.sent();
                    middleware(data);
                    return [2 /*return*/, data];
                case 3:
                    errorMsg = "" + res.status;
                    if (res.statusText) {
                        errorMsg += " - " + res.statusText;
                    }
                    throw new Error("GitHub request error: " + errorMsg);
            }
        });
    });
}

/**
 * Send GET request from GitHub API.
 *
 * @export
 * @param {string} path GitHub API request path
 * @param {boolean} [useCache=true] Enable caching
 * @returns {Promise<any>}
 */
function ghGet(path, useCache) {
    if (useCache === void 0) { useCache = true; }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
        var cacher_1, retrievedData_1, retrievalExecutor, cachingExecutor_1, cacherMiddleware;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!useCache) return [3 /*break*/, 4];
                    cacher_1 = new Cacher();
                    retrievedData_1 = null;
                    retrievalExecutor = new PathActionExecutor(path)
                        .repo(function (slug) {
                        retrievedData_1 = cacher_1.getRepo(slug);
                    })
                        .user(function (username) {
                        retrievedData_1 = cacher_1.getUser(username);
                    });
                    cachingExecutor_1 = new PathActionExecutor(path)
                        .repo(function (slug, data) {
                        cacher_1.setRepo(slug, data);
                    })
                        .user(function (username, data) {
                        cacher_1.setUser(username, data);
                    });
                    cacherMiddleware = function (data) {
                        cachingExecutor_1.execute(data);
                    };
                    retrievalExecutor.execute();
                    if (!retrievedData_1) return [3 /*break*/, 1];
                    return [2 /*return*/, retrievedData_1];
                case 1: return [4 /*yield*/, sendGhRequest(path, cacherMiddleware)];
                case 2: return [2 /*return*/, _a.sent()];
                case 3: return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, sendGhRequest(path)];
                case 5: return [2 /*return*/, _a.sent()];
                case 6: return [2 /*return*/];
            }
        });
    });
}

/**
 * Is value set?
 *
 * @export
 * @template T
 * @param {T} value A value to check
 * @returns {boolean}
 */
function isset(value) {
    if (typeof value === 'string' && value.length > 0) {
        return true;
    }
    else {
        return typeof value !== 'undefined' && value != null;
    }
}

var EyeIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(EyeIcon, _super);
    function EyeIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EyeIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'EyeIcon'
        })
    ], EyeIcon);
    return EyeIcon;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

/* script */
const __vue_script__ = EyeIcon;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-eye",attrs:{"version":"1.1","width":"16","height":"16","viewBox":"0 0 16 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"}})])};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var EyeIcon$1 = normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var MarkGithubIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MarkGithubIcon, _super);
    function MarkGithubIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarkGithubIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'MarkGithubIcon'
        })
    ], MarkGithubIcon);
    return MarkGithubIcon;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* script */
const __vue_script__$1 = MarkGithubIcon;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-mark-github",attrs:{"version":"1.1","width":"16","height":"16","viewBox":"0 0 16 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var MarkGithubIcon$1 = normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var RepoForkedIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(RepoForkedIcon, _super);
    function RepoForkedIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RepoForkedIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'RepoForkedIcon'
        })
    ], RepoForkedIcon);
    return RepoForkedIcon;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* script */
const __vue_script__$2 = RepoForkedIcon;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-repo-forked",attrs:{"version":"1.1","width":"10","height":"16","viewBox":"0 0 10 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"}})])};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var RepoForkedIcon$1 = normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var StarIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(StarIcon, _super);
    function StarIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StarIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'StarIcon'
        })
    ], StarIcon);
    return StarIcon;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* script */
const __vue_script__$3 = StarIcon;

/* template */
var __vue_render__$3 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-star",attrs:{"version":"1.1","width":"14","height":"16","viewBox":"0 0 14 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"}})])};
var __vue_staticRenderFns__$3 = [];

  /* style */
  const __vue_inject_styles__$3 = undefined;
  /* scoped */
  const __vue_scope_id__$3 = undefined;
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var StarIcon$1 = normalizeComponent_1(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    undefined,
    undefined
  );

var SyncIcon = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(SyncIcon, _super);
    function SyncIcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SyncIcon = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'SyncIcon'
        })
    ], SyncIcon);
    return SyncIcon;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* script */
const __vue_script__$4 = SyncIcon;

/* template */
var __vue_render__$4 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"octicon octicon-sync spin",attrs:{"version":"1.1","width":"12","height":"16","viewBox":"0 0 12 16","aria-hidden":"true"}},[_c('path',{attrs:{"fill-rule":"evenodd","d":"M10.24 7.4a4.15 4.15 0 0 1-1.2 3.6 4.346 4.346 0 0 1-5.41.54L4.8 10.4.5 9.8l.6 4.2 1.31-1.26c2.36 1.74 5.7 1.57 7.84-.54a5.876 5.876 0 0 0 1.74-4.46l-1.75-.34zM2.96 5a4.346 4.346 0 0 1 5.41-.54L7.2 5.6l4.3.6-.6-4.2-1.31 1.26c-2.36-1.74-5.7-1.57-7.85.54C.5 5.03-.06 6.65.01 8.26l1.75.35A4.17 4.17 0 0 1 2.96 5z"}})])};
var __vue_staticRenderFns__$4 = [];

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SyncIcon$1 = normalizeComponent_1(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    undefined,
    undefined
  );

/**
 * Get all SVG icons as component.
 *
 * @export
 */
var getIconComponents = (function () {
    return {
        EyeIcon: EyeIcon$1,
        MarkGithubIcon: MarkGithubIcon$1,
        RepoForkedIcon: RepoForkedIcon$1,
        StarIcon: StarIcon$1,
        SyncIcon: SyncIcon$1
    };
});

var GitHubButton = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GitHubButton, _super);
    function GitHubButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(GitHubButton.prototype, "iconComponentName", {
        get: function () {
            return this.icon + "-icon";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubButton.prototype, "hasCount", {
        get: function () {
            var count = this.count;
            // Show count when count exist and greater than or equal to 0
            return isset(count) && (count >= 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubButton.prototype, "hasCountLink", {
        get: function () {
            var countLink = this.countLink;
            return isset(countLink);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubButton.prototype, "fullLink", {
        get: function () {
            return GH_URL + "/" + this.link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GitHubButton.prototype, "fullCountLink", {
        get: function () {
            var countLink = this.countLink;
            if (this.hasCountLink) {
                return GH_URL + "/" + countLink;
            }
            else {
                return 'javascript:void(0);';
            }
        },
        enumerable: true,
        configurable: true
    });
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: String, required: true })
    ], GitHubButton.prototype, "icon", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: String, required: true })
    ], GitHubButton.prototype, "link", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: Boolean, default: false })
    ], GitHubButton.prototype, "isLoading", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: Number, default: 0 })
    ], GitHubButton.prototype, "count", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: String, default: '' })
    ], GitHubButton.prototype, "countLink", void 0);
    GitHubButton = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'GitHubButton',
            components: getIconComponents(),
            filters: {
                formatNumber: function (value) {
                    if ((typeof value !== 'undefined') && (value != null)) {
                        return format_thousands__WEBPACK_IMPORTED_MODULE_0___default()(value, ',');
                    }
                    else {
                        return value;
                    }
                }
            }
        })
    ], GitHubButton);
    return GitHubButton;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

/* script */
const __vue_script__$5 = GitHubButton;

/* template */
var __vue_render__$5 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"gh-button-container"},[(!_vm.isLoading)?[_c('a',{staticClass:"gh-button",class:{ 'with-count': _vm.hasCount },attrs:{"href":_vm.fullLink,"target":"_blank"}},[_c(_vm.iconComponentName,{tag:"component"}),_vm._v(" "),_vm._t("default")],2),_vm._v(" "),(_vm.hasCount)?_c('a',{staticClass:"social-count",attrs:{"href":_vm.fullCountLink,"target":_vm.hasCountLink ? '_blank' : null}},[_vm._v("\n\t\t\t"+_vm._s(_vm._f("formatNumber")(_vm.count))+"\n\t\t")]):_vm._e()]:[_c('a',{staticClass:"gh-button"},[_c('sync-icon')],1)]],2)};
var __vue_staticRenderFns__$5 = [];

  /* style */
  const __vue_inject_styles__$5 = undefined;
  /* scoped */
  const __vue_scope_id__$5 = undefined;
  /* module identifier */
  const __vue_module_identifier__$5 = undefined;
  /* functional template */
  const __vue_is_functional_template__$5 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Button = normalizeComponent_1(
    { render: __vue_render__$5, staticRenderFns: __vue_staticRenderFns__$5 },
    __vue_inject_styles__$5,
    __vue_script__$5,
    __vue_scope_id__$5,
    __vue_is_functional_template__$5,
    __vue_module_identifier__$5,
    undefined,
    undefined
  );

/**
 * Vue GitHub buttons options store.
 *
 * @export
 * @class OptionsStore
 */
var OptionsStore = /** @class */ (function () {
    function OptionsStore() {
        this._options = {
            useCache: true
        };
    }
    Object.defineProperty(OptionsStore.prototype, "value", {
        /**
         * Options value
         *
         * @type {Options}
         * @memberof OptionsStore
         */
        get: function () {
            return this._options;
        },
        set: function (options) {
            this._options = options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get an option value.
     *
     * @template K Type of option
     * @param {K} optionName Option name
     * @returns {Options[K]}
     * @memberof OptionsStore
     */
    OptionsStore.prototype.getOption = function (optionName) {
        return this._options[optionName];
    };
    /**
     * Set an option value.
     *
     * @template K Type of option
     * @param {K} optionName Option name
     * @param {Options[K]} optionValue New option value
     * @memberof OptionsStore
     */
    OptionsStore.prototype.setOption = function (optionName, optionValue) {
        this._options[optionName] = optionValue;
    };
    return OptionsStore;
}());
/**
 * Vue GitHub buttons global options store.
 */
var optionsStore = new OptionsStore();

var GetCountMixin = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GetCountMixin, _super);
    function GetCountMixin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Get button count via GitHub API.
     *
     * @param {string} path Request path
     * @param {string} key The property of response that contain count result
     * @param {boolean} [useCache=true] Enable caching
     * @returns {Promise<number>}
     * @memberof GetCountMixin
     */
    GetCountMixin.prototype.getCount = function (path, key, useCache) {
        if (useCache === void 0) { useCache = true; }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var res, err_1;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, ghGet(path, useCache)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, parseInt(res[key], 10)];
                    case 2:
                        err_1 = _a.sent();
                        console.error(err_1);
                        /*
                         * Do not show count number when error.
                         * Set it to -1 to hide count number.
                         */
                        return [2 /*return*/, -1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    GetCountMixin = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component
    ], GetCountMixin);
    return GetCountMixin;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

var RepoMixin = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(RepoMixin, _super);
    function RepoMixin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = null;
        return _this;
    }
    Object.defineProperty(RepoMixin.prototype, "isLoading", {
        get: function () {
            if (this.showCount) {
                return this.count == null;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: String, required: true })
    ], RepoMixin.prototype, "slug", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: Boolean, default: false })
    ], RepoMixin.prototype, "showCount", void 0);
    RepoMixin = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component
    ], RepoMixin);
    return RepoMixin;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

var UserMixin = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(UserMixin, _super);
    function UserMixin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.count = null;
        return _this;
    }
    Object.defineProperty(UserMixin.prototype, "isLoading", {
        get: function () {
            if (this.showCount) {
                return this.count == null;
            }
            else {
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: String, required: true })
    ], UserMixin.prototype, "user", void 0);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Prop({ type: Boolean, default: false })
    ], UserMixin.prototype, "showCount", void 0);
    UserMixin = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component
    ], UserMixin);
    return UserMixin;
}(vue__WEBPACK_IMPORTED_MODULE_1__["default"]));

var GitHubButtonFollow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GitHubButtonFollow, _super);
    function GitHubButtonFollow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitHubButtonFollow.prototype.loadCount = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var useCache, requestPath, _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.showCount) return [3 /*break*/, 2];
                        useCache = optionsStore.value.useCache;
                        requestPath = "/users/" + this.user;
                        _a = this;
                        return [4 /*yield*/, this.getCount(requestPath, 'followers', useCache)];
                    case 1:
                        _a.count = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonFollow.prototype.created = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonFollow.prototype.updated = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonFollow = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'GitHubButtonFollow',
            components: {
                'gh-button': Button
            }
        })
    ], GitHubButtonFollow);
    return GitHubButtonFollow;
}(vueClassComponent_common_2(GetCountMixin, UserMixin)));

/* script */
const __vue_script__$6 = GitHubButtonFollow;

/* template */
var __vue_render__$6 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":_vm.user,"count":_vm.count,"count-link":(_vm.user + "/followers"),"icon":"mark-github"}},[_vm._v("\n\tFollow\n")])};
var __vue_staticRenderFns__$6 = [];

  /* style */
  const __vue_inject_styles__$6 = undefined;
  /* scoped */
  const __vue_scope_id__$6 = undefined;
  /* module identifier */
  const __vue_module_identifier__$6 = undefined;
  /* functional template */
  const __vue_is_functional_template__$6 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Follow = normalizeComponent_1(
    { render: __vue_render__$6, staticRenderFns: __vue_staticRenderFns__$6 },
    __vue_inject_styles__$6,
    __vue_script__$6,
    __vue_scope_id__$6,
    __vue_is_functional_template__$6,
    __vue_module_identifier__$6,
    undefined,
    undefined
  );

var GitHubButtonFork = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GitHubButtonFork, _super);
    function GitHubButtonFork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitHubButtonFork.prototype.loadCount = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var useCache, requestPath, _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.showCount) return [3 /*break*/, 2];
                        useCache = optionsStore.value.useCache;
                        requestPath = "/repos/" + this.slug;
                        _a = this;
                        return [4 /*yield*/, this.getCount(requestPath, 'forks_count', useCache)];
                    case 1:
                        _a.count = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonFork.prototype.created = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonFork.prototype.updated = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonFork = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'GitHubButtonFork',
            components: {
                'gh-button': Button
            }
        })
    ], GitHubButtonFork);
    return GitHubButtonFork;
}(vueClassComponent_common_2(GetCountMixin, RepoMixin)));

/* script */
const __vue_script__$7 = GitHubButtonFork;

/* template */
var __vue_render__$7 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":(_vm.slug + "/fork"),"count":_vm.count,"count-link":(_vm.slug + "/network"),"icon":"repo-forked"}},[_vm._v("\n\tFork\n")])};
var __vue_staticRenderFns__$7 = [];

  /* style */
  const __vue_inject_styles__$7 = undefined;
  /* scoped */
  const __vue_scope_id__$7 = undefined;
  /* module identifier */
  const __vue_module_identifier__$7 = undefined;
  /* functional template */
  const __vue_is_functional_template__$7 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Fork = normalizeComponent_1(
    { render: __vue_render__$7, staticRenderFns: __vue_staticRenderFns__$7 },
    __vue_inject_styles__$7,
    __vue_script__$7,
    __vue_scope_id__$7,
    __vue_is_functional_template__$7,
    __vue_module_identifier__$7,
    undefined,
    undefined
  );

var GitHubButtonStar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GitHubButtonStar, _super);
    function GitHubButtonStar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitHubButtonStar.prototype.loadCount = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var useCache, requestPath, _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.showCount) return [3 /*break*/, 2];
                        useCache = optionsStore.value.useCache;
                        requestPath = "/repos/" + this.slug;
                        _a = this;
                        return [4 /*yield*/, this.getCount(requestPath, 'stargazers_count', useCache)];
                    case 1:
                        _a.count = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonStar.prototype.created = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonStar.prototype.updated = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonStar = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'GitHubButtonStar',
            components: {
                'gh-button': Button
            }
        })
    ], GitHubButtonStar);
    return GitHubButtonStar;
}(vueClassComponent_common_2(GetCountMixin, RepoMixin)));

/* script */
const __vue_script__$8 = GitHubButtonStar;

/* template */
var __vue_render__$8 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":_vm.slug,"count":_vm.count,"count-link":(_vm.slug + "/stargazers"),"icon":"star"}},[_vm._v("\n\tStar\n")])};
var __vue_staticRenderFns__$8 = [];

  /* style */
  const __vue_inject_styles__$8 = undefined;
  /* scoped */
  const __vue_scope_id__$8 = undefined;
  /* module identifier */
  const __vue_module_identifier__$8 = undefined;
  /* functional template */
  const __vue_is_functional_template__$8 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Star = normalizeComponent_1(
    { render: __vue_render__$8, staticRenderFns: __vue_staticRenderFns__$8 },
    __vue_inject_styles__$8,
    __vue_script__$8,
    __vue_scope_id__$8,
    __vue_is_functional_template__$8,
    __vue_module_identifier__$8,
    undefined,
    undefined
  );

var GitHubButtonWatch = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(GitHubButtonWatch, _super);
    function GitHubButtonWatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GitHubButtonWatch.prototype.loadCount = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            var useCache, requestPath, _a;
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.showCount) return [3 /*break*/, 2];
                        useCache = optionsStore.value.useCache;
                        requestPath = "/repos/" + this.slug;
                        _a = this;
                        return [4 /*yield*/, this.getCount(requestPath, 'subscribers_count', useCache)];
                    case 1:
                        _a.count = _b.sent();
                        _b.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonWatch.prototype.created = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonWatch.prototype.updated = function () {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function () {
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadCount()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    GitHubButtonWatch = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
        Component({
            name: 'GitHubButtonWatch',
            components: {
                'gh-button': Button
            }
        })
    ], GitHubButtonWatch);
    return GitHubButtonWatch;
}(vueClassComponent_common_2(GetCountMixin, RepoMixin)));

/* script */
const __vue_script__$9 = GitHubButtonWatch;

/* template */
var __vue_render__$9 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('gh-button',{attrs:{"is-loading":_vm.isLoading,"link":(_vm.slug + "/subscription"),"count":_vm.count,"count-link":(_vm.slug + "/watchers"),"icon":"eye"}},[_vm._v("\n\tWatch\n")])};
var __vue_staticRenderFns__$9 = [];

  /* style */
  const __vue_inject_styles__$9 = undefined;
  /* scoped */
  const __vue_scope_id__$9 = undefined;
  /* module identifier */
  const __vue_module_identifier__$9 = undefined;
  /* functional template */
  const __vue_is_functional_template__$9 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var Watch = normalizeComponent_1(
    { render: __vue_render__$9, staticRenderFns: __vue_staticRenderFns__$9 },
    __vue_inject_styles__$9,
    __vue_script__$9,
    __vue_scope_id__$9,
    __vue_is_functional_template__$9,
    __vue_module_identifier__$9,
    undefined,
    undefined
  );

{
    var nodeFetch = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
    if (__webpack_require__.g && !__webpack_require__.g.fetch) {
        __webpack_require__.g.fetch = nodeFetch;
        __webpack_require__.g.Headers = nodeFetch.Headers;
        __webpack_require__.g.Request = nodeFetch.Request;
        __webpack_require__.g.Response = nodeFetch.Response;
    }
}
/**
 * Install Vue GitHub buttons as Vue plugin.
 *
 * @param {Vue} vue A Vue instance.
 * @param {Object} [options={ useCache: true }] Options.
 */
function install(vue, options) {
    if (options === void 0) { options = { useCache: true }; }
    optionsStore.value = options;
    vue.component('gh-btns-star', Star);
    vue.component('gh-btns-fork', Fork);
    vue.component('gh-btns-watch', Watch);
    vue.component('gh-btns-follow', Follow);
}
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
var index = {
    install: install
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=vue-github-buttons.es.js.map


/***/ }),

/***/ "./node_modules/vue-github-buttons/node_modules/tslib/tslib.es6.js":
/*!*************************************************************************!*\
  !*** ./node_modules/vue-github-buttons/node_modules/tslib/tslib.es6.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./resources/js/layout/Content.vue":
/*!*****************************************!*\
  !*** ./resources/js/layout/Content.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Content_vue_vue_type_template_id_bc92d31c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content.vue?vue&type=template&id=bc92d31c& */ "./resources/js/layout/Content.vue?vue&type=template&id=bc92d31c&");
/* harmony import */ var _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Content.vue?vue&type=script&lang=js& */ "./resources/js/layout/Content.vue?vue&type=script&lang=js&");
/* harmony import */ var _Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Content.vue?vue&type=style&index=0&lang=css& */ "./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Content_vue_vue_type_template_id_bc92d31c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Content_vue_vue_type_template_id_bc92d31c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layout/Content.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layout/Extra/FixedPlugin.vue":
/*!***************************************************!*\
  !*** ./resources/js/layout/Extra/FixedPlugin.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FixedPlugin_vue_vue_type_template_id_c93dad3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FixedPlugin.vue?vue&type=template&id=c93dad3e& */ "./resources/js/layout/Extra/FixedPlugin.vue?vue&type=template&id=c93dad3e&");
/* harmony import */ var _FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FixedPlugin.vue?vue&type=script&lang=js& */ "./resources/js/layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&");
/* harmony import */ var _FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FixedPlugin.vue?vue&type=style&index=0&lang=css& */ "./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FixedPlugin_vue_vue_type_template_id_c93dad3e___WEBPACK_IMPORTED_MODULE_0__.render,
  _FixedPlugin_vue_vue_type_template_id_c93dad3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layout/Extra/FixedPlugin.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layout/Master.vue":
/*!****************************************!*\
  !*** ./resources/js/layout/Master.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Master_vue_vue_type_template_id_8430700e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Master.vue?vue&type=template&id=8430700e&scoped=true& */ "./resources/js/layout/Master.vue?vue&type=template&id=8430700e&scoped=true&");
/* harmony import */ var _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Master.vue?vue&type=script&lang=js& */ "./resources/js/layout/Master.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Master_vue_vue_type_template_id_8430700e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Master_vue_vue_type_template_id_8430700e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "8430700e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layout/Master.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layout/TopNavbar.vue":
/*!*******************************************!*\
  !*** ./resources/js/layout/TopNavbar.vue ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopNavbar_vue_vue_type_template_id_58771d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=template&id=58771d7e& */ "./resources/js/layout/TopNavbar.vue?vue&type=template&id=58771d7e&");
/* harmony import */ var _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNavbar.vue?vue&type=script&lang=js& */ "./resources/js/layout/TopNavbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNavbar_vue_vue_type_template_id_58771d7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _TopNavbar_vue_vue_type_template_id_58771d7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layout/TopNavbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/layout/Content.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/layout/Content.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Content.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/layout/Extra/FixedPlugin.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FixedPlugin.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layout/Master.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/layout/Master.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Master.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Master.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layout/TopNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/layout/TopNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/TopNavbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************!*\
  !*** ./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Content.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FixedPlugin.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/layout/Content.vue?vue&type=template&id=bc92d31c&":
/*!************************************************************************!*\
  !*** ./resources/js/layout/Content.vue?vue&type=template&id=bc92d31c& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_bc92d31c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_bc92d31c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Content_vue_vue_type_template_id_bc92d31c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Content.vue?vue&type=template&id=bc92d31c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=template&id=bc92d31c&");


/***/ }),

/***/ "./resources/js/layout/Extra/FixedPlugin.vue?vue&type=template&id=c93dad3e&":
/*!**********************************************************************************!*\
  !*** ./resources/js/layout/Extra/FixedPlugin.vue?vue&type=template&id=c93dad3e& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_template_id_c93dad3e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_template_id_c93dad3e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FixedPlugin_vue_vue_type_template_id_c93dad3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FixedPlugin.vue?vue&type=template&id=c93dad3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=template&id=c93dad3e&");


/***/ }),

/***/ "./resources/js/layout/Master.vue?vue&type=template&id=8430700e&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./resources/js/layout/Master.vue?vue&type=template&id=8430700e&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_8430700e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_8430700e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Master_vue_vue_type_template_id_8430700e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Master.vue?vue&type=template&id=8430700e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Master.vue?vue&type=template&id=8430700e&scoped=true&");


/***/ }),

/***/ "./resources/js/layout/TopNavbar.vue?vue&type=template&id=58771d7e&":
/*!**************************************************************************!*\
  !*** ./resources/js/layout/TopNavbar.vue?vue&type=template&id=58771d7e& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_58771d7e___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_58771d7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNavbar_vue_vue_type_template_id_58771d7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopNavbar.vue?vue&type=template&id=58771d7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/TopNavbar.vue?vue&type=template&id=58771d7e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=template&id=bc92d31c&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Content.vue?vue&type=template&id=bc92d31c& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    { attrs: { name: "fade", mode: "out-in" } },
    [_c("router-view")],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=template&id=c93dad3e&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Extra/FixedPlugin.vue?vue&type=template&id=c93dad3e& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.closeDropDown,
          expression: "closeDropDown"
        }
      ],
      staticClass: "fixed-plugin"
    },
    [
      _c(
        "div",
        { staticClass: "dropdown show-dropdown", class: { show: _vm.isOpen } },
        [
          _c("a", { attrs: { "data-toggle": "dropdown" } }, [
            _c("i", {
              staticClass: "fa fa-cog fa-2x",
              on: { click: _vm.toggleDropDown }
            })
          ]),
          _vm._v(" "),
          _c(
            "ul",
            { staticClass: "dropdown-menu", class: { show: _vm.isOpen } },
            [
              _c("li", { staticClass: "header-title" }, [
                _vm._v("Sidebar Filters")
              ]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "adjustments-line text-center" },
                _vm._l(_vm.sidebarColors, function(item) {
                  return _c("span", {
                    key: item.color,
                    staticClass: "badge filter",
                    class: ["badge-" + item.color, { active: item.active }],
                    attrs: { "data-color": item.color },
                    on: {
                      click: function($event) {
                        return _vm.changeSidebarBackground(item)
                      }
                    }
                  })
                }),
                0
              ),
              _vm._v(" "),
              _c("li", { staticClass: "header-title" }, [_vm._v("Images")]),
              _vm._v(" "),
              _vm._l(_vm.sidebarImages, function(item) {
                return _c(
                  "li",
                  {
                    key: item.image,
                    class: { active: item.active },
                    on: {
                      click: function($event) {
                        return _vm.changeSidebarImage(item)
                      }
                    }
                  },
                  [
                    _c("a", { staticClass: "img-holder switch-trigger" }, [
                      _c("img", { attrs: { src: item.image, alt: "" } })
                    ])
                  ]
                )
              }),
              _vm._v(" "),
              _c("li", { staticClass: "button-container" }, [
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "md-button",
                      {
                        staticClass: "md-success md-block",
                        attrs: { href: _vm.freeUrl, target: "_blank" }
                      },
                      [_vm._v("Free Download")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "button-container" }, [
                _c(
                  "div",
                  {},
                  [
                    _c(
                      "md-button",
                      {
                        staticClass: "md-block md-primary",
                        attrs: { href: _vm.documentationLink, target: "_blank" }
                      },
                      [_vm._v("Documentation")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "header-title d-flex justify-content-center" },
                [_vm._v("\n        Thank you for sharing!\n      ")]
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "button-container" },
                [
                  _c("social-sharing", {
                    attrs: {
                      url: _vm.shareUrl,
                      title:
                        "Vue Material Dashboard - Admin Template for Vue.js",
                      hashtags: "vuejs, dashboard, vuematerial",
                      "twitter-user": "creativetim"
                    },
                    inlineTemplate: {
                      render: function() {
                        var _vm = this
                        var _h = _vm.$createElement
                        var _c = _vm._self._c || _h
                        return _c(
                          "div",
                          { staticClass: "centered-buttons" },
                          [
                            _c(
                              "network",
                              {
                                staticClass:
                                  "md-button md-round md-just-icon md-facebook",
                                attrs: { network: "facebook" }
                              },
                              [_c("i", { staticClass: "fab fa-facebook-f" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "network",
                              {
                                staticClass:
                                  "md-button md-round md-just-icon md-twitter",
                                attrs: { network: "twitter" }
                              },
                              [_c("i", { staticClass: "fab fa-twitter" })]
                            )
                          ],
                          1
                        )
                      },
                      staticRenderFns: []
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "li",
                { staticClass: "github-buttons" },
                [
                  _c("gh-btns-star", {
                    attrs: {
                      slug: "creativetimofficial/vue-material-dashboard",
                      "show-count": ""
                    }
                  })
                ],
                1
              )
            ],
            2
          )
        ]
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Master.vue?vue&type=template&id=8430700e&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/Master.vue?vue&type=template&id=8430700e&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrapper", class: { "nav-open": _vm.$sidebar.showSidebar } },
    [
      _c(
        "side-bar",
        {
          attrs: {
            title: "The Remote Company",
            "sidebar-item-color": _vm.sidebarBackground,
            "sidebar-background-image": _vm.sidebarBackgroundImage
          }
        },
        [
          _c(
            "sidebar-link",
            { attrs: { to: "/admin" } },
            [
              _c("md-icon", [_vm._v("dashboard")]),
              _vm._v(" "),
              _c("p", [_vm._v("Dashboard")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: "/admin/pdfs" } },
            [
              _c("md-icon", [_vm._v("picture_as_pdf")]),
              _vm._v(" "),
              _c("p", [_vm._v("PDFs")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: "/admin/html" } },
            [
              _c("md-icon", [_vm._v("code")]),
              _vm._v(" "),
              _c("p", [_vm._v("HTML")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "sidebar-link",
            { attrs: { to: "/admin/links" } },
            [
              _c("md-icon", [_vm._v("link")]),
              _vm._v(" "),
              _c("p", [_vm._v("Links")])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "main-panel" },
        [
          _c("top-navbar"),
          _vm._v(" "),
           false
            ? 0
            : _vm._e(),
          _vm._v(" "),
          _c("dashboard-content"),
          _vm._v(" "),
          !_vm.$route.meta.hideFooter ? _c("Footer") : _vm._e()
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/TopNavbar.vue?vue&type=template&id=58771d7e&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/layout/TopNavbar.vue?vue&type=template&id=58771d7e& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "md-toolbar",
    { staticClass: "md-transparent", attrs: { "md-elevation": "0" } },
    [
      _c("div", { staticClass: "md-toolbar-row" }, [
        _c("div", { staticClass: "md-toolbar-section-start" }, [
          _c("h3", { staticClass: "md-title" }, [
            _vm._v(_vm._s(_vm.$route.name))
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "md-toolbar-section-end" },
          [
            _c(
              "md-button",
              {
                staticClass: "md-just-icon md-simple md-toolbar-toggle",
                class: { toggled: _vm.$sidebar.showSidebar },
                on: { click: _vm.toggleSidebar }
              },
              [
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" }),
                _vm._v(" "),
                _c("span", { staticClass: "icon-bar" })
              ]
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "md-collapse" },
              [
                _c(
                  "div",
                  { staticClass: "md-autocomplete" },
                  [
                    _c(
                      "md-autocomplete",
                      {
                        staticClass: "search",
                        attrs: { "md-options": _vm.employees },
                        model: {
                          value: _vm.selectedEmployee,
                          callback: function($$v) {
                            _vm.selectedEmployee = $$v
                          },
                          expression: "selectedEmployee"
                        }
                      },
                      [_c("label", [_vm._v("Search...")])]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "md-list",
                  [
                    _c(
                      "md-list-item",
                      [
                        _c("router-link", { attrs: { to: "/admin" } }, [
                          _c("i", { staticClass: "material-icons" }, [
                            _vm._v("dashboard")
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "hidden-lg hidden-md" }, [
                            _vm._v("Dashboard")
                          ])
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("md-list-item", [
                      _c("i", { staticClass: "material-icons" }, [
                        _vm._v("person")
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "hidden-lg hidden-md" }, [
                        _vm._v("Profile")
                      ])
                    ])
                  ],
                  1
                )
              ],
              1
            )
          ],
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-social-sharing/dist/vue-social-sharing.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-social-sharing/dist/vue-social-sharing.js ***!
  \********************************************************************/
/***/ (function(module) {

!function(t,e){ true?module.exports=e():0}("undefined"!=typeof self?self:this,(function(){return function(t){var e={};function r(i){if(e[i])return e[i].exports;var n=e[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=t,r.c=e,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){t.exports=r(1)},function(t,e,r){"use strict";r.r(e),r.d(e,"ShareNetwork",(function(){return o}));var i={baidu:"http://cang.baidu.com/do/add?iu=@u&it=@t",buffer:"https://bufferapp.com/add?text=@t&url=@u",email:"mailto:?subject=@t&body=@u%0D%0A@d",evernote:"https://www.evernote.com/clip.action?url=@u&title=@t",facebook:"https://www.facebook.com/sharer/sharer.php?u=@u&title=@t&description=@d&quote=@q&hashtag=@h",flipboard:"https://share.flipboard.com/bookmarklet/popout?v=2&url=@u&title=@t",hackernews:"https://news.ycombinator.com/submitlink?u=@u&t=@t",instapaper:"http://www.instapaper.com/edit?url=@u&title=@t&description=@d",line:"http://line.me/R/msg/text/?@t%0D%0A@u%0D%0A@d",linkedin:"https://www.linkedin.com/shareArticle?url=@u",messenger:"fb-messenger://share/?link=@u",odnoklassniki:"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@u&st.comments=@t",pinterest:"https://pinterest.com/pin/create/button/?url=@u&media=@m&description=@t",pocket:"https://getpocket.com/save?url=@u&title=@t",quora:"https://www.quora.com/share?url=@u&title=@t",reddit:"https://www.reddit.com/submit?url=@u&title=@t",skype:"https://web.skype.com/share?url=@t%0D%0A@u%0D%0A@d",sms:"sms:?body=@t%0D%0A@u%0D%0A@d",stumbleupon:"https://www.stumbleupon.com/submit?url=@u&title=@t",telegram:"https://t.me/share/url?url=@u&text=@t%0D%0A@d",tumblr:"https://www.tumblr.com/share/link?url=@u&name=@t&description=@d",twitter:"https://twitter.com/intent/tweet?text=@t&url=@u&hashtags=@h@tu",viber:"viber://forward?text=@t%0D%0A@u%0D%0A@d",vk:"https://vk.com/share.php?url=@u&title=@t&description=@d&image=@m&noparse=true",weibo:"http://service.weibo.com/share/share.php?url=@u&title=@t&pic=@m",whatsapp:"https://api.whatsapp.com/send?text=@t%0D%0A@u%0D%0A@d",wordpress:"https://wordpress.com/press-this.php?u=@u&t=@t&s=@d&i=@m",xing:"https://www.xing.com/social/share/spi?op=share&url=@u&title=@t",yammer:"https://www.yammer.com/messages/new?login=true&status=@t%0D%0A@u%0D%0A@d"},n="undefined"!=typeof window?window:null;var o={name:"ShareNetwork",props:{network:{type:String,required:!0},url:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,default:""},quote:{type:String,default:""},hashtags:{type:String,default:""},twitterUser:{type:String,default:""},media:{type:String,default:""},tag:{type:String,default:"a"},popup:{type:Object,default:function(){return{width:626,height:436}}}},data:function(){return{popupTop:0,popupLeft:0,popupWindow:void 0,popupInterval:null}},computed:{networks:function(){return this.$SocialSharing?this.$SocialSharing.options.networks:i},key:function(){return this.network.toLowerCase()},rawLink:function(){var t=navigator.userAgent.toLowerCase();return"sms"===this.key&&(t.indexOf("iphone")>-1||t.indexOf("ipad")>-1)?this.networks[this.key].replace(":?",":&"):this.networks[this.key]},shareLink:function(){var t=this.rawLink;return"twitter"===this.key&&(this.hashtags.length||(t=t.replace("&hashtags=@h","")),this.twitterUser.length||(t=t.replace("@tu",""))),t.replace(/@tu/g,"&via="+encodeURIComponent(this.twitterUser)).replace(/@u/g,encodeURIComponent(this.url)).replace(/@t/g,encodeURIComponent(this.title)).replace(/@d/g,encodeURIComponent(this.description)).replace(/@q/g,encodeURIComponent(this.quote)).replace(/@h/g,this.encodedHashtags).replace(/@m/g,encodeURIComponent(this.media))},encodedHashtags:function(){return"facebook"===this.key&&this.hashtags.length?"%23"+this.hashtags.split(",")[0]:this.hashtags}},render:function(t){var e=this;if(!this.networks.hasOwnProperty(this.key))throw new Error("Network "+this.key+" does not exist");var r={class:"share-network-"+this.key,on:{click:function(){return e["http"===e.rawLink.substring(0,4)?"share":"touch"]()}}};return"a"===this.tag&&(r.attrs={href:"javascript:void(0)"}),t(this.tag,r,this.$slots.default)},methods:{resizePopup:function(){var t=n.innerWidth||document.documentElement.clientWidth||n.screenX,e=n.innerHeight||document.documentElement.clientHeight||n.screenY,r=t/n.screen.availWidth;this.popupLeft=(t-this.popup.width)/2/r+(void 0!==n.screenLeft?n.screenLeft:n.screenX),this.popupTop=(e-this.popup.height)/2/r+(void 0!==n.screenTop?n.screenTop:n.screenY)},share:function(){var t=this;this.resizePopup(),this.popupWindow&&this.popupInterval&&(clearInterval(this.popupInterval),this.popupWindow.close(),this.emit("change")),this.popupWindow=n.open(this.shareLink,"sharer-"+this.key,",height="+this.popup.height+",width="+this.popup.width+",left="+this.popupLeft+",top="+this.popupTop+",screenX="+this.popupLeft+",screenY="+this.popupTop),this.popupWindow&&(this.popupWindow.focus(),this.popupInterval=setInterval((function(){t.popupWindow&&!t.popupWindow.closed||(clearInterval(t.popupInterval),t.popupWindow=null,t.emit("close"))}),500),this.emit("open"))},touch:function(){window.open(this.shareLink,"_blank"),this.emit("open")},emit:function(t){this.$root.$emit("share_network_"+t,this.key,this.url),this.$emit(t,this.key,this.url)}}};e.default={install:function(t,e){t.component(o.name,o),t.prototype.$SocialSharing={options:{networks:e&&e.hasOwnProperty("networks")?Object.assign(i,e.networks):i}}}}}])}));

/***/ })

}]);