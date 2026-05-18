import { useRef } from "react";

import SignatureCanvas
from "react-signature-canvas";

const SignaturePadPage = () => {

  const sigCanvas = useRef<any>(null);

  const clear = () => {

    sigCanvas.current.clear();

  };

  const save = () => {

    const signature =
      sigCanvas.current
        .getTrimmedCanvas()
        .toDataURL("image/png");

    console.log(signature);

    localStorage.setItem(
      "signature",
      signature
    );

    alert("Signature Saved");
  };

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-5">

        Signature Pad

      </h1>

      <div className="border w-fit">

        <SignatureCanvas
          ref={sigCanvas}
          penColor="black"
          canvasProps={{
            width: 800,
            height: 800,
            className: "bg-white",
          }}
        />

      </div>

      <div className="flex gap-4 mt-5">

        <button
          onClick={clear}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Clear
        </button>

        <button
          onClick={save}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Save Signature
        </button>

      </div>

    </div>
  );
};

export default SignaturePadPage;