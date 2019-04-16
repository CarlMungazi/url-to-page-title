# url-to-page-title

> Turn URLs into page title friendly strings

Depending on your URL structure, you might want to use it to dynamically set the page title: `"/react-router/web/api/Route/route-props"` → `"React Router - Web - Api - Route - Route Props"`

## Install

```
$ npm install url-to-page-title
```

## Usage

```js
const urlToPageTitle = require('url-to-page-title');

// window.location.pathname is: "/react-router/web/api/Route/route-props"
const pageTitle = urlToPageTitle(window.location.pathname); // "React Router - Web - Api - Route - Route Props"
document.title = pageTitle;
```

## License

MIT © [Carl Mungazi](https://carlmungazi.com)