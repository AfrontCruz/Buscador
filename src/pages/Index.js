import React from 'react';
import ButtonAC from '../components/buttons/ButtonAC';
import InputAC from '../components/inputs/InputAC';
import SelectAC from '../components/inputs/SelectAC';
import Information from '../components/modals/Information';
import User from '../components/modals/User';
import UserList from '../components/others/UsersList';
import Logo from '../images/octocat.png';

const Index = ({
    onChange,
    form,
    handleSubmit,
    onHide,
    modal,
    items,
    options,
    search,
    user,
    onHideUser,
    modalUser
}) =>(
    <div>
        <div className="principal">
            <Information show={modal.show} onHide={onHide} title={modal.title} body={modal.body} />
            <User show={modalUser.show} user={user} onHide={onHideUser} />
            <div className="container-form">
                <img className="img-fluid img-logo pb-5" src={Logo} alt="Logo" />
                <div className="card-form mb-5">
                    <h5 className="text-center mb-5">Búsqueda de usuarios en GitHub</h5>
                    <form className="" onSubmit={handleSubmit}>
                        <SelectAC id="type" value={form.type} onChange={onChange} options={options} label="Buscar por"/>
                        <InputAC id="search" label="Búsqueda" className="mt-3" value={form.search} onChange={onChange} type="text" />                        
                        <ButtonAC className="mt-3 text-end" type="submit" text="Enviar"/>
                    </form>
                </div>
            </div>
            <UserList search={search} items={items} />
        </div>
    </div>
);

export default Index;