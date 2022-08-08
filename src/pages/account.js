import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios"
import api from "./api";

function Account() {

  const [accountBoolean , setAccountBoolean] = React.useState(false)
  const[deletePro , setDeletePro]= React.useState(false)
  const[deleteProduvtBoolean , setDeleteProduvtBoolean] = React.useState(false)
  const [editProduct , setEditAccount] = React.useState(false)
  const  [ accountId , setAccountId] = React.useState("")
  const  [ removeAccount , setAccountRemove] = React.useState(false)
  const [accountHideBoolena , setAccountHideBoolean] = React.useState(false)
  const [ changePasswordBoolean  , setChangePasswordBoolean] = React.useState(false)
  const [accountInput , setInputAccount] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    role:"",
    email:"",
    password:"",
    image:null
  })
  const product = [
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Medisys",
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "NMCLE Preparation",
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "E-library",
    },
  ];

  const [ accountData , setAccountData] = React.useState([...product])
  const [ editAccountInput , setEditAccountInput] = React.useState({
    name:"",
 role:"",
 email:"",
 oldpassword:"",
 newpassowrd:"",
 confirmpassword:"",
 image:null
  })

  const handleChangePro = (e)=>{
    setInputAccount((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.name==="image" ? e.target.file[0] : e.target.value
      }
    })
      }

      const  EditAccount = (name, role , email , password , id )=>{
        setEditAccount(true)
        const arr = accountData
        arr.map((items)=> items.hide=false)
        setAccountData([...arr])
        let input =editAccountInput
        input.name=name
        input.role=role
        input.email=email
        input.password=password
        setEditAccountInput(input)
        setAccountId(id)
      }
      const editProductHandleChange = (e)=>{
        setEditAccountInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]: e.target.name==="image" ? e.target.file[0] : e.target.value
          }
        })
        console.log(editAccountInput)
      }

//  Save Account
      const SaveAccount = ()=>{
        const formData = new FormData();
        formData.append("name" ,accountInput.name );
        formData.append("password" ,accountInput.post );
        formData.append("image" ,accountInput.image  ,accountInput.image.name );
        formData.append("role" ,accountInput.role )

        if(accountInput.name==="" || accountInput.password==="" || accountInput.image===""  || accountInput.role===""){
          axios.post("url" , formData ,  {headers: { 'content-type': 'multipart/form-data' }} 
           ).then((res)=> console.log(res) ).catch((res)=> console.log(res))
          setAccountData([accountInput , ...accountData])
          setAccountBoolean(false)
        }
        else(
          alert("invalid input")
        )
        setInputAccount((prev)=>{
            return {
                ...prev ,
                name:"",
                role:"",
                email:"",
                password:"",
            }
        })
      }
    

      const hideProduct =(id)=>{
        const arr = accountData
        arr.map((items)=> items.hide=false)
        arr[id].hide=true
        setAccountData([...arr])
        setAccountHideBoolean(true)
       }
       const doubleHiideProduct = (id)=>{
        const arr = accountData
        arr[id].hide=false
        setAccountData([...arr])
        setAccountHideBoolean(false)
      }

      const changePassword =(id , index)=>{
         setChangePasswordBoolean(true)
         const arr = accountData
         arr.map((items)=> items.hide=false)
         setAccountId(index)
      }

      //   ResetPassword
   const ResetPassword = async ()=>{
    const {oldpassword , newpassowrd , confirmpassword } = editAccountInput

    if(oldpassword!=="" || newpassowrd!=="" || confirmpassword!=="" ){
      if(newpassowrd===confirmpassword){
        const res = await  axios.patch(("url"), {
          oldpassword , newpassowrd , confirmpassword 
        })
        if(res.status==="success"){

        }
    

    }  else{
      alert("password didnt match")
    }
    }
    else{
      alert("plx fill the form correctly")
    }
   }

  //  Edditing Account
   const editAccount = async ()=>{

    const { name , role , email } = editAccountInput
    if(name!=="" || role!=="" || email!==""){
        const  res =  await axios.patch(("url") , {
          name , role , email
         })
         if(res.ststud==="success"){

         }
    }
   }

//  Removing Account
  
   const RemoveAccount= async  ()=>{
     const res = await  axios.delete(`${api}/editor/account/delete/${accountId} ` , {
    } )
    if(res.status==="success"){
      //  again fetch data
      setAccountRemove(false)
    }
    setDeletePro(false)
  }
  const instantRemoveAccount = (id , index) =>{
    const arr = accountData
    arr.map((items)=> items.hide=false)
    setAccountData([...arr])
    setAccountId(index)
    setAccountRemove(true)
  }

  return (
    <div>
             {
     removeAccount    && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setAccountRemove(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> RemoveAccount()}>Yes</button>
              <button onClick={()=> setAccountRemove(false)} >No</button>
            </div>

          </div>
        </div>
      }
           {accountBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setAccountBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangePro} value={accountInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Role:</span>
              <input className="mt-1" type="text" name="role" onChange={handleChangePro} value={accountInput.role} />
            </div>
            <div className="d-flex flex-column">
              <span>Email:</span>
              <input className="mt-1" type="text" name="email" onChange={handleChangePro} value={accountInput.email} />
            </div>
            <div className="d-flex flex-column">
              <span>Password:</span>
              <input className="mt-1" type="text" name="password" onChange={handleChangePro} value={accountInput.email} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" onChange={handleChangePro}/>
            </div>
            <button onClick={()=> SaveAccount()}>Save</button>
            </div>
   </div>}
   {changePasswordBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setChangePasswordBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
     
      <div className="d-flex flex-column">
              <span>Old-Password:</span>
              <input className="mt-1" type="text" name="oldpassword" onChange={editProductHandleChange} value={editAccountInput.oldpassword} />
            </div>
            <div className="d-flex flex-column">
              <span>New_Password:</span>
              <input className="mt-1" type="text" name="newpassowrd" onChange={editProductHandleChange} value={editAccountInput.newpassowrd} />
            </div>
            <div className="d-flex flex-column">
              <span>C-Password:</span>
              <input className="mt-1" type="ext" name="confirmpassword" onChange={editProductHandleChange} value={editAccountInput.confirmpassword} />
            </div>
          
            <button onClick={()=> ResetPassword()} >Change Password</button>
            </div>
   </div>}
   {editProduct && <div className="popup_container"> 
      <div className="popup p-4"> 

      <span   onClick={()=>setEditAccount(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
      <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={editProductHandleChange} value={editAccountInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Role:</span>
              <input className="mt-1" type="text" name="role" onChange={editProductHandleChange} value={editAccountInput.role} />
            </div>
            <div className="d-flex flex-column">
              <span>Email:</span>
              <input className="mt-1" type="text" name="email" onChange={editProductHandleChange} value={editAccountInput.email} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" onChange={editProductHandleChange}/>
            </div>
       
            <button onCLick={(editAccount())} >Save The Changes</button>
            </div>
   </div>}
    <div>
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=> setAccountBoolean(true)} >Add Admin</li>
          </ul>
        </span>
      </button>
      <ul className="product_list">
        {accountData.map(({ image, name, post ,hide ,role , email , password ,id }, index) => {
          return (
            <li className="product-list--item">
              <div className="product-list--item-details">
                <img src={image} alt="" />
                <div className="product-list--item-details-name">
                  <h3>{name}</h3>
                </div>
              </div>
              <div className="product-list--item-menu"></div>

              {accountHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(index)}  ></i> : <i className="fas fa-ellipsis-v" onClick={()=> hideProduct(index)}  ></i> }
              { hide && <li className="delete_Edit" >
                <span onClick={()=>instantRemoveAccount(index , id )} >Delete</span>
                <span onClick={(()=> EditAccount(name , role , email , password , id ))} >Edit</span>
                <span onClick={(()=> changePassword( index , id ))} >Change-Password</span>
              </li>} 
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Account;
