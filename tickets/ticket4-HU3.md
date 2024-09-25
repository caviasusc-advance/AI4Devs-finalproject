### **Ticket 4: Crear endpoint POST /accounts en la API (HU3)**

**Descripción:**
Desarrollar un endpoint en la API para permitir la creación de cuentas bancarias en SparkBank. Este endpoint debe recibir la información de la cuenta y crear una nueva cuenta en la base de datos, validando los datos proporcionados.

**Criterios de Aceptación:**
- El endpoint `POST /accounts` recibe la información de la cuenta y crea una nueva cuenta bancaria en la base de datos.
- el número de cuenta corresponde a un número aleatorio de 12 digitos y debe ser único. en caso que el numero exista reintentar la generacion del numero un maximo de 5 veces 
- Se validan los datos ingresados para asegurar que los campos obligatorios están completos.

**Prioridad:**
Alta

**Estimación:**
3 puntos