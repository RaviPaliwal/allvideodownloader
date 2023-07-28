import React, { useState } from 'react'
const Youtube = () => {
    const [url,seturl] = useState("");
    
    const handleytdownload = (e)=>{
        e.preventDefault()
        console.log(url);
     //Pending
    }
  return (
    <>
    <div className='ms-2 pb-32 flex flex-grow-1 justify-center px-6 container-fluid'>
    <div className='w-96'>
      <div className="mt-7 bg-white  rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
      <div className="p-4 sm:p-7">
        <div className="text-center">
          <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">Download Youtube Video</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Enter Link Below
          </p>
        </div>

        <div className="mt-5">
          <form onSubmit={handleytdownload}>
            <div className="grid gap-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-bold ml-1 mb-2 dark:text-white">Paste Url Here</label>
                <div className="relative">
                  <input onChange={(e)=>{e.preventDefault(); seturl(e.target.value)}} type="url" id="link" name="link" className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 shadow-sm" required aria-describedby="email-error"/>
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Get Video</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    
   </div>
   </div>
    
    </>
  )
}

export default Youtube
