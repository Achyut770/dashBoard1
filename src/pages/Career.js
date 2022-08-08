import React from "react";
import "../styles/career.css";
import "../styles/add_button.css";
import axios from "axios";
import api from "./api";

function Career() {

  const fetchCareer = async ()=>{
    const res = await fetch(`${api}/careers`)
    const data = await res.json()
    const arr = data
    arr.map((val)=>{
      return  val.hide=false
    })
    setCareerData([...arr])
  }
    React.useEffect(()=>{
      fetchCareer()
    },[])

  const [careerBoolean , setCareerBoolean] = React.useState(false)
  const [ deleteCareer , setDeleteCareer] = React.useState(false)
  const [careerHideBoolean , setCareerHideBoolean] = React.useState(false)
  const  [ careerId , setCareerId] = React.useState("")
  const  [ removeCareer , setRemoveCareer] = React.useState(false)
  const [careerInput , setInputcareer] = React.useState({
    id:"",
    title:"",
    hide:false,
    vacancy:"",
    deadline:"",
    shortDescription:"",
    longDescription:""
  })
  const [editCareer, setEditCareer] = React.useState(false)
  const [editInput , setEditInput] = React.useState({
    id:"",
    title:"",
    vacancy:"",
    deadline:"",
    shortDescription:"",
    longDescription:""
  })

  const [ careerData , setCareerData] = React.useState([])
  const hideCareer =(id, title , vacancy , deadline)=>{
   const arr = careerData
   arr.map((items)=> items.hide=false)
   arr[id].hide=true
   setCareerData([...arr])
   let edit = editInput
   edit.title=title
   edit.vacancy=vacancy
   edit.deadline=deadline
   setEditInput({...edit})
   setCareerHideBoolean(true)
  }

  const handleChangeCareer = (e)=>{
setInputcareer((prev)=>{
  return { ...prev , 
           [e.target.name]: e.target.value
  }
})
  }

const editHandleChange = (e)=>{
  setEditInput((prev)=>{
    return {
      ...prev , 
    [e.target.name]: e.target.value
    }
  })
}
  const  EditCareer = (title, salary , deadline , shortDescription , longDiscription , id)=>{
    const arr = careerData
    arr.map((items)=> items.hide=false)
    setCareerData([...arr])
    setEditInput((prev)=>{
      return {
        ...prev,
        title:title ,
        vacancy:salary,
        deadline:deadline,
        shortDescription:shortDescription,
        longDiscription:longDiscription
      }
    })
    setCareerId(id)
    setEditCareer(true)
  }

  const doubleHiideCareer = (id)=>{
    const arr = careerData
    arr[id].hide=false
    setCareerData([...arr]) 
    setCareerHideBoolean(false)
  }

//  Removing Career
const RemoveCareer= async (id)=>{
  const res = await  axios.delete(`${api}/editor/careers/delete/${careerId}`,{
  } )
  if(res==="success"){
    setRemoveCareer(false)
  }
  setDeleteCareer(false)
}

//   Saving Carrer
const SaveCareer = async ()=>{
  if(careerInput.title!=="" || careerInput.vacancy!=="" || careerInput.deadline!=="" || careerInput.shortDescription!==""){
  const res = await    axios.post(`${api}/editor/careers/add`,{
      namae:careerInput.title,
      vacancy:careerInput.vacancy,
      salary:careerInput.deadline,  // Salary .........................
      longDescription:careerInput.shortDescription
    } )
  if(res.status= "success"){
    setCareerBoolean(false)
    fetchCareer()
    setInputcareer((prev)=>{
      return {
        ...prev , 
        id:"",
        title:"",
        vacancy:"",
        deadline:"",
        shortDescription:"",
        longDescription:""
      }
    })
  }
  }
  else(
    alert("invalid input")
  )
}


  //  Editing Carrer 
  const SaveCarrerChanges =()=>{
    if(editInput.title!=="" || editInput.vacancy!=="" || editInput.deadline!==""){
      axios.patch( `${api}/editor/careers/edit/${careerId}`, {
        title:editInput.title,
       vacancy:editInput.vacancy,
       deadline:editInput.deadline,
      }).then((res)=> console.log(res)).catch((res)=> console.log(res))
      setEditCareer(true)
    }
    else{
      alert("Invalid Input")
    }
  }


  const instantRemoveCareer = (id) =>{
    const arr = careerData
    arr.map((items)=> items.hide=false)
    setCareerData([...arr])
    setCareerId(id)
    setRemoveCareer(true)
  }



  return (
    <div>
               {
     removeCareer    && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setRemoveCareer(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> RemoveCareer()}>Yes</button>
              <button onClick={()=> setRemoveCareer(false)} >No</button>
            </div>

          </div>
        </div>
      }
       {careerBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setCareerBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="title" onChange={handleChangeCareer} value={careerInput.title} />
            </div>
            <div className="d-flex flex-column">
              <span>No Of Vacancy:</span>
              <input className="mt-1" type="text" name="vacancy" onChange={handleChangeCareer} value={careerInput.vacancy} />
            </div>
            <div className="d-flex flex-column">
            <div className="d-flex flex-column">
              <span>shortDescription:</span>
              <input className="mt-1" type="text" name="shortDescription" onChange={handleChangeCareer} value={careerInput.shortDescription} />
            </div>
              <span>DeadLine:</span>
              <input className="mt-1" type="text" name="deadline" onChange={handleChangeCareer} value={careerInput.deadline} />
            </div>
          
           
            <button onClick={()=> SaveCareer()}>Save</button>
            </div>
   </div>}
   {editCareer && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setEditCareer(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="title" onChange={editHandleChange} value={editInput.title} />
            </div>
            <div className="d-flex flex-column">
              <span>No of Vacancy:</span>
              <input className="mt-1" type="text" name="vacancy" onChange={editHandleChange} value={editInput.vacancy} />
            </div>
            <div className="d-flex flex-column">
              <span>Deadline:</span>
              <input className="mt-1" type="text" name="deadline" onChange={editHandleChange} value={editInput.deadline} />
            </div>
            <div className="d-flex flex-column">
              <span>shortDescription:</span>
              <input className="mt-1" type="text" name="shortDescription" onChange={editHandleChange} value={editInput.shortDescription} />
            </div>
            {/* <div className="d-flex flex-column">
              <span>longDescription:</span>
              <textarea className="mt-1" type="text" name="longDescription" onChange={editHandleChange} value={editInput.longDescription} />
            </div> */}
            <button onClick={()=> SaveCarrerChanges()}>Save The Changes</button>
            </div>
   </div>}
    <div>
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=>setCareerBoolean(true)}>Add Career Post</li>
          </ul>
        </span>
      </button>
      <ul className="career_list">
        {careerData.map(({ imageUrl, title ,hide,deadline , endDate , salary , id ,longDescription, shortDescription },index) => {
          return (
            <li className="career-list--item">
              <div className="career-list--item-details">
                <div className="career-list--item-details-name">
                  <h3>{title}</h3>
                </div>
              </div>
              <div className="career-list--item-menu"></div>
              {careerHideBoolean ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideCareer(index)}  ></i> :  <i className="fas fa-ellipsis-v"  onClick={()=>
                  hideCareer(index , imageUrl, title ,hide , endDate , shortDescription , longDescription ) }></i>}
              { hide && <li className="delete_Edit" >
                <span onClick={()=>instantRemoveCareer(id)} >Delete</span>
                <span onClick={(()=> EditCareer(title, salary , endDate , shortDescription  , longDescription , id ))} >Edit</span>
              </li>} 
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Career;
