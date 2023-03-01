import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'
import Formulario from './components/Formulario'
import ImagenCriptos from './img/imagen-criptos.png'



const Contenedor = styled.div `
  max-width: 70vw;
  margin: 0 auto;
  width: 90%;

 @media(min-width:992px){
  display:grid;
  grid-template-columns: repeat(2,1fr);
  column-gap:1rem;
  
 }
`

const Imagen = styled.img`
max-width: 400px;
width:80%;
margin: 100px auto 0 auto;
display:block;

`

const Heading = styled.h1`
  color: #FFF; 
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size:34px;

  &::after{
    content: ' ';
    width: 100px;
    height: 6px;
    background-color: orange;
    display: block;
    margin:10px auto;
  }
`

function App() {

  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    //Se previene que se ejecute consultando si monedas tiene algo, si lo tiene se ejecuta
    if(Object.keys(monedas).length > 0) {

      const cotizador = async() => {
        setCargando(true)

        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        console.log(url)
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setCotizacion(resultado.DISPLAY[criptomoneda][moneda])

        setCargando(false)
      }

      cotizador()
    }
  },[monedas])

  return (
    <Contenedor>
      <Imagen
      src={ImagenCriptos}
      alt='Cripto monedas'
      />
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>

        <Formulario
          setMonedas = {setMonedas}
        />
        {cargando && <Spinner/>}
        {cotizacion.PRICE && <Cotizacion cotizacion={cotizacion}/>}
      </div>

      
      
    </Contenedor>
  )
}

export default App
