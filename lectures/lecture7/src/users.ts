import { User } from "./models/user";
import { UserRole } from "./enums";

export const users: User[] = [{
  id: 0,
  firstName: 'Ivan',
  lastName: 'Ivanov',
  role: UserRole.admin
}];