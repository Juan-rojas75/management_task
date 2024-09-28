import { User } from '../../users/user/models/user.model';

export interface Task {
  id: number;
  title: string;
  description: string;
  dateEnd: Date;
  completed: boolean;
  userId: number[];
}
