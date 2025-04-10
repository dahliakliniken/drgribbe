import classNames from 'classnames'

type ButtonProps = {
  onClick: () => void
  inverted?: boolean
  small?: boolean
  fullWidth?: boolean
  className?: string
  ariaExpanded?: boolean
  ariaControls?: string
  textButton?: boolean
  children: React.ReactNode
}

export const Button = ({
  onClick,
  inverted,
  small,
  fullWidth,
  className,
  ariaExpanded,
  ariaControls,
  textButton,
  children
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      className={classNames(
        className,
        'flex items-center gap-1 rounded-xl bg-transparent',
        {
          'w-full': fullWidth,
          'border-2 p-2': small && !textButton,
          'border-4 px-16 py-5 text-lg': !small && !textButton,
          'hover:border-gold hover:text-gold border-black text-black': inverted,
          'border-white text-white hover:border-beige hover:text-beige':
            !inverted,
          'border-none px-0 py-0 text-lg hover:underline': textButton
        }
      )}
    >
      {children}
    </button>
  )
}
