import React, { useState, useEffect, useRef } from 'react';
import { PayPalButton } from "react-paypal-button-v2";
import { useNavigate } from "react-router-dom";



const PaymentForm = (props) => {
const buttonRef = useRef(null);
const navigate = useNavigate();
const [isPaid, setIsPaid] = useState(false);



// Проверка авторизации
const token = window.localStorage.getItem("token");
useEffect(() => {
if (token) {
console.log("User");

} else if (!token) {
console.log("User is not logged in.");
navigate("/userDetails")
}})

// Сама оплата и перенаправление

useEffect(() => {
if (isPaid) {
navigate("/success");
}
}, [isPaid, navigate]);

const handlePaypalOnSuccess = async (details, data) => {
try {
const res = await fetch('http://localhost:5000/payments', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({
paymentID: data.paymentID,
token: window.localStorage.getItem("token"),
})
});
const json = await res.json();
if (json.status === 'success') {
setIsPaid(true);
navigate("/success");
} else {
console.log('Payment failed');
}
} catch (error) {
console.log(error);
}

}

return (
<>
<div className='Pay-position'>
<PayPalButton
amount={0.01}
onSuccess={handlePaypalOnSuccess}
/>
</div>
{isPaid ? (
<>
<h1>Access granted!</h1>
<p>You have successfully paid for the product and have access to the content.</p>
</>
) : (
<>
<h1>Access denied</h1>
<p>Please complete the payment to gain access to the content.</p>
</>
)}
<button ref={buttonRef} onClick={() => console.log('Button clicked!')}>
Click me
</button>
</>
);
}

export default PaymentForm;