'use client'

import React from 'react'
import Logo from '../components/logo';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerUser } from '../firebase/registerUser';
import { useRouter } from 'next/navigation';


const loginSchema = z.object({
  email: z.string().email().min(3, 'Kullanıcı adı en az 3 karakter olmalıdır.'),
  password: z.string().min(6, 'Şifre en az 6 karakter olmalıdır.'),
});

type FormData = z.infer<typeof loginSchema>;

export default function LoginPage() {

    const rooter = useRouter()


    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(loginSchema),
    });
  
    const onSubmit = async(data: FormData) => {
      const a = await registerUser(data.email, data.password)
      console.log(a)
      await rooter.push("/dashboard")
    };

  
  return (
    <div className='bg-orange-300 min-h-screen flex flex-col items-center justify-center'>
      <Logo/>
      <div className='p-5'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col text-black'>
          <input type="text" {...register("email")} placeholder="Email" required className='mb-2 p-2 rounded-xl' />

          {
                  errors.email&&
                  <div>
                  {errors.email?.message}
                  </div>
                  
                } 

          <input type="password" {...register("password")} placeholder="Password" required className='mb-4 p-2 rounded-xl' />
                {
                  errors.password&&
                  <div>
                  {errors.password?.message}
                  </div>
                  
                } 
          <button type="submit" className='bg-white text-orange-500 p-2 rounded-xl'>Login</button>
        </form>
      </div>
      {/* <Link href="/register" className='text-white mt-4'>Hesap oluştur</Link> */}
    </div>
  )
}
