const Sign = () => {

  const signature =
    localStorage.getItem(
      "signature"
    );

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">
        Sign Document
      </h1>

      {signature ? (

        <img
          src={signature}
          alt="signature"
          className="w-60 border"
        />

      ) : (

        <p>No signature saved</p>

      )}

    </div>
  );
};

export default Sign;