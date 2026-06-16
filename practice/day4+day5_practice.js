

try { throw new Error('oops') } catch(e) {
console.log(e.message, e instanceof Error)
} finally { console.log('done') }



/* Output -> 
oops true
done
*/

/*2
Kya print hoga?
try { null.x } catch(e) { console.log(e.constructor.name) }
PREDICT OUTPUT DAY 4
*/

// Output :- TypeError.

/*
3
Kya print hoga aur kyun?
try {
try { throw 42 }
finally { console.log('inner') }
} catch(e) { console.log('caught', e) }
finally { console.log('outer') }
PREDICT OUTPUT DAY 4 HARD
*/

/*
Output ->
inner
['caught', 42]
outer
*/

/*
4
Kya print hoga?
function f() { try { return 1 } finally { return 2 } }
console.log(f())
PREDICT OUTPUT DAY 4
*/

// Output -> 2

/*
5
Kya print hoga?
async function go() {
try { await Promise.reject('bad') }
catch(e) { console.log(e) }
finally { console.log('fin') }
}
go()
PREDICT OUTPUT DAY 4 HARD
*/

/*
Output->
bad
fin
*/

/*Kya error type aayega?
try { undeclaredVar } catch(e) { console.log(e.constructor.name) }
PREDICT OUTPUT DAY 4
*/

// Output-> reference error.

/*
7
Kya print hoga?
class AppError extends Error {
constructor(msg, code) { super(msg); this.code = code }
}
try { throw new AppError('fail', 404) }
catch(e) { console.log(e.message, e.code, e instanceof Error) }
PREDICT OUTPUT DAY 4 HARD
*/

/*
Output ->
fail 404 true
*/

/*
8
Kya print hoga?
try { JSON.parse('{bad}') } catch(e) { console.log(e instanceof SyntaxError) }
PREDICT OUTPUT DAY 4
*/

// output -> true.

/*
9
Kya print hoga — output order bhi batao:
Promise.resolve()
.then(() => { throw new Error('p') })
.catch(e => console.log('c', e.message));
try { throw new Error('s') } catch(e) { console.log('s', e.message) }
PREDICT OUTPUT DAY 4 HARD
*/

/*
Output ->
s s
c p
*/

/*
10 Yeh code mentally run karo — error ka exact name batao:
const obj = {};
obj.foo.bar;
PREDICT OUTPUT DAY 4
*/

// Output -> cannot read properties of undefined.

/*
11 ValidationError, NetworkError, aur AuthError class banao
Teeno Error se extend hon. Alag name aur extra property: field, statusCode, userId.
Phir handle(err) function banao jo instanceof se sahi type detect kare.
CODE KARO DAY 4
*/

// class AppError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = this.constructor.name;
//   }
// }

// class ValidationError extends AppError {
//   constructor(message, field) {
//     super(message);
//     this.field = field;
//   }
// }

// class NetworkError extends AppError {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//   }
// }

// class AuthError extends AppError {
//   constructor(message, userId) {
//     super(message);
//     this.userId = userId;
//   }
// }

// function handle(err) {
//   if (err instanceof ValidationError) {
//     console.log(`Validation Error on field "${err.field}": ${err.message}`);
//   } else if (err instanceof NetworkError) {
//     console.log(`Network Error (status ${err.statusCode}): ${err.message}`);
//   } else if (err instanceof AuthError) {
//     console.log(`Auth Error for user ${err.userId}: ${err.message}`);
//   } else {
//     console.log(`Unknown Error: ${err.message}`);
//   }
// }

// try {
//   throw new ValidationError("Invalid email format", "email");
// } catch (err) {
//   handle(err);
// }

// try {
//   throw new NetworkError("Failed to fetch data", 500);
// } catch (err) {
//   handle(err);
// }

// try {
//   throw new AuthError("Unauthorized access", "user123");
// } catch (err) {
//   handle(err);
// }

/*
12 safeDiv(a, b) function banao
b===0 par custom DivisionByZeroError throw karo.
Proper try/catch — error message console mein print ho.
CODE KARO DAY 4
*/

// class DivisionByZeroError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "DivisionByZeroError";
//   }
// }

// function safeDiv(a, b) {
//   if (b === 0) {
//     throw new DivisionByZeroError("Cannot divide by zero");
//   }
//   return a / b;
// }

// try {
//   console.log(safeDiv(10, 2));
//   console.log(safeDiv(5, 0));
// } catch (err) {
//   console.log(`${err.name}: ${err.message}`);
// }

// 13 retry(fn, times) — async retry function banao
// fn ko times baar retry kare. Har attempt pe error log ho.
// Sab fail ho jaayein toh custom MaxRetriesError throw karo with attempt count.
// CODE KARO DAY 4 HARD

// class MaxRetriesError extends Error {
//   constructor(message, attempts) {
//     super(message);
//     this.name = "MaxRetriesError";
//     this.attempts = attempts;
//   }
// }

// async function retry(fn, times) {
//   let lastError;
//   for (let i = 1; i <= times; i++) {
//     try {
//       return await fn();
//     } catch (err) {
//       console.log(`Attempt ${i} failed: ${err.message}`);
//       lastError = err;
//     }
//   }
//   throw new MaxRetriesError("All retries failed", times);
// }

// async function unstableTask() {
//   if (Math.random() < 0.7) {
//     throw new Error("Random failure");
//   }
//   return "Success!";
// }

// (async () => {
//   try {
//     const result = await retry(unstableTask, 3);
//     console.log("Result:", result);
//   } catch (err) {
//     console.log(`${err.name} after ${err.attempts} attempts: ${err.message}`);
//   }
// })();

/*
14
ES Modules project banao
mathUtils.js: add, sub, mul, div (named exports). div zero pe throw kare.
main.js mein sab import karke test karo.
CODE KARO DAY 4
*/

// // mathUtils.js
// export function add(a, b) { return a + b; }
// export function sub(a, b) { return a - b; }
// export function mul(a, b) { return a * b; }
// export function div(a, b) {
//   if (b === 0) throw new Error("Division by zero");
//   return a / b;
// }

// // main.js
// import { add, sub, mul, div } from './mathUtils.js';
// console.log(add(2, 3));   // 5
// console.log(sub(5, 2));   // 3
// console.log(mul(4, 3));   // 12
// console.log(div(10, 2));  // 5
// // console.log(div(5, 0)); // Error

/*
15
CommonJS loader module banao
logger.js mein log(level, msg) function. require se app.js mein import karo.
module.exports ka sahi use explain karo - default vs named.
CODE KARO DAY 4
*/

// logger.js
// function log(level, msg) {
//   console.log(`[${level}] ${msg}`);
// }
// module.exports = { log }; // named export

// // app.js
// const { log } = require('./logger.js');
// log("INFO", "App started");
// log("ERROR", "Something went wrong");

/*
16
Dynamic import() se plugin loader banao
loadPlugin(name) function jo runtime par ./plugins/${name}.js load kare.
Plugin exist nahi kare toh custom PluginNotFoundError with plugin name.
CODE KARO DAY 4 HARD
*/

// class PluginNotFoundError extends Error {
//   constructor(name) {
//     super(`Plugin ${name} not found`);
//     this.name = "PluginNotFoundError";
//     this.plugin = name;
//   }
// }

// async function loadPlugin(name) {
//   try {
//     const module = await import(`./plugins/${name}.js`);
//     return module;
//   } catch {
//     throw new PluginNotFoundError(name);
//   }
// }

// Example usage
// (async () => {
//   try {
//     const plugin = await loadPlugin("sample");
//     plugin.run();
//   } catch (err) {
//     console.log(`${err.name}: ${err.message}`);
//   }
// })();

/*
17
config.js with default export banao
Object: { env, port, dbUrl }. Import karo, sab console karo.
Koi value missing ho toh descriptive error throw karo.
CODE KARO DAY 4
*/

// config.js
// const config = {
//   env: "development",
//   port: 3000,
//   dbUrl: "mongodb://localhost:27017/test"
// };
// export default config;

// // main.js
// import config from './config.js';
// for (const [key, value] of Object.entries(config)) {
//   if (!value) throw new Error(`Missing config value: ${key}`);
//   console.log(`${key}: ${value}`);
// }

/*
18
errorBoundary(fn) higher-order function banao
fn throw kare -> { ok: false, error: e.message }
fn succeed kare -> { ok: true, data: result }
Sync aur async dono handle kare.
CODE KARO DAY 4 HARD
*/

// function errorBoundary(fn) {
//   return async (...args) => {
//     try {
//       const result = await fn(...args);
//       return { ok: true, data: result };
//     } catch (e) {
//       return { ok: false, error: e.message };
//     }
//   };
// }

// // Example
// const safeFn = errorBoundary(async (x) => {
//   if (x < 0) throw new Error("Negative!");
//   return x * 2;
// });

// (async () => {
//   console.log(await safeFn(5));   // { ok: true, data: 10 }
//   console.log(await safeFn(-1));  // { ok: false, error: "Negative!" }
// })();

/*
19
Teen utility modules + barrel export banao
stringUtils.js, arrayUtils.js, objectUtils.js banaao.
index.js se sab re-export karo. main.js mein index se import karo.
CODE KARO DAY 4
*/

// stringUtils.js
// export function capitalize(str) { return str[0].toUpperCase() + str.slice(1); }

// // arrayUtils.js
// export function first(arr) { return arr[0]; }

// // objectUtils.js
// export function keys(obj) { return Object.keys(obj); }

// // index.js
// export * from './stringUtils.js';
// export * from './arrayUtils.js';
// export * from './objectUtils.js';

// // main.js
// import { capitalize, first, keys } from './index.js';
// console.log(capitalize("hello")); // Hello
// console.log(first([1,2,3]));      // 1
// console.log(keys({a:1,b:2}));     // ["a","b"]

/*
20
fetchWithTimeout(url, ms) function banao
ms milliseconds ke baad custom TimeoutError throw kare.
Promise.race() use karo. Dono (fetch + timeout) ka proper cleanup karo.
CODE KARO DAY 4 HARD
*/

class TimeoutError extends Error {
  constructor(ms) {
    super(`Request timed out after ${ms}ms`);
    this.name = "TimeoutError";
  }
}

async function fetchWithTimeout(url, ms) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ms);

  try {
    const res = await fetch(url, { signal: controller.signal });
    clearTimeout(timeout);
    return res;
  } catch (err) {
    if (err.name === "AbortError") throw new TimeoutError(ms);
    throw err;
  }
}

// Example
(async () => {
  try {
    const res = await fetchWithTimeout("https://jsonplaceholder.typicode.com/todos/1", 1000);
    console.log(await res.json());
  } catch (err) {
    console.log(`${err.name}: ${err.message}`);
  }
})();

/*
21
Custom EventEmitter class banao (Node wala nahi - apna)
on(event, cb), off(event, cb), emit(event, ...args) implement karo.
Listener throw kare toh baaki listeners rok mat do - sab run hone chahiye.
CODE KARO DAY 4 HARD
*/

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    if (!this.events[event]) this.events[event] = [];
    this.events[event].push(cb);
  }

  off(event, cb) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter(fn => fn !== cb);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    for (const fn of this.events[event]) {
      try {
        fn(...args);
      } catch (err) {
        console.log(`Listener error: ${err.message}`);
      }
    }
  }
}

// Example
const emitter = new EventEmitter();
const listener1 = () => { throw new Error("fail"); };
const listener2 = () => console.log("listener2 ran");
emitter.on("test", listener1);
emitter.on("test", listener2);
emitter.emit("test"); // logs error + "listener2 ran"

/*
22
parseJSON(str) safe wrapper banao
Valid JSON -> parsed object. Invalid -> null + error log.
CODE KARO DAY 4
*/

function parseJSON(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    console.log("Invalid JSON:", e.message);
    return null;
  } finally {
    console.log("parseJSON finished");
  }
}

// Example
console.log(parseJSON('{"a":1}')); // {a:1}
console.log(parseJSON('{bad}'));   // null + error log

/*
23
Kya print hoga?
const obj = { get val() { throw new Error('no') } };
try { const { val } = obj } catch(e) { console.log(e.message) }
PREDICT OUTPUT DAY 4 HARD
*/

// Output -> "no"

/*
24
Generator with finally yield
function* gen() { try { yield 1; yield 2 } finally { yield 3 } }
const g = gen();
console.log(g.next(), g.return('done'), g.next())
PREDICT OUTPUT DAY 4
*/

// Output ->
// { value: 1, done: false }
// { value: 3, done: false }
// { value: done, done: true }

/*
25
class E extends Error {}
const e = new E('test');
console.log(e instanceof E, e instanceof Error, e.name)
PREDICT OUTPUT DAY 4 HARD
*/

// Output ->
// true true "E"

/*
26
Bubbling order mein output kya hoga?
<div id='parent'><span id='child'>click</span></div>
Dono pe click listener (bubbling). Span click karne par?
PREDICT OUTPUT DAY 5
*/

// parent.addEventListener("click", () => console.log("parent"));
// child.addEventListener("click", () => console.log("child"));
// Clicking <span> triggers bubbling: child -> parent
// Output ->
// child
// parent

/*
27
Kya aayega?
const el = document.createElement('div');
el.textContent = '<b>bold</b>';
console.log(el.innerHTML)
PREDICT OUTPUT DAY 5
*/

// Output -> "&lt;b&gt;bold&lt;/b&gt;" (escaped, not parsed as HTML)

/*
28
Fark explain karo:
e.stopPropagation() // kya rokta hai?
e.preventDefault()  // kya rokta hai?
Dono saath hoon - kya hoga?
PREDICT OUTPUT DAY 5 HARD
*/

// stopPropagation -> stops event bubbling/capturing further.
// preventDefault -> stops default browser action (like link navigation, form submit).
// Together -> event won’t bubble AND default action won’t happen.

/*
29
Kya return karega aur kyun?
localStorage.setItem('x', { a: 1 });
console.log(localStorage.getItem('x'));
PREDICT OUTPUT DAY 5
*/

// Output -> "[object Object]" (because non-string is coerced to string)

/*
30
Kya print hoga?
const ul = document.createElement('ul');
ul.innerHTML = '<li>A</li><li>B</li>';
const items = ul.querySelectorAll('li');
items.forEach(i => i.remove());
console.log(ul.children.length)
PREDICT OUTPUT DAY 5 HARD
*/

// Output -> 0 (both li removed, children empty)

/*
31
Kya difference hai return value mein?
document.getElementById('myId')
document.querySelector('#myId')
// Functionally same? Kab farq padta hai?
PREDICT OUTPUT DAY 5
*/

// Both return the element with id="myId".
// Difference: getElementById only works for IDs, faster, returns null if not found.
// querySelector is more general (CSS selector), can select classes, attributes, etc.
// Output -> Same element in this case, but querySelector is more flexible.

/*
32
Kya print hoga?
const p = document.createElement('p');
document.body.appendChild(p);
p.addEventListener('click', () => console.log('fired'));
p.dispatchEvent(new Event('click'));
p.remove();
p.dispatchEvent(new Event('click'));
PREDICT OUTPUT DAY 5 HARD
*/

// Output ->
// fired
// fired (listener still works even after removal from DOM)

/*
33
Dono events ka behavior batao:
// input pe input + change dono listeners hain
// 1) User type kare -> kaun fire hoga?
// 2) User Tab dabaye -> kaun fire hoga?
PREDICT OUTPUT DAY 5
*/

// Typing -> input fires continuously.
// Tab away -> change fires once when focus leaves and value changed.

/*
34
e.target vs e.currentTarget - fark kya hai?
// Parent pe listener, child pe click hua
// e.target = ?
// e.currentTarget = ?
// Concrete example ke saath explain karo.
PREDICT OUTPUT DAY 5 HARD
*/

// e.target -> actual clicked element (child).
// e.currentTarget -> element whose listener is running (parent).
// Example: parent.addEventListener("click", e => console.log(e.target.id, e.currentTarget.id))
// Clicking child -> logs "child parent".

/*
35
Kya data milega - dono cases mein?
sessionStorage.setItem('key', 'val');
// 1) Same tab, page reload karo
// 2) Naya tab kholo
// Dono mein milega ya nahi?
PREDICT OUTPUT DAY 5
*/

// Case 1 (reload same tab) -> "val" persists.
// Case 2 (new tab) -> null (sessionStorage is per-tab).

/*
36
Event delegation implement karo
ul pe sirf ek listener. Kisi bhi li click par text log ho.
Dynamically add hone wale li bhi handle hon - no rebinding.
CODE KARO DAY 5
*/

const ul = document.createElement("ul");
document.body.appendChild(ul);

ul.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    console.log("Clicked:", e.target.textContent);
  }
});

// Example dynamic addition
const li = document.createElement("li");
li.textContent = "Dynamic Item";
ul.appendChild(li);

/*
37
DOM manipulation - vanilla JS only
querySelector se paragraph ka text change karo.
Background color bhi change karo. Zero jQuery/libraries.
CODE KARO DAY 5
*/

const p = document.querySelector("p");
p.textContent = "Updated text!";
p.style.backgroundColor = "lightblue";

/*
38
virtualDOM(conf) function banao
Input: { tag: 'div', props: { id: 'x', class: 'box' }, children: [{ tag: 'span', text: 'hi' }] }
Output: Real DOM node - recursively build karo.
CODE KARO DAY 5 HARD
*/

function virtualDOM(conf) {
  const el = document.createElement(conf.tag);
  if (conf.props) {
    for (const [key, val] of Object.entries(conf.props)) {
      el.setAttribute(key, val);
    }
  }
  if (conf.text) el.textContent = conf.text;
  if (conf.children) {
    conf.children.forEach(child => el.appendChild(virtualDOM(child)));
  }
  return el;
}

// Example
const node = virtualDOM({
  tag: "div",
  props: { id: "x", class: "box" },
  children: [{ tag: "span", text: "hi" }]
});
document.body.appendChild(node);

/*
39
Form validation karo - vanilla JS
Submit default rokko. Name + email validate karo JS mein.
Error messages DOM mein proper jagah dikhao.
CODE KARO DAY 5
*/

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector("input[name='name']").value;
  const email = form.querySelector("input[name='email']").value;
  const errors = [];

  if (!name) errors.push("Name required");
  if (!email.includes("@")) errors.push("Invalid email");

  const errorBox = document.querySelector("#errors");
  errorBox.innerHTML = "";
  errors.forEach(err => {
    const div = document.createElement("div");
    div.textContent = err;
    errorBox.appendChild(div);
  });

  if (errors.length === 0) {
    console.log("Form submitted successfully!");
  }
});

/*
40
Drag & Drop reorder banao
dragstart, dragover, drop events use karo.
Final order localStorage mein save karo.
Page reload par order restore ho.
CODE KARO DAY 5 HARD
*/

const list = document.querySelector("#draggableList");
let dragged;

list.addEventListener("dragstart", (e) => {
  dragged = e.target;
});

list.addEventListener("dragover", (e) => {
  e.preventDefault();
});

list.addEventListener("drop", (e) => {
  e.preventDefault();
  if (e.target.tagName === "LI" && e.target !== dragged) {
    list.insertBefore(dragged, e.target.nextSibling);
    saveOrder();
  }
});

function saveOrder() {
  const order = [...list.querySelectorAll("li")].map(li => li.textContent);
  localStorage.setItem("listOrder", JSON.stringify(order));
}

function restoreOrder() {
  const order = JSON.parse(localStorage.getItem("listOrder") || "[]");
  if (order.length) {
    list.innerHTML = "";
    order.forEach(text => {
      const li = document.createElement("li");
      li.textContent = text;
      li.draggable = true;
      list.appendChild(li);
    });
  }
}
restoreOrder();

/*
41
localStorage wrapper class banao
get(key), set(key, val), remove(key), clear() - sab JSON serialize kare.
Bonus: set(key, val, ttlSeconds) - expiry support bhi do.
CODE KARO DAY 5
*/

class LocalStorageWrapper {
  set(key, val, ttlSeconds = null) {
    const data = { val, expiry: ttlSeconds ? Date.now() + ttlSeconds * 1000 : null };
    localStorage.setItem(key, JSON.stringify(data));
  }

  get(key) {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const data = JSON.parse(raw);
    if (data.expiry && Date.now() > data.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return data.val;
  }

  remove(key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}

// Example
const store = new LocalStorageWrapper();
store.set("x", { a: 1 }, 5);
console.log(store.get("x"));

/*
42
Do counters banao
1) sessionStorage counter - reload par reset
2) localStorage counter - reload par persist
Dono UI mein clearly alag dikhao.
CODE KARO DAY 5
*/

const sessionCount = parseInt(sessionStorage.getItem("count") || "0", 10) + 1;
sessionStorage.setItem("count", sessionCount);

const localCount = parseInt(localStorage.getItem("count") || "0", 10) + 1;
localStorage.setItem("count", localCount);

document.body.innerHTML += `<p>Session counter: ${sessionCount}</p>`;
document.body.innerHTML += `<p>Local counter: ${localCount}</p>`;

/*
43
MutationObserver se selective DOM logger banao
Naye nodes add hone par log karo sirf agar data-track attribute ho.
Cleanup bhi karo - observer disconnect karo jab zaroorat na ho.
CODE KARO DAY 5 HARD
*/

const observer = new MutationObserver((mutations) => {
  mutations.forEach(m => {
    m.addedNodes.forEach(node => {
      if (node.nodeType === 1 && node.hasAttribute("data-track")) {
        console.log("Tracked node added:", node.outerHTML);
      }
    });
  });
});

observer.observe(document.body, { childList: true, subtree: true });

// Example cleanup
setTimeout(() => observer.disconnect(), 10000);

/*
44
Image gallery banao - zero CSS frameworks
Thumbnails click par large preview dikhao.
Next / Prev navigation buttons bhi.
Keyboard arrows bhi support karo.
CODE KARO DAY 5
*/

const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
let currentIndex = 0;

const preview = document.createElement("img");
document.body.appendChild(preview);

function showImage(index) {
  currentIndex = index;
  preview.src = images[currentIndex];
}

images.forEach((src, i) => {
  const thumb = document.createElement("img");
  thumb.src = src;
  thumb.style.width = "50px";
  thumb.addEventListener("click", () => showImage(i));
  document.body.appendChild(thumb);
});

const nextBtn = document.createElement("button");
nextBtn.textContent = "Next";
nextBtn.onclick = () => showImage((currentIndex + 1) % images.length);
document.body.appendChild(nextBtn);

const prevBtn = document.createElement("button");
prevBtn.textContent = "Prev";
prevBtn.onclick = () => showImage((currentIndex - 1 + images.length) % images.length);
document.body.appendChild(prevBtn);

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") nextBtn.click();
  if (e.key === "ArrowLeft") prevBtn.click();
});

/*
45
PubSub module banao using closures
subscribe(event, fn), publish(event, data), unsubscribe(event, fn)
DOM events pe nahi - internal event bus.
Memory leak avoid karo - proper unsubscribe test karo.
CODE KARO DAY 5 HARD
*/

function PubSub() {
  const events = {};
  return {
    subscribe(event, fn) {
      if (!events[event]) events[event] = [];
      events[event].push(fn);
      return () => this.unsubscribe(event, fn);
    },
    unsubscribe(event, fn) {
      if (!events[event]) return;
      events[event] = events[event].filter(cb => cb !== fn);
    },
    publish(event, data) {
      if (!events[event]) return;
      events[event].forEach(fn => fn(data));
    }
  };
}

// Example
const bus = PubSub();
const unsub = bus.subscribe("msg", d => console.log("Got:", d));
bus.publish("msg", "Hello!");
unsub();
bus.publish("msg", "World!"); // no output

/*
46
DOM traversal utility banao
getSiblings(el) - saare siblings
getAncestors(el) - parent chain
getAllDescendants(el) - sab children recursively
CODE KARO DAY 5
*/

function getSiblings(el) {
  return Array.from(el.parentNode.children).filter(node => node !== el);
}

function getAncestors(el) {
  const ancestors = [];
  let parent = el.parentNode;
  while (parent) {
    ancestors.push(parent);
    parent = parent.parentNode;
  }
  return ancestors;
}

function getAllDescendants(el) {
  const descendants = [];
  function recurse(node) {
    node.childNodes.forEach(child => {
      descendants.push(child);
      recurse(child);
    });
  }
  recurse(el);
  return descendants;
}

/*
47
debounce aur throttle dono banao
debounce(fn, ms) - window resize pe lagao, 300ms baad fire ho.
throttle(fn, ms) - mousemove pe lagao.
Dono ka behavior side by side demo karo.
CODE KARO DAY 5 HARD
*/

function debounce(fn, ms) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}

function throttle(fn, ms) {
  let last = 0;
  return (...args) => {
    const now = Date.now();
    if (now - last >= ms) {
      last = now;
      fn(...args);
    }
  };
}

// Example usage
window.addEventListener("resize", debounce(() => console.log("Resized!"), 300));
window.addEventListener("mousemove", throttle(() => console.log("Mouse moved!"), 500));

/*
48
Keyboard shortcut system banao
Ctrl+S -> 'Saved!', Ctrl+Z -> 'Undo!', Escape -> 'Cancelled'
keydown event use karo.
Shortcuts easily add/remove ho sakein.
CODE KARO DAY 5
*/

const shortcuts = {};

function addShortcut(keyCombo, action) {
  shortcuts[keyCombo] = action;
}

function removeShortcut(keyCombo) {
  delete shortcuts[keyCombo];
}

document.addEventListener("keydown", (e) => {
  const combo = `${e.ctrlKey ? "Ctrl+" : ""}${e.key}`;
  if (shortcuts[combo]) shortcuts[combo]();
});

// Example
addShortcut("Ctrl+s", () => console.log("Saved!"));
addShortcut("Ctrl+z", () => console.log("Undo!"));
addShortcut("Escape", () => console.log("Cancelled"));

/*
49
Lazy image loader banao
IntersectionObserver use karo.
data-src -> src sirf jab element viewport mein aaye.
Placeholder/blur pehle dikhe, real image load hone ke baad swap karo.
CODE KARO DAY 5 HARD
*/

const lazyImages = document.querySelectorAll("img[data-src]");

const observerLazy = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute("data-src");
      img.onload = () => img.classList.remove("blur");
      obs.unobserve(img);
    }
  });
});

lazyImages.forEach(img => {
  img.classList.add("blur");
  observerLazy.observe(img);
});

/*
50
Dynamic table banao programmatically
createElement + appendChild se - no innerHTML.
Data: array of { name, age, city }.
Header row bhi dynamically banao.
CODE KARO DAY 5
*/

const data = [
  { name: "Alice", age: 25, city: "Delhi" },
  { name: "Bob", age: 30, city: "Mumbai" },
  { name: "Charlie", age: 28, city: "Pune" }
];

const table = document.createElement("table");
const headerRow = document.createElement("tr");

["Name", "Age", "City"].forEach(h => {
  const th = document.createElement("th");
  th.textContent = h;
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

data.forEach(item => {
  const row = document.createElement("tr");
  Object.values(item).forEach(val => {
    const td = document.createElement("td");
    td.textContent = val;
    row.appendChild(td);
  });
  table.appendChild(row);
});

document.body.appendChild(table);


/*
51
Top-level await - kab valid, kab error?
// file: main.js
const m = await import('./mod.js');
console.log(m.default, m.named);
// Kab chalega? Kab SyntaxError?
PREDICT OUTPUT DAY 4 HARD
*/

// Top-level await is valid only in ES modules (type="module" or .mjs).
// In CommonJS or non-module scripts -> SyntaxError.
// Output depends on mod.js exports. Example: if mod.js has default + named, they print correctly.

/*
52
Kya print hoga?
try { eval(' { {bad syntax { { ') }
catch(e) { console.log(e.name) }
PREDICT OUTPUT DAY 4
*/

// Output -> "SyntaxError"

/*
53
Kya print hoga?
class HttpError extends Error {
  constructor(code) {
    super('HTTP ' + code);
    this.code = code;
    this.name = 'HttpError';
  }
}
const e = new HttpError(500);
console.log(e.message, e.stack?.split('\n')[0])
PREDICT OUTPUT DAY 4 HARD
*/

// Output ->
// "HTTP 500 HttpError: HTTP 500"

/*
54
Runtime behaviour mein kya faraq hai?
import x from './a.js' // ESM
const x = require('./a.js') // CJS
// Execution order? Caching? Live binding?
PREDICT OUTPUT DAY 4
*/

// ESM: static analysis, hoisted imports, live bindings (updates propagate).
// CJS: runtime require, cached once, no live binding (copy of value).
// Execution order differs: ESM runs before code, CJS runs when require is called.

/*
55
Kya print hoga?
const err = new TypeError('bad type');
console.log(
  err instanceof TypeError,
  err instanceof Error,
  err instanceof RangeError
)
PREDICT OUTPUT DAY 4 HARD
*/

// Output ->
// true true false

/*
56
Kya print hoga?
const div = document.createElement('div');
div.innerHTML = 'hi <scr' + 'ipt>alert(1)</scr' + 'ipt>';
console.log(div.textContent)
PREDICT OUTPUT DAY 5
*/

// Output -> "hi alert(1)"
// (script tag is parsed but not executed, textContent shows text only)

/*
57
Capturing vs Bubbling - exact order kya hoga?
el.addEventListener('click', fn1, true) // capturing
el.addEventListener('click', fn2, false) // bubbling
// Nested elements: parent -> child click par sequence?
PREDICT OUTPUT DAY 5 HARD
*/

// Order ->
// Capturing phase: parent (fn1)
// Target phase: child
// Bubbling phase: parent (fn2)

/*
58
cloneNode behavior batao:
node.cloneNode(true) // deep clone
node.cloneNode(false) // shallow clone
// Event listeners clone honge kya?
PREDICT OUTPUT DAY 5
*/

// Deep clone -> copies element + children.
// Shallow clone -> copies element only, no children.
// Event listeners are NOT cloned in either case.

/*
59
DocumentFragment kyun use karte hain?
// Option A: 100 baar seedha appendChild()
// Option B: Fragment mein add karke ek baar append
// Reflow/repaint mein kya farq padta hai?
PREDICT OUTPUT DAY 5 HARD
*/

// Fragment batching reduces reflows/repaints.
// Option A -> 100 reflows.
// Option B -> 1 reflow (better performance).

/*
60
el.style.color = 'red'
el.setAttribute('style', 'color: red')
el.classList.add('text-red')
// Teen approaches - teen scenarios batao.
PREDICT OUTPUT DAY 5
*/

// el.style.color = 'red' -> sets inline style property directly.
// el.setAttribute('style', 'color: red') -> overwrites entire style attribute.
// el.classList.add('text-red') -> applies CSS class, best for reusable styles.

/*
61
pipe(...fns) function banao
Pehle function ka output doosra ka input.
Koi bhi step throw kare -> PipelineError with step index.
Async functions bhi support karo.
CODE KARO DAY 4 HARD
*/

class PipelineError extends Error {
  constructor(index, message) {
    super(`Pipeline failed at step ${index}: ${message}`);
    this.name = "PipelineError";
    this.index = index;
  }
}

function pipe(...fns) {
  return async (input) => {
    let result = input;
    for (let i = 0; i < fns.length; i++) {
      try {
        result = await fns[i](result);
      } catch (err) {
        throw new PipelineError(i, err.message);
      }
    }
    return result;
  };
}

// Example
const pipeline = pipe(
  x => x + 1,
  async x => x * 2,
  x => { if (x > 5) throw new Error("Too big"); return x; }
);

pipeline(2).then(console.log).catch(e => console.log(e.message));

/*
62
tryCatch(fn, fallback) utility banao
fn throw kare -> fallback value return ho.
Sync + async dono handle kare.
fallback khud ek function bhi ho sake.
CODE KARO DAY 4
*/

async function tryCatch(fn, fallback) {
  try {
    return await fn();
  } catch (e) {
    return typeof fallback === "function" ? fallback(e) : fallback;
  }
}

// Example
(async () => {
  const result1 = await tryCatch(() => { throw new Error("fail"); }, "default");
  console.log(result1); // "default"

  const result2 = await tryCatch(() => { throw new Error("oops"); }, e => `Error: ${e.message}`);
  console.log(result2); // "Error: oops"
})();

/*
63
Singleton config module banao
Config sirf ek baar initialize ho.
Multiple imports mein exact same instance mile.
Test karo: reference equality check karo.
CODE KARO DAY 4 HARD
*/

// config.js
class Config {
  constructor() {
    if (Config.instance) return Config.instance;
    this.env = "dev";
    this.port = 3000;
    Config.instance = this;
  }
}
export default new Config();

// main.js
import config1 from "./config.js";
import config2 from "./config.js";
console.log(config1 === config2); // true

/*
64
Named + default export ek file mein
Doosri file mein dono ek hi import line mein lao.
Syntax exactly kya hoga? Edge cases bhi batao.
CODE KARO DAY 4
*/

// utils.js
export default function greet(name) { return `Hello ${name}`; }
export function add(a, b) { return a + b; }

// main.js
import greet, { add } from "./utils.js";
console.log(greet("Prince")); // Hello Prince
console.log(add(2, 3));       // 5

/*
65
SafeMap class banao
get(key, defaultVal) - key missing -> default return, no error.
getOrThrow(key) - key missing -> custom KeyNotFoundError.
has(key), set(key, val), delete(key) bhi implement karo.
CODE KARO DAY 4 HARD
*/

class KeyNotFoundError extends Error {
  constructor(key) {
    super(`Key not found: ${key}`);
    this.name = "KeyNotFoundError";
    this.key = key;
  }
}

class SafeMap {
  constructor() {
    this.map = new Map();
  }

  get(key, defaultVal = null) {
    return this.map.has(key) ? this.map.get(key) : defaultVal;
  }

  getOrThrow(key) {
    if (!this.map.has(key)) throw new KeyNotFoundError(key);
    return this.map.get(key);
  }

  has(key) {
    return this.map.has(key);
  }

  set(key, val) {
    this.map.set(key, val);
  }

  delete(key) {
    this.map.delete(key);
  }
}

// Example
const sm = new SafeMap();
sm.set("a", 1);
console.log(sm.get("a"));         // 1
console.log(sm.get("b", 99));     // 99
try { console.log(sm.getOrThrow("b")); } catch(e) { console.log(e.message); }

/*
66
Accordion component banao
Click par section expand/collapse.
Ek waqt mein sirf ek section open ho.
CODE KARO DAY 5
*/

const sections = document.querySelectorAll(".accordion .section");
sections.forEach(sec => {
  sec.querySelector(".header").addEventListener("click", () => {
    sections.forEach(s => s.classList.remove("open"));
    sec.classList.add("open");
  });
});

/*
67
Result monad banao
Result.ok(value) aur Result.err(error)
map(fn), flatMap(fn), getOrElse(default), isOk()
Bina try/catch ke chained error handling demo karo.
CODE KARO DAY 4 HARD
*/

class Result {
  constructor(ok, val, err) {
    this.ok = ok;
    this.val = val;
    this.err = err;
  }

  static ok(value) { return new Result(true, value, null); }
  static err(error) { return new Result(false, null, error); }

  map(fn) {
    if (!this.ok) return this;
    try { return Result.ok(fn(this.val)); }
    catch (e) { return Result.err(e); }
  }

  flatMap(fn) {
    if (!this.ok) return this;
    try { return fn(this.val); }
    catch (e) { return Result.err(e); }
  }

  getOrElse(def) {
    return this.ok ? this.val : def;
  }

  isOk() { return this.ok; }
}

// Example
const res = Result.ok(5)
  .map(x => x * 2)
  .flatMap(x => x > 5 ? Result.err("Too big") : Result.ok(x));
console.log(res.getOrElse(0)); // "Too big" handled gracefully

/*
68
Circular dependency problem demo karo
a.js imports b.js, b.js imports a.js.
Kya hoga at runtime? Kaun undefined milega?
Solve kaise karoge - refactor dikhao.
CODE KARO DAY 4
*/

// a.js
// import { foo } from "./b.js";
// export const bar = "bar";
// console.log(foo); // undefined at runtime due to circular import

// b.js
// import { bar } from "./a.js";
// export const foo = "foo";
// console.log(bar); // may be undefined

// Solution: refactor shared logic into c.js
// c.js exports common values, a.js and b.js import from c.js

/*
69
Promise sync error demo
const p = new Promise((res, rej) => {
  try { throw new Error('sync') }
  catch(e) { rej(e) }
});
p.catch(e => console.log('caught:', e.message));
PREDICT OUTPUT DAY 4 HARD
*/

// Output -> "caught: sync"

/*
70
Module Explorer mini-project
User JS code paste kare -> count karo:
// try/catch blocks
// import statements
// export statements
Regex use karo - no AST parser.
MINI-PROJECT DAY 4
*/

function analyzeCode(code) {
  const tryCatchCount = (code.match(/try\s*{[\s\S]*?catch/g) || []).length;
  const importCount = (code.match(/import\s+/g) || []).length;
  const exportCount = (code.match(/export\s+/g) || []).length;
  return { tryCatchCount, importCount, exportCount };
}

// Example
const sample = `
try { throw new Error() } catch(e) {}
import x from './mod.js';
export function f() {}
`;
console.log(analyzeCode(sample)); // { tryCatchCount: 1, importCount: 1, exportCount: 1 }

/*
71
Result monad advanced
Result.ok(value) aur Result.err(error)
map(fn), flatMap(fn), getOrElse(default), isOk()
Bina try/catch ke chained error handling demo karo.
CODE KARO DAY 4 HARD
*/

class Result {
  constructor(ok, val, err) {
    this.ok = ok;
    this.val = val;
    this.err = err;
  }

  static ok(value) { return new Result(true, value, null); }
  static err(error) { return new Result(false, null, error); }

  map(fn) {
    if (!this.ok) return this;
    try { return Result.ok(fn(this.val)); }
    catch (e) { return Result.err(e); }
  }

  flatMap(fn) {
    if (!this.ok) return this;
    try { return fn(this.val); }
    catch (e) { return Result.err(e); }
  }

  getOrElse(def) {
    return this.ok ? this.val : def;
  }

  isOk() { return this.ok; }
}

// Example
const r = Result.ok(10)
  .map(x => x * 2)
  .flatMap(x => x > 15 ? Result.err("Too large") : Result.ok(x));
console.log(r.getOrElse(0)); // "Too large" handled gracefully

/*
72
Circular dependency problem demo karo
a.js imports b.js, b.js imports a.js.
Kya hoga at runtime? Kaun undefined milega?
Solve kaise karoge - refactor dikhao.
CODE KARO DAY 4
*/

// a.js
// import { foo } from "./b.js";
// export const bar = "bar";
// console.log(foo); // undefined due to circular import

// b.js
// import { bar } from "./a.js";
// export const foo = "foo";
// console.log(bar); // may be undefined

// Solution: move shared logic into c.js
// c.js exports common values, a.js and b.js import from c.js

/*
73
Kya print hoga - order bhi batao:
const p = new Promise((res, rej) => {
  try { throw new Error('sync') }
  catch(e) { rej(e) }
});
p.catch(e => console.log('caught:', e.message));
PREDICT OUTPUT DAY 4 HARD
*/

// Output -> "caught: sync"

/*
74
Error Dashboard
window.onerror aur unhandledrejection capture karo.
Har error ke saath: type, message, timestamp, stack.
Live history DOM mein dikhao - clear button bhi.
MINI-PROJECT DAY 4 HARD
*/

const errors = [];
function renderErrors() {
  const box = document.getElementById("errorBox");
  box.innerHTML = "";
  errors.forEach(err => {
    const div = document.createElement("div");
    div.textContent = `${err.type}: ${err.message} @ ${err.time}`;
    box.appendChild(div);
  });
}

window.onerror = (msg, src, line, col, err) => {
  errors.push({ type: "Error", message: msg, time: new Date().toLocaleTimeString(), stack: err?.stack });
  renderErrors();
};

window.onunhandledrejection = (e) => {
  errors.push({ type: "PromiseRejection", message: e.reason, time: new Date().toLocaleTimeString() });
  renderErrors();
};

document.getElementById("clearBtn").addEventListener("click", () => {
  errors.length = 0;
  renderErrors();
});

/*
75
Plugin System
PluginManager class:
- register(name, module)
- run(name, ...args)
- unregister(name)
Plugin nahi mila -> PluginNotFoundError. 3 plugins demo karo.
MINI-PROJECT DAY 4 HARD
*/

class PluginNotFoundError extends Error {
  constructor(name) {
    super(`Plugin not found: ${name}`);
    this.name = "PluginNotFoundError";
    this.plugin = name;
  }
}

class PluginManager {
  constructor() {
    this.plugins = {};
  }

  register(name, module) {
    this.plugins[name] = module;
  }

  run(name, ...args) {
    if (!this.plugins[name]) throw new PluginNotFoundError(name);
    return this.plugins[name](...args);
  }

  unregister(name) {
    delete this.plugins[name];
  }
}

// Example plugins
const pm = new PluginManager();
pm.register("sum", (a, b) => a + b);
pm.register("upper", str => str.toUpperCase());
pm.register("reverse", str => str.split("").reverse().join(""));

console.log(pm.run("sum", 2, 3));       // 5
console.log(pm.run("upper", "hello"));  // HELLO
console.log(pm.run("reverse", "abc"));  // cba

/*
76
Module Explorer
User JS code paste kare -> count karo:
· try/catch blocks
· import statements
· export statements
Regex use karo - no AST parser.
MINI-PROJECT DAY 4
*/

function moduleExplorer(code) {
  const tryCatchCount = (code.match(/try\s*{[\s\S]*?catch/g) || []).length;
  const importCount = (code.match(/import\s+/g) || []).length;
  const exportCount = (code.match(/export\s+/g) || []).length;
  return { tryCatchCount, importCount, exportCount };
}

// Example
const sampleCode = `
try { throw new Error() } catch(e) {}
import x from './mod.js';
export function f() {}
`;
console.log(moduleExplorer(sampleCode)); // { tryCatchCount: 1, importCount: 1, exportCount: 1 }

/*
77
Error Dashboard
window.onerror aur unhandledrejection capture karo.
Har error ke saath: type, message, timestamp, stack.
Live history DOM mein dikhao - clear button bhi.
MINI-PROJECT DAY 4 HARD
*/

const errorLog = [];
function renderErrorLog() {
  const box = document.getElementById("errorBox");
  box.innerHTML = "";
  errorLog.forEach(err => {
    const div = document.createElement("div");
    div.textContent = `${err.type}: ${err.message} @ ${err.time}`;
    box.appendChild(div);
  });
}

window.onerror = (msg, src, line, col, err) => {
  errorLog.push({ type: "Error", message: msg, time: new Date().toLocaleTimeString(), stack: err?.stack });
  renderErrorLog();
};

window.onunhandledrejection = (e) => {
  errorLog.push({ type: "PromiseRejection", message: e.reason, time: new Date().toLocaleTimeString() });
  renderErrorLog();
};

document.getElementById("clearBtn").addEventListener("click", () => {
  errorLog.length = 0;
  renderErrorLog();
});

/*
78
Plugin System (advanced)
PluginManager class with register, run, unregister.
PluginNotFoundError if missing.
Demo with 3 plugins.
MINI-PROJECT DAY 4 HARD
*/

class PluginNotFoundError extends Error {
  constructor(name) {
    super(`Plugin not found: ${name}`);
    this.name = "PluginNotFoundError";
    this.plugin = name;
  }
}

class PluginManager {
  constructor() {
    this.plugins = {};
  }

  register(name, module) {
    this.plugins[name] = module;
  }

  run(name, ...args) {
    if (!this.plugins[name]) throw new PluginNotFoundError(name);
    return this.plugins[name](...args);
  }

  unregister(name) {
    delete this.plugins[name];
  }
}

// Demo
const pm = new PluginManager();
pm.register("sum", (a, b) => a + b);
pm.register("upper", str => str.toUpperCase());
pm.register("reverse", str => str.split("").reverse().join(""));

console.log(pm.run("sum", 2, 3));       // 5
console.log(pm.run("upper", "hello"));  // HELLO
console.log(pm.run("reverse", "abc"));  // cba

/*
79
withErrorLogging(fn) decorator banao
Any function wrap kare.
Error aane par log karo: { fnName, args, error, timestamp }.
Original function ka return value preserve karo.
CODE KARO DAY 4
*/

function withErrorLogging(fn) {
  return (...args) => {
    try {
      return fn(...args);
    } catch (err) {
      console.log({
        fnName: fn.name,
        args,
        error: err.message,
        timestamp: new Date().toISOString()
      });
      throw err;
    }
  };
}

// Example
function risky(x) {
  if (x < 0) throw new Error("Negative not allowed");
  return x * 2;
}
const safeRisky = withErrorLogging(risky);
try { console.log(safeRisky(-1)); } catch(e) {}

/*
80
AsyncQueue class banao
Tasks ek ek karke chalein - concurrency = 1.
add(asyncFn) se queue mein dalo.
Task fail ho -> queue mat ruko - errors collect karo, baaki chalte rahe.
CODE KARO DAY 4 HARD
*/

class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
    this.errors = [];
  }

  add(asyncFn) {
    this.queue.push(asyncFn);
    this.run();
  }

  async run() {
    if (this.running) return;
    this.running = true;
    while (this.queue.length) {
      const fn = this.queue.shift();
      try {
        await fn();
      } catch (err) {
        this.errors.push(err);
        console.log("Task failed:", err.message);
      }
    }
    this.running = false;
  }
}

// Example
const q = new AsyncQueue();
q.add(async () => { console.log("Task1"); });
q.add(async () => { throw new Error("Boom"); });
q.add(async () => { console.log("Task3"); });

/*
81
Module Bundler Concept Demo
a.js imports b.js, b.js imports c.js
Manually execution order resolve karo.
Console.log sequence se dependency graph visualize karo.
MINI-PROJECT DAY 4 HARD
*/

// a.js
// import { b } from "./b.js";
// console.log("a loaded");

// b.js
// import { c } from "./c.js";
// console.log("b loaded");

// c.js
// console.log("c loaded");

// Execution order: c -> b -> a

/*
82
Error Recovery UI
Koi bhi action fail ho -> user ko friendly error + Retry button.
global window.onerror handler.
Errors ka count dikhao - 'Try again' flow complete karo.
MINI-PROJECT DAY 4
*/

let errorCount = 0;
window.onerror = (msg, src, line, col, err) => {
  errorCount++;
  const box = document.getElementById("errorBox");
  box.textContent = `Error occurred (${errorCount}). Try again?`;
  const btn = document.createElement("button");
  btn.textContent = "Retry";
  btn.onclick = () => location.reload();
  box.appendChild(btn);
};

/*
83
withErrorLogging(fn) decorator banao
Any function wrap kare.
Error aane par log karo: { fnName, args, error, timestamp }.
Original function ka return value preserve karo.
CODE KARO DAY 4
*/

function withErrorLogging(fn) {
  return (...args) => {
    try {
      return fn(...args);
    } catch (err) {
      console.log({
        fnName: fn.name,
        args,
        error: err.message,
        timestamp: new Date().toISOString()
      });
      throw err;
    }
  };
}

// Example
function riskyOp(x) {
  if (x < 0) throw new Error("Negative not allowed");
  return x * 2;
}
const safeOp = withErrorLogging(riskyOp);
try { console.log(safeOp(-1)); } catch(e) {}

/*
84
AsyncQueue class banao
Tasks ek ek karke chalein - concurrency = 1.
add(asyncFn) se queue mein dalo.
Task fail ho -> queue mat ruko - errors collect karo, baaki chalte rahe.
CODE KARO DAY 4 HARD
*/

class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
    this.errors = [];
  }

  add(asyncFn) {
    this.queue.push(asyncFn);
    this.run();
  }

  async run() {
    if (this.running) return;
    this.running = true;
    while (this.queue.length) {
      const fn = this.queue.shift();
      try {
        await fn();
      } catch (err) {
        this.errors.push(err);
        console.log("Task failed:", err.message);
      }
    }
    this.running = false;
  }
}

// Example
const q = new AsyncQueue();
q.add(async () => { console.log("Task1"); });
q.add(async () => { throw new Error("Boom"); });
q.add(async () => { console.log("Task3"); });

/*
85
Kya print hoga?
function throws() { throw new RangeError('out') }
try { throws() }
catch(e) {
  if (e instanceof TypeError) throw e;
  console.log('range caught');
}
PREDICT OUTPUT DAY 4
*/

// Output -> "range caught"

/*
86
toString() ka exact output kya hoga?
const e = new Error();
e.name = 'Custom';
e.message = 'msg';
console.log(`${e}`); // Template literal
PREDICT OUTPUT DAY 4 HARD
*/

// Output -> "Custom: msg"

/*
87
Module Bundler Concept Demo
a.js imports b.js, b.js imports c.js
Manually execution order resolve karo.
Console.log sequence se dependency graph visualize karo.
MINI-PROJECT DAY 4 HARD
*/

// c.js
// console.log("c loaded");

// b.js
// import "./c.js";
// console.log("b loaded");

// a.js
// import "./b.js";
// console.log("a loaded");

// Execution order: c -> b -> a

/*
88
AsyncQueue class banao
Tasks ek ek karke chalein - concurrency = 1.
add(asyncFn) se queue mein dalo.
Task fail ho -> queue mat ruko - errors collect karo, baaki chalte rahe.
CODE KARO DAY 4 HARD
*/

class AsyncQueue {
  constructor() {
    this.queue = [];
    this.running = false;
    this.errors = [];
  }

  add(asyncFn) {
    this.queue.push(asyncFn);
    this.run();
  }

  async run() {
    if (this.running) return;
    this.running = true;
    while (this.queue.length) {
      const fn = this.queue.shift();
      try {
        await fn();
      } catch (err) {
        this.errors.push(err);
        console.log("Task failed:", err.message);
      }
    }
    this.running = false;
  }
}

// Example
const q = new AsyncQueue();
q.add(async () => { console.log("Task1"); });
q.add(async () => { throw new Error("Boom"); });
q.add(async () => { console.log("Task3"); });

/*
89
toString() ka exact output kya hoga?
const e = new Error();
e.name = 'Custom';
e.message = 'msg';
console.log(`${e}`);
PREDICT OUTPUT DAY 4 HARD
*/

// Output -> "Custom: msg"

/*
90
Error Recovery UI
Koi bhi action fail ho -> user ko friendly error + Retry button.
global window.onerror handler.
Errors ka count dikhao - 'Try again' flow complete karo.
MINI-PROJECT DAY 4
*/

let errorCount = 0;
window.onerror = (msg, src, line, col, err) => {
  errorCount++;
  const box = document.getElementById("errorBox");
  box.textContent = `Error occurred (${errorCount}). Try again?`;
  const btn = document.createElement("button");
  btn.textContent = "Retry";
  btn.onclick = () => location.reload();
  box.appendChild(btn);
};

/*
91
Module Bundler Sequence
a.js imports b.js, b.js imports c.js
Console.log sequence se dependency graph visualize karo.
PREDICT OUTPUT DAY 4
*/

// c.js
// console.log("c loaded");

// b.js
// import "./c.js";
// console.log("b loaded");

// a.js
// import "./b.js";
// console.log("a loaded")

// Execution order: c -> b -> a

/*
92
Error Recovery UI (advanced)
Global error capture + Retry button.
Error count track karo, DOM mein show karo.
CODE KARO DAY 4 HARD
*/

let errorCounter = 0;
window.onerror = (msg, src, line, col, err) => {
  errorCounter++;
  const box = document.getElementById("errorBox");
  box.innerHTML = `Error #${errorCounter}: ${msg}`;
  const btn = document.createElement("button");
  btn.textContent = "Retry";
  btn.onclick = () => location.reload();
  box.appendChild(btn);
};

/*
93
typeCheck(obj, schema) validator banao
schema: { name: 'string', age: 'number' }
obj: { name: 'Prince', age: 20 }
Return true/false. Wrong type -> descriptive error.
CODE KARO DAY 4
*/

function typeCheck(obj, schema) {
  for (const [key, type] of Object.entries(schema)) {
    if (typeof obj[key] !== type) {
      throw new Error(`Type mismatch for ${key}: expected ${type}, got ${typeof obj[key]}`);
    }
  }
  return true;
}

// Example
console.log(typeCheck({ name: "Prince", age: 20 }, { name: "string", age: "number" })); // true

/*
94
Chainable Validator class banao
validate(obj).isString('name').isNumber('age').isPositive('age')
Error throw kare descriptive message ke saath.
CODE KARO DAY 4 HARD
*/

class Validator {
  constructor(obj) {
    this.obj = obj;
  }

  static validate(obj) {
    return new Validator(obj);
  }

  isString(key) {
    if (typeof this.obj[key] !== "string") throw new Error(`${key} must be string`);
    return this;
  }

  isNumber(key) {
    if (typeof this.obj[key] !== "number") throw new Error(`${key} must be number`);
    return this;
  }

  isPositive(key) {
    if (this.obj[key] <= 0) throw new Error(`${key} must be positive`);
    return this;
  }
}

// Example
Validator.validate({ name: "Prince", age: 20 }).isString("name").isNumber("age").isPositive("age");

/*
95
DOM Validation
Form mein name (string), age (number > 0).
Submit par JS se validate karo.
Error messages DOM mein dikhao.
CODE KARO DAY 5
*/

const form = document.querySelector("#myForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.querySelector("input[name='name']").value;
  const age = parseInt(form.querySelector("input[name='age']").value, 10);
  const errors = [];

  if (!name) errors.push("Name required");
  if (isNaN(age) || age <= 0) errors.push("Age must be positive number");

  const errorBox = document.querySelector("#errors");
  errorBox.innerHTML = "";
  errors.forEach(err => {
    const div = document.createElement("div");
    div.textContent = err;
    errorBox.appendChild(div);
  });

  if (errors.length === 0) {
    console.log("Form submitted successfully!");
  }
});


/*
96
DOM traversal advanced
Find deepest child of a given element.
Return path of tagNames from root to deepest.
CODE KARO DAY 5 HARD
*/

function deepestPath(el) {
  let path = [];
  function dfs(node, currentPath) {
    if (!node.children.length) {
      if (currentPath.length > path.length) path = currentPath;
    } else {
      Array.from(node.children).forEach(child => dfs(child, [...currentPath, child.tagName]));
    }
  }
  dfs(el, [el.tagName]);
  return path;
}

// Example
const root = document.createElement("div");
const child = document.createElement("span");
const grand = document.createElement("b");
child.appendChild(grand);
root.appendChild(child);
console.log(deepestPath(root)); // ["DIV","SPAN","B"]

/*
97
Async Error Boundary
Wrap async function calls.
Error -> log + fallback return.
CODE KARO DAY 4
*/

async function asyncBoundary(fn, fallback) {
  try {
    return await fn();
  } catch (err) {
    console.log("Error caught:", err.message);
    return fallback;
  }
}

// Example
asyncBoundary(async () => { throw new Error("fail"); }, "default")
  .then(console.log); // "default"

/*
98
Retry logic banao
retry(fn, attempts, delayMs)
fn fail ho -> wait + retry.
Success -> return result.
CODE KARO DAY 4 HARD
*/

async function retry(fn, attempts, delayMs) {
  for (let i = 0; i < attempts; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === attempts - 1) throw err;
      await new Promise(res => setTimeout(res, delayMs));
    }
  }
}

// Example
retry(async () => {
  if (Math.random() < 0.7) throw new Error("Random fail");
  return "Success!";
}, 3, 500).then(console.log).catch(console.error);

/*
99
Custom iterator banao
RangeIterator(start, end)
for...of loop mein use ho sake.
CODE KARO DAY 4
*/

class RangeIterator {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        if (current <= end) {
          return { value: current++, done: false };
        }
        return { done: true };
      }
    };
  }
}

// Example
for (const n of new RangeIterator(1, 5)) {
  console.log(n); // 1,2,3,4,5
}

/*
100
Final Mini-Project
Build ErrorSafeQueue:
- Combines AsyncQueue + retry logic.
- add(fn) -> runs sequentially.
- If fn fails -> retry 2 times before logging error.
CODE KARO DAY 4 HARD
*/

class ErrorSafeQueue {
  constructor() {
    this.queue = [];
    this.running = false;
    this.errors = [];
  }

  add(fn) {
    this.queue.push(fn);
    this.run();
  }

  async run() {
    if (this.running) return;
    this.running = true;
    while (this.queue.length) {
      const fn = this.queue.shift();
      try {
        await retry(fn, 2, 300);
      } catch (err) {
        this.errors.push(err);
        console.log("Final failure:", err.message);
      }
    }
    this.running = false;
  }
}

// Example
const eq = new ErrorSafeQueue();
eq.add(async () => { console.log("Task1"); });
eq.add(async () => { throw new Error("Boom"); });
eq.add(async () => { console.log("Task3"); });