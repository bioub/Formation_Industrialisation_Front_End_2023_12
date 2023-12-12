/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/api.js":
      /*!********************!*\
  !*** ./src/api.js ***!
  \********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ fetchTodos: () => /* binding */ fetchTodos,
          /* harmony export */ postTodo: () => /* binding */ postTodo,
          /* harmony export */
        });
        /**
         * @typedef {object} Todo
         * @property {number} todo.id
         * @property {string} todo.title
         * @property {boolean} todo.completed
         */

        /**
         * @typedef {object} TodoWithoutId
         * @property {string} todo.title
         * @property {boolean} todo.completed
         */

        /**
         * @returns {Promise<Todo[]>}
         */
        async function fetchTodos() {
          const res = await fetch("https://jsonplaceholder.typicode.com/todos");
          return await res.json();
        }

        /**
         * @param {TodoWithoutId} todoDto
         * @returns {Promise<Todo>}
         */
        async function postTodo(todoDto) {
          const res = await fetch(
            "https://jsonplaceholder.typicode.com/todos",
            {
              method: "POST",
              body: JSON.stringify(todoDto),
              headers: {
                "Content-type": "application/json",
              },
            }
          );

          return await res.json();
        }

        /***/
      },

    /***/ "./src/todos.js":
      /*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createTodoItem: () =>
            /* binding */ createTodoItem,
          /* harmony export */
        });
        /**
         * @typedef {object} Todo
         * @property {number} todo.id
         * @property {string} todo.title
         * @property {boolean} todo.completed
         */

        /**
         * @param {Todo} todo
         * @returns {HTMLDivElement}
         */
        function createTodoItem(todo) {
          /*
  <div class="todo-item" data-todo-id="123">
    <input type="checkbox" class="todo-completed">
    <span class="todo-title">Acheter du pain</span>
    <button class="todo-btn-delete">-</button>
  </div>
  */
          const divEl = document.createElement("div");
          divEl.className = "todo-item";
          divEl.dataset.todoId = todo.id;

          const checkboxEl = document.createElement("input");
          checkboxEl.type = "checkbox";
          checkboxEl.className = "todo-completed";
          checkboxEl.checked = todo.completed;

          const spanEl = document.createElement("span");
          spanEl.className = "todo-title";
          spanEl.innerText = todo.title;

          const buttonEl = document.createElement("button");
          buttonEl.className = "todo-btn-delete";
          buttonEl.innerText = "-";

          divEl.append(checkboxEl, " ", spanEl, " ", buttonEl);

          return divEl;
        }

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  (() => {
    /*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ =
      __webpack_require__(/*! ./api.js */ "./src/api.js");
    /* harmony import */ var _todos_js__WEBPACK_IMPORTED_MODULE_1__ =
      __webpack_require__(/*! ./todos.js */ "./src/todos.js");

    /** @type {HTMLFormElement} */
    const formEl = document.querySelector(".todo-form");

    /** @type {HTMLInputElement} */
    const checkboxEl = document.querySelector(".todo-checkall");

    /** @type {HTMLInputElement} */
    const inputEl = document.querySelector(".todo-input");

    /** @type {HTMLDivElement} */
    const divEl = document.querySelector(".todo-list");

    formEl.addEventListener("submit", async (event) => {
      event.preventDefault();

      // const { createTodoItem } = await import('./todos.js');
      // const { postTodo } = await import('./api.js');

      inputEl.classList.remove("invalid");

      if (!inputEl.value.match(/^[\p{Alphabetic}0-9\- ]+$/u)) {
        inputEl.classList.add("invalid");
        return;
      }

      const todo = await (0, _api_js__WEBPACK_IMPORTED_MODULE_0__.postTodo)({
        title: inputEl.value,
        completed: false,
      });

      const todoItemEl = (0,
      _todos_js__WEBPACK_IMPORTED_MODULE_1__.createTodoItem)(todo);
      divEl.prepend(todoItemEl);
      inputEl.value = "";
      inputEl.focus();
    });

    checkboxEl.addEventListener("click", () => {
      /** @type {NodeListOf<HTMLInputElement>} */
      const completedList = divEl.querySelectorAll(".todo-completed");

      for (const completedEl of completedList) {
        completedEl.checked = checkboxEl.checked;
      }
    });

    divEl.addEventListener("click", (event) => {
      /** @type {HTMLElement} */
      const target = event.target;

      if (target.matches(".todo-btn-delete")) {
        target.closest(".todo-item").remove();
      }
    });

    divEl.addEventListener("dblclick", (event) => {
      /** @type {HTMLElement} */
      const target = event.target;

      if (target.matches(".todo-title")) {
        const inputEl = document.createElement("input");
        inputEl.className = "todo-title-edit";
        inputEl.value = target.innerText;
        target.replaceWith(inputEl);
      }
    });

    divEl.addEventListener("keydown", (event) => {
      /** @type {HTMLElement} */
      const target = event.target;

      if (target.matches(".todo-title-edit")) {
        if (event.code === "Enter") {
          const spanEl = document.createElement("span");
          spanEl.className = "todo-title";
          spanEl.innerText = target.value;

          target.replaceWith(spanEl);
        }
      }
    });

    window.addEventListener("click", (event) => {
      /** @type {HTMLElement} */
      const target = event.target;

      const inputEl = document.querySelector(".todo-title-edit");

      if (!inputEl || target === inputEl) {
        return;
      }

      const spanEl = document.createElement("span");
      spanEl.className = "todo-title";
      spanEl.innerText = inputEl.value;

      inputEl.replaceWith(spanEl);
    });

    const valueFromStorage = localStorage.getItem("value-todo") ?? "";
    inputEl.value = valueFromStorage;

    inputEl.addEventListener("input", () => {
      localStorage.setItem("value-todo", inputEl.value);
    });

    // async function load() {
    //   const todos = await fetchTodos();

    //   for (const todo of todos.slice(0, 10)) {
    //     const todoItemEl = createTodoItem(todo);
    //     divEl.append(todoItemEl);
    //   }
    // }

    // load();
  })();

  /******/
})();
