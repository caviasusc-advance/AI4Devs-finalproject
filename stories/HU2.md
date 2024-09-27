#### Historia de Usuario 2: Registro de Usuario
Como nuevo usuario, quiero registrarme en SparkBank para tener acceso a los servicios financieros del banco.

**Descripción:** Un usuario debe poder registrarse en el sistema de SparkBank proporcionando su información personal y de contacto para crear una cuenta en la plataforma.

**Criterios de Aceptación:**
- Dado que el usuario proporciona información completa (tipo de identificación, número de identificación, nombre, correo electrónico, contraseña, teléfono, dirección, fecha de nacimiento),
- Cuando el usuario envía la solicitud de registro,
- Entonces el sistema debe crear una cuenta de usuario, guardar la información en la base de datos, y enviar una confirmación de registro al correo electrónico del usuario.

**Notas adicionales:** El sistema debe validar la información proporcionada para evitar duplicados y asegurar que todos los campos obligatorios estén completos.
**Tareas:**
- Crear endpoint POST /users en la API.
- Implementar validaciones de datos en el backend.
- Crear formulario de registro en la aplicación web.
- Implementar confirmación de correo electrónico.
- Escribir pruebas unitarias y de integración.