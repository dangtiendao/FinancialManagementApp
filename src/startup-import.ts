import '@/assets/scss/lib/_index.scss'
import i18n from './i18n/i18n'
import routers from './routers'
import { App } from 'vue'

export const startupImport = {
    appUseDependencies: (app: App<Element>) => {
        app.use(i18n)
    },
    appSetLocale: () => {
        i18n.global.locale.value = 'vi'
    }
}

export const initApp = (app: App<Element>) => {
    app.use(routers);
    app.mount('#app');
}