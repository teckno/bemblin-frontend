import React, { useState, useEffect } from 'react';

function DonationPage() {
  const [amount, setAmount] = useState('1.00');

  useEffect(() => {
    // Dynamically load PayPal button script
    const script = document.createElement('script');
    script.src = '';
    script.async = true;
    script.onload = initializePayPalButton;
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (window.paypal) {
      initializePayPalButton();
    }
  }, [amount]);

  const initializePayPalButton = () => {
    window.paypal.Buttons({
      createOrder: function(data, actions) {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: amount
            }
          }]
        });
      },
      onApprove: function(data, actions) {
        // Your onApprove handler
      },
      onError: function(err) {
        console.error('Error:', err);
      },
      style: {
        layout: 'horizontal',
        color: 'blue',
        shape: 'rect',
        label: 'paypal',
      },
      // Add image configuration
      image: {
        src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
        title: 'PayPal - The safer, easier way to pay online!',
        alt: 'Donate with PayPal button'
      }
    }).render('#paypal-donate-button-container');
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="container mx-auto mt-8 max-w-md">
      <h1 className="text-3xl font-semibold mb-6 text-center">Donate Now</h1>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-2">Enter donation amount:</label>
        <input 
          type="number" 
          id="amount" 
          className="border rounded p-2 w-full"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      <div id="paypal-donate-button-container" style={{ width: '100%', textAlign: 'center' }}></div>
    </div>
  );
}

export default DonationPage;
