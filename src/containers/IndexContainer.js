import React, { useState } from 'react';
import Index from '../pages/Index';
import Request from '../async/request';

const IndexContainer = () =>{
    const [form, setForm] = useState({ type:'', search:'' });
    const onChange = ({target}) => setForm( { ...form, [ target.id ]: target.value } );
    const [modal, setModal] = useState({show:false, title:'', body:''});
    const [modalUser, setModalUser] = useState({show:false});
    const [items, setItems] = useState([]);
    const options = [
        {value:"email", text:"Correo"},
        {value:"login", text:"Login"},
        {value:"fullname", text:"Nombre"},
    ];
    const [user, setUser] = useState({});


    const handleSubmit = async (e) =>{
        e.preventDefault();
        let uri = "?q=" + form.search + "+in:" + form.type;
        setItems([]);
        let request = new Request("GET",null, 0, uri);
        let response = await request.exec();
        console.log( response );
        if( response.total_count > 0 ){
            setItems( response.items );
            window.scrollTo(0,document.body.scrollHeight);
        }
        else
            setModal({
                title:'¡Oh no!',
                body: 'No se encontraron usuarios para tu búsqueda',
                show: true
            });
        
    }

    const search = async (item) =>{
        console.log( item );
        let request = new Request("GET", null, 0, "" );
        let response = await request.myFetch( item.url );
        setUser( response );
        setModalUser({...modalUser, show: true});
    }

    const onHide = () => setModal({...modal, show:false});
    const onHideUser = () => setModalUser({...modalUser, show:false});

    return(
        <Index
            form = { form }
            onChange = { onChange }
            handleSubmit = { handleSubmit }
            onHide = { onHide }
            modal = { modal }
            items = { items }
            options = { options }
            search = { search }
            user = { user }
            onHideUser = { onHideUser }
            modalUser = { modalUser }
        />
    )
};

export default IndexContainer;