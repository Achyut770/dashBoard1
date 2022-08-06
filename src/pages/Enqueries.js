import React from "react";
import "../styles/subscription.css";

function Enquiry() {
    const subscription= [{
        name:"Achyut Adhikari",
        email:"achyut313@gmail.com",
        phone:984380,
    },
    {
        name:"Achyut Adhikari",
        email:"achyut313@gmail.com",
        phone:9849430,
    },
    {
        name:"Achyut Adhikari",
        email:"achyut313@gmail.com",
        phone:984380,
    },
    {
        name:"Achyut Adhikari",
        email:"achyut313@gmail.com",
        phone:9849430,
    }
]
    const [subscriptionData , setSubscriptionData] = React.useState([...subscription])
const removeSubscription = (id)=>{
    setSubscriptionData((prev , index)=>{
  return id!==index
    })
}
  return (
    <div className="aaa">
<div className="subscription_main_container">  <div className=" subscription_container d-flex flex-column">
    <div className="d-flex flex-row subscription_header">
        <div className="name">Name</div>
        <div className="email">Email</div>
        <div className="phone">Phone</div>
    </div>

        <div className="d-flex flex-row  align-items-center subscriptionContainer" >
            <div className="name">Achyut Adhikari</div>
            <div className="email"> <i class="fa-solid fa-envelope"></i> achyut313@gmail.com</div>
            <div className="phone"> <i class="fa-solid fa-phone"></i> 98236462252</div>
            <div className="delete" onClick={()=> removeSubscription()}><i class="fa-solid fa-trash-can"></i></div>
        </div>
        <div className="d-flex flex-row  align-items-center subscriptionContainer" >
            <div className="name">Achyut Adhikari</div>
            <div className="email"> <i class="fa-solid fa-envelope"></i>  achyut313@gmail.com</div>
            <div className="phone">  <i class="fa-solid fa-phone"></i>  98236462252</div>
            <div className="delete" onClick={()=> removeSubscription()}><i class="fa-solid fa-trash-can"></i></div>
        </div>
        <div className="d-flex flex-row  align-items-center subscriptionContainer" >
            <div className="name">Achyut Adhikari</div>
            <div className="email">  <i class="fa-solid fa-envelope"></i>  achyut313@gmail.com</div>
            <div className="phone"> <i class="fa-solid fa-phone"></i> 98236462252</div>
            <div className="delete" onClick={()=> removeSubscription()}><i class="fa-solid fa-trash-can"></i></div>
        </div>
        <div className="d-flex flex-row  align-items-center subscriptionContainer" >
            <div className="name">Achyut Adhikari</div>
            <div className="email"> <i class="fa-solid fa-envelope"></i> achyut313@gmail.com</div>
            <div className="phone">  <i class="fa-solid fa-phone"></i> 98236462252</div>
            <div className="delete" onClick={()=> removeSubscription()}><i class="fa-solid fa-trash-can"></i></div>
        </div>

        </div>
        </div>
        </div>
  );
}
export default Enquiry;
