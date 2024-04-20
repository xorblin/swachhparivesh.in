import "./styles/donation.css";
import UPIQR from "../assets/SPF_QR.png";
const Donation = () => {
  return (
    <>
      <div className="donation__banner cent">
        <div className="banner__item col cent">
          <h1 className="support__header">
            Support Our Cause || Make Some Difference
          </h1>
          <p className="support__para">
            Thank you for considering a donation to Swach Parivesh Foundation.
            Your support will help us to continue our work to protect the
            environment and make a difference in the lives of people. We are a
            non-profit organization and your donation is tax-deductible.
          </p>
        </div>
      </div>
      <div className="donation__container cent">
        <div className="donation__inner__container row">
          <div className="donation__items cent">
            <div>
              <img className="qr-code" src={UPIQR} alt="UPI QR Code" />
            </div>
          </div>
          <div className="or__container col">
            <div className="or__line"></div>
            <div className="or__text">OR</div>
            <div className="or__line"></div>
          </div>
          <div className="donation__items bank__transfer__container cent">
            <div className="bank__details__item">
              <h2 className="bank__headers">
                Bank <u>Transfer</u>
              </h2>
              <div>
                <p>swach97600@barodampay</p>
                <p>SWACH PARIVESH FOUNDATION</p>
                <p>58930100002634</p>
                <p>Bank Name:</p>
                <p>Bank of Baroda</p>
                <p>Account Number:</p>
                <p>IFSC Code:</p>
                <p>BARB0AJABPU</p>
                <p>Account Holder&apos;s Name:</p>
                <p>AJABPUR KALAN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donation;

// // <h1>Donate Now!</h1>
// <div className="payment-methods">
// <div className="payment-method">
//   <div className="upi-details">
//     <h2>UPI Payment</h2>

//     <label>UPI ID:</label>
//     <label>Merchant Name:</label>
//     <p>SWACH PARIVESH FOUNDATION</p>
//   </div>
// </div>
// <div className="payment-method">
//   <div className="bank-details">
//
//   </div>
