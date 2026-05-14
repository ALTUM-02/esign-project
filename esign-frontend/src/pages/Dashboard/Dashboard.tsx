import { useEffect } from "react";
import api from "../../services/api";

const Dashboard = () => {

  useEffect(() => {

    api.get("test/")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

  }, []);

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;