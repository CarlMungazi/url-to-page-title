module.exports = function urlToPageTitle(url) {
  if (typeof url !== 'string') {
    throw new TypeError('Please use a string');
  } 

return url
  .replace(/[/]/, "")
  .replace(/[_-]+/g, " ")
  .replace(/[/]+/g, " - ")
  .toLowerCase()
  .replace(/(?:^|\s|-)\S/g, x => x.toUpperCase());
}