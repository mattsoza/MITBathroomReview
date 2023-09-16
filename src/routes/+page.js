// src/routes/+page.js

export async function load( {fetch} )  {
  const response = await fetch(`/api/articles/mostrecent`)
  const post = await response.json()

  return {
    post
  }
}