import Image from 'next/image'
import React from 'react'
import signatureImage from '@/images/signature-cyan.png'

const Signature = () => {
  return (
    <div class="w-sm">
        <Image src={signatureImage} alt=""  />
    </div>
  )
}

export default Signature
