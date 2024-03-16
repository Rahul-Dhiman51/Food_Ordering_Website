import React, { useEffect, useState } from 'react'
import classes from './orderTrackPage.module.css'
import { useParams } from 'react-router-dom'
import { trackOrderById } from '../../services/orderService'
import NotFound from '../../components/NotFound/NotFound'

const OrderTrackPage = () => {

    const { orderId } = useParams()
    const [order, setOrder] = useState()

    useEffect(() => {
        orderId && trackOrderById(orderId).then(order => {
            setOrder(order)
        })
    }, [orderId])

    if (!orderId)
        return <NotFound message="Order Not Found" linkText="Go To Home Page" />

    return (
        order && <div className={classes.container}>
            <div className="classes content">
                <h1> Order #{order.id}</h1>
                <div>
                    <strong>Date</strong>
                </div>
            </div>
        </div>
    )
}

export default OrderTrackPage