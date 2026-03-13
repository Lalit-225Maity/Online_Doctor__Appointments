import React from 'react'
import { useState } from 'react'
import './HealthAdvise.css'
const HealthAdvise = () => {
    const [diet, setdiet] = useState(false);
    const [skin, setskin] = useState(false);
    const [condition, setcondition] = useState(false);
    const [kid, setkid] = useState(false);
    const [women, setwomen] = useState(false);
    return (
        <div className='healthadvise'>
            <div className="Diet-Food-Fitness" onMouseEnter={() => { setdiet(true) }} onMouseLeave={() => { setdiet(false) }}>
                <p>Diet, Food & Fitness</p>
                <img src="/down-arrow (1).png" alt=""   className={diet?"hoverChange":"none"} />
                {diet && (
                    <div className="fitness">
                        <p>Weight Management</p>
                        <p>Weight Gain</p>
                        <p>Weight Loss</p>
                        <p>Obesity</p>
                        <p>Nutrition & Diet</p>
                        <p>Diet</p>
                        <p>Healthy Eating</p>
                        <p>Fitness & Exercise</p>
                        <p>Meditation</p>
                        <p>Nutrition</p>
                        <p>Sport Injuries</p>
                        <p>Yoga</p>
                    </div>
                )}
            </div>
            <div className="Skin-Hair" onMouseEnter={() => { setskin(true) }} onMouseLeave={() => { setskin(false) }}>
                <p>Skin & Hair Care</p>
                <img src="/down-arrow (1).png" alt=""  className={skin?"hoverChange":"none"} />
                {skin && (
                    <div className="skin">
                        <p>Skin Care</p>
                        <p>Acne</p>
                        <p>Allergies</p>
                        <p>Anti-Ageing</p>
                        <p>Chickenpox</p>
                        <p>Eczema</p>
                        <p>Measles</p>
                        <p>Oily Skin Care</p>
                        <p>Psoriasis</p>
                        <p>Ring Worm</p>
                        <p>Rosacea</p>
                        <p>Skin Care</p>
                        <p>Warts</p>
                        <p>Vitiligo</p>
                        <p>Hair Care</p>
                        <p>Dandruff</p>
                        <p>Hair Care</p>
                        <p>Hair Fall</p>
                        <p>Hair Growth</p>
                        <p>Hair Treatment</p>
                        <p>Oily Hair Care</p>
                    </div>
                )}
            </div>
            <div className="Health-Conditions" onMouseEnter={() => { setcondition(true) }} onMouseLeave={() => { setcondition(false) }}>
                <p>Health Conditions</p>
                <img src="/down-arrow (1).png" alt="" className={condition?"hoverChange":"none"} />
                {condition && (
                    <div className="health">
                        <p>Cancer</p>
                        <p>Breast Cancer</p>
                        <p>Lung Cancer</p>
                        <p>Oral Cancer</p>
                        <p>Prostate Cancer</p>
                        <p>Skin Cancer</p>
                        <p>Thyroid</p>
                        <p>Hyperthyroidism</p>
                        <p>Mental Health</p>
                        <p>ADHD</p>
                        <p>Anxiety Disorder</p>
                        <p>Alzheimer's & Dementia</p>
                        <p>Autism</p>
                        <p>Bipolar Disorder</p>
                        <p>Clinical Depression</p>
                        <p>Obsessive-compulsive Disorder (OCD)</p>
                        <p>Post-traumatic Stress Disorder (PTSD)</p>
                        <p>Schizophrenia</p>
                    </div>
                )}
            </div>
            <div className="Pregnancy-Kids-Parenting" onMouseEnter={() => { setkid(true) }} onMouseLeave={() => { setkid(false) }}>
                <p>Pregnancy, Kids & Parenting</p>
                <img src="/down-arrow (1).png" alt="" className={kid?"hoverChange":"none"} />
                {kid && (
                    <div className="kids">
                        <p>Pregnancy</p>
                        <p>Getting Pregnant</p>
                        <p>Fertility</p>
                        <p>Miscarriage</p>
                        <p>Abortion</p>
                        <p>Post Pregnancy</p>
                        <p>Parenting - Newborn & Baby</p>
                        <p>Baby Dental Health</p>
                        <p>Baby Development</p>
                        <p>Baby Diarrhea</p>
                        <p>Baby Nutrition</p>
                        <p>Baby Rashes and SkinCare</p>
                        <p>Diaper Rash</p>
                        <p>Diapering</p>
                        <p>Jaundice</p>
                        <p>Torticollis</p>
                    </div>
                )}
            </div>
            <div className="Women-Health" onMouseEnter={() => { setwomen(true) }} onMouseLeave={() => { setwomen(false) }}>
                <p>Women's Health</p>
                <img src="/down-arrow (1).png" alt="" className={women?"hoverChange":"none"} />
                {women && (
                    <div className="women">
                        <p>Women's Health</p>
                        <p>Birth Control</p>
                        <p>Breast Cancer</p>
                        <p>Having Safe Sex</p>
                        <p>Heavy Periods</p>
                        <p>Menopause</p>
                        <p>Menstrual Cramps</p>
                        <p>Nipple </p>
                        <p>Osteoporosis</p>
                        <p>Ovarian Cysts</p>
                        <p>PCOS/PCOD</p>
                        <p>PMS</p>
                        <p>Urinary Tract Infection (UTI)</p>
                        <p>Vaginal Dryness</p>
                        <p>Women's Libido</p>
                        <p>Abnormal Pap Test</p>
                        <p>Abortion</p>
                        <p>Amenorrhea</p>
                        <p>Bacterial Vaginosis</p>
                        <p>Benign Breast Lumps</p>
                        <p>Breast Infections</p>
                        <p>Chronic Pelvic Pain</p>
                        <p>Endometriosis</p>
                        <p>Fibrocystic Breasts</p>
                        <p>Hysterectomy and Oophorectomy</p>
                        <p>Infertility</p>
                        <p>Mammograms</p>
                        <p>Pelvic Inflammatory Disease (PID)</p>
                        <p>Pevlic Organ Prolapse</p>
                        <p>Uterine Bleeding</p>
                        <p>Uterine Fibroids</p>
                        <p>Vaginal Atrophy</p>
                        <p>Vaginal Cancer</p>

                    </div>
                )}
            </div>
        </div>
    )
}

export default HealthAdvise
