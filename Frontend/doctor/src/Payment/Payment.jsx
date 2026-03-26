import React from 'react'
import './Payment.css'
import { useForm } from 'react-hook-form'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

const Payment = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { isSubmitting }
    } = useForm();
    const { state } = useLocation();
    const { PatientName, Mobile,  Department, Price, Appoint_Date, email, id } = state || {};
    const [UPI, setUPI] = useState(false);
    const [expairy, setexpairy] = useState();
    const [card, setcard] = useState(false);
    const [method, setmethod] = useState();
    const [fault, setfault] = useState();
    const [expyear, setexpyear] = useState();
    const OpenPayment = async (data) => {
        await new Promise((resolve, reject) => {
            setTimeout(async () => {
                try {
                    const newData = {
                        ...data,
                        PaymentMethod: method,
                        Username: PatientName,
                        Paid: "Confirm",
                        Appoint_Date: Appoint_Date,
                        Mobile: Mobile,
                        Department,
                        id:id

                    }
                    const CardData = {
                        ...data,
                        PaymentMethod: method,
                        Username: PatientName,
                        Paid: "Confirm",
                        Appoint_Date: Appoint_Date,
                        Mobile: Mobile,
                        Department,
                        
                        id:id
                    }
                    if (method === 'UPI') {
                        const response = await axios.post('/api/pay', newData);
                        console.log(response.data);
                         
                        if (response.data.success) {
                            navigate('/myappointment')
                        }

                        resolve("success");
                    }
                    if (method === 'Debit Card') {
                        const response = await axios.post('/api/pay', CardData);
                        console.log(response.data);
                        if (response.data.success) {
                            navigate('/myappointment')
                        }
                        resolve("success");
                    }
                } catch (error) {
                    const CodeERROR = error.response.data.message;
                    setfault(CodeERROR);
                 
                    
                    reject("error")
                }
            }, 3000);
        })
    }
    return (
        <div className="payment">
            <div className="select-payment">
                <div className="pament-methods">
                    <p>Payment Options for +91 8436789520</p>
                    <button className={UPI ? "blue" : "pink"} onClick={() => { setUPI(true); setcard(false); setmethod("UPI") }}><img src="/upi.svg" alt="" /><p>Pay by UPI ID</p></button>
                    <button className={card ? "blue" : "pink"} onClick={() => { setUPI(false); setcard(true); setmethod("Debit Card") }}><img src="/credit-card.png" alt="Error" /><p>Card</p></button>
                </div>
                <div className="payments">
                    {UPI && (
                        <div className="upi">
                            <form onSubmit={handleSubmit(OpenPayment)} autoComplete='off'>
                                <label>UPI ID</label>
                                <input type="text" {...register("UPI_ID")} />
                                <p>I agree with the Privacy Policy by proceeding with this payment</p>
                                <h4>INR {Price}(Total Amount Payable)</h4>
                                <button type="submit">Make Payment</button>
                                {fault && <p style={{ color: "red" }}>{fault}</p>}
                                {isSubmitting && (
                                    <div className='makepayment'>
                                        <div className="loading-payment">
                                            <div className="payment-process-loading"></div>
                                            <p>Processing.....</p>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    )}
                    {card && (
                        <div className="cards">
                            <form onSubmit={handleSubmit(OpenPayment)}>
                                <label>Card Number</label>
                                <input type="text" {...register("Debit_Card")} />
                                <label>Expairy</label>
                                <div className="exp-cvv">
                                    <span>
                                        <DatePicker
                                            selected={expairy}
                                            onChange={(e) => { setexpairy(e) }}
                                            showMonthYearPicker
                                            dateFormat='MM'
                                            placeholderText='Month'
                                        />
                                    </span>
                                    <span>
                                        <DatePicker
                                            selected={expyear}
                                            onChange={(e) => { setexpyear(e) }}
                                            showYearPicker
                                            dateFormat='yyyy'
                                            minDate={new Date()}
                                            maxDate={new Date(2040, 0, 0)}
                                            placeholderText='Year'
                                        /></span>

                                </div>
                                <label>CVV</label>
                                <input type="text" {...register("CVV")} />
                                <label>Debit Card Password</label>
                                <input type="password" {...register("DebitCard_Password")} />
                                <p>I agree with the Privacy Policy by proceeding with this payment</p>
                                <h4>INR {Price} (Total Amount Payable)</h4>
                                <button type="submit">Make Payment</button>
                                {fault && <p style={{ color: "red" }}>{fault}</p>}
                                {isSubmitting && (
                                    <div className='makepayment'>
                                        <div className="loading-payment">
                                            <div className="payment-process-loading"></div>
                                            <p>Please wait...</p>
                                        </div>
                                    </div>
                                )}
                            </form>
                        </div>
                    )}
                </div>



            </div>
        </div>
    )
}
export default Payment;