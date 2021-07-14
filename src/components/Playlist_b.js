import './Playlist_b.css';

function Playlist_b() {
    return (
        <div className="playlist_b">
            <input type="text" name="search" id="search" className="search_input" placeholder="&#61442;    Buscar" />

            <div className="playlist_b_container">
                <h1 className="table_result">Resultados</h1>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Artista</th>
                        <th>Album</th>
                        <th>Duracion</th>
                        <th>Agregar</th>
                    </tr>
                    <tr>
                        <td>A las nueve</td>
                        <td>NTVG</td>
                        <td>50</td>
                        <td>3:24</td>
                    </tr>
                </table>
            </div>
            <div className="playlist_b_container2">
                <h1 className="table_result">Tu Playlist</h1>
                <table>
                    <tr>
                        <th>Nombre</th>
                        <th>Artista</th>
                        <th>Duracion</th>
                        <th>Cant. Votos</th>
                        <th>Votar</th>
                    </tr>
                    <tr>
                        <td>A las nueve</td>
                        <td>NTVG</td>
                        <td>50</td>
                        <td>3:24</td>
                        <td>4</td>
                    </tr>
                    
                </table>
            </div>


        </div>
    );
}

export default Playlist_b;