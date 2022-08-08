import React from "react";
import "../styles/add_button.css";
import "../styles/team.css";
import axios from "axios"
import api from "./api";


function Team() {
  const fetchTeam = async ()=>{
    const res = await fetch(`${api}/teams`)
    const data = await res.json()
    const arr = data
    arr.map((val)=>{
      return  val.hide=false
    })
    setTeamData([...arr])
  }
  React.useEffect(()=>{
    fetchTeam()
  },[])


  const [teamBoolean , setTeamBoolean] = React.useState(false)
  const [ deleteteam , setDeleteTeam] = React.useState(false)
  const  [ teamId , setTeamId] = React.useState("")
  const  [ removeTeam , setRemoveTeam] = React.useState(false)
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
    instagram:"",
    image:null
  })

  const [teamInput , setInputTeam] = React.useState({
    image:null,
    name:"",
    post:"",
    hide:false,
    email:"",
    facebook:"",
    twitter:"",
    linkedin:"",
    instagram:""
  })


  const [ teamData , setTeamData] = React.useState([])

  const hideTeam =(id ,name, post)=>{
    const arr = teamData
    arr.map((items)=> items.hide=false)
    arr[id].hide=true
    setTeamData([...arr])
    setProHideBoolean(true)
   }

  const handleChangeTeam = (e)=>{
setInputTeam((prev)=>{
  return { ...prev , 
           [e.target.name]: e.target.name=== "image" ? e.target.files[0] : e.target.value
  }
})

  }
  const editTeamHandleChange = (e)=>{
    setTeamEditInput((prev)=>{
    return {
      ...prev,
      [e.target.name] :e.target.name=== "image" ? e.target.files[0] : e.target.value
    }
    })
  }
  const  EditTeam = (index,  imageUrl, name, designation, hide ,
    facebookLink,
    twitterLink,
    linkedinLink,
    instagramLink , id )=>{
    setEditTeam(true)
    setTeamId(index)
    const arr = teamData
    arr.map((items)=> items.hide=false)
    setTeamData([...arr])
    setTeamEditInput((prev)=>{
      return {
        ...prev,
        name:name,
        post:designation,
        facebook:facebookLink,
        twitter:twitterLink,
        linkedin:linkedinLink,
        instagram:instagramLink,
      }
    }
    )
   
    setTeamId(id)
  }
  const doubleHiideTeam = (id)=>{
    const arr = teamData
    arr[id].hide=false
    setTeamData([...arr])
    setProHideBoolean(false)
  }
  //  Deleting Team
  const RemoveTeam= async ()=>{
    // axios.delete("localhost:4000/api/v1/editor/teams/delete" , {
    //   id:teamId
    // } ).then((res)=> fetchTeam() ).catch((err)=> console.log(err))
    const res = await   axios.delete(`${api}/editor/teams/delete/${teamId}` , {
    } )
    if(res==="success"){
      fetchTeam()
      setRemoveTeam(false)
    }
  }

//  Editing Team

  const seveTeamChanges = async  ()=>{
    const {     name, post
    ,email
    ,facebook
    ,twitter
    ,linkedin
    ,instagram
    ,image} = teamEditInput
    const formData = new FormData();
    formData.append("name" ,teamEditInput.name );
    formData.append("post" ,teamEditInput.post );
    formData.append("image" ,teamEditInput.image  ,teamEditInput.image.name );
    formData.append("facebook" ,teamEditInput.facebook )
    formData.append("linkedin" ,teamEditInput.linkedin );
    formData.append("instagram" ,teamEditInput.instagram);
    formData.append("twitter" ,teamEditInput.twitter )

    if(teamEditInput.name!=="" && teamEditInput.email!=="" &&teamEditInput.facebook!=="" && teamEditInput.twitter!=="" && teamEditInput.linkedin!=="" &&  teamEditInput.instagram!=="" && teamEditInput.image!==null  ){
    const res = await  axios.patch((`${api}/editor/teams/edit/${teamId}`) ,  formData ,   {headers: { 'content-type': 'multipart/form-data' }} )
    if(res.status==201){
      setEditTeam(false)
      fetchTeam()
    }
  }else{
    alert("fill the form first")
  }
  }


// Saving Team
  const SaveTeam =  async  ()=>{
    let { name, post
      ,email
      ,facebook
      ,twitter
      ,linkedin
      ,instagram
      ,image} = teamInput
      const formData = new FormData();
      formData.append("name" ,teamInput.name );
      formData.append("post" ,teamInput.post );
      formData.append("image" ,teamInput.image  ,teamInput.image.name );
      formData.append("facebook" ,teamInput.facebook )
      formData.append("linkedin" ,teamInput.linkedin );
      formData.append("instagram" ,teamInput.instagram);
      formData.append("twitter" ,teamInput.twitter )
      if(name!=="" && email!=="" && facebook!=="" && twitter!=="" && linkedin!=="" &&  instagram!=="" && image!==null  ){
       const res = await   axios.post((`${api}/editor/teams/add`) , formData ,   {headers: { 'content-type': 'multipart/form-data' }}  )
             if(res.status===201){
     setTeamBoolean(false)
              fetchTeam()
             }
            }
            else{
              alert("Fill the form first")
            }
      }
  const instantRemoveTeam = (id) =>{
    const arr = teamData
    arr.map((items)=> items.hide=false)
    setTeamData([...arr])
    setTeamId(id)
    setRemoveTeam(true)
  }


  return (
    <div>
         {
     removeTeam    && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setRemoveTeam(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> RemoveTeam()}>Yes</button>
              <button onClick={()=> setRemoveTeam(false)} >No</button>
            </div>
          </div>
        </div>
      }
          {teamBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
                 
      <span   onClick={()=>setTeamBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangeTeam}  />
            </div>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="post" onChange={handleChangeTeam} />
            </div>
            <div className="d-flex flex-column">
              <span>E-mail:</span>
              <input className="mt-1" type="text" name="email" onChange={handleChangeTeam}  />
            </div>
            <div className="d-flex flex-column">
              <span>Linkedin Link:</span>
              <input className="mt-1" type="text" name="linkedin" onChange={handleChangeTeam} />
            </div>
            <div className="d-flex flex-column">
              <span>Facebook Link:</span>
              <input className="mt-1" type="text" name="facebook" onChange={handleChangeTeam}  />
            </div>
               <div className="d-flex flex-column">
              <span>Twiter Link:</span>
              <input className="mt-1" type="text" name="twitter" onChange={handleChangeTeam}  />
            </div>
            <div className="d-flex flex-column">
              <span>Instagrem Link:</span>
              <input className="mt-1" type="text" name="instagram" onChange={handleChangeTeam}/>
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" onChange={handleChangeTeam} />
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
              <input className="mt-1" type="text" name="email" onChange={editTeamHandleChange} value={teamEditInput.email} />
            </div>
            <div className="d-flex flex-column">
              <span>Linkedin Link:</span>
              <input className="mt-1" type="text" name="linkedin" onChange={editTeamHandleChange} value={teamEditInput.linkedin} />
            </div>
            <div className="d-flex flex-column">
              <span>Facebook Link:</span>
              <input className="mt-1" type="text" name="facebook" onChange={editTeamHandleChange} value={teamEditInput.facebook} />
            </div>
               <div className="d-flex flex-column">
              <span>Twiter Link:</span>
              <input className="mt-1" type="text" name="twitter" onChange={editTeamHandleChange} value={teamEditInput.twitter} />
            </div>
            <div className="d-flex flex-column">
              <span>Instagrem Link:</span>
              <input className="mt-1" type="text" name="instagram" onChange={editTeamHandleChange} value={teamEditInput.instagram} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input type="file" name="image"  onChange={editTeamHandleChange} />
            </div>
            <button onClick={()=>seveTeamChanges()}>Save The Changes</button>
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
        {teamData.map(({ imageUrl, name, designation, hide ,
        facebookLink,
        twitterLink,
        linkedinLink,
        instagramLink  ,id } , index) => {
          return (
            <li className="team-list--item" key={id} >
              <div className="team-list--item-details">
                <img src={imageUrl} alt="" />
                <div className="team-list--item-details-name">
                  <h3>{name}</h3>
                  <span className="post_tag">{designation}</span>
                </div>
              </div>
              <div className="admin-list--item-menu"   ></div>
            
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideTeam(index)}  ></i> :  <i className="fas fa-ellipsis-v" onClick={()=>
                  hideTeam(index, name, designation ,
               ) }></i> }

             { hide && <li className="delete_Edit" >
                <span onClick={()=>instantRemoveTeam(id)} >Delete</span>
                <span onClick={()=> EditTeam( index,  imageUrl, name, designation, hide ,
        facebookLink,
        twitterLink,
        linkedinLink,
        instagramLink , id  )}>Edit</span>
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
