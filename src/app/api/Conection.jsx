//import bcrypt from 'bcrypt';

const apiUrl = 'URL_DEL_BACKEND';

const users = {
    "admin@admin.cl": {
      "email": "admin@admin.cl",
      "password": "admin"
    },
    "prueba@prueba.cl": {
      "email": "prueba@prueba.cl",
      "password": "123456"
    }
  };
  
  export const api = {
    login: async (email, password) => {
      try {
        console.log('Users:', users);
        console.log('Intento de inicio de sesión:', email, password);
  
        const user = users[email];
  
        if (user && user.password === password) {
          return { success: true, message: 'Login exitoso' };
        } else {
          throw new Error('Usuario o contraseña incorrectos');
        }
      } catch (error) {
        console.error('Error en api.login:', error);
        throw new Error('Error al conectar con el backend');
      }
    },
  };
  
  