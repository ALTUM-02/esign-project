import Draggable from "react-draggable";

type Props = {
  signature: string;
};

const DraggableSignature = ({
  signature,
}: Props) => {

  return (

    <Draggable>

      <img
        src={signature}
        alt="signature"
        className="w-40 absolute cursor-move"
      />

    </Draggable>
  );
};

export default DraggableSignature;