type ButtonWithIconProps = {
  label: string // Accessibility label
  icon: JSX.Element
  onClick: () => void
  className?: string
}

export const ButtonWithIcon = ({
  label,
  icon,
  onClick,
  className
}: ButtonWithIconProps) => (
  <button
    onClick={onClick}
    aria-label={label}
    className={`rounded-full p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 ${className}`}
  >
    {icon}
  </button>
)
