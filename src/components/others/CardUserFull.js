import React from 'react';

const CardUserFull = ({
    item,
    search
}) => {
    return (
        <div className="text-center card-user m-4">
            <img src={item.avatar_url} className="img-avatar" alt="Perfil" />
            {item.login ? <h5 className="mt-4 mb-3">{item.login}</h5> : void(0)}
            {item.name ? <p>Nombre: {item.name}</p> : void(0)}
            {item.bio ? <p>Bio: {item.bio}</p> : void(0)}
            {item.location ? <p>Locación: {item.location}</p> : void(0)}
            <div className="row mt-3">
                <div className="col-md-6">
                    {item.followers ? <p className="followers">Seguidores: <span>{item.followers}</span> </p> : void(0)}
                </div>
                <div className="col-md-6">
                    {item.public_repos ? <p className="followers">Repositorios: <span>{item.public_repos}</span> </p> : void(0)}
                </div>
            </div>
            <a href={item.html_url} target="_blank" rel="noreferrer" className="mt-4 btn btn-afront">Ver perfil en GitHub</a>
        </div>
    )
};

export default CardUserFull;