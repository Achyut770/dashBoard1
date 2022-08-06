import React from "react";
import "../styles/add_button.css";
import "../styles/team.css";
import axios from "axios"

function Team() {

  const [teamBoolean , setTeamBoolean] = React.useState(false)
  const [ deleteteam , setDeleteTeam] = React.useState(false)
  const[deleteTeamBoolean , setDeleteTeamBoolean] = React.useState(false)
  const [ editTeam , setEditTeam] =React.useState(false)
  const [proHideBoolena , setProHideBoolean] = React.useState(false)

  const [ teamEditInput , setTeamEditInput] = React.useState({
    name:"",
    post:"",
    email:"",
    facebook:"",
    twitter:"",
    linkedin:"",
    instagram:""
  })
  const [teamInput , setInputTeam] = React.useState({
    image:
    "https://assets.codepen.io/250758/internal/avatars/users/default.png",
    name:"",
    post:"",
    hide:false,
    email:"",
    facebook:"",
    twitter:"",
    linkedin:"",
    instagram:""

  })
  const team = [
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "CEO",
      hide:false
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "Managing Director",
      hide:false

    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "CTO",
      hide:false

    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
      post: "CFO",
      hide:false
    },
  ];

  const [ teamdata , setTeamData] = React.useState(team)

  const hideTeam =(id ,name, post)=>{
    const arr = teamdata
    arr.map((items)=> items.hide=false)
    arr[id].hide=true
    setTeamData([...arr])
    setProHideBoolean(true)

   }

  const SaveTeam = ()=>{
    let Name = teamInput.name
    if(Name!=""){
      setTeamData([teamInput , ...teamdata])
      setTeamBoolean(false)
      setInputTeam("")
    } else{
      return
    }
  }

  const handleChangeTeam = (e)=>{
setInputTeam((prev)=>{
  return { ...prev , 
           [e.target.name]: e.target.value
  }
})
  }
  const editTeamHandleChange = (e)=>{
    setTeamEditInput((prev)=>{
    return {
      ...prev,
      [e.target.name] : e.target.value
    }
    })
  }

  const  EditTeam = (id, name, post,
    email,
    facebook,
    twitter,
    linkedin,
    instagram)=>{
    setEditTeam(true)
    const arr = teamdata
    arr.map((items)=> items.hide=false)
    setTeamData([...arr])
    setTeamEditInput((prev)=>{
      return {
        ...prev,
        name:name,
        post:post,
        email:email,
        facebook:facebook,
        twitter:twitter,
        linkedin:linkedin,
        instagram:instagram
      }
    })
  }
  const RemoveTeam=(id)=>{
    axios.delete("url" , {
    } ).then((res)=>console.log(res)).catch((err)=> console.log(err))
    setTeamData((prev)=>{
     return prev.filter((items,index)=>{
         return id!=index
     })
    })
    setDeleteTeam(false)
  }
  const doubleHiideTeam = (id)=>{
    const arr = teamdata
    arr[id].hide=false
    setTeamData([...arr])
    setProHideBoolean(false)
  }

  return (
    <div>
          {teamBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
                 
      <span   onClick={()=>setTeamBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangeTeam} value={teamInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="post" onChange={handleChangeTeam} value={teamInput.post} />
            </div>
            <div className="d-flex flex-column">
              <span>E-mail:</span>
              <input className="mt-1" type="text" name="email" onChange={handleChangeTeam} value={teamInput.email} />
            </div>
            <div className="d-flex flex-column">
              <span>Linkedin Link:</span>
              <input className="mt-1" type="text" name="linkedin" onChange={handleChangeTeam} value={teamInput.linkedin} />
            </div>
            <div className="d-flex flex-column">
              <span>Facebook Link:</span>
              <input className="mt-1" type="text" name="facebook" onChange={handleChangeTeam} value={teamInput.facebook} />
            </div>
               <div className="d-flex flex-column">
              <span>Twiter Link:</span>
              <input className="mt-1" type="text" name="twitter" onChange={handleChangeTeam} value={teamInput.twitter} />
            </div>
            <div className="d-flex flex-column">
              <span>Instagrem Link:</span>
              <input className="mt-1" type="text" name="instagram" onChange={handleChangeTeam} value={teamInput.instagram} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="instagram"/>
            </div>

            <button onClick={()=> SaveTeam()}>Save</button>
            </div>
   </div>}
   {editTeam && <div className="popup_container"> 
      <div className="popup p-4"> 
                 
      <span   onClick={()=>setEditTeam(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={editTeamHandleChange} value={teamEditInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="post" onChange={editTeamHandleChange} value={teamEditInput.post} />
            </div>
            <div className="d-flex flex-column">
              <span>E-mail:</span>
              <input className="mt-1" type="text" name="email" onChange={handleChangeTeam} value={teamEditInput.email} />
            </div>
            <div className="d-flex flex-column">
              <span>Linkedin Link:</span>
              <input className="mt-1" type="text" name="linkedin" onChange={handleChangeTeam} value={teamEditInput.linkedin} />
            </div>
            <div className="d-flex flex-column">
              <span>Facebook Link:</span>
              <input className="mt-1" type="text" name="facebook" onChange={handleChangeTeam} value={teamEditInput.facebook} />
            </div>
               <div className="d-flex flex-column">
              <span>Twiter Link:</span>
              <input className="mt-1" type="text" name="twitter" onChange={handleChangeTeam} value={teamEditInput.twitter} />
            </div>
            <div className="d-flex flex-column">
              <span>Instagrem Link:</span>
              <input className="mt-1" type="text" name="instagram" onChange={handleChangeTeam} value={teamEditInput.instagram} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" />
            </div>
            <button>Save The Changes</button>
            </div>
      
   </div>}
    <div>
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=> setTeamBoolean(true)} >Add Team</li>
          </ul>
        </span>
      </button>
      <ul className="team_list">
        {teamdata.map(({ image, name, post,hide , email,
        facebook,
        twitter,
        linkedin,
        instagram }, id) => {
          return (
            <li className="team-list--item">
              <div className="team-list--item-details">
                <img src={image} alt="" />
                <div className="team-list--item-details-name">
                  <h3>{name}</h3>
                  <span className="post_tag">{post}</span>
                </div>
              </div>
              <div className="admin-list--item-menu"   ></div>
            
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideTeam(id)}  ></i> :  <i className="fas fa-ellipsis-v" onClick={()=>
                  hideTeam(id, name, post ,
               ) }></i> }

             { hide && <li className="delete_Edit" >
                <span onClick={()=>RemoveTeam(id)} >Delete</span>
                <span onClick={()=> EditTeam(id, name, post ,      email,
                    facebook,
                    twitter,
                    linkedin,
                    instagram)}>Edit</span>
              </li>} 
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Team;
