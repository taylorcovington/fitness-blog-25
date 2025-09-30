import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/articles'
import ArticlesFilter from '@/components/ArticlesFilter'

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on fitness, nutrition, and leadership.',
}

export default async function ArticlesIndex() {
  let articles = await getAllArticles()

  return (
    <SimpleLayout
      title="Articles"
      intro="Personal insights on building systems for health, development, business, and life."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          <ArticlesFilter articles={articles} />
        </div>
      </div>
    </SimpleLayout>
  )
}
