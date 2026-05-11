type Props = {
  title: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const PrimaryButton = ({
  title,
  disabled = false,
  type = "submit",
}: Props) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 ${
        disabled ? "opacity-50 cursor-not-allowed hover:bg-blue-600" : ""
      }`}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;