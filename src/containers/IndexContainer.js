import React, { useState } from 'react';
import Index from '../pages/Index';
import Request from '../async/request';

const IndexContainer = () =>{
    const [form, setForm] = useState({ type:'', search:'' });
    const onChange = ({target}) => setForm( { ...form, [ target.id ]: target.value } );
    const [modal, setModal] = useState({show:false, title:'', body:''});
    const [items, setItems] = useState([]);


    const handleSubmit = async (e) =>{
        e.preventDefault();
        let uri = "?q=" + form.search + "+in:" + form.type;
        let request = new Request("GET",null, 0, uri);
        let response = await request.exec();
        console.log( response );
        if( response.total_count > 0 ){
            setItems( response.items );
            setTimeout(
                () => window.scrollTo(0,document.body.scrollHeight), 1000
            );
        }
        else
            setModal({
                title:'¡Oh no!',
                body: 'No se encontraron usuarios para tu búsqueda',
                show: true
            });
        
    }

    const onHide = () => setModal({...modal, show:false});

    return(
        <Index
            form = { form }
            onChange = { onChange }
            handleSubmit = { handleSubmit }
            onHide = { onHide }
            modal = { modal }
            items = { items }
        />
    )
};

export default IndexContainer;