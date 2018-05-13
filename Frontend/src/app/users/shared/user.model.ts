export enum Role {
  student = 'student',
  teacher = 'teacher',
  admin = 'admin'
}

export interface User {
  _id?: string;
  uid?: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
}
