import { SessionProvider } from '@/components/SessionProvider'
import SideBar from '@/components/SideBar'
import { getServerSession } from 'next-auth'
import '@/styles/globals.css'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import Login from '@/components/Login'

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);

  

  return (
    <html>
      <head />
      <body>
        <SessionProvider session={session}>
          {!session ? (
            <Login />
          ): (
            <div className=' flex'>
            {/* Sidebar */}
            <div className='bg-[#645CBB] max-w-xs h-screen overflow-y-auto md:min-w-[20rem]'>
            <SideBar />
            </div>
            
  
            {/* ClientProvider = notifications */}
  
            <div className=' bg-[#A084DC] flex-1'>{children}</div>
          </div>
          )}
        
        
        </SessionProvider>
        
        </body>
    </html>
  )
}


{/* webclientsecret = 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 */}
{/* webclientid = 725731694564-m0gcvpseui2gsl4e7061m71fggg4eevk.apps.googleusercontent.com */}