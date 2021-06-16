// Importamos el modelo de usuario, para poder acceder al atributo de "role"
import { User } from '../../shared/models/user.interface';

// Exportamos la clase
export class RoleValidator {

  // Creamos un metodo donde valide si el usuario es Jardinero o Administrador, si es asi, retornará un booleano con el valor de "True"
  esJardineroAdmin(user: User): boolean {
    return user.role === 'Jardinero' || user.role === 'Administrador';
  }
  // Creamos un metodo donde valide si el usuario es Administrador, si es asi, retornará un booleano con el valor de "True"
  esAdministrador(user: User): boolean {
    return user.role === 'Administrador';
  }

  

}
