"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/About.jsx":
/*!****************************!*\
  !*** ./sections/About.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\nconst About = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-02 z-0\"\n            }, void 0, false, {\n                fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n                initial: \"hidden\",\n                whileInView: \"show\",\n                viewport: {\n                    once: false,\n                    amount: 0.25\n                },\n                className: \"{styles.innerwidth} mx-auto \".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" flex-col\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TypingText, {\n                        title: \"| About Nitesh Sonali\",\n                        textStyles: \"text-center\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n                        children: [\n                            \"variants=\",\n                            (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__.fadeIn)(\"up\", \"tween\", 0.2, 1),\n                            'className=\"mt-[8p]\"'\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDcUM7QUFDTjtBQUNZO0FBQ2M7QUFFekQsTUFBTUssUUFBUSxrQkFDWiw4REFBQ0M7UUFBUUMsV0FBVyxHQUFtQixPQUFoQk4sd0RBQWUsRUFBQzs7MEJBQ3JDLDhEQUFDUTtnQkFBSUYsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDUCxxREFBVTtnQkFDVlUsVUFBVU4sMkRBQWdCQTtnQkFDMUJPLFNBQVE7Z0JBQ1JDLGFBQVk7Z0JBQ1pDLFVBQVU7b0JBQUNDLE1BQU0sS0FBSztvQkFBRUMsUUFBUTtnQkFBSTtnQkFDcENSLFdBQVcsK0JBQWlELE9BQWxCTiwwREFBaUIsRUFBQzs7a0NBRTNELDhEQUFDQyxtREFBVUE7d0JBQUNlLE9BQU07d0JBQ2xCQyxZQUFXOzs7Ozs7a0NBRVgsOERBQUNsQixtREFBUTs7NEJBQUM7NEJBQ0VHLHFEQUFNQSxDQUFDLE1BQU0sU0FBUSxLQUFJOzRCQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBZHhDRTtBQXFCTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9BYm91dC5qc3g/MjZjNCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XG5pbXBvcnQge21vdGlvbn0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBUeXBpbmdUZXh0IH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5pbXBvcnQge2ZhZGVJbiwgc3RhZ2dlckNvbnRhaW5lcn0gZnJvbSAnLi4vdXRpbHMvbW90aW9uJztcblxuY29uc3QgQWJvdXQgPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17YCR7c3R5bGVzLnBhZGRpbmdzfSByZWxhdGl2ZSB6LTEwYH0gPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JhZGllbnQtMDIgei0wXCIgLz5cbiAgICA8bW90aW9uLmRpdlxuICAgICB2YXJpYW50cz17c3RhZ2dlckNvbnRhaW5lcn1cbiAgICAgaW5pdGlhbD1cImhpZGRlblwiXG4gICAgIHdoaWxlSW5WaWV3PVwic2hvd1wiXG4gICAgIHZpZXdwb3J0PXt7b25jZTogZmFsc2UsIGFtb3VudDogMC4yNX19XG4gICAgIGNsYXNzTmFtZT17YHtzdHlsZXMuaW5uZXJ3aWR0aH0gbXgtYXV0byAke3N0eWxlcy5mbGV4Q2VudGVyfSBmbGV4LWNvbGB9XG4gICAgPlxuICAgICAgPFR5cGluZ1RleHQgdGl0bGU9XCJ8IEFib3V0IE5pdGVzaCBTb25hbGlcIlxuICAgICAgdGV4dFN0eWxlcz1cInRleHQtY2VudGVyXCJcbiAgICAgIC8+XG4gICAgICA8bW90aW9uLnA+XG4gICAgICAgIHZhcmlhbnRzPXtmYWRlSW4oJ3VwJywgJ3R3ZWVuJywwLjIsMSl9XG4gICAgICAgIGNsYXNzTmFtZT1cIm10LVs4cF1cIlxuICAgICAgPC9tb3Rpb24ucD5cbiAgICA8L21vdGlvbi5kaXY+XG4gIDwvc2VjdGlvbj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEFib3V0O1xuIl0sIm5hbWVzIjpbIm1vdGlvbiIsInN0eWxlcyIsIlR5cGluZ1RleHQiLCJmYWRlSW4iLCJzdGFnZ2VyQ29udGFpbmVyIiwiQWJvdXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFkZGluZ3MiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImZsZXhDZW50ZXIiLCJ0aXRsZSIsInRleHRTdHlsZXMiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});