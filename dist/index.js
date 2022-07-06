/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./ts/EventListener.ts":
/*!*****************************!*\
  !*** ./ts/EventListener.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventListener": () => (/* binding */ EventListener)
/* harmony export */ });
class EventListener {
    constructor() {
        this.listeners = {};
    }
    add(listenerId, event, element, handler) {
        this.listeners[listenerId] = {
            event,
            element,
            handler,
        };
        element.addEventListener(event, handler);
    }
    remove(listenerId) {
        const listener = this.listeners[listenerId];
        if (!listener)
            return;
        listener.element.removeEventListener(listener.event, listener.handler);
        delete this.listeners[listenerId];
    }
}


/***/ }),

/***/ "./ts/Task.ts":
/*!********************!*\
  !*** ./ts/Task.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Task": () => (/* binding */ Task),
/* harmony export */   "statusMap": () => (/* binding */ statusMap)
/* harmony export */ });
Object(function webpackMissingModule() { var e = new Error("Cannot find module 'uuid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());

const statusMap = {
    todo: 'TODO',
    doing: 'DOING',
    done: 'DONE'
};
class Task {
    constructor(properties) {
        this.id = Object(function webpackMissingModule() { var e = new Error("Cannot find module 'uuid'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())();
        this.title = properties.title;
        this.status = statusMap.todo;
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./ts/index.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventListener */ "./ts/EventListener.ts");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./ts/Task.ts");


class Application {
    constructor() {
        this.eventListener = new _EventListener__WEBPACK_IMPORTED_MODULE_0__.EventListener();
        this.handleSubmit = (e) => {
            e.preventDefault();
            console.log('submitted');
            const titleInput = document.getElementById('title');
            if (titleInput.value)
                return;
            const task = new _Task__WEBPACK_IMPORTED_MODULE_1__.Task({ title: titleInput.value });
            console.log(task);
        };
    }
    start() {
        const createForm = document.getElementById('createForm');
        this.eventListener.add('submit-handler', 'submit', createForm, this.handleSubmit);
    }
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFRTyxNQUFNLGFBQWE7SUFBMUI7UUFDbUIsY0FBUyxHQUFjLEVBQUU7SUFxQjVDLENBQUM7SUFuQkMsR0FBRyxDQUFDLFVBQWtCLEVBQUUsS0FBYSxFQUFFLE9BQW9CLEVBQUUsT0FBMkI7UUFDdEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsR0FBRztZQUMzQixLQUFLO1lBQ0wsT0FBTztZQUNQLE9BQU87U0FDUjtRQUVELE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDO0lBQzFDLENBQUM7SUFFRCxNQUFNLENBQUMsVUFBa0I7UUFDdkIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFFM0MsSUFBRyxDQUFDLFFBQVE7WUFBRSxPQUFNO1FBRXBCLFFBQVEsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsT0FBTyxDQUFDO1FBRXRFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUM7SUFDbkMsQ0FBQztDQUNGOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZ0M7QUFFMUIsTUFBTSxTQUFTLEdBQUc7SUFDdkIsSUFBSSxFQUFFLE1BQU07SUFDWixLQUFLLEVBQUUsT0FBTztJQUNkLElBQUksRUFBRSxNQUFNO0NBQ0o7QUFHSCxNQUFNLElBQUk7SUFNZixZQUFZLFVBQTJCO1FBQ3JDLElBQUksQ0FBQyxFQUFFLEdBQUcsbUlBQUksRUFBRTtRQUNoQixJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxLQUFLO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLElBQUk7SUFDOUIsQ0FBQztDQUNGOzs7Ozs7O1VDcEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ2xCO0FBRTlCLE1BQU0sV0FBVztJQUFqQjtRQUNtQixrQkFBYSxHQUFHLElBQUkseURBQWEsRUFBRTtRQVE1QyxpQkFBWSxHQUFHLENBQUMsQ0FBUSxFQUFFLEVBQUU7WUFDbEMsQ0FBQyxDQUFDLGNBQWMsRUFBRTtZQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUV4QixNQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBcUI7WUFFdkUsSUFBRyxVQUFVLENBQUMsS0FBSztnQkFBRSxPQUFNO1lBRTNCLE1BQU0sSUFBSSxHQUFHLElBQUksdUNBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFFbkIsQ0FBQztJQUNILENBQUM7SUFsQkMsS0FBSztRQUNILE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsWUFBWSxDQUFnQjtRQUV2RSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxRQUFRLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDbkYsQ0FBQztDQWNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHMtdG9kby8uL3RzL0V2ZW50TGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vdHMtdG9kby8uL3RzL1Rhc2sudHMiLCJ3ZWJwYWNrOi8vdHMtdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90cy10b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cy10b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHMtdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RzLXRvZG8vLi90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ0eXBlIGxpc3RlbmVycyA9IHtcbiAgW2lkOiBzdHJpbmddOiB7XG4gICAgZXZlbnQ6IHN0cmluZ1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50XG4gICAgaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IGxpc3RlbmVyczogbGlzdGVuZXJzID0ge31cblxuICBhZGQobGlzdGVuZXJJZDogc3RyaW5nLCBldmVudDogc3RyaW5nLCBlbGVtZW50OiBIVE1MRWxlbWVudCwgaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkKSB7XG4gICAgdGhpcy5saXN0ZW5lcnNbbGlzdGVuZXJJZF0gPSB7XG4gICAgICBldmVudCxcbiAgICAgIGVsZW1lbnQsXG4gICAgICBoYW5kbGVyLFxuICAgIH1cblxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcilcbiAgfVxuXG4gIHJlbW92ZShsaXN0ZW5lcklkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBsaXN0ZW5lciA9IHRoaXMubGlzdGVuZXJzW2xpc3RlbmVySWRdXG5cbiAgICBpZighbGlzdGVuZXIpIHJldHVybiBcblxuICAgIGxpc3RlbmVyLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihsaXN0ZW5lci5ldmVudCwgbGlzdGVuZXIuaGFuZGxlcilcblxuICAgIGRlbGV0ZSB0aGlzLmxpc3RlbmVyc1tsaXN0ZW5lcklkXVxuICB9XG59IiwiaW1wb3J0IHsgdjQgYXMgdXVpZCB9IGZyb20gJ3V1aWQnXG5cbmV4cG9ydCBjb25zdCBzdGF0dXNNYXAgPSB7XG4gIHRvZG86ICdUT0RPJyxcbiAgZG9pbmc6ICdET0lORycsXG4gIGRvbmU6ICdET05FJ1xufSBhcyBjb25zdFxuZXhwb3J0IHR5cGUgU3RhdHVzID0gdHlwZW9mIHN0YXR1c01hcFtrZXlvZiB0eXBlb2Ygc3RhdHVzTWFwXVxuXG5leHBvcnQgY2xhc3MgVGFzayB7XG4gIHJlYWRvbmx5IGlkXG4gIHRpdGxlXG4gIHN0YXR1c1xuXG5cbiAgY29uc3RydWN0b3IocHJvcGVydGllczoge3RpdGxlOiBzdHJpbmd9KSB7XG4gICAgdGhpcy5pZCA9IHV1aWQoKVxuICAgIHRoaXMudGl0bGUgPSBwcm9wZXJ0aWVzLnRpdGxlXG4gICAgdGhpcy5zdGF0dXMgPSBzdGF0dXNNYXAudG9kb1xuICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSBcIi4vRXZlbnRMaXN0ZW5lclwiO1xuaW1wb3J0IHsgVGFzayB9IGZyb20gJy4vVGFzayc7XG5cbmNsYXNzIEFwcGxpY2F0aW9uIHtcbiAgcHJpdmF0ZSByZWFkb25seSBldmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoKVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlRm9ybScpIGFzIEhUTUxFbGVtZW50XG5cbiAgICB0aGlzLmV2ZW50TGlzdGVuZXIuYWRkKCdzdWJtaXQtaGFuZGxlcicsICdzdWJtaXQnLCBjcmVhdGVGb3JtLCB0aGlzLmhhbmRsZVN1Ym1pdClcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU3VibWl0ID0gKGU6IEV2ZW50KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG4gICAgY29uc29sZS5sb2coJ3N1Ym1pdHRlZCcpXG5cbiAgICBjb25zdCB0aXRsZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJykgYXMgSFRNTElucHV0RWxlbWVudFxuXG4gICAgaWYodGl0bGVJbnB1dC52YWx1ZSkgcmV0dXJuXG5cbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soeyB0aXRsZTogdGl0bGVJbnB1dC52YWx1ZSB9KVxuICAgIGNvbnNvbGUubG9nKHRhc2spXG5cbiAgfVxufVxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=