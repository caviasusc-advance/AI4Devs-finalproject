#### Historia de Usuario 1: Creación de Tablas en la Base de Datos
Como desarrollador, quiero usar las tablas necesarias en la base de datos para asegurar que el sistema pueda almacenar y gestionar la información de usuarios, cuentas, transacciones, y notificaciones de manera eficiente.

**Descripción:** El sistema requiere que se creen las tablas necesarias en la base de datos PostgreSQL para almacenar la información de los usuarios, cuentas, transacciones y notificaciones. Estas tablas deben estar bien estructuradas, con las claves primarias y foráneas adecuadas para asegurar la integridad referencial.

**Criterios de Aceptación:**

- Dado que los requisitos del esquema de base de datos están definidos,
- Cuando el desarrollador implementa las tablas en PostgreSQL,
- Entonces las tablas deben ser creadas correctamente con las columnas, tipos de datos, claves primarias, y claves foráneas especificadas en el modelo de datos, y deben ser verificadas mediante pruebas de integridad y funcionalidad.

**Notas adicionales:** Asegurarse de que las tablas están normalizadas para evitar redundancia de datos y mejorar el rendimiento de las consultas. Documentar el esquema de la base de datos y las relaciones entre tablas.

**Tareas:**

- Crear las tablas en PostgreSQL usando el archivo de definición.
  - Ejecutar los comandos DDL para crear las tablas.
  - Verificar que las tablas se creen correctamente en el entorno de desarrollo.
- Realizar pruebas de integridad y funcionalidad.
  - Ejecutar pruebas para verificar que los datos se almacenan correctamente.
  - Probar relaciones entre tablas para asegurar integridad referencial.
- Documentar el esquema de la base de datos.
  - Actualizar la documentación técnica del proyecto.