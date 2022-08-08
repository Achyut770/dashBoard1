import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios"
import api from "./api";

function Product() {

  const fetchProduct = async ()=>{
    // const res = await axios.get("http://localhost:4000/api/v1/products")
    // // const data = await res.JSON()
    const res = await fetch(`${api}/products`)
    const data = await res.json()
    const arr = data
    arr.map((val)=>{
      return  val.hide=false
    })
    setProductData([...arr])
  }
    React.useEffect(()=>{
      fetchProduct()
    },[])
  
  const [productBoolean , setProductBoolean] = React.useState(false)
  const  [ removePro , setRemovePro] = React.useState(false)
  const  [ removeLibrary , setRemoveLibrary] = React.useState(false)
  const[deletePro , setDeletePro]= React.useState(false)
  const[deleteProduvtBoolean , setDeleteProduvtBoolean] = React.useState(false)
  const [editProduct , setEditProduct] = React.useState(false)
  const [proHideBoolena , setProHideBoolean] = React.useState(false)
  const [libraryBoolean , setLibraryBoolean] = React.useState(false)
  const [ libraryAddBoolean , setLibraryAddboolean] = React.useState(false)
  const [libraryEditBoolean , setEditLibraryBoolean] = React.useState(false)
  const [ libraryHideBoolena , setLibraryHideBoolean] = React.useState(false)
  const  [ productId , setProductId] = React.useState("")
  const  [ libraryId , setLibraryIdId] = React.useState("")
  const [productInput , setInputProduct] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    discription:"",
      answer1:"",
       answer2:"", 
       answer3:"",
       answer4:"",
       image:null
  })

  const [ editProductInput , setEditProductInput] = React.useState({
    id:"",
    name:"",
    discription:"",
      answer1:"",
       answer2:"", 
       answer3:"",
       answer4:"",
       image:null
  })
  const [libraryChange  , setLibraryChange] = React.useState({
    id:"",
    name:"",
    post:"Admin",
    image:null,
    discription:"",
      answer1:"",
       answer2:"", 
       answer3:"",
       answer4:"",
  })
  const [libraryEditChange  , setLibraryEditChange] = React.useState({
    id:"",
    name:"",
    post:"Admin",
    image:null,
    discription:"",
      answer1:"",
       answer2:"", 
       answer3:"",
       answer4:"",
  })
  const product = [
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "Medisys",
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "NMCLE Preparation",
    },
    {
      image:
        "https://assets.codepen.io/250758/internal/avatars/users/default.png",
      name: "E-library",
    },
  ];

  const [ productData , setProductData] = React.useState([])

  const Elibrary =  [    {
    image:
      "https://assets.codepen.io/250758/internal/avatars/users/default.png",
    name: "E-Basic",
  },
  {
    image:
      "https://assets.codepen.io/250758/internal/avatars/users/default.png",
    name: "E-Assestment",
  }, 
  {
    image:
      "https://assets.codepen.io/250758/internal/avatars/users/default.png",
    name: "E-Pro",
  },
  {
    image:
      "https://assets.codepen.io/250758/internal/avatars/users/default.png",
    name: "E-promax",
  },
  {
    image:
      "https://assets.codepen.io/250758/internal/avatars/users/default.png",
    name: "Medisys",
  },
  {
    image:
      "https://assets.codepen.io/250758/internal/avatars/users/default.png",
    name: "Medisys",
  }
]
const [ elibraryData , setElibraryData ] = React.useState([...Elibrary])

  const handleChangePro = (e)=>{
    setInputProduct((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.name==="image" ?  e.target.files[0] : e.target.value
      }
    })
      }


      const  EditProduct = (title ,longDescription , id  )=>{

      
          setEditProduct(true)
          const arr = productData
          arr.map((items)=> items.hide=false)
          setProductData([...arr])
          let input =editProductInput
          input.name=title
          input.discription=longDescription
          setEditProductInput(input)
          setProductId(id)
  
      }
      const editProductHandleChange = (e)=>{
        setEditProductInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]:e.target.name==="image" ?  e.target.files[0] : e.target.value
          }
        })
        console.log(editProductInput)
      }



      const doubleHiideProduct = (id)=>{
        const arr = productData
        arr[id].hide=false
        setProductData([...arr])
        setProHideBoolean(false)
      }
      const doubleHiideLibrary = (id)=>{
        const arr = elibraryData
        arr[id].hide=false
        setElibraryData([...arr])
        setLibraryHideBoolean(false)
      }


      const hideProduct =(id)=>{
        const arr = productData
        arr.map((items)=> items.hide=false)
        arr[id].hide=true
        setProductData([...arr])
        setProHideBoolean(true)
       }

       const hideLibrary =(id)=>{
        const arr = elibraryData
        arr.map((items)=> items.hide=false)
        arr[id].hide=true
        setElibraryData([...arr])
        setLibraryHideBoolean(true)
 
       }
      //  const setAllFalse = ()=>{
      //   const arr = productData
      //   arr.map((items)=> items.hide=false)
      //   setProductData([...arr])
      //  }


      
   const popupAddLibrary =()=>{
    setLibraryAddboolean(true)
    setLibraryChange((prev)=>{
      return {
        ...prev , 
        name:"",
        post:"Admin",
        image:null,
        discription:"",
          answer1:"",
           answer2:"", 
           answer3:"",
           answer4:"",
      }
    })

   }

   const editLibraryChange = (e)=>{
    setLibraryEditChange((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.name==="image" ?  e.target.files[0] : e.target.value
      }
    })

   }

   const addLibraryChange = (e)=>{
    setLibraryChange((prev )=>{
 return {
  ...prev,
  [e.target.name]:e.target.name==="image" ?  e.target.file[0] : e.target.value
 }
    })
   }

   const EditLibrary = (name, answer1 , answer2 , answer3 , answer4, discription  )=>{
    setEditLibraryBoolean(true)
    const arr = elibraryData
    arr.map((items)=> items.hide=false)
    setElibraryData([...arr])
    setLibraryEditChange((prev)=>{
      return {
        ...prev ,
        name:name, answer1:answer1, answer2:answer2 , answer3:answer3 , answer4:answer4, discription: discription 
      }
    })
  


   }



const libarrayEditClick =()=>{
  const arr = elibraryData
  arr.map((items)=> items.hide=false)
  setElibraryData([...arr])
  setLibraryBoolean(true)
}








const SaveProduct = async  ()=>{
  const formData = new FormData();
  formData.append("name" ,productInput.name );
  formData.append("shortDescription" ,productInput.shortDescription );
  formData.append("image" ,productInput.image  ,productInput.image.name );
  formData.append("longDescription" ,productInput.longDescription )
  const {name, discription, answer1,   answer2,   answer3, answer4 , image} = productInput
  if(name!=="" &&  discription!=="" && answer1!=="" && answer2=="" && answer3=="" && image===null && answer4==""){
   const res = await  axios.post(`${api}/products/add` ,  formData ,
  {headers: { 'content-type': 'multipart/form-data' }})
  if(res.status==="success"){
    fetchProduct()
    setProductBoolean(false)
  }
    } else{
       alert("Invalid Input")
    }


  setInputProduct((prev)=>{
    return {
      ...prev,
      name:"",
      discription:"",
        answer1:"",
         answer2:"", 
         answer3:"",
         answer4:"",
    }
  })
}


//  Editing Product


const saveProductChange = async  ()=>{

  const formData = new FormData();
  formData.append("name" ,editProductInput.name );
  formData.append("shortDescription" ,editProductInput.shortDescription );
  formData.append("image" ,editProductInput.image  ,editProductInput.image.name );
  formData.append("longDescription" ,editProductInput.longDescription )

  // const {name, discription, answer1,   answer2,   answer3, answer4 , image} = editProductInput
  
        if(editProductInput.name!=="" &&  editProductInput.discription!=="" && editProductInput.answer1!=="" && editProductInput.answer2!=="" && editProductInput.answer3!=="" && editProductInput.image===null){
         const res = await  axios.patch(`${api}/editor/products/edit${productId}` , formData ,  {headers: { 'content-type': 'multipart/form-data' }} )
         if(res.status==="success"){
          fetchProduct()
          setEditProduct(false)
         }
          }
           else{
             alert("Plz fill the form correctly")
          }
}



// deleting Product

const RemoveProduct=(id)=>{

  const res = axios.delete((`${api}/editor/products/${productId}`) , {
  })
if ( res.message==="success"){
  setDeletePro(false)
  fetchProduct()
}else{
  alert(res.data.message)
}
console.log(res)
  }

 
//  Saving Library

const saveLibrary = async ()=>{

  const formData = new FormData();
  formData.append("name" ,libraryChange.name );
  formData.append("shortDescription" ,libraryChange.shortDescription );
  formData.append("image" ,libraryChange.image  ,libraryChange.image.name );
  formData.append("longDescription" ,libraryChange.longDescription )

  const [name, discription, answer1,   answer2,   answer3, answer4] = libraryChange

        if(name!=="" &&  discription!=="" && answer1!=="" && answer2!=="" && answer3!=="" && answer4!==""  ){
         const res = await axios.post(`${api}/products/add` , formData ,  {headers: { 'content-type': 'multipart/form-data' }}  ) 
         if(res.status==="Success"){
          fetchProduct()
          libraryAddBoolean(false)
         }
          } else{
             alert("Invalid Input")
          }
}



//  Editing E-library
const libraryChangeSave = async ()=>{
  
  const formData = new FormData();
  formData.append("name" ,libraryChange.name );
  formData.append("shortDescription" ,libraryChange.shortDescription );
  formData.append("image" ,libraryChange.image  ,libraryChange.image.name );
  formData.append("longDescription" ,libraryChange.longDescription )
  const [name, discription, answer1,   answer2,   answer3, answer4,image] = libraryEditChange
  if(name!=="" &&  discription!=="" && answer1!=="" && answer2!=="" && answer3!=="" && image==null &&  answer4==""  ){
    const res = await  axios.patch(`${api}/editor/products/edit${libraryId}` , formData ,  {headers: { 'content-type': 'multipart/form-data' }} )
    if(res.status==="success"){
     fetchProduct()
     setDeleteProduvtBoolean(false)
    } else{
       alert("Invalid Input")
    }
 } }

// Removing library

 const RemoveLibrary = async  (id)=>{

  const res = await  axios.delete((`${api}/editor/products/delete${libraryId}`) , {

  })
if(res.status==="success"){
  fetchProduct()
  setRemoveLibrary(false)
}
}

const instantRemove =(id)=>{
  const arr = productData
  arr.map((items)=> items.hide=false)
  setProductData([...arr])
  setRemovePro(true)
  setProductId(id)
}

const instantRemoveLibrary = (id) =>{
  const arr = elibraryData
  arr.map((items)=> items.hide=false)
  setElibraryData([...arr])
  setRemoveLibrary(true)
  setLibraryIdId(id)
}
  return (
    <div>
{
        removeLibrary && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setRemoveLibrary(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> RemoveLibrary()}>Yes</button>
              <button onClick={()=> setRemoveLibrary(false)} >No</button>
            </div>

          </div>
        </div>
      }
            {
        removePro && <div className="delete_container">
          <div className="delete">
          <span   onClick={()=>setRemovePro(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div>Are you Sure?</div>
            <div className="yesOrNo">
              <button onClick={()=> RemoveProduct()}>Yes</button>
              <button onClick={()=> setRemovePro(false)} >No</button>
            </div>

          </div>
        </div>
      }
      {libraryEditBoolean &&<div className="popup_container library"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setEditLibraryBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={editLibraryChange} value={libraryEditChange.name} />
            </div>
         
            <div className="d-flex flex-column">
              <span>Answer1:</span>
              <input className="mt-1" type="text" name="answer1" onChange={editLibraryChange} value={libraryEditChange.answer1} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer2:</span>
              <input className="mt-1" type="text" name="answer2" onChange={editLibraryChange} value={libraryEditChange.answer2} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer3:</span>
              <input className="mt-1" type="text" name="answer3" onChange={editLibraryChange} value={libraryEditChange.answer3} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer4:</span>
              <input className="mt-1" type="text" name="answer4" onChange={editLibraryChange} value={libraryEditChange.answer4} />
            </div>
            <div className="d-flex flex-column">
              <span>discription:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={editLibraryChange} value={libraryEditChange.discription} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" onChange={editLibraryChange} />
            </div>
            <button onClick={()=> libraryChangeSave()} >Save The Changes</button>
            </div>
   </div>}

Add
   {libraryAddBoolean &&<div className="popup_container library"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setLibraryAddboolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={addLibraryChange} value={libraryChange.name} />
            </div>
         
            <div className="d-flex flex-column">
              <span>Answer1:</span>
              <input className="mt-1" type="text" name="answer1" onChange={addLibraryChange} value={libraryChange.answer1} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer2:</span>
              <input className="mt-1" type="text" name="answer2" onChange={addLibraryChange} value={libraryChange.answer2} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer3:</span>
              <input className="mt-1" type="text" name="answer3" onChange={addLibraryChange} value={libraryChange.answer3} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer4:</span>
              <input className="mt-1" type="text" name="answer4" onChange={addLibraryChange} value={libraryChange.answer4} />
            </div>
            <div className="d-flex flex-column">
              <span>Discription:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={addLibraryChange} value={libraryChange.discription} />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image" onChange={addLibraryChange} />
            </div>
            <button onClick={()=> saveLibrary()}>Save The Changes</button>
            </div>
   </div> }


           {productBoolean && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setProductBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="">
              <span>Name:</span>
              <input className="" type="text" name="name" onChange={handleChangePro} value={productInput.name} />
            </div>
            <div className="">
              <span>Characteristics 1:</span>
              <input className="mt-1" type="text" name="answer1" onChange={handleChangePro} value={productInput.answer1} />
            </div>
            <div className="">
              <span>Characteristics 2::</span>
              <input className="" type="text" name="answer2" onChange={handleChangePro} value={productInput.answer2} />
            </div>
            <div className="">
              <span>Characteristics 3:</span>
              <input className="" type="text" name="answer3" onChange={handleChangePro} value={productInput.answer3} />
            </div>
            <div className="">
              <span>Characteristics 4:</span>
              <input className="" type="text" name="answer4" onChange={handleChangePro} value={productInput.answer4} />
            </div>
            <div className="">
              <span>Discription:</span>
              <textarea className="" type="text" name="discription" onChange={handleChangePro} value={productInput.discription} />
            </div>
            <div className="">
              <span>Image:</span>
              <input className="" type="file" name="image" onChange={handleChangePro}/>
            </div>
            <button onClick={()=> SaveProduct()}>Save</button>
            </div>
   </div>}
   
   {/* E-Library products */}
    { libraryBoolean &&
    <div className="popup_container">
      <div className="popup">
        <button className="addLibrary" onClick={()=>popupAddLibrary()} >Add</button>
       <span   onClick={()=>setLibraryBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
      <ul className="product_list2">
      {elibraryData.map(({ image, name, post ,hide , discription , answer1 , answer2 , answer3 , answer4 ,id }, index) => {
        return (
          <li className="product_library_indv">
          <div className="image_Name">
            <img className="library_image" src={image} alt="" />
            <div className="">
              <h3>{name}</h3>
            </div>
          </div>
          <div className=""></div>
          {libraryHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideLibrary(index)}  ></i> : <i className="fas fa-ellipsis-v" onClick={()=> hideLibrary(index)}  ></i> }
          { hide && <li className="delete_Edit" >
            <span onClick={()=>instantRemoveLibrary(index , id)}>Delete</span>
                <span onClick={(()=> EditLibrary(name, answer1 , answer2 , answer3 , answer4 , discription ,id )  )} >Edit</span>
          </li>} 
        </li>
        );
      })}
    </ul>
    </div>
    </div>
   }
   {editProduct && <div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setEditProduct(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
            <div className="d-flex flex-column">
              <span>Name:</span>
              <input className="mt-1" type="text" name="name" onChange={editProductHandleChange} value={editProductInput.name} />
            </div>
         
            <div className="d-flex flex-column">
              <span>Charactesristics 1:</span>
              <input className="mt-1" type="text" name="answer1" onChange={editProductHandleChange} value={editProductInput.answer1} />
            </div>
            <div className="d-flex flex-column">
              <span>Characteristics 2:</span>
              <input className="mt-1" type="text" name="answer2" onChange={editProductHandleChange} value={editProductInput.answer2} />
            </div>
            <div className="d-flex flex-column">
              <span>Characteristics 3:</span>
              <input className="mt-1" type="text" name="answer3" onChange={editProductHandleChange} value={editProductInput.answer3} />
            </div>
            <div className="d-flex flex-column">
              <span>Charracteristics 4:</span>
              <input className="mt-1" type="text" name="answer4" onChange={editProductHandleChange} value={editProductInput.answer4} />
            </div>
            <div className="d-flex flex-column">
              <span>discription:</span>
              <textarea className="mt-1" type="text" name="discription"  onChange={editProductHandleChange} value={editProductInput.discription}  />
            </div>
            <div className="d-flex flex-column">
              <span>Image:</span>
              <input className="mt-1" type="file" name="image"  onChange={editProductHandleChange} />
            </div>
            <button onClick={()=> saveProductChange()}>Save The Changes</button>
            </div>
   </div>}
    <div>
      <button id="add_button" className="floating-button fas fa-plus">
        <span className="nav">
          <ul>
            <li onClick={()=> setProductBoolean(true)} >Add product</li>
          </ul>
        </span>
      </button>
      <ul className="product_list">
        {productData.map(({ imageUrl , title ,hide , longDescription , id }, index) => {
          return (
            <li className="product-list--item">
              <div className="product-list--item-details">
                <img src={imageUrl} alt="" />
                <div className="product-list--item-details-name">
                  <h3>{title}</h3>
                </div>
              </div>
              <div className="product-list--item-menu"></div>
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(index)}  ></i> : <i className="fas fa-ellipsis-v" onClick={()=> hideProduct(index)}  ></i> }
              { hide && <li className="delete_Edit" >
                <span onClick={()=>instantRemove(id)} >Delete</span>
                    { title!="E-library" ? <span onClick={(()=> EditProduct(title, longDescription  , id ))} >Edit</span>:  <span onClick={(()=>libarrayEditClick(id))} >Edit</span>} 
              </li>} 
            </li>
          );
        })}
      </ul>
    </div>
    </div>
  );
}
export default Product;
