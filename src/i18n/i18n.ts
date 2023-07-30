import { createI18n } from "vue-i18n";
import i18nData from "./i18n-data";

const i18n = createI18n({
    locale: 'vi',
    globalInjection: true,
    messages: i18nData,
    legacy: false
})

export default i18n;