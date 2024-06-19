import React from 'react'

function Aside() {
  return (
        <aside className="w-full md:w-1/3 lg:w-2/4 bg-gray-100 rounded-md h-full">
            {/* Aside - Give Us a Call */}
            <div className='aside-img'>
                <div className="overlay"></div>
                <div className='aside-content'>
                        <h2 className='text-white text-3xl'>Got Questions? We're Here to Assist!</h2>
                </div>
            </div>  
        </aside>
  )
}

export default Aside