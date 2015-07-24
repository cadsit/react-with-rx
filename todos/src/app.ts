import { render, DOM } from 'react';


render(
	DOM.p({}, 'Hello World!'),
	document.getElementById("app")
);