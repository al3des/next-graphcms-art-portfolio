import { getAllProductionsByType } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";

import styles from "@/styles/productions-list.module.css";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";


export default function ProductionsList(props) {
  const { t } = useTranslation("common");
  if (!props.productions.length) {
    return <h2>{t("no_results")}</h2>;
  }
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE} | Taller Humano</title>
      </Head>
      <div className={styles.list}>
        {props.productions &&
          props.productions.map((production) => (
            <div key={production.id} className={styles.item}>
              {/* IMAGE */}
              <div className="relative">
                <Image
                  src={production.featuredImage.url}
                  alt={production.title}
                  width={200}
                  height={200}
                  layout="responsive"
                  objectFit="contain"
                />
              </div>
              {/* HEADER */}
              <div className={styles.header}>
                      <h2 className={styles.title}>{production.title}</h2>
                {/* INFO */}
                <div className={styles.info}>
                  <span>{new Date(production.dateFrom).getYear() + 1900}</span>
                  {/* <span>{new Date(production.dateTo).toLocaleDateString()} </span> */}
                  {production.rol.map((rol) => (
                    <span key={rol} className={styles.pill}>
                      {t(rol.toLowerCase())}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* EXCERPT */}
              <p>{production.excerpt}</p>
              <Link href={`/item/${production.slug}`}>
                <a className={styles.btn}>{t("read_more")}</a>
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const { locale } = context;
  const productions = await getAllProductionsByType(context.params.type, context.locale);
  return {
    props: {
      productions,
    },
  };
}

export async function getStaticPaths() {
  const paths = ["exhibicion", "taller_humano", "estampida"].map((type) => ({
    params: { type },
  }));
  return {
    paths,
    fallback: true,
  };
}
