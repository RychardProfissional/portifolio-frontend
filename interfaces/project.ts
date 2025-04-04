interface IProject {
    id: string,
    title: string,
    categories: string[],
    links: string[],
    description: string
    image: string
    comments: IComment[]
    init_date: string
    finish_date: string
    created_at: string
    updated_at: string
}