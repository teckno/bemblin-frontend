import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';

const plans = [
  { id: 1, name: 'Weekly', price: '$5' },
  { id: 2, name: 'Monthly', price: '$20' },
  { id: 3, name: 'Yearly', price: '$100' }
];

function PaymentGateway() {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedCurrency, setSelectedCurrency] = useState('Kwacha');
  const [amount, setAmount] = useState('');
  const [phone, setPhone] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [comment, setComment] = useState('');

  const handlePayment = () => {
    // Handle payment logic here
    console.log(`Payment successful for ${selectedPlan.name} plan with ${amount} ${selectedCurrency}.`);
    console.log(`Phone: ${phone}`);
    console.log(`Full Name: ${fullName}`);
    console.log(`Email: ${email}`);
    console.log(`Country: ${country}`);
    console.log(`Address: ${address}`);
    console.log(`Comment: ${comment}`);
  };

  return (
    <div>
      <Header />
    <div className="background-col">
      <div className="flex flex-col items-center justify-center min-h-screen font-poppins">
        <h1 className="text-2xl font-bold mb-4">Choose Your Subscription Plan</h1>
        <div className="w-full max-w-md">
          <div className="space-y-4">
            <div className="flex items-center">
              <label htmlFor="currency" className="mr-2">Currency:</label>
              <select
                id="currency"
                value={selectedCurrency}
                onChange={e => setSelectedCurrency(e.target.value)}
                className="px-2 py-1 border border-gray-300 rounded-md"
              >
                <option value="Kwacha">Kwacha</option>
                {/* Add more currencies here */}
              </select>
            </div>
            <div className="flex items-center">
              <label htmlFor="amount" className="mr-2">Amount:</label>
              <input
                type="text"
                id="amount"
                value={amount}
                onChange={e => setAmount(e.target.value)}
                placeholder="Enter amount"
                className="px-2 py-1 border border-gray-300 rounded-md"
              />
            </div>
            <div className="space-y-2">
              {plans.map(plan => (
                <div
                  key={plan.id}
                  className={`relative bg-white rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`}
                  onClick={() => setSelectedPlan(plan)}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <div className="text-sm">
                        <p className="font-medium text-gray-900">{plan.name}</p>
                        <p className="text-gray-500 block">{plan.price} / {plan.name.toLowerCase()}</p>
                      </div>
                    </div>
                    <div
                      className={`${
                        selectedPlan?.id === plan.id ? 'border-indigo-500' : 'border-transparent'
                      } border-2 rounded-md`}
                    >
                      <span
                        className={`${
                          selectedPlan?.id === plan.id ? 'bg-indigo-500' : 'bg-transparent'
                        } w-4 h-4 rounded-full`}
                      />
                    </div>
                  </div>
                  {selectedPlan?.id === plan.id && (
                    <div className="mt-4">
                      <input
                        type="text"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        placeholder="Phone"
                        className="input-field"
                      />
                      <input
                        type="text"
                        value={fullName}
                        onChange={e => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="input-field"
                      />
                      <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        className="input-field"
                      />
                      <input
                        type="text"
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                        placeholder="Country"
                        className="input-field"
                      />
                      <input
                        type="text"
                        value={address}
                        onChange={e => setAddress(e.target.value)}
                        placeholder="Physical Address"
                        className="input-field"
                      />
                      <textarea
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        placeholder="Comment (optional)"
                        className="input-field"
                      ></textarea>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={handlePayment}
            className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 stand-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Subscribe
          </button>
        </div>
      </div >
      {/* Payment Gateways */}
      <div className="flex justify-center mt-8">
        <button className="payment-gateway-button" onClick={() => console.log("Proceed with MTN Mobile Payment")}>
          <img src="mtn_logo_url" alt="MTN Mobile" className="w-16 h-16" />
        </button>
        <button className="payment-gateway-button" onClick={() => console.log("Proceed with Mastercard Payment")}>
          <img src="mastercard_logo_url" alt="Mastercard" className="w-16 h-16" />
        </button>
        <button className="payment-gateway-button" onClick={() => console.log("Proceed with Visa Payment")}>
          <img src="visa_logo_url" alt="Visa" className="w-16 h-16" />
        </button>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default PaymentGateway;
