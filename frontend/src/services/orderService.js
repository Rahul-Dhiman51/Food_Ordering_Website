import axios from 'axios'

export const createOrder = async (order) => {
    try {
        const { data } = axios.post('/api/orders/create', order)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const newOrderForCurrentUser = async () => {
    try {
        const { data } = await axios.get('api/orders/newOrderForCurrentUser')
        return data
    } catch (error) {
        console.log(error)
    }
}