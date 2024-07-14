import {api} from "@/API/api.js";
import axios from "axios";
import {vacancies} from "@/Stores/vacancies.js";


export function getVacancies() {
    axios.get(api + '/getVacancies').then(result => {
        for (let vacancy of result.data) {
            vacancies.push(vacancy)
            console.log(vacancies)
        }
    })
}

export function addVacancy(data) {
    axios.post(api + '/addVacancies', {data}).then(result => {
        vacancies.push(data)
    })
}

export function deleteVacancy(data) {
    axios.delete(api + '/deleteVacancy', {data}).then(result => {
        vacancies.splice(vacancies.findIndex(item => item === data), 1)
    })
}