import { Header } from "@/components/header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingNav } from "@/components/floating-nav"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactForm />
      <SiteFooter />
      <FloatingNav />
    </main>
  )
}
