import { getAllProductionsByType } from "@/lib/graphcms"

export default function Test(props){
    console.log(props)
    return (
        <div>
            <h1>test</h1>
        </div>
    )
}

export async function getServerSideProps(context){
    const type = context.params.type[0]
    const slug = context.params.type[1]
    
    const productions = await getAllProductionsByType(context.params.type[0])

    return {
        props: {
            productions
        }
    }
}