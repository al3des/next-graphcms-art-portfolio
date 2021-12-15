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
        worksCategories{
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

  return data.worksCategories;
}

export async function getWorksByCategoryId(categoryId) {
  const data = fetchAPI(
    `
  {
    query {
      works(where:{worksCategory:{id:$categoryId}}){
        id
        title
        worksCategory{
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
    worksCategory (where: {id: $id}) {
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
  return data.worksCategory;
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
          worksCategory {
            id
          }
      }
    }
  `);

  return data.works;
}

export async function getWorkById(id, preview){
  const data = await fetchAPI(`
    query Work($id: ID!, $stage: Stage!){
      work(stage: $stage, where: {id: $id}){
        id
        title
        description
        height
        width
        image {
          id
          url
          height
          width
        }
      }
    }
  `,{
    preview,
    variables: {
      stage: preview ? "DRAFT" : 'PUBLISHED',
      id
    }
  })
  return data.work
}

export async function getAllProjects(){
  const data = await fetchAPI(`
    query getAllProjects {
      projects {
        id
        title
      }
    }
  `)
    return data.projects
}

export async function getAllProductions(){
  const data = await fetchAPI(
    `
      query getAllProductions {
        productions {
          id
          title
        }
      }
    `
  )

  return data.productions
}