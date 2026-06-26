type Props = {
  label: string;
  disabled?: boolean;
  variant?: "blue" | "red";
  onClick?: () => void;
  type?: "submit" | "button";
};

export function SubmitButton({
  label,
  disabled = false,
  variant = "blue",
  onClick,
  type = "submit",
}: Props) {
  const colors =
    variant === "red"
      ? "bg-red-600 hover:bg-red-700"
      : "bg-blue-600 hover:bg-blue-700";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`w-fit rounded ${colors} px-3 py-1.5 text-sm text-white disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed`}
    >
      {label}
    </button>
  );
}
