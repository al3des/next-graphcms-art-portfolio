import { getAllProductionsByType } from "@/lib/graphcms"
import useTranslation from "next-translate/useTranslation"

export default function Exhibitions(props){
    const {t} = useTranslation('common')
    console.log(props)
    return <div>
        <h2>{t('exhibitions')}</h2>
    </div>
}

export async function getStaticProps(ctx){
const exhibitions = await getAllProductionsByType('exhibicion', ctx.locale) 
    return {
        props :{
            exhibitions
        }
    }
}