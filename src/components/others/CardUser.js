import React from 'react';

const CardUser = ({
    item,
    search
}) => {
    return (
        <div className="text-center m-4">
            <img src={item.avatar_url} className="img-avatar" alt="Perfil" />
            <h5 className="mt-2">{item.login}</h5>
            <button onClick={() => search( item )} className="btn-afront">Ver perfil</button>
        </div>
    )
};

export default CardUser;