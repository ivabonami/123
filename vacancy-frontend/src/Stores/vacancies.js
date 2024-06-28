import {reactive} from "vue";
import rich from './../Assets/images/rich.png'
import komp from './../Assets/images/komp.png'
import controller from './../Assets/images/controller.png'
import klad from './../Assets/images/klad.png'
import market from './../Assets/images/market.png'

export const vacancies = reactive([
    {
        name: 'Комплектовщик',
        price: '75000',
        buttonText: 'подробнее о работе комплектовщиком',
        image: komp,
        data: {
            whatToDo: {
                type: "text",
                items: ['Сборка товара по ТСД на основании задания на складе адресного хранения']
            },
            weAwait: {
                type: "list",
                items: ['Желателен опыт работы с ТСД',
                'Стремление учиться, работать и зарабатывать']
            }
        }
    }, {
        name: 'Кладовщик',
        price: '65500',
        buttonText: 'подробнее о работе кладовщиком',
        image: rich,
        data: {
            whatToDo: {
                type: "list",
                items: ['Приемка / отгрузка товара на складе',
                'Работа с ТСД']
            },
            weAwait: {
                type: "list",
                items: ['Желателен опыт работы с ТСД',
                    'Стремление учиться, работать и зарабатывать']
            }
        }
    }, {
        name: 'Контролер',
        price: '70000',
        buttonText: 'подробнее о работе контролером',
        image: controller,
        data: {
            whatToDo: {
                type: "list",
                items: ['Проверка заказов клиентов на соответствие заявкам, выявление брака', 'Работа с ТСД (терминал сбора данных)']
            },
            weAwait: {
                type: "list",
                items: ['Желателен опыт работы с ТСД',
                    'Стремление учиться, работать и зарабатывать']
            }
        }
    }, {
        name: 'Водитель ричтрака',
        price: '78600',
        buttonText: 'подробнее о работе водителем ричтрака',
        image: klad,
        data: {
            whatToDo: {
                type: "text",
                items: ['Перемещение грузов по территории склада на ричтраке, размещение товаров по ячейкам на складе с адресным хранением']
            },
            weAwait: {
                type: "list",
                items: ['Вод.удостоверение тракториста-машиниста кат. В',
                    'Преимуществом будет опыт работы в должности водителя ричтрака, штабелера, высотного погрузчика',
                    'Исполнительность, аккуратность, ответственность']
            }
        }
    }, {
        name: 'Кладовщик маркетплейсов',
        price: '65500',
        buttonText: 'подробнее о работе кладовщиком маркетплейсов',
        image: market,
        data: {
            whatToDo: {
                type: "list",
                items: ['Сборка и упаковка товаров для маркетплейсов', 'Работа с ТСД (терминал сбора данных)']
            },
            weAwait: {
                type: "list",
                items: ['Желателен опыт работы с ТСД',
                    'Стремление учиться, работать и зарабатывать']
            }
        }
    },
])