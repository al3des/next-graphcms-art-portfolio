import { getAllCategories, getAllWorks } from "@/lib/graphcms";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "@/styles/works.module.css";
import Head from "next/head";
import useTranslation from "next-translate/useTranslation";

export default function Works(props) {
  const [filteredWorks, setFilteredWorks] = React.useState(props.works);
  const [filter, setFilter] = React.useState("reset");
const {t} = useTranslation('common')
  const handleFilterWorksByCategory = (categoryId) => {
    if (categoryId === "reset") {
      setFilter("reset");
      setFilteredWorks(props.works);
      return;
    }
    setFilter(categoryId);
    setFilteredWorks(
      props.works.filter(
        (work) => work.worksCategory && work.worksCategory.id === categoryId
      )
    );
  };

  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE} | Works</title>
      </Head>
      {/* Works Filter */}
      <div>
        <button
          className={`${styles.btnPill} ${
            filter === "reset" ? styles.filterSelected : ""
          }`}
          onClick={() => handleFilterWorksByCategory("reset")}
        >
          {t('all_works')}
        </button>
        {props.categories.map((category) => (
          <button
            key={category.id}
            onClick={() => handleFilterWorksByCategory(category.id)}
            className={`${styles.btnPill} ${
              filter === category.id ? styles.filterSelected : ""
            }`}
            // className={filter === category.id ? styles.filterSelected : ''}
          >
            {category.title}
          </button>
        ))}
      </div>
      {/* Works Grid */}
      {filteredWorks.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-3">
          {filteredWorks.map((work) => (
            <div key={work.id}>
              <Link href={`/works/${work.id}`}>
                <a>
                  {work.image && (
                    <Image
                      src={work.image.url}
                      alt={work.title}
                      width={550}
                      height={400}
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL="/placeholder.png"
                    />
                  )}
                </a>
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <h2>{t('no_results')}</h2>
      )}
    </>
  );
}

export async function getStaticProps(ctx) {
  const works = await getAllWorks();
  const categories = await getAllCategories(ctx.locale);
  return {
    props: {
      categories,
      works,
    },
  };
}
