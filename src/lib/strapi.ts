export async function getAllNotes() {
  try {
    const response = await fetch(`http://127.0.0.1:1337/api/notes`, {
      mode: 'no-cors'
    })
    const data = await response.json();
    console.log(data, '====');

    const res = {};

    data.data.forEach(({ id, attributes: { title, content, slug, updatedAt } }: any) => {
      // @ts-ignore
      res[slug] = JSON.stringify({
        title,
        content,
        updateTime: updatedAt
      })
    })

    return res
  } catch (err) {
    console.log(err, '====接口报错catch====');
  }
}

export async function addNote(data: any) {
  const response = await fetch(`http://localhost:1337/api/notes`, {
    method: 'POST',
    headers: {
      Authorization: 'bearer 2937017a72bcc12bdbb012d2d01085ceb83d8c1f935a1c49bfecb3898e2eadcf289bacf7d7f269e85eefbbb60f295a5204eb3a78b52bdbad871deef78c1c638b456946a002aafa4268642cc28dd646e8cf2916c7d4af4269a33679b8bedb73666a11796b125069c6b5f2368e607fd9e59ff16665f3ebff86bbd227e0022a60c7',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: JSON.parse(data)
    })
  })
  const res = await response.json();
  return res.data.attributes.slug
}

export async function updateNote(uuid: any, data: any) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: 'bearer 2937017a72bcc12bdbb012d2d01085ceb83d8c1f935a1c49bfecb3898e2eadcf289bacf7d7f269e85eefbbb60f295a5204eb3a78b52bdbad871deef78c1c638b456946a002aafa4268642cc28dd646e8cf2916c7d4af4269a33679b8bedb73666a11796b125069c6b5f2368e607fd9e59ff16665f3ebff86bbd227e0022a60c7',
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: JSON.parse(data)
    })
  })
  const res = await response.json()
}

export async function getNote(uuid: any) {
  const response = await fetch(`http://localhost:1337/api/notes?filters[slug][$eq]=${uuid}`)
  const data = await response.json();
  return {
    title: data.data[0].attributes.title,
    content: data.data[0].attributes.content,
    updateTime: data.data[0].attributes.updatedAt,
    id: data.data[0].id
  }
}

export async function delNote(uuid: any) {
  const { id } = await getNote(uuid);
  const response = await fetch(`http://localhost:1337/api/notes/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: 'bearer 2937017a72bcc12bdbb012d2d01085ceb83d8c1f935a1c49bfecb3898e2eadcf289bacf7d7f269e85eefbbb60f295a5204eb3a78b52bdbad871deef78c1c638b456946a002aafa4268642cc28dd646e8cf2916c7d4af4269a33679b8bedb73666a11796b125069c6b5f2368e607fd9e59ff16665f3ebff86bbd227e0022a60c7',
      "Content-Type": "application/json"
    }
  })
  const res = await response.json()
}

