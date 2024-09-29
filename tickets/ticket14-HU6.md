### **Ticket 14: Crear endpoint POST /login/user en la API (HU6)**

**Descripción:**
Desarrollar un endpoint en la API para permitir la autenticación de usuarios en SparkBank. Este endpoint debe recibir el tipo de identificación, número de identificación y contraseña, validar los datos, crear un JWT que contenga user.id, añadir el token a una cookie httpOnly llamada bank-auth y devolver el contenido del token en la respuesta.

**Criterios de Aceptación:**
- El endpoint POST /login/user recibe el tipo de identificación, número de identificación y contraseña.
- Los datos de autenticación son validados.
- Si los datos son correctos, se crea un JWT que contenga user.id.
- El token JWT se añade a una cookie httpOnly llamada bank-auth.
- se envia una cookie log-state con valor logged.
- El contenido del token se devuelve en la respuesta.

**Prioridad:**
Alta

**Estimación:**
3 puntos