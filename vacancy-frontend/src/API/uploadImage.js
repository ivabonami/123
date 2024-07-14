import axios from "axios";
import {api} from "@/API/api.js";

export function uploadImage(image) {
    console.log(image)
    const formData = new FormData();
    formData.append("image-upload", image );

    return axios.post(api + '/upload', formData)
}