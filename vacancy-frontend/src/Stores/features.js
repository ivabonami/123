import {reactive} from "vue";
import rubleIcon from './../Assets/icons/ruble.svg'
import busIcon from './../Assets/icons/bus.svg'
import certIcon from './../Assets/icons/cert.svg'

export const features = reactive({
    name: 'Преимущества работы в нашей компании',
    cards: [{
        icon: rubleIcon,
        heading: 'Стабильный доход',
        description: [
            'Фиксированная белая заработная плата',
            'Выплата 2 раза в месяц на карту',
            'Оплачиваемые переработки']
    },{
        icon: certIcon,
        heading: 'Оформление по ТК РФ',
        description: [
            'Официальное трудоустройство с 1 дня',
            'Оплата больничных и отпусков в полном объеме',
            'Работаем с иностранными гражданами']
    },{
        icon: busIcon,
        heading: 'Транспорт за счет компании',
        description: [
            'Фиксированная белая заработная плата',
            'Выплата 2 раза в месяц на карту',
            'Оплачиваемые переработки']
    }]
})