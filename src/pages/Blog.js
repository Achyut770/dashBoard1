
import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios";
import api from "./api"; 

function Blog() {

const fetchBlog = async()=>{
  const res = await fetch(`${api}/blogs`)
  const data = await res.json()
  const arr = data
  arr.map((val)=>{
    return  val.hide=false
  })
  setBlogData([...arr])
}
  React.useEffect(()=>{
    fetchBlog()
  },[])



  const [blogBoolean , setBlogBoolean] = React.useState(false)
  const[deletePro , setDeleteBlog]= React.useState(false)
  const  [ blogId , setBlogId] = React.useState("")
  const  [ removeBlog , setRemoveBlog] = React.useState(false)


  const[deleteProduvtBoolean , setDeleteBlogduvtBoolean] = React.useState(false)
  const [editBlog , setEditBlog] = React.useState(false)
  const [blogHideBoolena , setBlogHideBoolean] = React.useState(false)
  const [blogInput , setInputBlog] = React.useState({
    title:"",
    shortDescription:"Admin",
    image:null,
    longDescription:"",
 shortDescription:"",
  })

 
  const [ blogData , setBlogData] = React.useState([])
  const [ editBlogInput , setEditBlogInput] = React.useState({
    title:"",
    longDescription:"",
      image:null,
      shortDescription:""
  })
  
  const handleChangeBlog = (e)=>{
    setInputBlog((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.name=== "image" ? e.target.files[0] : e.target.value
      }
    })
    console.log(blogInput)
      }


      const  EditBlog = (title , image , shortDescription ,longDescription  )=>{
        // console.log(longDescription)
          const arr = blogData
          arr.map((items)=> items.hide=false)
          setBlogData([...arr])
          let input =editBlogInput
          input.title=title
          input.shortDescription=shortDescription
          input.longDescription=longDescription
          // input.shortDescription=shortDescription
          setEditBlogInput(input)
          setEditBlog(true)
      }
      const editBlogHandleChange = (e)=>{
        setEditBlogInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]:e.target.name=="image" ? e.target.files[0] : e.target.value
          }
        })
      }

      const doubleHiideProduct = (id)=>{
        const arr = blogData
        arr[id].hide=false
        setBlogData([...arr])
        setBlogHideBoolean(false)
      }

      const hideProduct =(id)=>{
        const arr = blogData
        arr.map((items)=> items.hide=false)
        arr[id].hide=true
        setBlogData([...arr])
        setBlogHideBoolean(true)
       }
// Removing Blog
       const RemoveBlog= async (id)  =>{
      const res = await   axios.delete(`${api}/editor/blogs/delete/${blogId}`, {
          id:id
        } )
    if(res.staus==="success"){
      setRemoveBlog(false)
      setDeleteBlog(false)
      fetchBlog()
    }
       }
      //   Saving Blog
       const SaveBlog = async  ()=>{
        const formData = new FormData();
      formData.append("title" ,blogInput.title );
      formData.append("shortDescription" ,blogInput.shortDescription );
      formData.append("image" ,blogInput.image  ,blogInput.image.name );
      formData.append("longDescription" ,blogInput.longDescription )
        if(blogInput.title!=="" && blogInput.image!==null && blogInput.shortDescription!==""  && blogInput.longDescription!==""){
         const res = await   axios.post(`${api}/blogs/add`, formData , {headers: { 'content-type': 'multipart/form-data' }} )
          if(res==="Success"){
            fetchBlog()
            setBlogBoolean(false)
          setInputBlog((prev)=>{
            return {
              ...prev,
              title:"",
              longDescription:"",
                image:"",
                shortDescription:""
            }
          })
          }
        }
        else {
          alert("fill the form properly")
        }
      }

        //  Edditing Blog

    const saveBlogChanges = async  ()=>{
      console.log(editBlogInput)
      const formData = new FormData();
      formData.append("title" ,editBlogInput.title );
      formData.append("shortDescription" ,editBlogInput.shortDescription );
      formData.append("image" ,editBlogInput.image  ,editBlogInput.image.name );
      formData.append("longDescription" ,editBlogInput.longDescription )
      if(editBlogInput.title!=="" && editBlogInput.image===null && editBlogInput.shortDescription!=="" && editBlogInput.longDescription!==""){
       const res = await  axios.patch( `${api}/editor/blogs/edit/${blogId}`, formData ,  {headers: { 'content-type': 'multipart/form-data' }}  )
       if(res==="Success"){
        fetchBlog()
setEditBlog(false)
       } 
       setEditBlog(true)
    }
    else{
      alert("Invalid Input")
    }
  }

  const instantRemoveBlog = (id) =>{
    const arr = blogData
    arr.map((items)=> items.hide=false)
    setBlogData([...arr])
    setRemoveBlog(true)
    setBlogId(id)
  }

  return (
    <div>
      {
        removeBlog && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setRemoveBlog(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> RemoveBlog()}>Yes</button>
              <button onClick={()=> setRemoveBlog(false)} >No</button>
            </div>
          </div>
        </div>
      }
           {blogBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setBlogBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="title" onChange={handleChangeBlog} value={blogInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Long Description:</span>
              <textarea className="mt-1" type="text" name="longDescription" onChange={handleChangeBlog} value={blogInput.longDescription} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file"  name="image" onChange={handleChangeBlog} />
            </div>
            <div className="d-flex flex-column">
              <span>shortDescription:</span>
              <input className="mt-1" type="text" name="shortDescription" onChange={handleChangeBlog} value={blogInput.shortDescription} />
            </div>
         
            <button onClick={()=> SaveBlog()}>Save</button>
            </div>
   </div>}
   {editBlog && <div className="popup_container"> 
      <div className="popup p-4"> 
                 
      <span   onClick={()=>setEditBlog(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="title" onChange={editBlogHandleChange} value={editBlogInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>longDescription:</span>
              <textarea className="mt-1" type="text" name="longDescription" onChange={editBlogHandleChange} value={editBlogInput.longDescription} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" onChange={editBlogHandleChange} />
            </div>
            <div className="d-flex flex-column">
              <span>shortDescription:</span>
              <input className="mt-1" type="text" name="shortDescription" onChange={editBlogHandleChange} value={editBlogInput.shortDescription} />
            </div>
       
            <button onClick={()=>saveBlogChanges() } >Save The Changes</button>
            </div>
      
   </div>}
    <div>
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=> setBlogBoolean(true)} >Add Admin</li>
          </ul>
        </span>
      </button>
      <ul className="product_list">
        {blogData.map(({ imageUrl, title ,hide , shortDescription , longDescription,id  }, index) => {
          return (
            <li className="product-list--item">
              <div className="product-list--item-details"> 
                <img src={imageUrl} alt="" />
                <div className="product-list--item-details-name">
                  <h3>{title}</h3>
                </div>
              </div>
              <div className="product-list--item-menu"></div>
              
              {blogHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(index)}  ></i> : <i className="fas fa-ellipsis-v"  onClick={()=> hideProduct(index)} ></i> }
              { hide && <li className="delete_Edit" >
                <span onClick={()=>instantRemoveBlog(id)} >Delete</span>
                <span onClick={(()=> EditBlog(title, imageUrl   , shortDescription , longDescription ))} >Edit</span>
              </li>} 
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}

export default Blog;


