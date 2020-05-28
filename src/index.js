setupNavbar('.navbar')
setupForm('.form')

function setupNavbar(selector) {
  console.log('setupNavbar')
  getAll(selector + '  .navlink')
  /* ... */
}

function onNavItemClick(event) {
  /* ... */
}

function setupForm(selector) {
  console.log('setupForm')
  get(selector)
  /* ... */
}

function handleSubmit(event) {
  /* ... */
}

function validate(formdata) {
  /* ... */
}

function get(selector) {
  console.log('get', selector)
  /* ... */
}

function getAll(selector) {
  console.log('getAll', selector)
  /* ... */
}
