import "./styles/donation.css";
import UPIQR from "../assets/SPF_QR.png";
export default function Donation() {
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
            <div className="qr__code__container">
              <img className="qr__code" src={UPIQR} alt="UPI QR Code" />
            </div>
          </div>
          <div className="or__container col">
            <div className="or__line"></div>
            <div className="or__text">OR</div>
            <div className="or__line"></div>
          </div>
          <div className="donation__items bank__transfer__container cent">
            <div className="bank__details__item">
              <h2 className="bank__headers">Bank Transfer</h2>
              <div>
                <p>UPI ID</p>
                <p className="bank__input">swach97600@barodampay</p>
                <p>Account Holder&apos;s Name:</p>
                <p>SWACH PARIVESH FOUNDATION</p>
                <p>Bank Name:</p>
                <p className="bank__input">Bank of Baroda</p>
                <p>Account Number:</p>
                <p className="bank__input">58930100002634</p>
                <p>IFSC Code:</p>
                <p className="bank__input">BARB0AJABPU</p>
                <p>Branch</p>
                <p className="bank__input">AJABPUR KALAN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
