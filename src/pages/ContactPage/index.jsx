import { useEffect } from 'react'
import Contact from '../../components/Contact'


function ContactPage() {
  
  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
  return (
    <div>
        <Contact/>
    </div>
  )
}

export default ContactPage
