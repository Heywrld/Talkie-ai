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
        <SessionProvider>
   
        </SessionProvider>
        
        </body>
    </html>
  )
}


{/* webclientsecret = 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 */}
{/* webclientid = 725731694564-m0gcvpseui2gsl4e7061m71fggg4eevk.apps.googleusercontent.com */}