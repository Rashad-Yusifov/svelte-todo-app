import App from './App.svelte';
import 'svelte-ui-theme/index.css';
import './assets/style/reset.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;