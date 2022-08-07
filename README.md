# Proyecto E-Commerce de Coder
Proyecto de aplicación web e-commerce para Coderhouse con navegacion entre categorias, visualizacion de detalles de producto y manipilación el carrito de compras. En dicha app se alojan 20 produtos, obtenidos y modificados de de la API "fakestoreapi", previamente cargados en una base de datos no estructurada en Firebase.
Dicha app cuenta con los contadores sobre el detalle de cada producto en los cuales se pueden incrementar y decrementar la cantidad de elementos para confirmar la compra o en caso de arrempentirse por la cantidad se puede volver al estado anterior y e contador volver al estado inicial.
Cuenta con un carrito en el cual aloja los elementos, ya confirmados para realizar la orden de compra, listados con sus detalles y totalizadores; se puede eliminar los diferentes items o tambien vaciar el carrito por completo sin antes confirmar la acción en un mensajes emergentes.
Se ingresaron verifiaciones para el ingreso de datos en el formulario.
Verifica en tiempo real, antes de realizar el pedido de orden, que la cantidad de producto solicitados se encuentren en sotck; esto puede disparar estas opciones:
    Caso afirmativo, hay disponibilidad de producto, la app genera la el pedido y luego la orden informando lo sucedido a raves de un mensaje emergente. Se registra en la base de Firebase y además envia un correo electrónico informando los datos de comprador y el detalle de la compra al vendedor.
    Caso negativo, no hay algún/os producto/s, informa a traves de un mensaje emergente que el producto no se encuentra disponible y además se envia un correo electrónico para informar el/los faltante/s de producto al vendedor.


# Bibliotecas utilizadas 

React - te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará de actualizar y renderizar de manera eficiente los componentes correctos cuando los datos cambien.

Firebase - e es una plataforma móvil diseñada y creada por Google, teniendo como principal función desarrollar y facilitar la creación de aplicaciones para dispositivos móviles que cuenten con una alta calidad a pesar de su rápida elaboración; esto con la finalidad de que se pueda incrementar la base de datos de usuarios y de esta manera incrementar la monetización de dicha app

SweetAlert - libreria hace que los mensajes emergentes sean fáciles y bonitos.

React bootstrap -  es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

FormSubmit - permite iniciar el envío del formulario mediante JavaScript. Podemos utilizarlo para crear y enviar nuestros propios formularios al servidor.(Se utiliza sin instalación)