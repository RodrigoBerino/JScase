import './estilo.css'
import Logo from '../logo'
import OpcoesHeader from '../opcoesheader'
import IconesHeader from '../iconesheader'

function Header (){
    return(
        <header className='App-header'>
        <Logo></Logo>
        <OpcoesHeader></OpcoesHeader>
        <IconesHeader></IconesHeader>
        </header>
    )
}

export default Header