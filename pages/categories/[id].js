import { getAllCategories, getCategoryById } from "@/lib/graphcms";
import Image from "next/image";

import styles from "@/styles/works.module.css";

export default function Category(props) {
  if(!props.category){
    return <p>loading...</p>
  }

  return (
    <div>
      <h2>{props.category.title}</h2>
      {props.category.works && (
        <div className={styles.works}>
          <p>{props.category.description}</p>
          {props.category.works.map((work) => (
            <div key={work.id} className={styles.work}>
              <Image
                src={work.image.url}
                alt={work.title}
                // layout="fill"
                width={work.image.width}
                height={work.image.height}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export async function getStaticProps(context) {
  const {
    params: { id },
  } = context;
  const category = await getCategoryById(id);
  return {
    props: {
      category,
    },
  };
}

export async function getStaticPaths() {
  const categories = await getAllCategories();
  const paths = categories.map((category) => ({ params: { id: category.id } }));
  return {
    paths,
    fallback: true,
  };
}
