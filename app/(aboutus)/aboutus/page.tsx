export const metadata = {
    title: 'About us',
    description: 'Page description',
}
import { AboutUs } from '@/components/aboutus'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'




export default function Aboutus() {
    return (
       <>
       <AboutUs/>
       </>
    )
}
