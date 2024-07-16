import { useLoaderData } from "react-router-dom";

function Update() {
  const loadedUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.name.value;
    console.log(name, email);
  };
  return (
    <div>
      <h3>Update information of {loadedUser.name}</h3>
      <form onSubmit={handleUpdate}>
        <input type="text" defaultValue={loadedUser.name} name="name" />
        <br />
        <input
          type="email"
          defaultValue={loadedUser.email}
          name="email"
          id=""
        />
        <br />
        <input type="submit" value="Update" />
      </form>
    </div>
  );
}

export default Update;
