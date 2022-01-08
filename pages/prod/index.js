export default function Test(){

    return <h1>test</h1>
}

export async function getStaticProps(ctx){
    console.log(ctx)
    
return {
    props: {
        productions: ''
    }
}
}