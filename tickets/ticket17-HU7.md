### **Ticket 17: Crear endpoint GET /accounts/{accountId}/transactions en la API (HU7)**

**Descripción:**
Desarrollar un endpoint en la API para permitir la recuperación del historial de transacciones de una cuenta específica en SparkBank. Este endpoint debe recibir el accountId y devolver una lista de transacciones asociadas a esa cuenta.

**Criterios de Aceptación:**
- El endpoint `GET /accounts/{accountId}/transactions` recibe el accountId y devuelve una lista de transacciones asociadas a esa cuenta.
- La lista incluye detalles como fecha, descripción y monto de la transacción.
- La lista está ordenada por fecha de transacción, de la más reciente a la más antigua.
- Si la cuenta es el origen de la transacción, el monto se muestra como negativo. Si la cuenta es el destino de la transacción, el monto se muestra como positivo.

**Prioridad:**
Alta

**Estimación:**
3 puntos