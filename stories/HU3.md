#### Historia de Usuario 3: Creación de Cuenta Bancaria
Como usuario registrado, quiero crear una nueva cuenta bancaria para gestionar mis fondos y realizar transacciones.

**Descripción:** Un usuario debe poder crear una cuenta bancaria asociada a su perfil para gestionar sus finanzas dentro del sistema de SparkBank.

**Criterios de Aceptación:**

- Dado que el usuario está autenticado y proporciona información de cuenta (número de cuenta, tipo de cuenta, saldo inicial),
- Cuando el usuario envía la solicitud de creación de cuenta,
- Entonces el sistema debe crear una nueva cuenta en la base de datos y asociarla con el usuario, y proporcionar una confirmación de que la cuenta fue creada exitosamente.

**Notas adicionales:** Debe asegurarse que el número de cuenta sea único y que el saldo inicial sea válido.

**Tareas:**
- Crear endpoint POST /accounts en la API.
- Implementar lógica de creación de cuenta en el backend.
- Crear formulario de creación de cuenta en la aplicación web.
- Implementar validaciones para número de cuenta y saldo.
- Escribir pruebas unitarias y de integración.
