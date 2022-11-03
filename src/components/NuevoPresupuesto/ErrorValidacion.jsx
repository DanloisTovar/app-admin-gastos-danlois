import React from 'react';

const ErrorValidacion = ({ children, tipo }) => {
    return <div className={`alerta ${tipo}`}>{children}</div>;
};

export default ErrorValidacion;
