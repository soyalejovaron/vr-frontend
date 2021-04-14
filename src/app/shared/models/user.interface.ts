export type Roles = 'Jardinero'  | 'Administrador' | 'Invitado';

export interface User {
  uid: string;
  documento?: number;
  email: string;
  displayName?: string;
  emailVerified: boolean;
  password?: string;
  photoURL?: string;
  role?: Roles;
  phoneNumber?: string;
  estado?: string;
  apellidos?: string;
  fechaActualización?: Date,
  fechaCreacion?: Date,
}
