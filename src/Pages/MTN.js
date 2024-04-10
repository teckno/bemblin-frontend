import React, { useState } from 'react';
import axios from 'axios';

const MTN = () => {
  const [amount, setAmount] = useState(""); // State to store the entered amount

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const initiatePayment = async () => {
    try {
      const response = await axios.post('https://sandbox.momodeveloper.mtn.com/collection/v2_0/payment', {
        externalId: "string",
        amount: {
          currency: "ZMW", // Zambian Kwacha
          value: amount // Use the entered amount
        },
        payer: {
          partyIdType: "MSISDN",
          partyId: "661551442" // Example MSISDN
        },
        payerMessage: "Payment for your order",
        payeeNote: "Thank you for your purchase",
        callbackUrl: "https://your-callback-url.com" // Your callback URL
      }, {
        headers: {
          'Content-Type': 'application/json',
          'X-Reference-Id': 'YOUR_REFERENCE_ID', // Your reference ID
          'Ocp-Apim-Subscription-Key': 'YOUR_SUBSCRIPTION_KEY' // Your subscription key
        }
      });
      
      // Handle response here (redirect to payment page, etc.)
      console.log(response.data);
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen font-popins">
      <div>
        <h1 className="text-3xl font-semibold mb-4">Welcome to Your E-commerce Site</h1>
        <input 
          type="number" 
          placeholder="Enter amount" 
          value={amount} 
          onChange={handleAmountChange} 
          className="mb-4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button onClick={initiatePayment} className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
          MoMoPay Checkout
        </button>
      </div>
    </div>
  );
}

export default MTN;
