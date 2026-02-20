const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Task Management API",
      version: "1.0.0",
      description: "Secure REST API with JWT Authentication",
    },
    servers: [
      {
        url: "https://todo-backend-1-o395.onrender.com",
      },
      {
        url: "http://localhost:5000",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

module.exports = swaggerJsdoc(options);











// const swaggerJsdoc = require("swagger-jsdoc");

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "Task Management API",
//       version: "1.0.0",
//       description: "Backend REST API for managing todos with JWT auth",
//     },
//     servers: [
//       {
//         url: "https://todo-backend-1-o395.onrender.com",
//       },
//     ],
//     components: {
//       securitySchemes: {
//         bearerAuth: {
//           type: "http",
//           scheme: "bearer",
//           bearerFormat: "JWT",
//         },
//       },
//     },
//     security: [
//       {
//         bearerAuth: [],
//       },
//     ],
//   },
//   apis: ["./routes/*.js"],
// };

// module.exports = swaggerJsdoc(options);