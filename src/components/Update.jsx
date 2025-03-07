import { useLoaderData } from "react-router-dom";

function Update() {
  const loadedUser = useLoaderData();
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };
    console.log(name, email);
    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("user updated successfully");
        }
      });
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
