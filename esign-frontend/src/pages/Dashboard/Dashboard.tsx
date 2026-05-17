import { useEffect, useState } from "react";
import api from "../../services/api";

type User = {
  id: number;
  username: string;
  email: string;
  is_staff: boolean;
};

const Dashboard = () => {

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {

    api.get("me/")
      .then((response) => {
        console.log(response.data);

        setUser(response.data);
      })
      .catch((error) => {
        console.error(er
      });

  }, []);

  return (
    <div>
      <h1>Dashboard</h1>

      {user && (
        <div>
          <p>ID: {user.id}</p>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Staff: {user.is_staff ? "Yes" : "No"}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;