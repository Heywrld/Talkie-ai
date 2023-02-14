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

          <div cl>{children}</div>
        </div>
        
        </body>
    </html>
  )
}
