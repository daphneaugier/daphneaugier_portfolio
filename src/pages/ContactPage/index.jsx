import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Contact from '../../components/Contact'


function ContactPage() {

  useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <div>
        <Helmet>
          <title>Contact | Daphné Augier</title>
          <meta name="description" content="Get in touch with Daphné Augier, QA Engineer and UI/UX designer based in Montréal." />
        </Helmet>
        <Contact/>
    </div>
  )
}

export default ContactPage
