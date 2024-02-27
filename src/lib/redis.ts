import Redis from 'ioredis'

const redis = new Redis()

const initialData = {
  "1702459181837": '{"title":"sunt aut","content":"quia et suscipit suscipit recusandae","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459182837": '{"title":"qui est","content":"est rerum tempore vitae sequi sint","updateTime":"2023-12-13T09:19:48.837Z"}',
  "1702459188837": '{"title":"ea molestias","content":"et iusto sed quo iure","updateTime":"2023-12-13T09:19:48.837Z"}'
}

export async function getAllNotes() {
  const data = await redis.hgetall("notes");
  if (Object.keys(data).length == 0) {
    // 如果没有则填充默认数据
    await redis.hset("notes", initialData);
  }
  // 返回列表
  return await redis.hgetall("notes")
}

export async function addNote(data: any) {
  const uuid = Date.now().toString();
  // notes表 填充数据
  await redis.hset("notes", [uuid], data);
  return uuid
}

export async function updateNote(uuid: any, data: any) {
  await redis.hset("notes", [uuid], data);
}

export async function getNote(uuid: any) {
  // @ts-ignore
  return JSON.parse(await redis.hget("notes", uuid));
}

export async function delNote(uuid: any) {
  return redis.hdel("notes", uuid)
}

export default redis
