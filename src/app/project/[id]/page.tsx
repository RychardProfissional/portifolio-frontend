interface ProjectPageParams {
    params: {
        id: string
    }

}

export default function ProjectPage({params: {id}}: ProjectPageParams) {
    // TODO
    
    return (
        <section>
            <div>Project {id}</div>
        </section>
    );
}
