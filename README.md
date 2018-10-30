Proyecto de training, integracion con las dos versiones del checkout de mercadopago. 

## Proyectos


### choweb 

Proyecto JAVA con el backend que implementa la SDK y se comunica con las apis, sirve los endpoints a los proyectos frontend.

### choweb-front

Projecto front en Angular para crear la preferencia.

La parte de seteo de credenciales esta deshabilitada (se envían pero el back las ignora)

Se puede correr con ng serve --open

### payment

Front de la segunda parte de choweb-front. Al generar la preferencia se puede proceder al checkout de la misma. 

Los botones de Tokenize y Checkout no se muestran al mismo tiempo, por lo que uno siempre esta comentado. 

### v1 

Front del checkout personalizado mediante apis.

