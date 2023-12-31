/*! For license information please see bundle.3357aca2cc4eb0906acb.js.LICENSE.txt */
(() => {
  "use strict";
  const e = JSON.parse('{"n":"https://jsonplaceholder.typicode.com"}');
  function t(e) {
    const t = document.createElement("div");
    (t.className = "todo-item"), (t.dataset.todoId = e.id);
    const o = document.createElement("input");
    (o.type = "checkbox"),
      (o.className = "todo-completed"),
      (o.checked = e.completed);
    const n = document.createElement("span");
    (n.className = "todo-title"), (n.innerText = e.title);
    const c = document.createElement("button");
    return (
      (c.className = "todo-btn-delete"),
      (c.innerText = "-"),
      t.append(o, " ", n, " ", c),
      t
    );
  }
  console.log("TEST");
  const o = document.querySelector(".todo-form"),
    n = document.querySelector(".todo-checkall"),
    c = document.querySelector(".todo-input"),
    a = document.querySelector(".todo-list");
  o.addEventListener("submit", async (o) => {
    if (
      (o.preventDefault(),
      c.classList.remove("invalid"),
      !c.value.match(/^[\p{Alphabetic}0-9\- ]+$/u))
    )
      return void c.classList.add("invalid");
    const n = t(
      await (async function (t) {
        const o = await fetch(e.n + "/todos", {
          method: "POST",
          body: JSON.stringify(t),
          headers: { "Content-type": "application/json" },
        });
        return await o.json();
      })({ title: c.value, completed: !1 }),
    );
    a.prepend(n), (c.value = ""), c.focus();
  }),
    n.addEventListener("click", () => {
      const e = a.querySelectorAll(".todo-completed");
      for (const t of e) t.checked = n.checked;
    }),
    a.addEventListener("click", (e) => {
      const t = e.target;
      t.matches(".todo-btn-delete") && t.closest(".todo-item").remove();
    }),
    a.addEventListener("dblclick", (e) => {
      const t = e.target;
      if (t.matches(".todo-title")) {
        const e = document.createElement("input");
        (e.className = "todo-title-edit"),
          (e.value = t.innerText),
          t.replaceWith(e);
      }
    }),
    a.addEventListener("keydown", (e) => {
      const t = e.target;
      if (t.matches(".todo-title-edit") && "Enter" === e.code) {
        const e = document.createElement("span");
        (e.className = "todo-title"), (e.innerText = t.value), t.replaceWith(e);
      }
    }),
    window.addEventListener("click", (e) => {
      const t = e.target,
        o = document.querySelector(".todo-title-edit");
      if (!o || t === o) return;
      const n = document.createElement("span");
      (n.className = "todo-title"), (n.innerText = o.value), o.replaceWith(n);
    });
  const d = localStorage.getItem("value-todo") ?? "";
  (c.value = d),
    c.addEventListener("input", () => {
      localStorage.setItem("value-todo", c.value);
    }),
    (async function () {
      const o = await (async function () {
        const t = await fetch(e.n + "/todos");
        return await t.json();
      })();
      for (const e of o.slice(0, 10)) {
        const o = t(e);
        a.append(o);
      }
    })();
})();
//# sourceMappingURL=bundle.3357aca2cc4eb0906acb.js.map
