import Sidebar from "../../components/sidebar/Sidebar";

const Profile = () => {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 p-8 bg-gray-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8">
          My Profile
        </h1>

        <div className="bg-white p-8 rounded-xl shadow-md max-w-xl">
          <div className="space-y-4">
            <div>
              <p className="text-gray-500">
                Full Name
              </p>

              <h2 className="text-xl font-bold">
                Martin George
              </h2>
            </div>

            <div>
              <p className="text-gray-500">
                Email
              </p>

              <h2 className="text-xl font-bold">
                martin@example.com
              </h2>
            </div>

            <div>
              <p className="text-gray-500">
                Role
              </p>

              <h2 className="text-xl font-bold">
                User
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;