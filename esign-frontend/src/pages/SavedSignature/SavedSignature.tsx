import { Link } from "react-router-dom";

const SavedSignature = () => {

  const signature =
    localStorage.getItem(
      "signature"
    );

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">

      <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-3xl text-center">

        <h1 className="text-4xl font-bold mb-8">

          Saved Signature

        </h1>

        {signature ? (

          <img
            src={signature}
            alt="Signature"
            className="mx-auto border rounded-2xl p-5 bg-white shadow-md"
          />

        ) : (

          <p className="text-red-500 text-xl">

            No signature saved

          </p>

        )}

        <div className="mt-10">

          <Link
            to="/"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-2xl"
          >

            Back Home

          </Link>

        </div>

      </div>

    </div>
  );
};

export default SavedSignature;