// src/routes/+page.js

// @ts-ignore
export async function load( {fetch} )  {
  const response = await fetch(`/api/articles/mostrecent`)
  const post = await response.json()

  return {
    post
  }
}