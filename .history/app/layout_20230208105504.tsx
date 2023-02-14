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
        <div>
          {/* Sidebar */}

          {/* ClientProvider = notifications */}

          <div className=''>{children}</div>
        </div>
        
        </body>
    </html>
  )
}
