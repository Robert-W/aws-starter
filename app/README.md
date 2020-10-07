# App
> Static Website to be distributed on S3

## How do I?

### Add another page
To add a new page, you need to add a new directory under `src/pages` that has the following two files:

- index.html (the default loading page)
- index.js (the default entry point)

Webpack will take care of bundling up the javascript and injecting it into the page for you.
