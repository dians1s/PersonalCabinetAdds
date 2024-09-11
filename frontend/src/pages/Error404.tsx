import React, { useEffect } from "react";

const Error404 = () => {

    useEffect(() => {
        document.title = 'Ошибка 404';
    })

    return(<div className="error404">
        <span className="error404__title">Ошибка 404:</span>
        Страница не найдена
    </div>)
}

export default Error404;