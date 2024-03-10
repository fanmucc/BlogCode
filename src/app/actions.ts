'use server'

import { redirect } from 'next/navigation'
import { addNote, updateNote, delNote } from '@/lib/strapi';
import { revalidatePath } from 'next/cache';

const sleep = (ms: any) => new Promise(r => setTimeout(r, ms));

export async function saveNote(prevState: any, formData: any) {

  const noteId = formData.get('noteId')

  const data = JSON.stringify({
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date()
  })

  // 为了让效果更明显
  await sleep(2000)

  if (noteId) {
    updateNote(noteId, data)
    revalidatePath('/', 'layout')
  } else {
    const res = await addNote(data)
    revalidatePath('/', 'layout')
  }
  return { message: `Add Success!` }
}

export async function deleteNote(prevState: any, formData: any) {
  const noteId = formData.get('noteId')
  delNote(noteId)
  revalidatePath('/', 'layout')
  redirect('/')
}

