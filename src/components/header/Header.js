import NavButton from '../navButton/NavButton'
import './index.scss'

export default function Header(){
    return (
        <header>
            <nav>
                <ul id="leftNav">
                    <li><NavButton text="Sign in"/></li>
                    <li><NavButton text="Register"/></li>
                    <li><NavButton text="Search"/></li>
                </ul>
                <h1>DressUp</h1>
                <ul id="rightNav">
                    <li><NavButton text="Gift Certificate"/></li>
                    <li><NavButton text="Cart"/></li>
                </ul>
            </nav>
        </header>
    )
}