import React from 'react';
import ReactDOM from 'react-dom';

const Hello = function (props) {
    return React.createElement('div', null, 'Hello ' + props.name);
};

Hello.propTypes = {
    name: React.PropTypes.string,
};

ReactDOM.render(
    React.createElement(Hello, { name: 'World' }),
    document.getElementById('app')
);
