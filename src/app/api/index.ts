'use server'

import prisma from "@/lib/prisma";

export async function getAllNotes() {
  // 获取到category分类下的所有数据
  const category = await prisma.Category.findMany()
  console.log(category, '===category===');

  // 构造返回数据
  let data: any[] = []
  category.forEach(({ name, href, id, quantity }: {
    name: string;
    href: string;
    quantity: number;
    id: number;
  }) => {
    data.push({
      name,
      href,
      num: quantity,
      id
    })
  })
  return {
    data: data
  }
}
