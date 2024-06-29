import { ViteSSG } from 'vite-ssg';
import App from './App.vue';
import './styles.css';

import { routes } from './routers';

export const createApp = ViteSSG(App, { routes, base: import.meta.env.BASE_URL });
