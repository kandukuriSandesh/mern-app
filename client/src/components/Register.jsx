import React, { useState } from 'react'
import profile_img from '../assets/profile.png'
import styles from '../styles/username.module.css'
import { useFormik } from 'formik';
import { validateField } from '../helper/validate';
import { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom'
import { convertToBase64 } from '../helper/convert';

export default function Register() {

  const [file,setFile] = useState('');
  const formik = useFormik({
    initialValues:{
      password:"",
      email:"",
      username:""
    },
    validate:(values) => validateField('registerPage',values),
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:(values) => {
      values = Object.assign(values,{profile:file || ""})
      console.log(values)
    }
    
  })

  const onUpload = async (e) => {
    const convertedFile = await convertToBase64(e.target.files[0])
    setFile(convertedFile)
   }
  
  return (
    <div className='container  flex flex-col justify-center items-center  mx-auto ' >
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className={styles.glass} style={{width:"30%"}} >

     <div className='  bg-gray-200 pb-15 px-4 min-w-60  rounded-xl' >
      <div className="text-center text-3xl pt-5">
        Register
      </div> 
      <div className=" text-sm p-1 my-1 text-center text-gray-500">
       Happy to serve you
      </div>

        <form action="" onSubmit={formik.handleSubmit}>
       <div className='flex flex-col items-center justify-center' >
        <label htmlFor="file">
         <img className="h-[100px] mt-2 w-[115px] p-5 border-gray-100  border-4" style={{borderRadius:"50%"}} src={file || profile_img} alt="Profile-Image" />
         <input id='file' type="file" style={{display:"none"}} onChange={onUpload} />
        </label>
        <input id='username' name='username' value={formik.values.username} onChange={formik.handleChange} placeholder='username' type="text" className=" px-2 my-2 w-3/4 h-5 py-3 border-none" />
        <input id='email' name='email' value={formik.values.email} onChange={formik.handleChange} placeholder='email' type="text" className=" px-2 my-2 w-3/4 h-5 py-3 border-none" />
        
        <input id='password' name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='password' type="text" className=" px-2 my-2 w-3/4 h-5 py-3 border-none" />
        <button className=" border-none rounded-md my-2 py-2  min-w-20 cursor-pointer hover:bg-red-500 hover:text-white  bg-blue-500 text-center">
          Register
        </button>
        <div className='my-5 mb-10'>
          <span>Already Registered? <Link to={'./username'} className=" text-red-500 cursor-pointer">Log In</Link> </span>
        </div>

      </div>
        </form>
      </div> 
       </div>
    </div>
  )
}
