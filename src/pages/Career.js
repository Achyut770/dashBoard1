import React from "react";
import "../styles/career.css";
import "../styles/add_button.css";
import axios from "axios";

function Career() {


  const [careerBoolean , setCareerBoolean] = React.useState(false)
  const [ deleteCareer , setDeleteCareer] = React.useState(false)
  const [careerHideBoolean , setCareerHideBoolean] = React.useState(false)

  const [careerInput , setInputcareer] = React.useState({
    name:"",
    hide:false,
    vacancy:"",
    deadline:""
  })
  const [editCareer, setEditCareer] = React.useState(false)
  const [editInput , setEditInput] = React.useState({
    name:"",
    vacancy:"",
    deadline:""
  })
  const career = [
    {
      name: "Content Writer",
      hide:false
    },
    {
      name: "FrontEnd Developer",
      hide:false
    },
    {
      name: "Field Engineer",
      hide:false

    },
    {
      name: "Market Researcher",
      hide:false

    },
    {
      name: "Field Head",
      hide:false

    },
  ];

  const hideCareer =(id ,image, name ,hide, vacancy , deadline)=>{
   const arr = careerData
   arr.map((items)=> items.hide=false)
   arr[id].hide=true
   setCareerData([...arr])
   let edit = editInput
   edit.name=name
   edit.vacancy=vacancy
   edit.deadline=deadline
   setEditInput({...edit})
   setCareerHideBoolean(true)

  }
  const RemoveCareer=(id)=>{
    setCareerData((prev)=>{
     return prev.filter((items,index)=>{
         return id!=index
     })
    })
    setDeleteCareer(false)
  }

  const [ careerData , setCareerData] = React.useState(career)
  const SaveCareer = (e)=>{
      e.preventDefault()
      if(careerInput.name!=="" || careerInput.vacancy!=="" || careerInput.deadline!==""){
        axios.post("url" ,{
          namae:careerInput.name,
          vacancy:careerInput.vacancy,
          deadline:careerInput.deadline
        } ).then((res)=> console.log(res) ).catch((res)=> console.log(res))
        setCareerData([careerInput , ...careerData])
        setCareerBoolean(false)
      }
      else(
        alert("invalid input")
      )
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

  const  EditCareer = (name, vacancy , deadline )=>{
    const arr = careerData
    arr.map((items)=> items.hide=false)
    setCareerData([...arr])
    setEditInput((prev)=>{
      return {
        ...prev,
        name:name ,
        vacancy:vacancy,
        deadline:deadline
      }
    })
    setEditCareer(true)
  }

  const doubleHiideCareer = (id)=>{
    const arr = careerData
    arr[id].hide=false
    setCareerData([...arr]) 
    setCareerHideBoolean(false)
  }

  const SaveCarrerChanges =()=>{
    console.log(editInput)
    if(editInput.name==="" || editInput.vacancy==="" || editInput.deadline===""){
      axios.patch("url" , {
        name:editInput.name,
       vacancy:editInput.vacancy,
       deadline:editInput.deadline
      }).then((res)=> console.log(res)).catch((res)=> console.log(res))
      setEditCareer(true)
    }
    else{
      alert("Invalid Input")
    }
  }

  return (
    <div>
       {careerBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
                 
      <span   onClick={()=>setCareerBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangeCareer} value={careerInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>No Of Vacancy:</span>
              <input className="mt-1" type="text" name="vacancy" onChange={handleChangeCareer} value={careerInput.vacancy} />
            </div>
            <div className="d-flex flex-column">
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
              <input className="mt-1" type="text" name="name" onChange={editHandleChange} value={editInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>No of Vacancy:</span>
              <input className="mt-1" type="text" name="vacancy" onChange={editHandleChange} value={editInput.vacancy} />
            </div>
            <div className="d-flex flex-column">
              <span>Deadline:</span>
              <input className="mt-1" type="text" name="deadline" onChange={editHandleChange} value={editInput.deadline} />
            </div>
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
        {careerData.map(({ image, name ,hide, vacancy , deadline }, id) => {
          return (
            <li className="career-list--item">
              <div className="career-list--item-details">
                <div className="career-list--item-details-name">
                  <h3>{name}</h3>
                </div>
              </div>
              <div className="career-list--item-menu"></div>
             
              {careerHideBoolean ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideCareer(id)}  ></i> :  <i className="fas fa-ellipsis-v"  onClick={()=>
                  hideCareer(id , image, name ,hide, vacancy , deadline) }></i>}

              { hide && <li className="delete_Edit" >
                <span onClick={()=>RemoveCareer(id)} >Delete</span>
                <span onClick={(()=> EditCareer(name, vacancy , deadline))} >Edit</span>
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
