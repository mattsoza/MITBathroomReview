// src/routes/articles/[slug]/+page.js

export async function load({ params }){
  const post = await import(`../${params.slug}.md`)
  const { title, date, description } = post.metadata
  const content = post.default

  return {
    content,
    title,
    description,
    date,
  }
}