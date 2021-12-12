import { getAllCategories } from "@/lib/graphcms";
import Link from "next/link";

export default function Categories(props) {
    return (
      <div>
        <h1>Categories</h1>
        {props.categories.map((category) => (
          <div>
            <Link href={`/categories/${category.id}`}>{category.title}</Link>
          </div>
        ))}
      </div>
    );
}

export async function getStaticProps() {
  const categories = await getAllCategories();
  return {
    props: {
      categories,
    },
  };
}
