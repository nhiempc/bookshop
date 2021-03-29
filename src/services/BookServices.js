import axios from 'axios';
const BOOK_API_BASE_URL = "http://localhost:3000";
class BookServices{
    getLiteratureBook(){
        return axios.get()
    }
}

export default new BookServices();