// src/routes/api/posts/mostrecent/+server.js
import { fetchMarkdownPosts } from '../../../../lib/utils'
import { json } from '@sveltejs/kit'
// This is the WORST way to do since it literally grabs ALL the posts and then picks the most recent
// Please update this soon and do not let it stick around for too long...
export const GET = async () => {
  const allPosts = await fetchMarkdownPosts()

  const sortedPosts = allPosts.sort((a, b) => {
    return new Date(b.meta.date) - new Date(a.meta.date)
  })

  return json(sortedPosts[0])
}