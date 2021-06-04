// Creamos los tipos de roles que existiran en el sistema
export type Roles = 'Jardinero'  | 'Administrador';

// Creamos una interfaz con diferentes atributos que haran o hacen parte de un usuario, lo cual nos ayudará para enviar, guardar, y usar estos datos
// en diferentes partes del sistem por medio de observables
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
