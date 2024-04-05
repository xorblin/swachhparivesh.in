import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/donation.css";

const Donation = () => {
  return (
    <div className="donation">
      <h1>Donate Now!</h1>
      <div className="payment-methods">
        <div className="payment-method">
          <div className="upi-details">
            <h2>UPI Payment</h2>
            <img
              className="qr-code"
              src="./assets/images/SPF-QR.png"
              alt="UPI QR Code"
            />

            <label>UPI ID:</label>
            <p>swach97600@barodampay</p>
            <label>Merchant Name:</label>
            <p>SWACH PARIVESH FOUNDATION</p>
          </div>
        </div>
        <div className="payment-method">
          <div className="bank-details">
            <h2>Bank Transfer</h2>
            <label>Bank Name:</label>
            <p>Bank of Baroda</p>
            <label>Account Number:</label>
            <p>58930100002634</p>
            <label>IFSC Code:</label>
            <p>BARB0AJABPU</p>
            <label>Account Holder's Name:</label>
            <p>AJABPUR KALAN</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donation;
