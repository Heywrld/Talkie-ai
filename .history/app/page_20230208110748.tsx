import React from 'react'

function HomePage() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen px-2 text-white'>
     <h1 className=' text-5xl font-bold mb-20'>Talkie</h1>

    <div>
        <div>
            <div>
                {/* Sun Icon */}
                <h2>Examples</h2>
            </div>

            <div>
                <p className='infoText'>"Explain Something to me"</p>
                <p className='infoText'>
                    "What is the difference between a dog and a cat?"
                </p>
                <p className='infoText'>"W"</p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default HomePage
