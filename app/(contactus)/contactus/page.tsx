export const metadata = {
    title: 'Contact us',
    description: 'Page description',
}

import AboutusZigzag from '@/components/aboutusZigzag'
import PageIllustration from '@/components/page-illustration'
import Footer from '@/components/ui/footer'
import Link from 'next/link'
export default function ContactUs() {
    return (
        <section className="relative">
            <PageIllustration/>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                    {/* Page header */}
                    <div className="max-w-6xl mx-auto text-center pb-12 md:pb-5">
                        <h1 className="h1">About Us</h1>
                    </div>
                    

                    {/* Form */}
                    <div className="max-w-6xl mx-auto">
                        <div className="flex items-center my-3">
                            <div className="border-t border-gray-700 border-dotted grow mr-3" aria-hidden="true"></div>
                            {/* <div className="text-black-400">Or, sign in with your email</div> */}
                            <div className="border-t border-gray-700 border-dotted grow ml-3" aria-hidden="true"></div>
                        </div>
                        <div style={{textAlign:"justify",width:"100%"}}>
                            CetizenCare is a dynamic mobile
                            platform that transforms lives.
                            Seamlessly connecting skilled
                            service providers with users
                            seeking their expertise, it's a hub
                            of convenience and excellence.
                            More than just an app,CetizenCare
                            empowers individuals, offering
                            flexible income opportunities for
                            all. Whether you're a dedicated
                            housewife, a student aiming to
                            balance work and studies, or
                            simply seeking top-notch services,
                            CetizenCare is your gateway to a
                            brighter, more connected future.
                        </div>
                    </div>

                </div>
            </div>
            <AboutusZigzag/>
            <Footer/>
        </section>
    )
}
