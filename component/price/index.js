// import React, { useState } from 'react'

// export default function Price_Sec() {
//     const [isSwitch, setIsSwitch] = useState(true);

//     const handleToggle = () => {
//         setIsSwitch(!isSwitch);
//     };

  

//     const plan = {
//         Plan: [
//             {
//                 credit: 'No credit card required',
//                 plan: 'Free Plan',
//                 Price: '$0',
//                 Time: 'One Month Free Trial',
//                 word: 'Access to free articles',
//                 acess: 'Weekly newsletter',
//                 tool: 'Basic community access',
//                 article: 'Commenting on articles',
//                 user: '1 User Access',
//                 support: 'Standard support',
//                 upgrade: 'Easy to upgrade premium plan',
//             },
//             {
//                 plan: 'Premium Plan',
//                 Price: '$6.99',
//                 Time: 'Monthly',
//                 word: 'Everything in Free Plan',
//                 acess: 'Access to premium articles',
//                 tool: 'Ad-free experience',
//                 article: 'Early access to new articles',
//                 user: '1 User Access',
//                 support: 'Premium support',
//                 upgrade: 'Easy to upgrade premium plan',
//             },
//             {
//                 plan: 'Business Plan',
//                 Price: '$9.99',
//                 Time: 'Monthly',
//                 word: 'Everything in Premium Plan',
//                 acess: 'Featured advertising space',
//                 tool: 'Sponsored content opportunities',
//                 article: 'Custom newsletter integration',
//                 user: '1 User Access',
//                 support: 'Premium support',
//                 upgrade: 'Easy to upgrade premium plan',
//             },
//         ],
//         YearlyPlan: [
//             {
//                 credit: 'No credit card required',
//                 plan: 'Free Plan',
//                 Price: '$0',
//                 Time: 'One Month Free Trial',
//                 word: 'Access to free articles',
//                 acess: 'Weekly newsletter',
//                 tool: 'Basic community access',
//                 article: 'Commenting on articles',
//                 user: '1 User Access',
//                 support: 'Standard support',
//                 upgrade: 'Easy to upgrade premium plan',
//             },
//             {
//                 plan: 'Premium Plan',
//                 del_price: '9.99',
//                 Price: '$6.99',
//                 Time: 'Monthly',
//                 word: 'Everything in Free Plan',
//                 acess: 'Access to premium articles',
//                 tool: 'Ad-free experience',
//                 article: 'Early access to new articles',
//                 user: '1 User Access',
//                 support: 'Premium support',
//                 upgrade: 'Easy to upgrade premium plan',
//             },
//             {
//                 plan: 'Business Plan',
//                 del_price: '11.99',
//                 Price: '$9.99',
//                 Time: 'Monthly',
//                 word: 'Everything in Premium Plan',
//                 acess: 'Featured advertising space',
//                 tool: 'Sponsored content opportunities',
//                 article: 'Custom newsletter integration',
//                 user: '1 User Access',
//                 support: 'Premium support',
//                 upgrade: 'Easy to upgrade premium plan',
//             },
//         ],
//     }

//     return (
//         <div className="home_work_main">
//             <h2>🚀 Get the Best Value with Our Pricing</h2>
//             <p>we believe that quality should be accessible to everyone. That’s why we’ve designed our pricing plans to offer you the best value for your investment. Whether you’re a casual reader or a dedicated subscriber, we have a plan that suits your needs.</p>
//             <div className="switch_button">
//                 <button title="Monthly" className={`monthly ${!isSwitch ? 'active' : ''}`} onClick={handleToggle}>Monthly</button>
//                 <button title="Yearly" className={`yearly ${isSwitch ? 'active' : ''}`} onClick={handleToggle}>Yearly</button>
//             </div>
//             <p title="Save 20% with annual plans">Save <span>20%</span> with annual plans</p>
//             <div className="subscription_plan_main">
//                 {
//                     !isSwitch ? (
//                         <>
//                             {
//                                 plan.Plan.map((el, index) => {
//                                     return (
//                                         <>
//                                             <div key={index} className="plan_row">
//                                                 {
//                                                     index === 0 &&
//                                                     <div className="notice">
//                                                         {el.credit}
//                                                     </div>
//                                                 }
//                                                 <div className="plan_top">
//                                                     <div className="plan_Info">
//                                                         <h3 className="plan_name">{el.plan}</h3>
//                                                         <div className="plan_detail">
//                                                             <h4 className="plan_price">{el.Price}</h4>
//                                                             <div className="Badge">{el.Time}</div>
//                                                         </div>
//                                                     </div>
//                                                     <ul className="plan_details">
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.word}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.acess}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.tool}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.article}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.user}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.support}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.upgrade}</p>
//                                                         </li>
//                                                     </ul>
//                                                     <a href="#">Get Started</a>
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </>
//                     ) : (
//                         <>
//                             {
//                                 plan.YearlyPlan.map((el, index) => {
//                                     return (
//                                         <>
//                                             <div key={index} className="plan_row">
//                                                 {
//                                                     index === 0 &&
//                                                     <div className="notice">
//                                                         {el.credit}
//                                                     </div>
//                                                 }
//                                                 <div className="plan_top">
//                                                     <div className="plan_Info">
//                                                         <h3 className="plan_name">{el.plan}</h3>
//                                                         <div className="plan_detail">
//                                                             {
//                                                                 index !== 0 &&
//                                                                 <p className="discount_price">
//                                                                     {el.del_price}
//                                                                 </p>
//                                                             }
//                                                             <h4 className="plan_price">{el.Price}</h4>
//                                                             <div className="Badge">{el.Time}</div>
//                                                         </div>
//                                                     </div>
//                                                     <ul className="plan_details">
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.word}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.acess}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.tool}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.article}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.user}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.support}</p>
//                                                         </li>
//                                                         <li>
//                                                             <div className="icon">
//                                                                 <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 32 32" height="18px" width="18px" xmlns="http://www.w3.org/2000/svg"><path d="M 14.6875 3 L 14.375 3.28125 L 7.59375 10 L 2 10 L 2 26 L 18.84375 26 C 20.253906 26 21.484375 25.003906 21.78125 23.625 L 23.4375 16 L 27 16 C 28.644531 16 30 14.644531 30 13 C 30 11.355469 28.644531 10 27 10 L 16.25 10 L 16.4375 9.25 C 16.640625 9.09375 16.769531 9.027344 17.0625 8.625 C 17.53125 7.984375 18 6.992188 18 5.65625 C 18 4.230469 16.710938 3 15.09375 3 Z M 15.40625 5.09375 C 15.828125 5.175781 16 5.347656 16 5.65625 C 16 6.558594 15.726563 7.117188 15.46875 7.46875 C 15.210938 7.820313 15.03125 7.90625 15.03125 7.90625 L 14.6875 8.09375 L 14.5625 8.5 L 13.96875 10.75 L 13.65625 12 L 27 12 C 27.566406 12 28 12.433594 28 13 C 28 13.566406 27.566406 14 27 14 L 21.8125 14 L 21.625 14.78125 L 19.84375 23.21875 C 19.742188 23.6875 19.320313 24 18.84375 24 L 9 24 L 9 11.40625 Z M 4 12 L 7 12 L 7 24 L 4 24 Z"></path></svg>
//                                                             </div>
//                                                             <p className="text">{el.upgrade}</p>
//                                                         </li>
//                                                     </ul>
//                                                     <a href="#">Get Started</a>
//                                                 </div>
//                                             </div>
//                                         </>
//                                     )
//                                 })
//                             }
//                         </>
//                     )
//                 }
//             </div>
//         </div>
//     )
// }
