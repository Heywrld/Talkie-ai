import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline'
import React from 'react'

function HomePage() {
  return (
    <div className=' flex flex-col items-center justify-center h-screen px-2 text-white'>
     <h1 className=' text-5xl font-bold mb-20'>Talkie</h1>

    <div>
        <div>
            <div className=' flex flex-col items-center justify-center mb-5'>
                {/* Sun Icon */}
                <SunIcon className="h-6 w-6"/>
                <h2>Examples</h2>
            </div>

            <div className=' space-y-2'>
                <p className='infoText'>"Explain Something to me"</p>
                <p className='infoText'>
                    "What is the difference between a dog and a cat?"
                </p>
                <p className='infoText'>"What is the color of the sun?"</p>
            </div>
        </div>

        <div>
            <div className=' flex flex-col items-center justify-center mb-5'>
                {/* Sun Icon */}
                <BoltIcon className="h-6 w-6"/>
                <h2>Capabilities</h2>
            </div>

            <div className=' space-y-2'>
                <p className='infoText'>Change the Talkie Model to use</p>
                <p className='infoText'>
                    Messages are stored in Firebase's Firestore
                </p>
                <p className='infoText'>Hot Toast notifications when Talkie is thinking!</p>
            </div>
        </div>

        <div>
            <div className=' flex flex-col items-center justify-center mb-5'>
                {/* Sun Icon */}
                <ExclamationTriangleIcon className="h-6 w-6"/>
                <h2>Limitations</h2>
            </div>

            <div className=' space-y-2'>
                <p className='infoText'>
                    May occasionally generate incorrect information
                </p>
                <p className='infoText'>
                    May occasionally produce harmful instructions or biased content
                </p>
                <p className='infoText'>"What </p>
            </div>
        </div>
    </div>

    </div>
  )
}

export default HomePage
