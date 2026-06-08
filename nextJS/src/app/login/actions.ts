'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'
import { validateEmailPasswordInputs } from '../_lib/utils'


export async function login(formData: FormData) {
  const supabase = await createClient()

  //here we validate passwords server side before sending further to auth
  let valid = validateEmailPasswordInputs(formData);
  if(!valid){
    redirect('/error');
  }

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}

export async function signup(formData: FormData) {
  const supabase = await createClient()
  
  
  let valid = validateEmailPasswordInputs(formData);
  if(!valid){
    redirect('/error');
  }

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)
  console.log(error);

  if (error) {
    redirect('/error')
  }

  revalidatePath('/', 'layout')
  redirect('/account')
}