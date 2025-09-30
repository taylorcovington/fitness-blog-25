import glob from 'fast-glob'

async function importArticle(articleFilename) {
  let { article } = await import(`../app/articles/${articleFilename}`)

  return {
    slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
    ...article,
  }
}

export async function getAllArticles() {
  let articleFilenames = await glob('*/page.mdx', {
    cwd: './src/app/articles',
  })

  let articles = await Promise.all(articleFilenames.map(importArticle))

  // pinned articles should appear first, then sort by date desc
  return articles.sort((a, z) => {
    // Treat missing pinned as false
    const aPinned = a.pinned ? 1 : 0
    const zPinned = z.pinned ? 1 : 0

    if (aPinned !== zPinned) return zPinned - aPinned

    return +new Date(z.date) - +new Date(a.date)
  })
}
