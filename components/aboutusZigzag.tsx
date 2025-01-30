import Image from 'next/image'

import FeatImage01 from '@/public/images/features-03-image-01.png'
import FeatImage02 from '@/public/images/features-03-image-02.png'
import FeatImage03 from '@/public/images/features-03-image-03.png'
import purpose from '@/public/images/purpose.svg'
import vision from '@/public/images/vision.svg'
import mission from '@/public/images/mission.svg'
import story from '@/public/images/story.png'




export default function AboutusZigzag() {
    return (
        <section>
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="py-12 md:py-20 border-gray-800">


                    {/* Items */}
                    <div className="grid gap-20">
                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={story} width={500} height={500} alt="Features 02" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-3xl text-teal-800 mb-2">Brand Story</div>
                                    {/* <h3 className="h3 mb-3">Convinience</h3> */}
                                    <p className="text-xl text-black-400 mb-4 text-justify">
                                    Our brand story is driven by the amazing talents people have. People from
                            diverse backgrounds have unique gifts. But, because of many barriers, they
                            couldn't freely follow their dreams in the United States. This was especially
                            tough for women. While men could land jobs, lots of very talented women
                            couldn't really show how good they were.
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/* 1st item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={purpose} width={300} height={300} alt="Features 01" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-3xl text-teal-800 mb-2">Purpose</div>
                                    {/* <h3 className="h3 mb-3">Convinience</h3> */}
                                    <p className="text-xl text-black-400 mb-4 text-justify">
                                        Our purpose is to transform lives
                                        and communities by giving talented
                                        individuals the means to pursue their
                                        passions and dreams. We want to be
                                        the bridge that connects aspirations
                                        to opportunities, helping people
                                        achieve what they're truly capable of.
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/* 2nd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={vision} width={300} height={300} alt="Features 02" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-3xl text-teal-800 mb-2">Our Vision</div>
                                    {/* <h3 className="h3 mb-3">Convinience</h3> */}
                                    <p className="text-xl text-black-400 mb-4 text-justify">
                                        Our vision is to be the one-stop hub where talents
                                        and customers flourish. We're expanding into retail,
                                        offering a diverse range at unbeatable prices. Plus,
                                        our rewards system makes it all even better -loyal
                                        customers and dedicated vendorsboth win big. By
                                        blending services, retail, and rewards, we're creating
                                        adynamic space where everyone gets the best. Our
                                        goal is to be the go-to place that's seamless, rewarding,and thriving for everyone in our community.
                                    </p>

                                </div>
                            </div>
                        </div>

                        {/* 3rd item */}
                        <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
                            {/* Image */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                                <Image className="max-w-full mx-auto md:max-w-none h-auto" src={mission} width={300} height={300} alt="Features 03" />
                            </div>
                            {/* Content */}
                            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                                    <div className="font-architects-daughter text-3xl text-teal-800 mb-2">Our Misson</div>
                                    {/* <h3 className="h3 mb-3">Convinience</h3> */}
                                    <p className="text-xl text-black-400 mb-4 text-justify">
                                        Our mission is to empower individuals
                                        with diverse talents by providing a
                                        platform that breaks down barriers.
                                        We're here to create opportunities,
                                        fostering a community where everyone
                                        can pursue their passions and earn a
                                        living while doing what they love.
                                    </p>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}
