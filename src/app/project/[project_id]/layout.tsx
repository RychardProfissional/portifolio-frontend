import { ProjectFooter } from "@/components/layouts/footer";
import { ProjectHeader } from "@/components/layouts/header";
import { IProjectParams } from "./types";

export default function ProjectLayout({ children, params }: { children: React.ReactNode, params: IProjectParams }) {
    const { project_id } = params;

    return (
        <section>
            <ProjectHeader  />
            {children}
            <ProjectFooter />
        </section>
    )
}