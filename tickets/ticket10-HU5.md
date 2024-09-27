### **Ticket 10:  Crear endpoint POST /transactions en la API (HU5)**

**Descripción:**
Desarrollar un endpoint en la API para permitir la creación de transacciones bancarias en SparkBank. Este endpoint debe recibir la información de la transacción y crear una nueva transacción en la base de datos, validando los datos proporcionados.

**Criterios de Aceptación:**
- El endpoint `POST /transactions` recibe la información de la transacción y crea una nueva transacción en la base de datos.
- Se validan los datos ingresados para asegurar que los campos obligatorios están completos.
- Se verifica que la cuenta de origen tenga fondos suficientes si es una cuenta interna.
- Si la transacción es exitosa se actualiza el balance de la(s) cuenta(s) interna(s) involucrada(s) 

**Prioridad:**
Alta

**Estimación:**
5 puntos