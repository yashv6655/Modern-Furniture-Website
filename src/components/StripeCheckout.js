import React from "react";
import styled from "styled-components";

const CheckoutForm = () => {
  return <h2>Hello from Stripe</h2>;
};

const StripeCheckout = () => {
  return (
    <Wrapper>
      <CheckoutForm />
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default StripeCheckout;
