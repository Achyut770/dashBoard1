import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios";
import api from "./api";

function Testimonal() {

  const fetchProduct = async ()=>{
    // const res = await axios.get("http://localhost:4000/api/v1/products")
    // // const data = await res.JSON()
    const res = await fetch(`${api}/testimonials`)
    const data = await res.json()
    const arr = data
    setTestimonalData([...arr])
    console.log(data)
  }
    React.useEffect(()=>{
      fetchProduct()
    },[])

  const [testimonalBoolean , setTestimonalBoolean] = React.useState(false)
  const[deleteTestimonal , setDeleteTestimonal ]= React.useState(false)
  const[deletetstimonalBoolean , setDeleteTestimonalBoolean] = React.useState(false)
  const [editTestimonal , setEditTestimonal] = React.useState(false)
  const  [ testimonalId , setTestimonalId] = React.useState()
  const  [ removeTestimonal , setRemoveTestimonal] = React.useState(false)
  const [proHideBoolena , setProHideBoolean] = React.useState(false)

  const [testimonalInput , setInputTestimonal] = React.useState({
    name:"",
    designation:"Admin",
    image:null,
    discription:"",
  })
  
  const [ testimonalData , setTestimonalData] = React.useState([])
  const [ editTestimonalInput , setEditTestimonalInput] = React.useState({
    name:"",
    discription:"",
      image:null,
      designation:""
  })


  const handleChangeTestimonal = (e)=>{
    setInputTestimonal((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.name==="image" ? e.target.files[0] : e.target.value
      }
    })
      }


      const  EditTestimonal = (name  , designation, testimony ,id  )=>{
        setEditTestimonal(true)
        const arr = testimonalData
        arr.map((items)=> items.hide=false)
        setTestimonalData([...arr])
        let input =editTestimonalInput
        input.name=name
        input.discription=testimony
        // input.image=image[0]
        input.designation=designation
        // setEditTestmonalInput(input)

        setTestimonalId(id)
      }
      const editTestimonalHandleChange = (e)=>{
        setEditTestimonalInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]:e.target.name==="image" ? e.target.files[0] : e.target.value
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

 



      //   Save Testimonal
  const SaveTestimonal = ()=>{
    if(testimonalInput.name!=="" && testimonalInput.discription!=="" && testimonalInput.image!==null && testimonalInput.designation!==""){
      const formData = new FormData();
      formData.append("name" ,testimonalInput.name );
      formData.append("discription" ,testimonalInput.discription );
      formData.append("imageUrl" ,testimonalInput.image  ,testimonalInput.image.name );
      formData.append("designation" ,testimonalInput.designation )
      axios.post(`${api}/testimonials/add`  ,formData ,   {headers: { 'content-type': 'multipart/form-data' }} ).then((res)=> console.log(res) ).catch((res)=> console.log(res))
      setTestimonalBoolean(false)
    }
    else(
      alert("invalid input")
    )
  }

      //   Editing Testimonal
       const saveTestimonalChanges = async ()=>{
       
        if( editTestimonalInput.name!=="" && editTestimonalInput.discription!=="" && editTestimonalInput.image!==null && editTestimonalInput.designation!==""){
          const formData = new FormData();
          formData.append("name" ,editTestimonalInput.name );
          formData.append("discription" ,editTestimonalInput.discription );
          formData.append("imageUrl" ,editTestimonalInput.image  ,editTestimonalInput.image.name );
          formData.append("designation" ,editTestimonalInput.designation )
          const res = await  axios.patch(`${api}/editor/testimonials/edit/${testimonalId}` , formData ,  {headers: { 'content-type': 'multipart/form-data' }}    )
          if(res.status===201){
            setEditTestimonal(false)
          }
        }
        else{
          alert("Fill the form first")
        }
       }


      //   Deleting Testimonal
      const RemoveTestimonal= async (id)=>{
        const res =   axios.delete((`${api}/editor/testimonials/delete/${testimonalId}`) , {
      })

      // .then((res)=>console.log(res)).catch((err)=> console.log(err))
      //   setTestimonalData((prev)=>{
      //    return prev.filter((items,index)=>{
      //        return id!=index
      //    })
      //   })
        setDeleteTestimonal(false)
      }

      
  const instantRemoveTestimonal = (id) =>{
    const arr = testimonalData
    arr.map((items)=> items.hide=false)
    setTestimonalData([...arr])
    setTestimonalId(id)
    setRemoveTestimonal(true)
  }

  return (
    <div>
                   {
     removeTestimonal    && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setRemoveTestimonal(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> RemoveTestimonal()}>Yes</button>
              <button onClick={()=> setRemoveTestimonal(false)} >No</button>
            </div>

          </div>
        </div>
      }
           {testimonalBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setTestimonalBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangeTestimonal} value={testimonalInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" onChange={handleChangeTestimonal} />
            </div>
            <div className="d-flex flex-column">
              <span>designation:</span>
              <input className="mt-1" type="text" name="designation" onChange={handleChangeTestimonal} value={testimonalInput.designation} />
            </div>
            <div className="d-flex flex-column">
              <span>Message:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={handleChangeTestimonal} value={testimonalInput.discription} />
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
              <input className="mt-1" type="file" name="image" onChange={editTestimonalHandleChange} />
            </div>
            <div className="d-flex flex-column">
              <span>designation:</span>
              <input className="mt-1" type="text" name="designation" onChange={editTestimonalHandleChange} value={editTestimonalInput.designation} />
            </div>
            <div className="d-flex flex-column">
              <span>Message:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={editTestimonalHandleChange} value={editTestimonalInput.discription} />
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
        {testimonalData.map(({ imageUrl, name, designation ,hide , testimony , id   }, index) => {
          return (
            <li className="product-list--item" key={index} >
              <div className="product-list--item-details">
                <img src={imageUrl} alt="" />
                <div className="product-list--item-details-name">
                  <h3>{name}</h3>
                  {/* <span className="designation_tag">{designation}</span> */}
                </div>
              </div>
              <div className="product-list--item-menu"></div>
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(index)}  ></i> :  <i className="fas fa-ellipsis-v"  onClick={()=> hideTestimonal(index)} ></i> }
              { hide && <li className="delete_Edit" >
                <span onClick={()=>instantRemoveTestimonal(id)} >Delete</span>
                <span onClick={(()=> EditTestimonal(name, designation  , testimony , id  ))} >Edit</span>
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

