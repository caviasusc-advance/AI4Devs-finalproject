### **Ticket 11: Crear formulario de creación de transacción en la aplicación web (HU5)**

**Descripción:**
Implementar un formulario de creación de transacción en la aplicación web de SparkBank que permita a los usuarios registrados ingresar los datos necesarios para realizar una transacción bancaria. Este formulario debe ser accesible desde la página de transacciones y conectarse con el endpoint `POST /transactions` de la API.

**Criterios de Aceptación:**
- El formulario de creación de transacción está disponible en la interfaz web y permite el ingreso de datos de la transacción. 
- El formulario es visible si el usuario tiene una o mas cuentas disponibles
- el formulario tiene el campo de selección 'Cuenta de origen' donde se encuentran las cuentas del usuario, el campo de texto 'cuenta de destino', el campo valor y el campo descripción
- Los datos ingresados son enviados correctamente al endpoint `POST /transactions` para su procesamiento.
- El formulario valida los campos requeridos antes de permitir el envío de la solicitud.

**Prioridad:**
Alta

**Estimación:**
3 puntos