### **Historia de Usuario 4: Obtener Cuentas de Usuario** 
Como usuario registrado, quiero ver todas mis cuentas bancarias para tener un panorama completo de mis finanzas.

**Descripción:** 
Un usuario debe poder visualizar todas las cuentas bancarias que ha creado en SparkBank a través de su perfil. 

**Criterios de Aceptación:** 
- Dado que el usuario está autenticado, 
- Cuando el usuario solicita la lista de sus cuentas, 
- Entonces el sistema debe devolver una lista de todas las cuentas asociadas al usuario, incluyendo detalles como número de cuenta, tipo de cuenta y saldo. 

**Notas adicionales:** La lista de cuentas debe estar ordenada por fecha de creación o por saldo, según se decida. 

**Tareas:** 
- Crear endpoint `GET /users/{id}/accounts` en la API. 
- Implementar lógica de recuperación de cuentas en el backend. 
- Crear vista de cuentas en la aplicación web. 
- Implementar paginación si es necesario para manejar grandes cantidades de datos. 
- Escribir pruebas unitarias y de integración.