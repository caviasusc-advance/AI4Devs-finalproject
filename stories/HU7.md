### **Historia de Usuario 7: Historial de Transacciones** 
Como usuario registrado, quiero ver el historial de transacciones de mis cuentas bancarias para tener un registro detallado de todas las transacciones realizadas.

**Descripción:** 
En la ventana `/transaction`, habrá un campo de selección para elegir la cuenta a ver y, debajo, una tabla que muestre la fecha, descripción y monto de las transacciones. Si la cuenta es el origen, se mostrará el monto como negativo y, si es la cuenta destino, se mostrará como positivo.

**Criterios de Aceptación:** 
- Dado que el usuario está autenticado,
- Cuando el usuario selecciona una cuenta en el campo de selección,
- Entonces el sistema debe mostrar una tabla con el historial de transacciones de la cuenta seleccionada, incluyendo la fecha, descripción y monto.

**Notas adicionales:** 
- Si la cuenta es el origen de la transacción, el monto se muestra como negativo.
- Si la cuenta es el destino de la transacción, el monto se muestra como positivo.
- La tabla debe estar ordenada por fecha de transacción, de la más reciente a la más antigua.

**Tareas:** 
- Crear endpoint GET /accounts/{accountId}/transactions en la API.
- Implementar lógica de recuperación de transacciones en el backend.
- Crear vista de historial de transacciones en la aplicación web.
- Implementar campo de selección para elegir la cuenta.
- Implementar tabla para mostrar el historial de transacciones.
- Escribir pruebas unitarias y de integración.