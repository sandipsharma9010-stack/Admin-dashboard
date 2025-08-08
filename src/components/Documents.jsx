import React from 'react'

function Documents() {
  return (
    <>
    <h1 className='text-2xl font-bold'>Documents</h1>
    


    {/* I create the cards with header and body */}

    {/* <div className='flex flex-col p-10 w-50 border-2'>
      <div className='header'>
        <h2>Document 1</h2>
      </div>
      <div className="body">
        <p>Document 1 body</p>
      </div>
      
    </div> */}


    <div className='bg-white dark:bg-gray-900 font-bold w-100'>
      <h1 className="text-gray-900 dark:text-white">Charts are beautyful</h1>
      <p className="text-gray-600 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, repellat.</p>
    </div>

    </>
  )
}

export default Documents