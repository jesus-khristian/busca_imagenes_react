import React from 'react';
import Imagen from './Imagen';
import PropTypes from 'prop-types'


const ListaImagenes = ({images}) => {
    return (
        
        <div className="col-12 p-5 row">
            {images.map(image => (
                <Imagen
                    key={image.id}
                    image={image}
                />
            ))}
        </div>
    )
}

ListaImagenes.propTypes =  {
    images: PropTypes.array.isRequired
}

export default ListaImagenes
