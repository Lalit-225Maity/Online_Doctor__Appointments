import React from "react";
import './Footer.css'
const Footer = () => {
  const Delhi = [
    "Dentist in Delhi",
    "General Physicians in Delhi",
    "Cardiologist in Delhi",
    "Gynaecologist in Delhi",
    "Psychiatrist in Delhi",
    "Dermatologist in Delhi",
    "Neurologist in Delhi",
    "Urologist in Delhi",
    "Ophthalmologist in Delhi",
    "Sexologist in Delhi",
  ]
  const Mumbai = [
    "Dentist in Mumbai",
    "General Physicians in Mumbai",
    "Cardiologist in Mumbai",
    "Gynaecologist in Mumbai",
    "Psychiatrist in Mumbai",
    "Dermatologist in Mumbai",
    "Neurologist in Mumbai",
    "Urologist in Mumbai",
    "Ophthalmologist in Mumbai",
    "Sexologist in Mumbai",
  ]
  const Chennai = [
    "Dentist in Chennai",
    "General Physicians in Chennai",
    "Cardiologist in Chennai",
    "Gynaecologist in Chennai",
    "Psychiatrist in Chennai",
    "Dermatologist in Chennai",
    "Neurologist in Chennai",
    "Urologist in Chennai",
    "Ophthalmologist in Chennai",
    "Sexologist in Chennai",
  ]
  const Bangalore = [
    "Dentist in Bangalore",
    "General Physicians in Bangalore",
    "Cardiologist in Bangalore",
    "Gynaecologist in Bangalore",
    "Psychiatrist in Bangalore",
    "Dermatologist in Bangalore",
    "Neurologist in Bangalore",
    "Urologist in Bangalore",
    "Ophthalmologist in Bangalore",
    "Sexologist in Bangalore",
  ]


  const aboutLinks = [
    "About Us",
    "Contact Us",
    "Careers",
    "Mobile Apps",
    "Terms of Use",
    "Surgery Partner : Pristyn Care",
    "Our Fitness Partner: beatXP",
    "Privacy Policy",
    "Editorial Policy"
  ]

  return (
    <footer className="footer">
      <div className="delhi-doctor">
        <h5>Delhi</h5>
        {Delhi.map((i) => (
          <div className="delhi">
            <p>{i}</p>
          </div>
        ))}
      </div>
      <div className="mumbai-doctor">
        <h5>Mumbai</h5>
        {Mumbai.map((i) => (
          <div className="mumbai">
            <p>{i}</p>
          </div>
        ))}
      </div>
      <div className="chennai-doctor">
        <h5>Chennai</h5>
        {Chennai.map((i) => (
          <div className="chennai">
            <p>{i}</p>
          </div>
        ))}
      </div>
      <div className="bangalore-doctor">
        <h5>Bangalore</h5>
        {Bangalore.map((i) => (
          <div className="bangalore">
            <p>{i}</p>
          </div>
        ))}
      </div>
      <div className="access-app">
        <h5>Social</h5>
        <div className="social-access">
          <img src="/facebook (3).png" alt="Error" />
          <img src="/twitter (3).png" alt="Error" />
          <img src="/instagram (2).png" alt="Error" />
        </div>
        <img src="https://assets.lybrate.com/f_auto,c_limit,w_256,q_auto/imgs/product/logos/GooglePlay.png" alt="" width={140}/>
        <img src="https://assets.lybrate.com/f_auto,c_limit,w_256,q_auto/imgs/product/logos/AppStore.png" alt="" width={140} />
      </div>
    </footer>
  );
};

export default Footer;