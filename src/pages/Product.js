import React from "react";
import "../styles/product.css";
import "../styles/add_button.css";
import axios from "axios"

function Product() {

  const [productBoolean , setProductBoolean] = React.useState(false)
  const[deletePro , setDeletePro]= React.useState(false)
  const[deleteProduvtBoolean , setDeleteProduvtBoolean] = React.useState(false)
  const [editProduct , setEditProduct] = React.useState(false)
  const [proHideBoolena , setProHideBoolean] = React.useState(false)
  const [libraryBoolean , setLibraryBoolean] = React.useState(false)
  const [ libraryAddBoolean , setLibraryAddboolean] = React.useState(false)
  const [libraryEditBoolean , setEditLibraryBoolean] = React.useState(false)
  const [productInput , setInputProduct] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    discripton:"",
      answer1:"",
       answer2:"", 
       answer3:"",
       answer4:"",
  })

  const [libraryChange  , setLibraryChange] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    discripton:"",
      answer1:"",
       answer2:"", 
       answer3:"",
       answer4:"",
  })
  const [libraryEditChange  , setLibraryEditChange] = React.useState({
    name:"",
    post:"Admin",
    image:"https://assets.codepen.io/250758/internal/avatars/users/default.png",
    discripton:"",
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
 const [ libraryHideBoolena , setLibraryHideBoolean] = React.useState(false)
  const [ productData , setProductData] = React.useState([...product])
  const [ editProductInput , setEditProductInput] = React.useState({
    name:"",
    discription:"",
      answer1:"",
       answer2:"", 
       answer3:"",
       answer4:"",
  })

  const SaveProduct = ()=>{

   


    const [name, discription, answer1,   answer2,   answer3, answer4] = productInput
    if(name!="" ||  discription!="" || answer1!="" || answer2!="" || answer3!="" || answer4!=""  ){
      axios.post("url" , {
        name:name,
        discription:discription,
        answer1:answer1,
        answer2:answer2,
        answer3:answer3,
        name:name,
       })
      } else{
         alert("Invalid Input")
      }
    
    setProductBoolean(false)
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

  const handleChangePro = (e)=>{
    setInputProduct((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.value
      }
    })
      }
      const RemoveProduct=(id)=>{
        setProductData((prev)=>{
         return prev.filter((items,index)=>{
             return id!=index
         })
        })
        setDeletePro(false)
      }
      const  EditProduct = (name, answer1 , answer2 , answer3 , answer4, discription   )=>{
        setEditProduct(true)
        const arr = elibraryData
        arr.map((items)=> items.hide=false)
        setElibraryData([...arr])
        let input =libraryEditChange
        input.name=name
        input.discription=discription
        input.answer1=answer1
        input.answer2=answer2
        input.answer3=answer3
        input.answer4=answer4
      }
      const editProductHandleChange = (e)=>{
        setEditProductInput((prev)=>{
          return {
            ...prev ,
            [e.target.name]:e.target.value
          }
        })
      }

      const RemoveLibrary = (id)=>{
        setElibraryData((prev)=>{
          return prev.filter((items,index)=>{
              return id!=index
          })
         })
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
   }

   const editLibraryChange = (e)=>{
    setLibraryEditChange((prev)=>{
      return { ...prev , 
               [e.target.name]: e.target.value
      }
    })
   }


   const addLibraryChange = (e)=>{
    setLibraryChange((prev )=>{
 return {
  ...prev,
  [e.target.value]:e.target.value
 }
    })
   }


   const EditLibrary = (name, answer1 , answer2 , answer3 , answer4, discription  )=>{
  setLibraryAddboolean(true)
    const arr = productData
    arr.map((items)=> items.hide=false)
    setProductData([...arr])
    let input =editProductInput
    input.name=name
    input.discription=discription
    input.answer1=answer1
    input.answer2=answer2
    input.answer3=answer3
    input.answer4=answer4
   }

   const libraryChangeSave = ()=>{
    alert("Achyut")
    setEditLibraryBoolean(false)
   }

  return (
    <div>
      {libraryEditBoolean &&<div className="popup_container"> 
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
            <button onClick={()=> libraryChangeSave()} >Save The Changes</button>
            </div>
   </div>}


   {libraryAddBoolean &&<div className="popup_container"> 
      <div className="popup p-4"> 
      <span   onClick={()=>setEditProduct(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
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
              <span>discription:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={addLibraryChange} value={libraryChange.discription} />
            </div>
            <button>Save The Changes</button>
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
              <textarea className="" type="text" name="discripton" onChange={handleChangePro} value={productInput.discripton} />
            </div>
            <button onClick={()=> SaveProduct()}>Save</button>
            </div>
   </div>} { libraryBoolean &&
    <div className="popup_container">
      <div className="popup">
        <span className="addLibrary" onClick={()=>popupAddLibrary()} >Add</span>
       <span   onClick={()=>setLibraryBoolean(false)} className="popupCross" > <i class="fa-solid fa-xmark"></i></span>
      <ul className="product_list2">
      {elibraryData.map(({ image, name, post ,hide , discription , answer1 , answer2 , answer3 , answer4  }, id) => {
        return (
          <li className="product_library_indv">
          <div className="image_Name">
            <img className="library_image" src={image} alt="" />
            <div className="">
              <h3>{name}</h3>
            </div>
          </div>
          <div className=""></div>
          {libraryHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideLibrary(id)}  ></i> : <i className="fas fa-ellipsis-v" onClick={()=> hideLibrary(id)}  ></i> }
          { hide && <li className="delete_Edit" >
            <span onClick={()=>RemoveLibrary(id)} >Delete</span>
                <span onClick={(()=> EditLibrary(name, answer1 , answer2 , answer3 , answer4 , discription  ))} >Edit</span>
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
              <span>Answer1:</span>
              <input className="mt-1" type="text" name="answer1" onChange={editProductHandleChange} value={editProductInput.answer1} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer2:</span>
              <input className="mt-1" type="text" name="answer2" onChange={editProductHandleChange} value={editProductInput.answer2} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer3:</span>
              <input className="mt-1" type="text" name="answer3" onChange={editProductHandleChange} value={editProductInput.answer3} />
            </div>
            <div className="d-flex flex-column">
              <span>Answer4:</span>
              <input className="mt-1" type="text" name="answer4" onChange={editProductHandleChange} value={editProductInput.answer4} />
            </div>
            <div className="d-flex flex-column">
              <span>discription:</span>
              <textarea className="mt-1" type="text" name="discription" onChange={editProductHandleChange} value={editProductInput.discription} />
            </div>
            <button>Save The Changes</button>
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
        {productData.map(({ image, name, post ,hide , discription , answer1 , answer2 , answer3 , answer4  }, id) => {
          return (
            <li className="product-list--item">
              <div className="product-list--item-details">
                <img src={image} alt="" />
                <div className="product-list--item-details-name">
                  <h3>{name}</h3>
                </div>
              </div>
              <div className="product-list--item-menu"></div>
              {proHideBoolena ? <i className="fas fa-ellipsis-v" onClick={()=> doubleHiideProduct(id)}  ></i> : <i className="fas fa-ellipsis-v" onClick={()=> hideProduct(id)}  ></i> }
              { hide && <li className="delete_Edit" >
                <span onClick={()=>RemoveProduct(id)} >Delete</span>
                    { name!="E-library" ? <span onClick={(()=> EditProduct(name, answer1 , answer2 , answer3 , answer4 , discription  ))} >Edit</span>:  <span onClick={(()=> setLibraryBoolean(true))} >Edit</span>} 
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
