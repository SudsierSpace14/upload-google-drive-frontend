import Axios from 'axios'

const api = Axios.create({
    baseURL: 'https://googledrive-upload.netlify.app'
})

export default api