/* eslint-disable react/prop-types */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";


const CheckOutForm = ({ modalData, month, year }) => {


    const newStripe = useStripe()
    const newElements = useElements()
    const axiosSecure = useAxiosSecure()

    const [error, setError] = useState('')
    const [right, setRight] = useState('')
    

    const { data: payments = [], refetch } = useQuery({
        queryKey: ['payment'],
        queryFn: async () => {
            const res = await axiosSecure.get('/payment')
            return res.data
        },
    })
    const exist = payments.find(payment => payment?.month == month && payment?.year == year && payment?.email == modalData.email)

    if (exist) {
        return;
    }

    refetch()

    const handleSubmit = async (e) => {

        e.preventDefault()

        if (!newStripe || !newElements) {
            return
        }
        const card = newElements.getElement(CardElement)
        if (card === null) {
            return
        }

        if (!month || !year) {
            return setError('plz select Year and Month')
        }
      
        const { error, paymentMethod } = await newStripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            setError(error.message);
        }
        else {
            if (paymentMethod) {
                setRight('Successfully payment done')
                toast.success('Successfully toasted!')
                refetch()
                axiosSecure.post('/payment', { email: modalData?.email, month, year, paymentMethod,salary:modalData?.salary })
                    .then(res => {
                        if (res.data.acknowledged) {

                           
                            refetch()
                        }
                    })
                   
            }
        }
        refetch()
        e.target.reset();
        
    }


    return (
        <div className="max-w-sm mx-auto ">
            <h1 className="capitalize text-lg pb-2">card info:</h1>
            <form onSubmit={handleSubmit} >
                <CardElement options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}>
                </CardElement>
                <div className="text-center mt-5">
                    <button type="submit" className="border border-green-500 px-5  rounded-lg text-green-500" > Pay</button>

                </div>
                <p className="capitalize text-red-500 mt-4">{error ? error : ''}</p>
                <p className="capitalize text-green-500 mt-4">{right ? right : ''}</p>
         
            </form>

        </div>
    );
};

export default CheckOutForm;