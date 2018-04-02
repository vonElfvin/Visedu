export enum Role {
  student = 'student',
  teacher = 'teacher',
  admin = 'admin'
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  lastLogin: number;
  email: string;
  parentEmail: string;
  classCode: string;
  role: Role;
}
