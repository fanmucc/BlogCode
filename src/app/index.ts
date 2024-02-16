'use server'

import db from "@/modal/index";
import MongoBlog from '@/modal/blog'

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface IBlog {
  title: string;
  categories: number[];
  tags: number[];
  href: string;
  themeColor: string;
  img: string;
  createTime: string;
  id: number;
};


export default async function blog() {
  try {
    // 启用mongo
    db();
    // 获取到相关接口
    const data = await MongoBlog.find({});
    console.log(data, '====~~~~====');

    return data
  } catch (err) {
    return []
  }
}
