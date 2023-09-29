
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../style.css';


const DetallePokemon = () => {

    const { id } = useParams();
    const [detallesPokemon, setDetallesPokemon] = useState({});
    // const [nombre, setNombre] = useState('');
    // const [habilidad, setHabilidad] = useState('');
    // const [altura, setAltura] = useState('');
    // const [stats, setStates] = useState([]);




    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                // setNombre(jsonData.name);
                // setAltura(jsonData.height);
                // setHabilidad(jsonData.abilities[0].ability.name);
                // setStates(jsonData.stats);
                setDetallesPokemon(jsonData)
            })
            .catch(error => console.log('Ocurrió un error en la consulta'));
    }, []);

    return (
        <>
            <p><Link to={'/'}>Home </Link></p>
            <h2>{detallesPokemon.name}</h2>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${DetallePokemon.id}.png`}
                className='card-image-top'
                alt='Imagen de un pokemon'
            />
            <table className="table">
                <thead>
                    <tr>
                        <th>Estadistica</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        detallesPokemon.stats?.map((stat, index) => {
                            return (<tr key={index}>
                                <td>{stat.stat.name}</td>
                                <td>{stat.base_stat}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default DetallePokemon;