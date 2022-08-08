import React from "react";
import "../styles/subscription.css";
import axios from "axios"
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
    const [ enquiryboolean , setEnquiryBoolean ] = React.useState(false)
    const  [ enquiryId , setEnquiryId] = React.useState("")
    const  [ removeEnquiries , setRemoveEnquiries] = React.useState(false)
const removeEnquiry = (id)=>{
    axios.delete("url" , {
        id:id
    } ).then((res)=>console.log(res)).catch((err)=> console.log(err))
    setSubscriptionData((prev , index)=>{
  return id!==index
    })

}

const instantRemoveEnquiries = (id) =>{
  setRemoveEnquiries(true)
}
  return (
    <div className="aaa">
         {
     removeEnquiries    && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setRemoveEnquiries(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> removeEnquiry()}>Yes</button>
              <button onClick={()=> setRemoveEnquiries(false)} >No</button>
            </div>

          </div>
        </div>
}
         {enquiryboolean &&<div className="popup_container library"> 
      <div className="popup2"> 
      <span   onClick={()=>setEnquiryBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="">
              <span><b>Name:</b></span>
              <span> Achyut Adhikari</span>
            </div>
            <div className="">
              <span><b>Email:</b></span>
              <span>achyut313@gmail.com</span>
            </div>
            <div className="">
              <span><b>Phone:</b></span>
              <span>9849485210</span>
            </div>
            <div className="">
              <span><b>Message:</b></span>
              <span>My Name is Achyut Adhikari . I live in Balaju , Kathmandu. I Am a frontend Developer.</span>
            </div>
            <div className="">
              <span><b>Phone:</b></span>
              <span>9849485210</span>
            </div>
            <div className="d-flex flex-column">
              <span><b>Image:</b></span>
            </div>
            </div>
   </div>}
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
            <div className="delete_subscription" onClick={()=> removeEnquiry()}><i class="fa-solid fa-trash-can"></i></div>
        </div>
        <div className="d-flex flex-row  align-items-center subscriptionContainer" >
            <div className="name">Achyut Adhikari</div>
            <div className="email"> <i class="fa-solid fa-envelope"></i>  achyut313@gmail.com</div>
            <div className="phone">  <i class="fa-solid fa-phone"></i>  98236462252</div>
            <div className="delete_subscription" onClick={()=> removeEnquiry()}><i class="fa-solid fa-trash-can"></i></div>
        </div>
        <div className="d-flex flex-row  align-items-center subscriptionContainer" >
            <div className="name">Achyut Adhikari</div>
            <div className="email">  <i class="fa-solid fa-envelope"></i>  achyut313@gmail.com</div>
            <div className="phone"> <i class="fa-solid fa-phone"></i> 98236462252</div>
            <div className="delete_subscription" onClick={()=> instantRemoveEnquiries()}><i class="fa-solid fa-trash-can"></i></div>
        </div>
        <div className="d-flex flex-row  align-items-center subscriptionContainer" >
            <div className="name">Achyut Adhikari</div>
            <div className="email"> <i class="fa-solid fa-envelope"></i> achyut313@gmail.com</div>
            <div className="phone">  <i class="fa-solid fa-phone"></i> 98236462252</div>
            <div className="delete_subscription" onClick={()=> removeEnquiry()}>  <i class="fa-solid fa-eye" onClick={()=> setEnquiryBoolean(true)} ></i>  <i class="fa-solid fa-trash-can"></i></div>
        </div>

        </div>
        </div>
        </div>
  );
}
export default Enquiry;
