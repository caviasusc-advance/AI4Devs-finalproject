### **Ticket 16: Manejar el estado de la sesión en el frontend (HU6)**

**Descripción:**
Implementar la lógica en el frontend para manejar el estado de la sesión del usuario. Esto incluye el almacenamiento del token JWT en una cookie httpOnly, la verificación del estado de autenticación y la gestión de la sesión del usuario.

**Criterios de Aceptación:**
- El frontend debe almacenar la respuesta de `POST /login/user` en session storage con la llave `userInfo`.
- La aplicación debe verificar que exista contenido en la cookie `log-state`.

**Prioridad:**
Alta

**Estimación:**
3 puntos