### **Ticket 5: Implementar lógica de recuperación de cuentas en el backend (HU4)**

**Descripción:**
Desarrollar la lógica en el backend para recuperar todas las cuentas bancarias asociadas a un usuario autenticado. Esta lógica debe incluir la validación de la autenticación del usuario y la consulta a la base de datos para obtener la lista de cuentas.

**Criterios de Aceptación:**
- El endpoint GET /users/{id}/accounts devuelve una lista de todas las cuentas asociadas al usuario.
- La lista incluye detalles como número de cuenta, tipo de cuenta y saldo.
- La lista está ordenada por fecha de creación o por saldo, según se decida.

**Prioridad:**
Alta

**Estimación:**
3 puntos