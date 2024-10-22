import Link from 'next/link'
const DropdownMenu: React.FC = () => {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <Link href="/kliniken">Kliniken</Link>
        </li>
        <li>
          <Link href="/brostoperationer">Bröstoperationer</Link>
        </li>
        <li>
          <Link href="/implantaten">Implantaten</Link>
        </li>
        <li>
          <Link href="/hud-och-injektioner">Hud och injektioner</Link>
        </li>
        <li>
          <Link href="/pris">Pris</Link>
        </li>
      </ul>
    </nav>
  )
}
export default DropdownMenu
