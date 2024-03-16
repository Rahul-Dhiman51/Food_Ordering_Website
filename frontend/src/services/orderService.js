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

export const pay = async (paymentId) => {
    try {
        // console.log("INTIATED");
        // console.log(paymentId)
        const { data } = await axios.put('api/orders/pay', { paymentId })
        // The second argument is the request body and req default contains the user object
        return data
    } catch (error) {
        console.log(error)
    }
}

export const trackOrderById = async (orderId) => {
    const { data } = await axios.get('/api/orders/track/' + orderId)
    return data
}