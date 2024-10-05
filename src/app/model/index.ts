export type Subject = {
    id: string
    name: string
    avatar: string
}

export type task = {
    id: string
    subjectId: string
    title: string
    summary: string
    dueDate: Date
}

export type NewTask = Omit<task, 'id | subjectId' >