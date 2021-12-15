import { getAllProductions } from "@/lib/graphcms"

export default function Productions(props){

    return (
        <div>
            <h1>Curatorships {'&'} Productions</h1>
        </div>
    )
}

export async function getStaticProps(){
    const productions = await getAllProductions()
    console.log(productions)
    return {
        props: {
            productions
        }
    }
}