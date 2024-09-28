import { Skills } from "./skills.model";


export interface User {
  id: number;
  fullName: string;
  age: number;
  skills: Skills[];
}
