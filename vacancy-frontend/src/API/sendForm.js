import axios from "axios";
import {api} from "@/API/api.js";

export default function sendForm(data) {
    axios.post(api + '/form-sender.php', {data})
}