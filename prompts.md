> Detalla en esta sección los prompts principales utilizados durante la creación del proyecto, que justifiquen el uso de asistentes de código en todas las fases del ciclo de vida del desarrollo. Esperamos un máximo de 3 por sección, principalmente los de creación inicial o  los de corrección o adición de funcionalidades que consideres más relevantes.
Puedes añadir adicionalmente la conversación completa como link o archivo adjunto si así lo consideras


## Índice

1. [Descripción general del producto](#1-descripción-general-del-producto)
2. [Arquitectura del sistema](#2-arquitectura-del-sistema)
3. [Modelo de datos](#3-modelo-de-datos)
4. [Especificación de la API](#4-especificación-de-la-api)
5. [Historias de usuario](#5-historias-de-usuario)
6. [Tickets de trabajo](#6-tickets-de-trabajo)
7. [Pull requests](#7-pull-requests)

---

## 1. Descripción general del producto

**Prompt 1:**
 Como CEO del neobanco SparkBank define el propósito del producto. Qué valor aporta, qué soluciona, y para quién.
**Prompt 2:**
siendo un experto en banca y finanzas, cuales son las principales caracteristicas y funcionalidades que necesita SparkBank4

---

## 2. Arquitectura del Sistema

### **2.1. Diagrama de arquitectura:**

**Prompt 1:**
Ahora, siendo un arquitecto de software experto define la arquitectura que usaremos en la primera iteración de la aplicación web de Spark Bank, por ahora el backend se manejara como un monilito
**Prompt 2:**
genial, conoces el modelo de diagramas C4?
**Prompt 3:**
crea los diagramas correspondientes a C1 y C2. Usa la referencia oficial (https://c4model.com/) y del lenguaje plantUML para darme el código necesario (https://github.com/plantuml-stdlib/C4-PlantUML)

**Prompt 4:**
Ahora crea el diagrama c3
**Prompt 5:**
Dentro del monolito primero pasaría por el servicio de autenticación antes que el resto de componentes

### **2.2. Descripción de componentes principales:**

**Prompt 1:**
Usando el diagrama c2, Describe los componentes, incluyendo la tecnología utilizada

### **2.3. Descripción de alto nivel del proyecto y estructura de ficheros**

**Prompt 1:**

**Prompt 2:**

**Prompt 3:**

### **2.4. Infraestructura y despliegue**

**Prompt 1:**

**Prompt 2:**

**Prompt 3:**

### **2.5. Seguridad**

**Prompt 1:**

**Prompt 2:**

**Prompt 3:**

### **2.6. Tests**

**Prompt 1:**

**Prompt 2:**

**Prompt 3:**

---

### 3. Modelo de Datos

**Prompt 1:**
Ahora, empecemos a crear el modelo de datos, cuales serían las entidades necesarias para nuestro sistema?
**Prompt 2:**
El usuario debe tener tipo y numero de identificación, tambien la sesión debe indicar si fue terminada por el usuario 
**Prompt 3:**
crea el diagrama de entidad-relación usando plantUML. ten en cuenta que la base de datos será postgres, as que usa el formato adecuado para nombrar las columnas
**Prompt 4:**
Realiza una descripción de cada entidad y como se relacionan entre sí

---

### 4. Especificación de la API

**Prompt 1:**
para el backend, enumera los principales endpoints del api
**Prompt 2:**
falta un endpoint para crear usuarios
**Prompt 3:**
De acuerdo a la especificación de openAPI, crea en archivo api-spec.yaml, dentro de este, define las rutas POST /users, POST /accounts y GET /users/{id}/accounts

---

### 5. Historias de Usuario

**Prompt 1:**
Eres el Product Manager de SparkBank. Crea las historias de usuario principales que son necesarias para crear el sistema de SparkBank.
Usa la siguiente plantilla para crear las Historias de Usuario:

- Formato estándar: "Como [tipo de usuario], quiero [realizar una acción] para [obtener un beneficio]".
- Descripción: Una descripción concisa y en lenguaje natural de la funcionalidad que el usuario desea.
- Criterios de Aceptación: Condiciones específicas que deben cumplirse para considerar la User Story como "terminada", éstos deberian de seguir un formato similar a “Dado que” [contexto inicial], "cuando” [acción realizada], “entonces” [resultado esperado].
- Notas adicionales:  Notas que puedan ayudar al desarrollo de la historia
- Tareas: Lista de tareas y subtareas para que esta historia pueda ser completada
**Prompt 2:**
Vamos a priorizar las Historias de usuario creadas, para cada una estima cada uno de los siguientes items (genera una tabla markdown):

Impacto en el usuario y valor del negocio.
Urgencia basada en tendencias del mercado y feedback de usuarios.
Complejidad y esfuerzo estimado de implementación.
Riesgos y dependencias entre tareas.

---

### 6. Tickets de Trabajo

**Prompt 1:**
Teniedo la siguiente plantilla de ticket de trabajo:

Título:

Descripción:

Criterios de Aceptación

-
- 

Prioridad:

Estimación:

Crea los tickets correspondientes a 
- HU1: Crear las tablas en PostgreSQL
- HU2: Crear endpoint POST /users en la API
- HU2: Crear formulario de registro en la aplicación web
**Prompt 2:**

**Prompt 3:**

---

### 7. Pull Requests

**Prompt 1:**

**Prompt 2:**

**Prompt 3:**


### Creación de tablas

Pasa todos los nombres de tablas y columnas de español a ingles en @ER.txt , tambien añade las columnas de control created, createdby, updated y updatedby a todas las tablas

- - -

a partir del diagrama en @ER.txt  crea las tablas correspondientes en el archivo de migracion de knex en @20240912001442_init.js  

- - -

Crea la ruta en @userRoutes.js y las funciones correspondientes en los archivos @userController.js @createUserDTO.js y @User.js necesarias para completar en ticket HU2: Crear endpoint POST /users en el API del @readme.md

- - - 

Falta validar que no exista un registro con el mismo id_type y id_number

- - -

Crea la pantalla correspondiente en @Signin.jsx tal que cumpla el ticket HU2: Crear formulario de registro en la aplicación web  del @readme.md
usa los componentes que se encuentran en @ui fetch de @http y las librerias formik, yup

- - - 

En @tickets crea un archivo .md con cada uno de los tickets creados hasta el momento. usa en siguiente esquema ticket{numero}-HU{numero de historia}.md

- - - 

Crea los tickets correspondientes a 
- HU3: Crear endpoint POST /accounts en la API
- HU3: Crear formulario de creación de cuenta en la aplicación web.
del @readme

- - -

Crea la ruta en @accountRoutes.js y las funciones correspondientes en los archivos @accountController.js @createAccountDTO.js y @Account.js necesarias para completar el ticket @ticket4-HU3.md

- - -

crea registros en @initialValues.js 

- - - 

Crea los test unitarios necesarios en @tests  para completar los tickets @ticket6-HU2.md y @ticket7-HU3.md 

- - - 

describe los tests 'should create a new account successfully' y 'should return an error if account number generation fails' de @accountController.test.js 

- - - 

Vamos a crear los tests E2E para @Signin.jsx  con cypress en @Signin.cy.js 

- - - 

Genera las instrucciones para instalar y poner en marcha el proyecto en local (librerías, backend, frontend, servidor, base de datos, migraciones y semillas de datos, etc.)

- - - 

Representa la estructura del proyecto y explica brevemente el propósito de las carpetas principales, así como si obedece a algún patrón o arquitectura específica.

- - - 

Haz los cambios necesarios en @Home.jsx para completar el @ticket5-HU3.md

- - -

Continuemos creando funcionalidades del proyecto. Crea la ruta en @accountRoutes.js y las funciones correspondientes en los archivos @accountController.js @createAccountDTO.js y @Account.js necesarias para completar el ticket @ticket8-HU4.md

- - - 

Haz los cambios necesarios en @Home.jsx para completar el ticket @ticket9-HU4.md

- - - 

Vamos a crear la historia 5. Será la creacion de transacciones: 
- una transaccion puede tener un origen o destino externo.  
- En caso que la cuenta sea interna(source_account_id valido), verificar que se tengan fondos suficientes.
- Si la transaccion es exitosa actualizar el balance de la(s) cuenta(s) interna(s) involucrada(s)


- - - 

Crea los tickets correspondientes a la historia @HU5.md

- - - 

Crea la ruta en @transactionRoutes.js y las funciones correspondientes en los archivos @transactionController.js @createTransactionDTO.js y @Transaction.js necesarias para completar el ticket @ticket5-HU3.md

- - - 

crea el modelo de la tabla system_configuration en @SystemConfiguration, debe tener un metodo para retornar registros por las parejas tipo-nombre y tipo-valor

- - - 

en @accountController.js account_type debe corresponder a un valor de system_configuration con type: accountType

- - - 

en @userController.js id_type debe corresponder a un valor de system_configuration con type: documentType

- - - 

Haz los cambios necesarios en @Transactions.jsx para completar el ticket @ticket11-HU5.md usa el componente @select.jsx para cuenta de origen y @baseInput para los demas 

- - - 

crea en endpoint GET /system/:type en @systemConfigurationRoutes.js que retorne las columnas name, value y description de los registros donde el type coincida

- - - 

Vamos a crear una historia en @HU6.md . Será la autenticación del sistema. Por ahora será una autenticacion sencilla mediante cookies http. Al crear un usuario cifrar la contraseña usando bycrpt. Teniendo un endpoint `POST /login/user` que reciba tipo de identificación, numero de identificación y contraseña, validar los datos, crear un jwt que contenga user.id, añadir el token a una cookie httpOnly llamada bank-auth y devolver el contenido del token en la respuesta

- - - 

Crea los tickets correspondientes a la historia @HU6.md

- - - 

Haz los cambios necesarios en @userController.js para cumplir el ticket @ticket13-HU6.md

- - - 

Haz los cambios necesarios en @authRoutes.js  y @authController.js para cumplir el ticket @ticket14-HU6.md


- - - 

Haz los cambios necesarios en @auth.js para cumplir el ticket @ticket15-HU6.md

- - - 

Vamos a actualizar @Singin.jsx y @Login.jsx para el campo id_type usa los valores provenientes de `GET /system/documentType` usa el componente @select.jsx

- - - 

Vamos a crear una historia en @HU7.md . Sera el historial de transacciones en la ventana `/transaction` habra un campo de seleccion para elegir la cuenta a ver y debajo una tabla que muestre fecha, descripcion y monto. si la cuenta es el origen se mostrara el monto como negativo y si es la cuenta destino se mostrar como positivo
 
- - - 

Crea las funciones correspondientes en los archivos @transactionController.js y @Transaction.js necesarias para completar el ticket @ticket17-HU7.md

- - - 

Haz los cambios necesarios en @Transactions.jsx para cumplir con el ticket @ticket19-HU7.md

- - - 

A partir de @routes y sus respectivos metodos en @controllers y @dto actualiza @api-spec.yaml
