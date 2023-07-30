import { createApp } from 'vue'
import App from './App.vue'
import { initApp, startupImport } from './startup-import'

const app = createApp(App)
startupImport.appUseDependencies(app);
startupImport.appSetLocale();
initApp(app);