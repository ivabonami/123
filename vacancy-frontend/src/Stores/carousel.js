import {reactive} from "vue";
import gift from './../Assets/icons/gift.svg'
import greenGift from './../Assets/icons/greenGift.svg'
import percentage from './../Assets/icons/percentage.svg'
import chart from './../Assets/icons/chart.svg'


export const carousel = reactive({
    settings: {
        autoplay: true,
        duration: 5000
    },
    cards: [{
        icon: percentage,
        heading: 'Дополнительные скидки',
        description: 'На всю продукцию компании',
        color: 'FEE1E1'
    },{
        icon: gift,
        heading: 'Бонус за друзей',
        description: 'Приведите друга на работу и по окончании его испытательного срока получите премию 10 000 ₽',
        color: 'CFDAFF'
    },{
        icon: chart,
        heading: 'Карьерный рост',
        description: 'грузчик-комплектовщик-контролер-бригадир\n' +
            '\n' +
            'кладовщик- ст.кладовщик - старший участка - начальник смены',
        color: 'FAFEE1'
    },{
        icon: greenGift,
        heading: 'Подарки к праздникам',
        description: 'Подарки вашим детям на день рождения и Новый год\n' +
            '\n' +
            'Бесплатное участие в турнирах/корпоративах\n',
        color: 'E4FFCF'
    }]
})