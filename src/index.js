import { get, getAll } from 'util'

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
