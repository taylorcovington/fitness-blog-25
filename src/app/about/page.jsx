import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon, XIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/avatar.jpg'
import signatureImage from '@/images/signature-cyan.png'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I’m Taylor Covington. I live in Salt Lake City, where I build for the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            About Me
          </h1>
          <div className="mt-6 space-y-2 text-base text-zinc-600 dark:text-zinc-400">
            <p>I’m Taylor Covington—husband, father of three boys, and Head Coach at Elite Performance. My life is built around a few core pillars: family, leadership, and high performance. Whether I’m building robots with my kids or building better humans through fitness, I believe in showing up with purpose. I’ve spent over a decade in the tech world as a web developer, and I bring that same systems-first mindset into my coaching—helping high performers create bodies that match the life they’re building.</p>
            
            <p>Fitness is my full-time mission—and it’s how I lead. I’ve coached entrepreneurs, CEOs, and everyday high achievers to cut through the noise, simplify their routines, and take back control of their energy, physique, and confidence. My approach blends strategy, accountability, and real-life flexibility because I know exactly what it’s like to balance a demanding career, a growing family, and the pressure to perform. At the end of the day, it’s not about perfection—it’s about building a life you’re proud of, from the inside out.</p>            
            <div class="w-sm">
              <Image src={signatureImage} alt=""  />
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/buildwithtaylor" icon={XIcon}>
              Follow on X
            </SocialLink>
            {/* <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink> */}
            <SocialLink
              href="www.linkedin.com/in/taylor-covington-fitness"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:me@taylorcovingtonfitness.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              me@taylorcovingtonfitness.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
