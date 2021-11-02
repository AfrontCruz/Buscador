import React from 'react';
import Information from '../components/modals/Information';
import Logo from '../images/octocat.png';


const Index = ({
    onChange,
    form,
    handleSubmit,
    onHide,
    modal,
    items
}) =>(
    <div>
        <div className="principal">
            <Information show={modal.show} onHide={onHide} title={modal.title} body={modal.body} />
            <div className="container-form">
                <img className="img-fluid img-logo pb-5" src={Logo} alt="Logo" />
                <div className="card-form mb-5">
                    <h5 className="text-center mb-5">Búsqueda de usuarios en GitHub</h5>
                    <form className="" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="type">Tipo de búsqueda</label>
                            <select id="type" value ={form.type} onChange={onChange} className="form-select">
                                <option value="">Seleccionar</option>
                                <option value="login">Login</option>
                                <option value="fullname">Nombre</option>
                                <option value="email">Correo</option>
                            </select>
                        </div>
                        <div className="form-group mt-3">
                            <label htmlFor="search">Buscador</label>
                            <input id="search" className="form-control" type="text" value={form.search} onChange={onChange} />
                        </div>
                        <div className="mt-3 text-end">
                            <button type="submit" className="btn-afront">Enviar</button>
                        </div>
                    </form>
                </div>
            </div>
            {
                items.length > 0 ?    
                    <div className="second pb-5">
                        <div className="container">
                            <h4 className="text-center mt-5">Resultados</h4>
                            <div className="d-flex justify-content-center">
                                <div className="container-scroll-x">
                                    {
                                        items.map(
                                            (item, i) => (
                                                <div key={i} className="text-center m-4">
                                                    <img src={item.avatar_url} className="img-avatar" alt="Perfil" />
                                                    <h5 className="mt-2">{item.login}</h5>
                                                    <button className="btn-afront">Ver perfil</button>
                                                </div>
                                            )
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    void(0)
            }
        </div>
    </div>
);

export default Index;