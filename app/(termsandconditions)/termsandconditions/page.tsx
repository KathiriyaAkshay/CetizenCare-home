export const metadata = {
    title: 'Terms And Conditions',
    description: 'Page description',
}
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { TermsAndCondition } from '@/components/termsandconditions'

export default function TAndC() {
    return (
       <>
       <TermsAndCondition/>
       </>
    )
}
