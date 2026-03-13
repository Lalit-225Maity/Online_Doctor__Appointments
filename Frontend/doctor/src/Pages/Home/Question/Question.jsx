import React from 'react'
import './Question.css'
const Question = () => {
  const docSuggest = [
    {
      img: "https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/8e05077049ce1583826e8aa9314264e0/Psychology-AshaChakravarthy-Trivandrum-2f4391",
      ques: "Hi I will masturbate daily it is bad for my health..",
      ans: "Masturbation is not bad for health but is a natural tendancy if human beings. Please read through Bit. Ly/masturbation-facts-and-myths.  ",
      doctorName: "Ms. Asha Chakravarthy",
      Dept: "Sexologist"
    },
    {
      img: "https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/67f367c862f78b4848a8de1f9a9c9d3f/Endocrinology-RavindraChhajed-Pune-12efb5",
      ques: "I have been diagnosed as diabetic since 6 years, a..",
      ans: "Your fasting sugar is definitely good. Get post prandial glucose level and HBA1c. Alternative medicine at lower cost can be suggested. Get connected on my profile for prescription.  ",
      doctorName: "Dr. Ravindra Chhajed",
      Dept: "Diabetologist"
    },
    {
      img: "https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/0b12bd7f541bd6752c0b88a034372dc9/Pulmonology-AmitKumarPoddar-Kolkata-a2029e",
      ques: "I'm suffering for cough and throat irritation it h..",
      ans: "Warm saline gargle 2-3 times a day. Antihistaminic tablet may be needed suitable anti biotic for 7-10 days should addres.",
      doctorName: "Dr.Sajeev Kumar",
      Dept: "Cardiologist"
    },
    {
      img: "https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/06dba1f9cb563ebd8e679b8950342df1/Pediatrics-SajeevKumar-CHENGANNUR-eaeebf.JPG",
      ques: "Hi, I have low t3 (triiodothyronine) level is 0.67..",
      ans: "No just iodised salt intake will help.  ",
      doctorName: "Dr. S.K. Tandon",
      Dept: "Sexologist"
    },
    {
      img: "https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/7bad9e89e789e84682c919ff8ea6f741/Dermatology-MeetaDesai-ahmedabad-9fd6f9.jpg",
      ques: "I have dark complexion but my face is more dark co..",
      ans: "Start using an exfoliating face wash like ahaglow alternate days followed by a moisturiser and sunscreen. Use sunscreen everyday every 3hourly. Take oral antioxidants. Use a good lightening cream at night. You may take peels or polishing with a dermatologist. ",
      doctorName: "Dr. Meeta Desai",
      Dept: "Dermatologist"
    },
    {
      img: "https://assets.lybrate.com/f_auto,c_limit,w_128,q_auto/img/documents/doctor/dp/266fdeafbf9a8e88326e67095db78414/Urology-KarunSingla-Mohali-05301d.jpg",
      ques: "Can thyroid could be cure permanently by Homeopath..",
      ans: "I believe in health care that is based on a personal commitment to meet patient needs with compassion and care.",
      doctorName: "Dr. Karun Singla",
      Dept: "Urologist"
    }
  ]
  return (
    <div className='question-ans'>
      <div className="question-doctors">
        <h4>QUESTIONS & ANSWERS</h4>
        <h5>10 million+questions answered by doctors</h5>
        <div className="questions-doc-ans">
          {docSuggest.map((i) => (
            <div className="doctor-suggestions">
              <h5>{i.ques}</h5>
              <div className="doc-suggest">
                <div className="doc-name-exp-dept">
                  <img src={i.img} alt="" />
                  <span>
                    <p>{i.doctorName}</p>
                    <p>{i.Dept}</p>
                  </span>
                </div>
                <p>{i.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Question
