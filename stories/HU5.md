### **Historia de Usuario 5: Creación de Transacciones** 
Como usuario registrado, quiero poder realizar transacciones bancarias para transferir fondos entre cuentas, tanto internas como externas.

**Descripción:** 
Un usuario debe poder realizar transacciones bancarias que pueden tener un origen o destino externo. En caso de que la cuenta de origen sea interna, se debe verificar que se tengan fondos suficientes antes de realizar la transacción.

**Criterios de Aceptación:** 
- Dado que el usuario está autenticado y proporciona información de la transacción (cuenta de origen, cuenta de destino, monto),
- Cuando el usuario envía la solicitud de creación de transacción,
- Entonces el sistema debe verificar que la cuenta de origen tenga fondos suficientes (si es una cuenta interna) y crear la transacción en la base de datos, proporcionando una confirmación de que la transacción fue realizada exitosamente y actualizando el balance de la(s) cuenta(s) interna(s) involucrada(s)

**Notas adicionales:** 
- La transacción puede tener un origen o destino externo.
- Se debe asegurar que los fondos sean suficientes en caso de que la cuenta de origen sea interna.

**Tareas:** 
- Crear endpoint POST /transactions en la API.
- Implementar lógica de creación de transacción en el backend.
- Verificar fondos suficientes en la cuenta de origen si es interna.
- Crear formulario de creación de transacción en la aplicación web.
- Implementar validaciones para los campos de la transacción.
- Escribir pruebas unitarias y de integración.