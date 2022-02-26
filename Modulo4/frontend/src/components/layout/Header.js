import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="holder">
                <div className="logo">
                    <img src="img/logolibro.png" width="100" alt="libro" />
                </div>
                <h1> Blog de escritura </h1>
            </div>
        </header>
    );
}

export default Header;