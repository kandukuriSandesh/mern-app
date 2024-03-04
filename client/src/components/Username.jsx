import React from 'react'
import profile_img from '../assets/profile.png'
import styles from '../styles/username.module.css'
import { useFormik } from 'formik';
import { validateField } from '../helper/validate';
import { Toaster } from 'react-hot-toast';
import {Link} from 'react-router-dom'

export default function Username() {
  const formik = useFormik({
    initialValues:{
      username:""
    },
    validate:(values) => validateField("username",values),
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

     <div className='  bg-gray-200 py-15 px-4 min-w-60 w-1/4 rounded-xl' >
      <div className="text-center text-3xl p-5">
        Hello Again!
      </div> 
      <div className=" text-sm p-1 my-2 text-center text-gray-500">
        Explore More by connecting with us
      </div>

        <form action="" onSubmit={formik.handleSubmit}>
       <div className='flex flex-col items-center justify-center' >

       <img className="h-2/4 mt-2 w-[135px] p-5 border-gray-100 rounded-full border-4" src={profile_img} alt="Profile-Image" />
        <input id='username' name='username' value={formik.values.username} onChange={formik.handleChange} placeholder='Username' type="text" className=" px-2 my-2 w-3/4 h-5 py-3 border-none" />
        <button className=" border-none rounded-md my-2 py-2  min-w-20 cursor-pointer hover:bg-red-500 hover:text-white  bg-blue-500 text-center">
          Let's Go
        </button>
        <div className='my-5 mb-10'>
          <span>Not a Member? <Link to={'./register'} className=" text-red-500 cursor-pointer">Register Now</Link> </span>
        </div>

      </div>
        </form>
      </div> 
       </div>
    </div>
  )
}
