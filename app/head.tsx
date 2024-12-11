'use client';

import { usePathname } from 'next/navigation';

const Head = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const pathname = usePathname() as string;

  const titleFixedToShow = pathname.slice(1).charAt(0).toUpperCase() + pathname.slice(2);

  const meta = {
    title: `Nanda Tristan Ardiansyah ${pathname === '/' ? '' : '· ' + titleFixedToShow}`,
    description: `Hi! My name is Nanda Tristan Ardiansyah. I am from Jakarta, Indonesia. I have a strong passion in software engineering, cloud computing, and product development`,
    keywords: 'Nanda Tristan, Tristan Ardiansyah, Nanda Tristan portofolio, Tristan portafolio, Tristan Ardiansyah portfolio, Tristan Ardiansyah portfolio, Tristan Ardiansyah github, Tristan Ardiansyah github, Tristan Ardiansyah LinkedIn, Tristan Ardiansyah LinkedIn, Web Development, Cloud Computing.',
    type: 'website'
  };

  return (
    <>
      <title>{meta.title}</title>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='robots' content='follow, index' />
      <meta content={meta.description} name='description' />
      <meta name='keywords' content={meta.keywords} />
      <meta property='og:url' content={`https://tristanardiansyah.vercel.app${pathname}`} />
      <link rel='canonical' href={`https://tristanardiansyah.vercel.app${pathname}`} />
      <link rel='me' href='mailto:nandatristan@gmail.com' />
      <meta property='og:type' content={meta.type} />
      <meta property='og:site_name' content='Nanda Tristan Ardiansyah' />
      <meta property='og:description' content={meta.description} />
      <meta property='og:title' content={meta.title} />
    </>
  )
}

export default Head;