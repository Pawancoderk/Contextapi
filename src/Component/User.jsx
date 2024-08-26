import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/Context";

function User() {
  const { user, setuser } = useContext(UserContext);

  return (
    <div>
      <h1 className="text-4xl">UserList</h1>
      <div className=" w-1/2 gap-4 mt-10 flex flex-col p-b-5 ">
        {user.map((u) => (
          <Link
            key={u.id}
            to={`/user/${u.id}`}
            className="bg-sky-400 w-1/2 p-3 rounded-full  "
          >
            {u.username}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default User;
