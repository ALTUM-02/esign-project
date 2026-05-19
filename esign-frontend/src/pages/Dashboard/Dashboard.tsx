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
        console.error(error);
      });

  }, []);
