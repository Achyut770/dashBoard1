import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios";

function Blog() {

  const [productBoolean , setProductBoolean] = React.useState(false)
  const[deletePro , setDeletePro]= React.useState(false)
  const[deleteProduvtBoolean , setDeleteProduvtBoolean] = React.useState(false)
  const [editProduct , setEditProduct] = React.useState(false)
  const [proHideBoolena , setProHideBoolean] = React.useState(false)
  const [productInput , setInputProduct] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    discription:"",
 post:"",
  })
  const blog = [
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "fully responsive web design",
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
 
  const [ productData , setProductData] = React.useState([...blog])
  const [ editBlogInput , setEditBlogInput] = React.useState({
    name:"",
    discription:"",
      image:"",
      post:""
  })
  const SaveBlog = ()=>{
    console.log(productInput)
    if(productInput.name!="" || productInput.image!="" || productInput.post!="" || productInput.discription!==""){
      axios.post("url" ,{
        name:productInput.name,
        image:productInput.image,
        post:productInput.post,
        discrcription:productInput.discription
      } ).then((res)=> console.log(res) ).catch((res)=> console.log(res))
      setProductData([productInput , ...productData])
      setProductBoolean(false)
      setInputProduct((prev)=>{
        return {
          ...prev,
          name:"",
          discription:"",
            image:"",
            post:""
        }
      })
   
    }
    // let Name = productInput.name
    // if(Name!=""){
    //   setProductData([productInput , ...productData])
    //   setProductBoolean(false)
    // } else{
    //   return
    // }
    // console.log(productInput)
  }

  const handleChangePro = (e)=>{
    setInputProduct((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.value
      }
    })
      }
      const RemoveBlog=(id)=>{
        axios.delete("url" , {
        } ).then((res)=>console.log(res)).catch((err)=> console.log(err))
        setProductData((prev)=>{
         return prev.filter((items,index)=>{
             return id!=index
         })
        })
        setDeletePro(false)
      }
      const  EditProduct = (name , image , post, discription   )=>{
          const arr = productData
          arr.map((items)=> items.hide=false)
          setProductData([...arr])
          let input =editBlogInput
          input.name=name
          input.discription=discription
          input.image=image
          input.post=post
          setEditBlogInput(input)
          setEditProduct(true)
      }
      const editProductHandleChange = (e)=>{
        setEditBlogInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]:e.target.value
          }
        })
      }

      const doubleHiideProduct = (id)=>{
        const arr = productData
        arr[id].hide=false
        setProductData([...arr])
        setProHideBoolean(false)
      }

      const hideProduct =(id)=>{
        const arr = productData
        arr.map((items)=> items.hide=false)
        arr[id].hide=true
        setProductData([...arr])
        setProHideBoolean(true)
       }

    const saveBlogChanges =()=>{
      console.log(editBlogInput)
      if(editBlogInput.name!=="" || editBlogInput.image!=="" || editBlogInput.post!="" || editBlogInput.discription!==""){
        axios.patch("url" , {
          name:editBlogInput.name,
          image:editBlogInput.image,
          post:editBlogInput.post,
          discrcription:editBlogInput.discription
        }).then((res)=> console.log(res)).catch((res)=> console.log(res))
        setEditProduct(true)
    }
    else{
      alert("Invalid Input")
    }
  }
  return (
    <div>
           {productBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setProductBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={handleChangePro} value={productInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>Message:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={handleChangePro} value={productInput.discription} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file"  name="image"/>
            </div>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="post" onChange={handleChangePro} value={productInput.post} />
            </div>
         
            <button onClick={()=> SaveBlog()}>Save</button>
            </div>
   </div>}
   {editProduct && <div className="popup_container"> 
      <div className="popup p-4"> 
                 
      <span   onClick={()=>setEditProduct(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={editProductHandleChange} value={editBlogInput.name} />
            </div>
            <div className="d-flex flex-column">
              <span>discription:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={editProductHandleChange} value={editBlogInput.discription} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" />
            </div>
            <div className="d-flex flex-column">
              <span>Post:</span>
              <input className="mt-1" type="text" name="post" onChange={editProductHandleChange} value={editBlogInput.post} />
            </div>
       
            <button onClick={()=>saveBlogChanges() } >Save The Changes</button>
            </div>
      
   </div>}
    <div>
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=> setProductBoolean(true)} >Add Admin</li>
          </ul>
        </span>
      </button>
      <ul className="product_list">
        {productData.map(({ image, name, post ,hide , discription   }, id) => {
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
              
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(id)}  ></i> : <i className="fas fa-ellipsis-v"  onClick={()=> hideProduct(id)} ></i> }

              { hide && <li className="delete_Edit" >
                <span onClick={()=>RemoveBlog(id)} >Delete</span>
                <span onClick={(()=> EditProduct(name, image , post  , discription  ))} >Edit</span>
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


