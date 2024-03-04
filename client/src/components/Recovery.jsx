
import styles from '../styles/username.module.css'

import { Toaster } from 'react-hot-toast';

export default function Recovery() {
 
  return (
    <div className='container  flex flex-col justify-center items-center  mx-auto ' >
      <Toaster position='top-center' reverseOrder='false' ></Toaster>
      <div className={styles.glass}>

     <div className='  bg-gray-200 py-15 px-4 min-w-60  rounded-xl' >
      <div className="text-center text-3xl pt-5 px-5">
        Recover Password
      </div> 
      <div className=" text-sm p-1 my-2 text-center text-gray-500">
        Enter OTP to for recovery
      </div>

        <form action="">
       <div className='flex flex-col items-center justify-center' >
         <span className='py-2 text-xs ' > Enter 6-digit otp sent to your mail </span>   
        <input id='password' name='password'  placeholder='password' type="text" className=" px-2 my-2 w-3/4 h-5 py-3 border-none" />
        <button className=" border-none rounded-md my-2 py-2  min-w-20 cursor-pointer hover:bg-red-500 hover:text-white  bg-blue-500 text-center">
          Recover
        </button>
        <div className='my-5 mb-10'>
          <span> Can't get OTP ? <button to={'./register'} className=" text-red-500 cursor-pointer">Resend</button> </span>
        </div>

      </div>
        </form>
      </div> 
       </div>
    </div>
  )
}
