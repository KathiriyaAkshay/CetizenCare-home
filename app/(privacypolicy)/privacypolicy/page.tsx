export const metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy',
}
import AOS from 'aos'
import 'aos/dist/aos.css'
import React from 'react'
import { TermsAndCondition } from '@/components/termsandconditions'
import { PrivacyPolicy } from '@/components/privacypolicy'

export default function TAndC() {
    return (
       <>
       <PrivacyPolicy/>
       </>
    )
}
