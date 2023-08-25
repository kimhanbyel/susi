import client from "@/util/database";

export default async function Idol(props) {
  const group = decodeURI(props.params.group);
  const name  = decodeURI(props.params.name);
  console.log(group, name);

  const db = await client.db('hobby');
  const idol = await db.collection('idol').findOne({group : group, name : name});
  return (
    <div className="Detail">
      <h1>{idol.name}</h1>
      <p>Group: {idol.group}</p>
      <p>Gender: {idol.gender}</p>
      <p>Note: {idol.note}</p>
    </div>
  );
}