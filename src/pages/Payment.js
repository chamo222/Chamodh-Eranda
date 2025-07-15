import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom"; // ✅ Make sure this is imported
import "./Payment.css";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");

  const handlePay = () => {
    const payment = {
      sandbox: true,
      merchant_id: "1231226", // Replace with your PayHere ID
      return_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      notify_url: "http://localhost:3000/api/notify",

      order_id: "ORDER_" + new Date().getTime(),
      items: remarks,
      amount: amount,
      currency: "LKR",
      first_name: "Chamodh",
      last_name: "Eranda",
      email: "chamodh@example.com",
      phone: "0771234567",
      address: "Colombo",
      city: "Colombo",
      country: "Sri Lanka",
    };

    if (!window.payhere || typeof window.payhere.startPayment !== "function") {
      console.error("PayHere SDK is not loaded properly.");
      alert("Payment service is unavailable at the moment. Please try again later.");
      return;
    }

    window.payhere.startPayment(payment);
  };

  return (
    <div className="payment-container">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="payment-card"
      >
        <h2 className="payment-title">Pay Me</h2>

        <input
          type="number"
          placeholder="Enter Amount (LKR)"
          className="payment-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <input
          type="text"
          placeholder="Description / Remarks"
          className="payment-input"
          value={remarks}
          onChange={(e) => setRemarks(e.target.value)}
        />

        <button onClick={handlePay} className="payment-button">
          <FaCreditCard style={{ color: "white", marginRight: "8px" }} />
          Pay Now
        </button>

        {/* ✅ Policies section */}
        <div className="payment-policy">
          <p>
            By proceeding, you agree to our{" "}
            <Link to="/terms" className="policy-link">
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link to="/privacy-policy" className="policy-link">
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Payment;