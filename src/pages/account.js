import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios"

function Account() {

  const [accountBoolean , setAccountBoolean] = React.useState(false)
  const[deletePro , setDeletePro]= React.useState(false)
  const[deleteProduvtBoolean , setDeleteProduvtBoolean] = React.useState(false)
  const [editProduct , setEditProduct] = React.useState(false)
  const [proHideBoolena , setProHideBoolean] = React.useState(false)
  const [productInput , setInputProduct] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    role:"",
    email:"",
    password:"",
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
 confirmpassword:""
  })

  const SaveAccount = ()=>{
    if(productInput.name==="" || productInput.password==="" || productInput.image===""  || productInput.role===""){
      axios.post("url" ,{
        namae:productInput.name,
        password:productInput.password,
        image:productInput.image,
        role:productInput.role
      } ).then((res)=> console.log(res) ).catch((res)=> console.log(res))
      setAccountData([productInput , ...accountData])
      setAccountBoolean(false)
    }
    else(
      alert("invalid input")
    )
    let Name = productInput.name
    if(Name!=""){
      setAccountData([productInput , ...accountData])
      setAccountBoolean(false)
    } else{
      return
    }
    setInputProduct((prev)=>{
        return {
            ...prev ,
            name:"",
            role:"",
            email:"",
            password:"",
        }
    })
  }

  const handleChangePro = (e)=>{
    setInputProduct((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.value
      }
    })
      }
      const RemoveProduct=(id)=>{
        setAccountData((prev)=>{
         return prev.filter((items,index)=>{
             return id!=index
         })
        })
        setDeletePro(false)
      }
      const  EditProduct = (name, role , email , password )=>{
        setEditProduct(true)
        const arr = accountData
        arr.map((items)=> items.hide=false)
        setAccountData([...arr])
        let input =editAccountInput
        input.name=name
        input.role=role
        input.email=email
        input.password=password
        setEditAccountInput(input)
      }
      const editProductHandleChange = (e)=>{
        setEditAccountInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]:e.target.value
          }
        })
      }

      const hideProduct =(id)=>{
        const arr = accountData
        arr.map((items)=> items.hide=false)
        arr[id].hide=true
        setAccountData([...arr])
        setProHideBoolean(true)
       }
       const doubleHiideProduct = (id)=>{
        const arr = accountData
        arr[id].hide=false
        setAccountData([...arr])
        setProHideBoolean(false)
      }
  return (
    <div>
           {accountBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setAccountBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangePro} value={productInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Role:</span>
              <input className="mt-1" type="text" name="role" onChange={handleChangePro} value={productInput.role} />
            </div>
            <div className="d-flex flex-column">
              <span>Email:</span>
              <input className="mt-1" type="text" name="email" onChange={handleChangePro} value={productInput.email} />
            </div>
       
            <button onClick={()=> SaveAccount()}>Save</button>
            </div>
   </div>}
   {editProduct && <div className="popup_container"> 
      <div className="popup p-4"> 
                 
      <span   onClick={()=>setEditProduct(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
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
              <span>Old-Password:</span>
              <input className="mt-1" type="oldpassword" name="password" onChange={editProductHandleChange} value={editAccountInput.oldpassword} />
            </div>
            <div className="d-flex flex-column">
              <span>New_Password:</span>
              <input className="mt-1" type="newpassword" name="password" onChange={handleChangePro} value={editAccountInput.newpassword} />
            </div>
            <div className="d-flex flex-column">
              <span>C-Password:</span>
              <input className="mt-1" type="confirmpassword" name="password" onChange={handleChangePro} value={editAccountInput.confirmpassword} />
            </div>
            <button>Save The Changes</button>
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
        {accountData.map(({ image, name, post ,hide ,role , email , password  }, id) => {
          return (
            <li className="product-list--item">
              <div className="product-list--item-details">
                <img src={image} alt="" />
                <div className="product-list--item-details-name">
                  <h3>{name}</h3>
                  {/* <span className="post_tag">{post}</span> */}
                </div>
              </div>
              <div className="product-list--item-menu"></div>
      
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(id)}  ></i> : <i className="fas fa-ellipsis-v" onClick={()=> hideProduct(id)}  ></i> }

              { hide && <li className="delete_Edit" >
                <span onClick={()=>RemoveProduct(id)} >Delete</span>
                <span onClick={(()=> EditProduct(name , role , email , password ))} >Edit</span>
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
