import SideBar from '@/components/SideBar'
import '@/styles/globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <div className=' flex'>
          {/* Sidebar */}
          <div className='bg-[#202123] max-w-xs h-screen overflow-y-auto md'>
          <SideBar />
          </div>
          

          {/* ClientProvider = notifications */}

          <div className=' bg-[#A084DC] flex-1'>{children}</div>
        </div>
        
        </body>
    </html>
  )
}
