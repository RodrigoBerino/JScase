import Logo from '../logo'
import OpcoesHeader from '../opcoesheader'
import IconesHeader from '../iconesheader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header (){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    );
}

export default Header