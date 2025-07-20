// 🔁 No changes to imports
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCreditCard } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Payment.css";

const Payment = () => {
  const [amount, setAmount] = useState("");
  const [remarks, setRemarks] = useState("");
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // ✅ Load PayHere SDK
  useEffect(() => {
    if (!window.payhere) {
      const script = document.createElement("script");
      script.src = "https://www.payhere.lk/lib/payhere.js";
      script.async = true;
      script.onload = () => setSdkLoaded(true);
      script.onerror = () => {
        console.error("❌ Failed to load PayHere SDK.");
        setSdkLoaded(false);
      };
      document.body.appendChild(script);
    } else {
      setSdkLoaded(true);
    }
  }, []);

  const handlePay = async () => {
    if (!amount || Number(amount) <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    if (!remarks.trim()) {
      alert("Please enter a description.");
      return;
    }

    const order_id = "ORDER_" + new Date().getTime();
    const currency = "LKR";

    try {
      const response = await fetch("https://chamodh-eranda-production.up.railway.app/api/create-payment-hash", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          order_id,
          amount: parseFloat(amount).toFixed(2),
          currency
        })
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.statusText}`);
      }

      const data = await response.json();
      const { hash } = data;

      if (!hash) {
        throw new Error("Hash not received from server.");
      }

      const payment = {
        sandbox: true,
        merchant_id: "1231226",
        return_url: "https://chamodheranda.com/success",
        cancel_url: "https://chamodheranda.com/cancel",
        notify_url: "https://chamodheranda.com/api/notify",
        order_id,
        items: remarks || "Custom Payment",
        amount,
        currency: "LKR",
        hash, // ✅ Dynamically inserted hash from backend
        first_name: "Chamodh",
        last_name: "Eranda",
        email: "chamodh@example.com",
        phone: "0771234567",
        address: "Colombo",
        city: "Colombo",
        country: "Sri Lanka",
        delivery_address: "Colombo",
        delivery_city: "Colombo",
        delivery_country: "Sri Lanka",
        iframe: true
      };

      if (!sdkLoaded || !window.payhere || typeof window.payhere.startPayment !== "function") {
        alert("Payment service unavailable. Please try again later.");
        return;
      }

      window.payhere.startPayment(payment);
      console.log("✅ Payment initiated:", payment);

      setAmount("");
      setRemarks("");
    } catch (error) {
      console.error("❌ Payment error:", error);
      alert("Failed to initiate payment. Please try again.");
    }
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
          placeholder="Enter Amount"
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

        <button
          onClick={handlePay}
          className="payment-button"
          disabled={!sdkLoaded}
        >
          <FaCreditCard style={{ color: "white", marginRight: "8px" }} />
          Pay Now
        </button>

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