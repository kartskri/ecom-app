import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    alert(price);
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_SUhQXrR9TNrORLruz74Eeljn00h0AbKhxl';

    const onToken = token => {
        console.log(token);
        alert('Payment Success')
    }

    return (
        <StripeCheckout token={onToken}
                        label='Pay Now'
                        name='My React Ecom Store'

                        billingAddress
                        shippingAddress
                        description={`Your Total Price is $${price}`}
                        stripeKey={publishableKey} amount={priceForStripe}
                        panelLabel='Pay Now'
        />
    );
}

export default StripeCheckoutButton;
