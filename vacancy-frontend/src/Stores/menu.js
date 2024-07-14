import {reactive} from "vue";

export const menuItems = reactive([
    {
        name: 'Преимущества',
        href: 'features'
    },{
        name: 'Вакансии',
        href: 'vacancies'
    },{
        name: 'Компания',
        href: 'company'
    },{
        name: 'Вопросы',
        href: 'faq'
    },
])