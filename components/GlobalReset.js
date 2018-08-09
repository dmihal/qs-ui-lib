import React from 'react';
import sanitize from 'sanitize.css'
/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
const GlobalReset = () => (
  <style dangerouslySetInnerHTML={{ __html: sanitize }}></style>
)

export default GlobalReset

