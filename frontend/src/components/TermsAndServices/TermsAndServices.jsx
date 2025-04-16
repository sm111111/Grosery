import React from "react";
import "./TermsAndServices.css";

const TermsAndServices = () => {
    return (
        <div className="terms-container">
            <h1>Terms and Services</h1>
            <p>
                Welcome to our Terms and Services page. By using our website, you agree
                to the following terms and conditions.
            </p>
            <h2>Use of Our Services</h2>
            <p>
                You agree to use our services only for lawful purposes and in accordance
                with our policies.
            </p>
            <h2>Intellectual Property</h2>
            <p>
                All content provided on this site is owned by us and protected by
                copyright laws.
            </p>
            <h2>Termination</h2>
            <p>
                We reserve the right to suspend or terminate your access to our services
                if you violate our terms.
            </p>
            <h2>Changes to Terms</h2>
            <p>
                We may update these terms from time to time. It is your responsibility
                to review them periodically.
            </p>
            <p>
                If you have any questions about our terms, please contact us.
            </p>
        </div>
    );
};

export default TermsAndServices;