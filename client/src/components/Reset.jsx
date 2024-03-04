import React from 'react'
import profile_img from '../assets/profile.png'
import styles from '../styles/username.module.css'
import { useFormik } from 'formik';
import { validateField } from '../helper/validate';
import { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom'

export default function Reset() {
  const formik = useFormik({
    initialValues:{
      password:"",
      confirm_password:''
    },
    validate:(values) => validateField('confirm_password',values),
    validateOnBlur:false,
    validateOnChange:false,
    onSubmit:(values) => {
      console.log(values)
    }
    
  
  })
  return (
    <div className='container  flex flex-col justify-center items-center  mx-auto ' >
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className={styles.glass}>
     <div className='  bg-gray-200 py-15 px-4 min-w-60  rounded-xl' >
      <div className="text-center text-3xl p-5">
           Reset Password
     </div> 
        <form action="" onSubmit={formik.handleSubmit}>
       <div className='flex flex-col items-center justify-center' >
        <div>
          <h5 className='text-left my-0' >Enter Password</h5>
       <input id='password' name='password' value={formik.values.password} onChange={formik.handleChange} placeholder='password' type="text" className=" px-2 my-2 w-11/12  w-[200px] h-5 py-3 border-none" />
        </div>
        <div>
        <h5 className='text-left my-0' > Confirm password </h5>
        <input id='confirm_password' name='confirm_password' value={formik.values.confirm_password} onChange={formik.handleChange} placeholder='confirm_password' type="text" className=" px-2 my-2 w-[200px] h-5 py-3 border-none" />
        </div>
        
        <button className=" border-none rounded-md my-2 py-2  min-w-20 cursor-pointer hover:bg-red-500 hover:text-white  bg-blue-500 text-center">
          Reset
        </button>
   
       </div>
        </form>
      </div> 
       </div>
    </div>
  )
}
