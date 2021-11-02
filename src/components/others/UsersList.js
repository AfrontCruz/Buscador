import React, { Fragment } from 'react';
import CardUser from './CardUser';

const UserList = ({
    search,
    items
}) => (
    <Fragment>
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
                                            <CardUser search={search} item={item} key={i} />
                                        )
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
                :
                void (0)
        }
    </Fragment>

);

export default UserList;