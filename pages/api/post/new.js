import client from "@/util/database";

export default async function handler(req, res){
  if(req.method!=="POST")
    return res.status(200).json("포스트가 아니네");

  console.log(req.body);
  // 이부분에서 보안 체크..
  const db = await client.db("hobby");
  await db.collection('idol').insertOne(req.body);

  res.redirect(302, '/list');
  return res.status(200).json("입력이 잘 됐어요");
}