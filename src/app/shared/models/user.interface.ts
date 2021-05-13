export type Roles = 'Jardinero'  | 'Administrador' | 'Invitado';

export interface User {
  uid: string;
  documento?: number;
  email: string;
  displayName?: string;
  nombreCompleto?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
  estado?: string;
  fechaActualización?: Date,
  fechaCreacion?: Date,
}
