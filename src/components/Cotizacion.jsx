import styled from "@emotion/styled";



const Contenedor = styled.div`
display:flex;
align-items: flex-start;
justify-content: space-around;
background-color: rgba(82, 152, 47, 0.6);
margin-top:40px;
border-radius: 10px;
color: #fff;
padding:10px;

@media(max-width:992px){
    flex-direction:column;
}

`

const Precio = styled.p`
font-size: 2rem;

`

const Parrafo = styled.p`
margin-top: 20px;
font-size: 1.4rem;
padding:10px;

`
const Span = styled.span`
    font-weight:bold;
    text-transform: uppercase;
`
const Imagen = styled.img`
    max-width:200px;
    align-self: center;
    
    
    
`


const Cotizacion = ({cotizacion}) => {
    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE} = cotizacion;
    return ( 
        
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
            <div>
                <Precio>El precio es de: <Span>{PRICE}</Span></Precio>
                <Parrafo>Precio más alto del día: <Span>{HIGHDAY}</Span></Parrafo>
                <Parrafo>Precio más bajo del día: <Span>{LOWDAY}</Span></Parrafo>
                <Parrafo>Variación ultimas 24horas: <Span>{CHANGEPCT24HOUR}</Span></Parrafo>
                <Parrafo>Última actualización: <Span>{LASTUPDATE}</Span></Parrafo>
                <Parrafo></Parrafo>
            </div>
            
        </Contenedor>

     )
}

export default Cotizacion;