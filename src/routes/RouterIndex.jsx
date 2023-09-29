import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import DetallePokemon from '../pages/DetallePokemon';

const RouterIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/pokemon/:id' element={<DetallePokemon />} />
            <Route path='/about' element={<About />} />
        </Routes>
    )
}

export default RouterIndex;