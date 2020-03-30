# Are.na as CMS
1. Go to an are.na channel and get the last part (slug) of the url. <br>
`https://www.are.na/eric-li/under-consideration-1517888768` becomes `under-consideration-1517888768`.
2. In `index.js`, replace the string on the first line with the slug.
3. Update `makeEntry()` and `<template id="entry-template">` as you see fit.

# API Reference
- [Are.na Channel API Documentation](https://dev.are.na/documentation/channels)
- [Are.na Block API Documentation](https://dev.are.na/documentation/blocks)
- [Example API Request](https://api.are.na/v2/channels/under-consideration-1517888768)
- [JSONView – Useful Chrome Extension](https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc?hl=en)
