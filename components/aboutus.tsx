import React from 'react'
import PageIllustration from './page-illustration'
import AboutusZigzag from './aboutusZigzag'
import Newsletter from './newsletter'
export const AboutUs = () => {
    return (
        <section className="relative">
            <PageIllustration />
            <div className="max-w-6xl mx-auto px-2 sm:px-3">

                <div className="pt-20 pb-6 md:pt-20 md:pb-1">
                    {/* Page header */}
                    <div className="max-w-5xl mx-auto text-center">
                        <h1 className="h1">About Us</h1>
                    </div>


                    {/* Form */}
                    <div className="max-w-6xl mx-auto mt-0">

                        <div className="text-xl text-black-400"style={{ textAlign: "justify", width: "100%" }}>
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
                        <br />
                    </div>

                </div>
            </div>
            <AboutusZigzag />
            <Newsletter/>
        </section>
    )
}
