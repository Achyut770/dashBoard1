import React from "react";
import "../styles/admin.css";
import "../styles/add_button.css";
import AdminCollect from "./AdminCollect";
import axios from "axios";
import api from "./api";
function Admin() {
  const [ editAdminInput , setEditADminInput] = React.useState({
    name:"",
    phone:"",
    email:""
})
const  [ deleteBoolean , setDeleteBoolean] = React.useState(false)
const [ deleteId , setDeleteId] = React.useState("")
const [ deleteAdmin , setDeleteAdmin] = React.useState(false)
const [edit , setEdit] = React.useState(false)
  const [adminBoolean , setAdminBoolean] = React.useState(false)
  const [adminInput , setInputAdmin] = React.useState({
    id:"",
    image:null,
    name:"",
    post:"Admin", 
    hide:false,
    phone : "",
    email:""
  })
  const admin = [
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "Admin",
      hide:false
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "Admin",
      hide:false
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "Admin",
      hide:false
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "Admin",
      hide:false
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "Admin",
      hide:false
    },
  ];
const [ admindata , setAdminData] = React.useState(admin)


  const handleChange = (e)=>{
setInputAdmin((prev)=>{
  return { ...prev , 
           [e.target.name]: e.target.value
  }
})
  }
        
  const editClick =(name)=>{
    const arr = admindata
    arr.map((items)=> items.hide=false)
    setAdminData([...arr])
    setEdit(true)
    setEditADminInput((prev)=>{
      return {
        ...prev ,
        name:name
      }
    })
  }
 
  const handleChangeEditAdmin =(e)=>{
    setEditADminInput((prev)=>{
     return {
        ...prev,
        [e.target.name] : e.target.value
     }
    })
  }


//  Saving Admin
const Save = ()=>{
    
  if(adminInput.name!=="" || adminInput.post!==""){
    axios.post(("url"), {
      name:adminInput.name,
      post:adminInput.post
    }).then((res)=> console.log(res)).catch((res)=> console.log(res))
  }
      let Name = adminInput.name
      if(Name!=""){
        setAdminData([adminInput , ...admindata])
        setAdminBoolean(false)
        setInputAdmin("")
      } 
    }
    
  //  Editing Admin
  const editAdmin =(id,)=>{
    setEdit((prev)=>{
      return false
    })
    const adData =  admindata
    adData[id].name= editAdminInput.name
    setAdminData([...adData])
    alert(adData[id].name)
  }
  const hideAdmin =(id)=>{
    const arr = admindata
    arr.map((items)=> items.hide=false)
    arr[id].hide=true
    setAdminData([...arr])
   }

  //   Deleting Admin
   const setRemoveAdmin=()=>{
    axios.delete("url" , {
      id:deleteId
    } ).then((res)=>console.log(res)).catch((err)=> console.log(err))
    setDeleteBoolean(false)
      setDeleteAdmin(false)
    }

    const adminDelete =(id)=>{
      setDeleteId(id)
      console.log(id)
      const arr = admindata
      arr.map((items)=> items.hide=false)
      setAdminData([...arr])
      setDeleteBoolean(true)
    }

    const adminClick =()=>{
      setAdminBoolean(false)
    }

  return (
    <div>
      {
        deleteBoolean && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setDeleteBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> setRemoveAdmin()}>Yes</button>
              <button onClick={()=> setDeleteBoolean(false)} >No</button>
            </div>

          </div>
        </div>
      }
      {adminBoolean && <div className="popup_container"> 
      <div className="popup p-4">           
      <span   onClick={()=>adminClick()} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChange}  />
            </div>
            <button onClick={()=> Save()}>Save</button>
            </div>
   </div>}
   {edit && <div className="popup_container"> 
            <div className="popup p-4"> 
                       
            <span   onClick={()=>setEdit(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>

                  <div className="d-flex flex-column">
                    <span>Name:</span>
                    <input className="mt-1" type="text" name="name"  value={editAdminInput.name} onChange={handleChangeEditAdmin} />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Email:</span>
                    <input className="mt-1" type="text" name="name"  value={editAdminInput.name} onChange={handleChangeEditAdmin} />
                  </div>
                  <div className="d-flex flex-column">
                    <span>Phone:</span>
                    <input className="mt-1" type="text" name="name"  value={editAdminInput.name} onChange={handleChangeEditAdmin} />
                  </div>
                  <button onClick={()=>editAdmin()}>Edit</button>
                  </div>
            
         </div>}
    <div className="admin_Container">
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=> setAdminBoolean(true)} >Add Admin</li>
          </ul>
        </span>
      </button>
      <ul className="admin_list">
        {admindata.map(({ image, name, post ,hide }, id) => {
          return (
            <div>
  
        

            <li className="admin-list--item">
              <div className="admin-list--item-details">
                <img src={image} alt="" />
                <div className="admin-list--item-details-name">
                  <h3>{name}</h3>
                  <span className="post_tag">{post}</span>
                </div>
              </div>
              <div className="admin-list--item-menu"  ></div>
              <i className="fas fa-ellipsis-v" onClick={()=>
                  hideAdmin(id)
             } ></i>    { hide && <li className="delete_Edit" >
             <span onClick={()=>adminDelete(id)} >Delete</span>
             <span onClick={()=>editClick(name)} >Edit</span>
           </li>}
             </li>
</div>
          );
        })}
      </ul>
    </div>
    </div>

  );
}

export default Admin;
