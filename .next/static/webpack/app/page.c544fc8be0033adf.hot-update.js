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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ \"./components/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\n\nconst About = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].paddings, \" relative z-10\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"gradient-02 z-0\"\n            }, void 0, false, {\n                fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                variants: _utils_motion__WEBPACK_IMPORTED_MODULE_3__.staggerContainer,\n                initial: \"hidden\",\n                whileInView: \"show\",\n                viewport: {\n                    once: false,\n                    amount: 0.25\n                },\n                className: \"{styles.innerwidth} mx-auto \".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" flex-col\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components__WEBPACK_IMPORTED_MODULE_2__.TypingText, {\n                        title: \"| About Nitesh Sonali\",\n                        textStyles: \"text-center\"\n                    }, void 0, false, {\n                        fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                        lineNumber: 17,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.p, {\n                        children: [\n                            \"variants=\",\n                            (0,_utils_motion__WEBPACK_IMPORTED_MODULE_3__.fadeIn)(\"up\", \"tween\", 0.2)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n                lineNumber: 10,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/dev/Documents/project-personal/homepage-nitesh/sections/About.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n_c = About;\n/* harmony default export */ __webpack_exports__[\"default\"] = (About);\nvar _c;\n$RefreshReg$(_c, \"About\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9BYm91dC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFDcUM7QUFDTjtBQUNZO0FBQ2M7QUFFekQsTUFBTUssUUFBUSxrQkFDWiw4REFBQ0M7UUFBUUMsV0FBVyxHQUFtQixPQUFoQk4sd0RBQWUsRUFBQzs7MEJBQ3JDLDhEQUFDUTtnQkFBSUYsV0FBVTs7Ozs7OzBCQUNmLDhEQUFDUCxxREFBVTtnQkFDVlUsVUFBVU4sMkRBQWdCQTtnQkFDMUJPLFNBQVE7Z0JBQ1JDLGFBQVk7Z0JBQ1pDLFVBQVU7b0JBQUNDLE1BQU0sS0FBSztvQkFBRUMsUUFBUTtnQkFBSTtnQkFDcENSLFdBQVcsK0JBQWlELE9BQWxCTiwwREFBaUIsRUFBQzs7a0NBRTNELDhEQUFDQyxtREFBVUE7d0JBQUNlLE9BQU07d0JBQ2xCQyxZQUFXOzs7Ozs7a0NBRVgsOERBQUNsQixtREFBUTs7NEJBQUM7NEJBQ0VHLHFEQUFNQSxDQUFDLE1BQU0sU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQWRqQ0U7QUFvQk4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VjdGlvbnMvQWJvdXQuanN4PzI2YzQiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xuaW1wb3J0IHttb3Rpb259IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuaW1wb3J0IHsgVHlwaW5nVGV4dCB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuaW1wb3J0IHtmYWRlSW4sIHN0YWdnZXJDb250YWluZXJ9IGZyb20gJy4uL3V0aWxzL21vdGlvbic7XG5cbmNvbnN0IEFib3V0ID0gKCkgPT4gKFxuICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3N0eWxlcy5wYWRkaW5nc30gcmVsYXRpdmUgei0xMGB9ID5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyYWRpZW50LTAyIHotMFwiIC8+XG4gICAgPG1vdGlvbi5kaXZcbiAgICAgdmFyaWFudHM9e3N0YWdnZXJDb250YWluZXJ9XG4gICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICB3aGlsZUluVmlldz1cInNob3dcIlxuICAgICB2aWV3cG9ydD17e29uY2U6IGZhbHNlLCBhbW91bnQ6IDAuMjV9fVxuICAgICBjbGFzc05hbWU9e2B7c3R5bGVzLmlubmVyd2lkdGh9IG14LWF1dG8gJHtzdHlsZXMuZmxleENlbnRlcn0gZmxleC1jb2xgfVxuICAgID5cbiAgICAgIDxUeXBpbmdUZXh0IHRpdGxlPVwifCBBYm91dCBOaXRlc2ggU29uYWxpXCJcbiAgICAgIHRleHRTdHlsZXM9XCJ0ZXh0LWNlbnRlclwiXG4gICAgICAvPlxuICAgICAgPG1vdGlvbi5wPlxuICAgICAgICB2YXJpYW50cz17ZmFkZUluKCd1cCcsICd0d2VlbicsMC4yKX1cbiAgICAgIDwvbW90aW9uLnA+XG4gICAgPC9tb3Rpb24uZGl2PlxuICA8L3NlY3Rpb24+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBBYm91dDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJzdHlsZXMiLCJUeXBpbmdUZXh0IiwiZmFkZUluIiwic3RhZ2dlckNvbnRhaW5lciIsIkFib3V0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInBhZGRpbmdzIiwiZGl2IiwidmFyaWFudHMiLCJpbml0aWFsIiwid2hpbGVJblZpZXciLCJ2aWV3cG9ydCIsIm9uY2UiLCJhbW91bnQiLCJmbGV4Q2VudGVyIiwidGl0bGUiLCJ0ZXh0U3R5bGVzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./sections/About.jsx\n"));

/***/ })

});