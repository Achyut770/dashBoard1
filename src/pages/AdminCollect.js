import React from "react";
import "../styles/admin.css";
import "../styles/add_button.css";

function AdminCollect({  admindata , setAdminData , hide , image, name, post ,id ,setAdminBoolean}) {
    const [ deleteAdmin , setDeleteAdmin] = React.useState(false)
    const [edit , setEdit] = React.useState(false)
    const [ editAdminInput , setEditADminInput] = React.useState({
        name:""
    })
    const setRemoveAdmin=(id)=>{
        setAdminData((prev)=>{
         return prev.filter((items,index)=>{
             return id!=index
         })
        })
        setDeleteAdmin(false)
      }
      
      const editClick =()=>{
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
      const editAdmin =()=>{
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

  return (
    <div>
            {edit && <div className="popup_container"> 
            <div className="popup p-4"> 
                       
            <span   onClick={()=>setEdit(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>

                  <div className="d-flex flex-column">
                    <span>Name:</span>
                    <input className="mt-1" type="text" name="name"  value={editAdminInput.name} onChange={handleChangeEditAdmin} />
                  </div>
                  <button onClick={()=>editAdmin}>Edit</button>
                  </div>
            
         </div>}
        

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
             <span onClick={()=>setRemoveAdmin(id)} >Delete</span>
             <span onClick={()=>editClick(id)} >Edit</span>
           </li>} 
             </li>
</div>

  );
}

export default AdminCollect;
