import "./mailList.css";

const MailList = () => {
  return (
    <div className="mail">
      <div className="mail-text">
        <h1 className="mail-title">Save time, save money!</h1>
        <span className="mail-desc">
          Sign up and we'll send the best deals to you
        </span>
      </div>
      <div className="mail-input-container">
        <input type="text" placeholder="Your Email" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default MailList;
