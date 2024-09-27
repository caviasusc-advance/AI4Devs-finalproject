### **Historia de Usuario 6: Autenticación del Sistema** 
Como usuario registrado, quiero poder autenticarme en el sistema para acceder a mis cuentas y realizar transacciones de manera segura.

**Descripción:** 
Implementar un sistema de autenticación sencillo mediante cookies HTTP. Al crear un usuario, la contraseña debe ser cifrada usando bcrypt. Se debe proporcionar un endpoint POST /login/user que reciba tipo de identificación, número de identificación y contraseña, valide los datos, cree un JWT que contenga user.id, añada el token a una cookie httpOnly llamada bank-auth y devuelva el contenido del token en la respuesta.

**Criterios de Aceptación:** 
- Dado que el usuario proporciona tipo de identificación, número de identificación y contraseña,
- Cuando el usuario envía la solicitud de autenticación,
- Entonces el sistema debe validar los datos, crear un JWT que contenga user.id, añadir el token a una cookie httpOnly llamada bank-auth y devolver el contenido del token en la respuesta.

**Notas adicionales:** 
- La contraseña debe ser cifrada usando bcrypt al crear un usuario.
- La cookie httpOnly debe ser utilizada para almacenar el token de autenticación.

**Tareas:** 
- Implementar cifrado de contraseña usando bcrypt al crear un usuario.
- Crear un middleware para verificar la autenticación.
- Crear endpoint POST /login/user en la API.
- Manejar el estado de la sesión en el frontend 