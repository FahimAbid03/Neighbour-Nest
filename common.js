// Shared demo data and form helpers. All page markup is in the HTML files.
const storageKey = 'neighbourNest.' + document.body.dataset.module;
const demo = loadDemo();
const query = new URLSearchParams(window.location.search);
let messageTimer;

function loadDemo() {
  try {
    const saved = sessionStorage.getItem(storageKey);
    if (saved) return JSON.parse(saved);
  } catch (error) {
    // Pages can still display the sample data if browser storage is unavailable.
  }
  return structuredClone(demoDefaults);
}

function saveDemo() {
  try {
    sessionStorage.setItem(storageKey, JSON.stringify(demo));
    return true;
  } catch (error) {
    showMessage('Browser storage is unavailable. Open the project with a local server to keep your changes.');
    return false;
  }
}

function byId(id) {
  return document.getElementById(id);
}

function setText(id, text) {
  byId(id).textContent = text;
}

function value(id) {
  return byId(id).value.trim();
}

function drawBadge(element, text) {
  element.textContent = text;
  element.className = 'pill ' + text.toLowerCase().replaceAll(' ', '-');
}

function showMessage(message) {
  const box = byId('toast');
  box.hidden = false;
  box.textContent = message;
  clearTimeout(messageTimer);
  messageTimer = setTimeout(function () {
    box.hidden = true;
  }, 3200);
}

function saveAndGo(page, message) {
  demo.message = message;
  if (saveDemo()) window.location.href = page;
  else delete demo.message;
}

if (demo.message) {
  showMessage(demo.message);
  delete demo.message;
  saveDemo();
}

function clearErrors() {
  for (const error of document.querySelectorAll('.error')) {
    error.textContent = '';
  }
  for (const field of document.querySelectorAll('.errorBorder, .successBorder')) {
    field.classList.remove('errorBorder', 'successBorder');
    field.removeAttribute('aria-invalid');
  }
}

function showError(id, message) {
  byId(id).classList.add('errorBorder');
  byId(id).setAttribute('aria-invalid', 'true');
  setText(id + 'Error', message);
  return false;
}

function showSuccess(id) {
  byId(id).classList.add('successBorder');
  return true;
}

function checkRequired(id, minimum = 1) {
  if (!value(id)) return showError(id, 'This field is required.');
  if (value(id).length < minimum) {
    return showError(id, 'Enter at least ' + minimum + ' characters.');
  }
  return showSuccess(id);
}

function checkEmail() {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email'))) {
    return showError('email', 'Enter a valid email address.');
  }
  return showSuccess('email');
}

function setupFilters(onChange) {
  const buttons = document.querySelectorAll('[data-filter]');
  for (const button of buttons) {
    button.addEventListener('click', function () {
      for (const other of buttons) {
        other.classList.toggle('active', other === button);
        other.setAttribute('aria-pressed', String(other === button));
      }
      onChange(button.dataset.filter);
    });
  }
}

function copyTemplate(id, values = {}) {
  const copy = byId(id).content.cloneNode(true);
  for (const name in values) {
    const target = copy.querySelector('[data-value="' + name + '"]');
    if (target.classList.contains('pill')) drawBadge(target, values[name]);
    else target.textContent = values[name];
  }
  return copy;
}

function selectedId(fallback = 1) {
  return query.has('id') ? Number(query.get('id')) : fallback;
}

function changeDemoData(message) {
  if (saveDemo()) showMessage(message);
}

// Refresh the demo after returning to an older page with the browser's Back button.
window.addEventListener('pageshow', function (event) {
  if (event.persisted) window.location.reload();
});
