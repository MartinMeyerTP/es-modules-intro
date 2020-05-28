console.log('importing setupNavbar.js')

import { getAll } from '../util'

export default function setupNavbar(selector) {
  console.log('setupNavbar')
  getAll(selector + '  .navlink')
  /* ... */
}

function onNavItemClick(event) {
  /* ... */
}
