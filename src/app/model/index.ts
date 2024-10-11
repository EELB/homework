export type Subject = {
    id: string;
    name: string;
    avatar: string;
  };
  
  export type Task = {
    id: string;
    subjectId: string;
    title: string;
    summary: string;
    dueDate: Date;
  };
  
  export type NewTask = Omit<Task, 'id' | 'subjectId'>;
  