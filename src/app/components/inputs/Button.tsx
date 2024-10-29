type ButtonProps = {
  text: string
  inverted?: boolean
  small?: boolean
}

const Button = ({ text, inverted, small }: ButtonProps) => {
  return (
    <button
      className={`rounded-xl ${small ? 'border-2' : 'border-4'} ${inverted ? 'border-black' : 'border-white'} bg-transparent ${small ? 'p-2' : 'px-16 py-5 text-lg'} ${inverted ? 'text-black' : 'text-white'} hover:bg-gray-100`} // Ökad padding för att göra knappen bredare
    >
      {text}
    </button>
  )
}

export default Button
