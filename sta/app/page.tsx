"use client"
import React, { useEffect } from 'react'

import { redirect } from "next/navigation";




const page = () => {

  useEffect(() => {
    redirect('/api/auth/login?post_login_redirect_url=/dashboard')
  })

  return (
    <div>
      Hello  World

    </div>
  )
}

export default page




