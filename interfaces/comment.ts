interface IComment {
    id: string,
    ip: string,
    user_name: string,
    text: string,
    project_id: string,
    project?: IProject,
    created_at?: string,
    updated_at?: string,
}
