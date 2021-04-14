import { User } from '../../shared/models/user.interface';

export class RoleValidator {

  esJardineroAdmin(user: User): boolean {
    return user.role === 'Jardinero' || user.role === 'Administrador';
  }

  esAdministrador(user: User): boolean {
    return user.role === 'Administrador';
  }

  esInvitado(user: User): boolean {
    return user.role === 'Invitado';
  }
}
