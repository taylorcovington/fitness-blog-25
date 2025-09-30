import React from 'react'
import { Card } from '@/components/Card'
import { formatDate } from '@/lib/formatDate'
import { Pin } from 'lucide-react';

const Article = ({ article }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/articles/${article.slug}`}>
          {article.title}
          {article.pinned && (
              <Pin
                aria-label="Pinned"
                className="ml-2 h-4 w-4 inline-block align-middle text-amber-500"
              />
          )}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 max-md:hidden"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default Article
