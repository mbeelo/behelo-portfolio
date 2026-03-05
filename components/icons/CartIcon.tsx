interface CartIconProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
}

export default function CartIcon({
  size = 20,
  color = 'currentColor',
  strokeWidth = 2
}: CartIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="9" cy="21" r="1"></circle>
      <circle cx="20" cy="21" r="1"></circle>
      <path d="m1 1 4 4 5.5 11h8.7l3.8-8H7"></path>
    </svg>
  );
}