import { getServerSession } from "next-auth/next";
// import { authOptions } from "@app/api/auth/[...nextauth]"; // ⚠️ Make sure this is the correct pathsdf
import {authOptions} from "../api/auth/[...nextauth]/route"
import { useSession } from "next-auth/react";
import { redirect } from 'next/navigation';
import prismadb from '@/app/lib/db';
import React from 'react'
const  page = async() => {

    const session = await getServerSession(authOptions);
  let email=  session.user?.email
    const profile = await prismadb.user.findFirst({
        where: {
             email,
        }
      });
        
    if (profile) {
        redirect(`/${profile.id}`);
      };
      console.log("lapak", email)
  return (
      <div>
          hai page not found
      </div>
  )
};

export default page