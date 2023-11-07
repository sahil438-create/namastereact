const elem = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'hello how are you'),
  ]),
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'hello how are you'),
  ]),
]);
const sah = ReactDOM.createRoot(document.getElementById('root'));
sah.render(elem);
