import { getAllProductionsByType, getProductionById } from "@/lib/graphcms"

export default function Estampida(props){

    return (
        <h2>{props.estampida.title}</h2>
    )
}

export async function getServerSideProps(context){
    const {params} = context
    const estampida = await getProductionById(params.id)

    return {
        props: {
            estampida
        }
    }
}

// export async function getStaticPaths(){
//     const estampidas = await getAllProductionsByType('estampida')
//     const paths = estampidas.map(e=> ({params: { id: e.id}}))

//     return {
//         paths,
//         fallback: true
//     }
// }