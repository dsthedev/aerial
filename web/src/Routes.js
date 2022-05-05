// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route, Set } from '@redwoodjs/router'
import AerialLayout from './layouts/AerialLayout/AerialLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={AerialLayout}>
        <Route path="/" page={AerialPage} name="aerial" />
        <Route path="/aerial" page={AerialPage} name="aerial" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
