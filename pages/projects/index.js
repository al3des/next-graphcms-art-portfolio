import { getAllProjects } from "@/lib/graphcms"

export default function Projects(props){

    return (
        <div>
            <h1>Projects</h1>
        </div>
    )
}

export async function getStaticProps(){
    const projects = await getAllProjects()
    return {
        props: {
            projects
        }
    }
}