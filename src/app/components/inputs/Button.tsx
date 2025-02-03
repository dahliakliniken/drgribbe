import classNames from 'classnames'

type ButtonProps = {
  onClick: () => void
  inverted?: boolean
  small?: boolean
  fullWidth?: boolean
  className?: string
  ariaExpanded?: boolean
  ariaControls?: string
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
          'border-2 p-2': small,
          'border-4 px-16 py-5 text-lg': !small,
          'border-black text-black hover:border-slate-500 hover:text-slate-500':
            inverted,
          'border-white text-white hover:border-beige hover:text-beige':
            !inverted
        }
      )}
    >
      {children}
    </button>
  )
}
