import React from 'react';
import resetFile from '../node_modules/sanitize.css/sanitize.css'
// import testcss from './testcss.css'

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */

const GlobalReset = () => (
  <style dangerouslySetInnerHTML={{ __html: resetFile }}></style>
)

export default GlobalReset

