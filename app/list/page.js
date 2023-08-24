import { client } from "@/util/database";
import Link from "next/link";

export default async function List(){
  const db = await client.db('hobby');
  const members = await db.collection('idol').find().toArray();
  return (
    <div>
      <center>
        <h1>List is not Link</h1>
      </center>
      <div className="List">
        {
          members.map((e, i) =>
            <div className="list-item" key={i}>
              <Link href={`/idol/${e.group}/${e.name}`}>{e.name}</Link>
            </div>
          )
        }
      </div>
    </div>
  );
}