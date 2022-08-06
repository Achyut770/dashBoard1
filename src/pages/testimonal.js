import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios";

function Testimonal() {

  const [testimonalBoolean , setTestimonalBoolean] = React.useState(false)
  const[deleteTestimonal , setDeleteTestimonal ]= React.useState(false)
  const[deletetstimonalBoolean , setDeleteTestimonalBoolean] = React.useState(false)
  const [editTestimonal , setEditTestimonal] = React.useState(false)
  const [proHideBoolena , setProHideBoolean] = React.useState(false)

  const [testimonalInput , setInputTestimonal] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    discripton:"",
 post:"",
  })
  const testimonal = [
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Achyut Adhikari",
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Pranish bakhrel",
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Cristiano Ronaldo",
    },
  ];
 
  const [ testimonalData , setTestimonalData] = React.useState([...testimonal])
  const [ editTestimonalInput , setEditTestimonalInput] = React.useState({
    name:"",
    discripton:"",
      image:"",
      post:""
    
  })

  const SaveTestimonal = ()=>{

    if(testimonalData.name==="" || testimonalData.discripton==="" || testimonalData.image==="" || testimonalData.post===""){
      axios.post("url" ,{
        namae:testimonalData.name,
        discripton:testimonalData.discripton,
        image:testimonalData.image,
        post:testimonalData.post
      } ).then((res)=> console.log(res) ).catch((res)=> console.log(res))
      setTestimonalData([testimonalInput , ...testimonalData])
      setTestimonalBoolean(false)
    }
    else(
      alert("invalid input")
    )
  }

  const handleChangeTestimonal = (e)=>{
    setInputTestimonal((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.value
      }
    })
      }
      const RemoveTestimonal=(id)=>{
        axios.delete("url" , {
        } ).then((res)=>console.log(res)).catch((err)=> console.log(err))
        setTestimonalData((prev)=>{
         return prev.filter((items,index)=>{
             return id!=index
         })
        })
        setDeleteTestimonal(false)
      }
      
      const  EditTestimonal = (name , image , post, discripton   )=>{
        setEditTestimonal(true)
        const arr = testimonalData
        arr.map((items)=> items.hide=false)
        setTestimonalData([...arr])
        let input =editTestimonalInput
        input.name=name
        input.discripton=discripton
        input.image=image
        input.post=post
     
        // setEditTestmonalInput(input)
      }
      const editTestimonalHandleChange = (e)=>{
        setEditTestimonalInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]:e.target.value
          }
        })
      }

      const doubleHiideProduct = (id)=>{
        const arr = testimonalData
        arr[id].hide=false
        setTestimonalData([...arr])
        setProHideBoolean(false)
      }
      const hideTestimonal =(id)=>{
        const arr = testimonalData
        arr.map((items)=> items.hide=false)
        arr[id].hide=true
        setTestimonalData([...arr])
        setProHideBoolean(true)
       }

       const saveTestimonalChanges = ()=>{
        if( editTestimonalInput.name==="" || editTestimonalInput.discripton==="" || editTestimonalInput.image==="" || editTestimonalInput.post===""){
          axios.patch("url" , {
            name:editTestimonalInput.name,
           discripton:editTestimonalInput.discripton,
           image:editTestimonalInput.image,
           post:editTestimonalInput.post
          }).then((res)=> console.log(res)).catch((res)=> console.log(res))
          setEditTestimonal(true)
        }
        else{
          alert("Invalid Input")
        }
       }

    
  return (
    <div>
           {testimonalBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setTestimonalBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangeTestimonal} value={testimonalInput.name} />
            </div>
         
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="text" name="image" onChange={handleChangeTestimonal} value={testimonalInput.image} />
            </div>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="post" onChange={handleChangeTestimonal} value={testimonalInput.post} />
            </div>
            <div className="d-flex flex-column">
              <span>Message:</span>
              <textarea className="mt-1" type="text" name="discripton" onChange={handleChangeTestimonal} value={testimonalInput.discripton} />
            </div>
         
            <button onClick={()=> SaveTestimonal()}>Save</button>
            </div>
   </div>}
   {editTestimonal && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setEditTestimonal(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={editTestimonalHandleChange} value={editTestimonalInput.name} />
            </div>
           
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="text" name="image" onChange={editTestimonalHandleChange} value={editTestimonalInput.image} />
            </div>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="post" onChange={editTestimonalHandleChange} value={editTestimonalInput.post} />
            </div>
            <div className="d-flex flex-column">
              <span>Message:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={editTestimonalHandleChange} value={editTestimonalInput.discripton} />
            </div>
       
            <button onClick={()=> saveTestimonalChanges()}>Save The Changes</button>
            </div>
   </div>}
    <div>
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=> setTestimonalBoolean(true)} >Add Admin</li>
          </ul>
        </span>
      </button>
      <ul className="product_list">
        {testimonalData.map(({ image, name, post ,hide , discripton   }, id) => {
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
             
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(id)}  ></i> :  <i className="fas fa-ellipsis-v"  onClick={()=> hideTestimonal(id)} ></i> }

              { hide && <li className="delete_Edit" >
                <span onClick={()=>RemoveTestimonal(id)} >Delete</span>
                <span onClick={(()=> EditTestimonal(name, image , post  , discripton  ))} >Edit</span>
              </li>} 
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Testimonal;

