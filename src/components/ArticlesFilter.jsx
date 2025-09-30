"use client"

import React, { useMemo, useState } from 'react'
import Article from '@/components/Article'

export default function ArticlesFilter({ articles }) {
  const tags = useMemo(() => {
    const set = new Set()
    articles.forEach((a) => (a.tags || []).forEach((t) => set.add(t)))
    const sorted = Array.from(set).sort((a, b) => a.localeCompare(b))
    return ['All', ...sorted]
  }, [articles])

  const [selected, setSelected] = useState('All')

  const filtered = useMemo(() => {
    return articles.filter(
      (a) => selected === 'All' || (a.tags || []).includes(selected),
    )
  }, [articles, selected])

  // pinned first
  const pinned = filtered.filter((a) => a.pinned)
  const others = filtered.filter((a) => !a.pinned)

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setSelected(t)}
            className={`px-3 py-1 rounded-full border text-sm hover:bg-zinc-50 dark:hover:bg-zinc-800 cursor-pointer ${
              selected === t
                ? 'bg-zinc-100 dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700'
                : 'bg-white dark:bg-transparent border-zinc-100 dark:border-zinc-700'
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="flex max-w-3xl flex-col space-y-16">
        {pinned.length > 0 && (
          <div>
            {pinned.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
        )}

        {others.map((article) => (
          <Article key={article.slug} article={article} />
        ))}
      </div>
    </div>
  )
}
