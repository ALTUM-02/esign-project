type Props = {
  title: string;
};

const Modal = ({ title }: Props) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      <div className="bg-white p-6 rounded-xl w-96">
        <h2 className="text-2xl font-bold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default Modal;