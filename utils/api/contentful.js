const callContentful = async (query, variables = {}) => {
  const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

  const fetchOptions = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  let res;
  try {
    res = await fetch(fetchUrl, fetchOptions);
  } catch (error) {
    throw new Error(`failed fetching data from Contentful: ${error.message}`);
  }

  let data;
  try {
    data = await res.json();
  } catch (error) {
    throw new Error(`unable to parse JSON: ${error.message}`);
  }

  if (data.errors) {
    const formattedErrors = data.errors.map((e) => `\t${e.message}`).join("\n");
    throw new Error(`Error in GraphQL query:\n${query}\n\n${formattedErrors}`);
  }

  return data;
};

export const getAllProjects = async () => {
  const query = `{
    portfolioProjectCollection {
      items {
        slug,
        projectTitle, 
        projectInfo, 
        projectSkills,
        projectLink,
        projectImage {
          url
        }

      }
  }
}`;

  const response = await callContentful(query);
  return response.data;
};
