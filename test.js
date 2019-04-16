import test from 'ava';
import urlToPageTitle from '.';

test('it throws an error when passed a non-string value', t => {
  const error = t.throws(() => {
    urlToPageTitle([]);
  }, TypeError);  

  t.is(error.message, 'Please use a string');
});

test('it correctly parses URLs', t => {
  const pageTitle = urlToPageTitle("/react-router/web/api/Route/route-props");

  t.is(pageTitle, "React Router - Web - Api - Route - Route Props");
});