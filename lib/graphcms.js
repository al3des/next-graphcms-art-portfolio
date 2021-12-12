import { data } from "autoprefixer";

async function fetchAPI(query, { variables, preview } = {}) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${
        preview
          ? process.env.GRAPHCMS_DEV_AUTH_TOKEN
          : process.env.GRAPHCMS_PROD_AUTH_TOKEN
      }`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });
  const json = await res.json();

  if (json.errors) {
    console.log(process.env.NEXT_EXAMPLE_CMS_GCMS_PROJECT_ID);
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllCategories() {
  const data = await fetchAPI(`
    {
        categories{
            id
            title
            featuredImage {
                id
                url
                width
                height
            }
        }
    }
`);

  return data.categories;
}

export async function getWorksByCategoryId(categoryId) {
  const data = fetchAPI(
    `
  {
    query {
      works(where:{category:{id:$categoryId}}){
        id
        title
        category{
          id
          title
        }
      }
    }
  }
`,
    {
      categoryId,
    }
  );

  return data.works;
}

export async function getCategoryById(id) {
  const data = await fetchAPI(
    `
  query CategoryById ($id: ID!){
    category (where: {id: $id}) {
    id
    title
    description
    featuredImage {
      id
      url
      width
      height
    }
    works {
      id
      title
      width
      height
      image {
        id
        url
        width
        height
      }
    }
  }
}
`,
    { variables: { id } }
  );
  return data.category;
}

export async function getAllWorks() {
  const data = await fetchAPI(`
      query {
        works {
          id
          title
          width
          height
          image { 
            id
            url
            height
            width
          }
          category {
            id
          }
      }
    }
  `);

  return data.works;
}

export async function getWorkById(id){
  const data = await fetchAPI(`
    query Work($id: ID!){
      work(where: {id: $id}){
        id
        title
        height
        width
        image{
          id
          url
          height
          width
        }
      }
    }
  `,{
    variables: {
      id
    }
  })
  return data.work
}