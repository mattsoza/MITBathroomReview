// src/routes/articles/+page.js

// @ts-ignore
export async function load( {fetch} )  {
  const response = await fetch(`/api/articles`)
  const posts = await response.json()

  return {
    posts
  }
}