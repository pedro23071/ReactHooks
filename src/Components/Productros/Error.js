import React from 'react';

export const Error = ({mesage}) => (
    <div className="alert alert-danger" role="alert">
        {mesage}
    </div>
)