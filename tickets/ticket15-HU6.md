### **Ticket 15: Crear un middleware para verificar la autenticación (HU6)**

**Descripción:**
Desarrollar un middleware que verifique la autenticación del usuario mediante el token JWT almacenado en la cookie httpOnly llamada bank-auth. Este middleware debe ser utilizado en las rutas que requieren autenticación.

**Criterios de Aceptación:**
- El middleware debe verificar la validez del token JWT.
- Si el token es válido, el middleware debe permitir el acceso a la ruta protegida.
- Si el token no es válido o no está presente, el middleware debe denegar el acceso y devolver un error adecuado.

**Prioridad:**
Alta

**Estimación:**
3 puntos