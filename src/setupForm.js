console.log('importing setupForm.js')

import { get } from './util'

export default function setupForm(selector) {
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
