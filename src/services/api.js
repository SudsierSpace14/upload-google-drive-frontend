import Axios from 'axios'

const api = Axios.create({
    baseURL: 'https://upload-google-drive-backend.onrender.com'
})

export default api