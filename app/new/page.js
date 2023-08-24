export default function New() {
  return (
    <form action method="post">
      <div className="new">
        <div className="new-item">
          <label>Name: </label>
          <input type="text"/>
        </div>
        <div className="new-item">
          <label>Group: </label>
          <input type="text"/>
        </div>
        <div className="new-item">
          <label>Gender: </label>
          <input type="text"/>
        </div>
        <div className="new-item">
          <label>Note: </label>
          <input type="text"/>
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