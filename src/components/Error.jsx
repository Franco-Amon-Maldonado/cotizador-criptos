import styled from "@emotion/styled";

const Parrafo = styled.p `
    font-size: 1.5rem;
    color: #FFF;
    text-align: center;
    background-color: #7b2525;
    border-radius: 5px;
    font-weight: bold;
    padding:1.5px;
`

const Error = ({children}) => {
    return ( 

        <Parrafo>{children}</Parrafo>

     )
}

export default Error;