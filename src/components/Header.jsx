import '../assets/styles/Header.css'

export default function Header() {
  return (
    <header className='blog-header'>
      <div>Realworld Blog</div>
      <ul className='auth-btns'>
        <li>Sing in</li>
        <li className='active'>Sing up</li>
      </ul>
    </header>
  )
}