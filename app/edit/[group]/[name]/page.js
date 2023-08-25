import client from "@/util/database"

export default function New(props) {
  const group = decodeURI(props.params.group);
  const name  = decodeURI(props.params.name);

  const db = client.db('hobby');
  const result = db.collection('idol').findOne({'group': group, 'name': name});
  return (
    <form action="/api/post/edit" method="post">
      <div className="new">
        <div className="new-item">
          <label>Name: </label>
          <input name="name" type="text" defaultValue={result.name} required placeholder="이름을 susi오"/>
        </div>
        <div className="new-item">
          <label>Group: </label>
          <input name="group" type="text" defaultValue={result.group} required placeholder="솔로면 이름과 같습니다"/>
        </div>
        <div className="new-item">
          <label>Gender: </label>
          <select name="gender" defaultValue={result.gender}>
            <option value="male">male</option>
            <option value="female">female</option>
          </select>
        </div>
        <div className="new-item">
          <label>Note: </label>
          <input name="note" type="text" defaultValue={result.note} placeholder="특이점"/>
        </div>
      </div>
      <button
      style={{fontSize:"20px", margin:"10px", padding:"5px"}}
      type="submit">
        regist
      </button>
    </form>
  )
}