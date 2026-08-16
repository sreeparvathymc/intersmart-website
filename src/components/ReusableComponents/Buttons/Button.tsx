import Link from "next/link";

type ButtonProps = {
  text: string;
  varient?: "primary" | "secondary";
  link?: string;
  type?: "button" | "submit";
  className?: string;
};

const Button = ({
  text,
  link,
  varient,
  type = "button",
  className = "",
}: ButtonProps) => {
  const styles = {
    primary: "bg-black text-white border border-black hover:bg-white hover:text-black",

    secondary: "bg-white text-black hover:bg-gray-200",
  };

  const buttonClass = varient
    ? `${styles[varient]} rounded-full ${className}`
    : `px-4 py-2 rounded-full ${className}`;

  if (link) {
    return (
      <Link href={link} className={`${buttonClass} text-base`}>
        {text}
      </Link>
    );
  }

  return (
    <button type={type} className={`${buttonClass} text-base `}>
      {text}
    </button>
  );
};

export default Button;