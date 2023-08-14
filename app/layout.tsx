
import Navbar from '@/components/navbar';
import './globals.css';
import Footer from '@/components/footer';


export const metadata ={
  title:"Flexbille",
  description:'Showcase develoepr projects'
}


export default function RootLayout({
  children,
}:{children:React.ReactNode}){
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
          {children}
        </main>      
        <Footer/>    
      </body>
    </html>
  )
}