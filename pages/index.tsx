import { GetStaticPropsResult } from 'next';
import { Layout } from 'components/layout';
import { getMenus } from 'lib/get-menus';
import Image from 'next/image';
import { drupal } from '../lib/drupal';
import { testApiCompatibility } from 'next-acms';
import { ENTITY_TYPES } from './[...slug]';
import {LayoutProps} from "components/layout";

interface IndexPageProps extends LayoutProps{}

export default function IndexPage({ menus }: IndexPageProps) {
  return (
    <Layout title="Home" menus={menus}>
      <div className="mt-12 lg:mt-32">
        <section className="container mx-auto px-6">
          <div className="w-full lg:flex items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-md lg:text-2xl text-gray-600">
                Powered by DS Headless POC
              </h2>
              <h1 className="text-5xl lg:text-6xl font-bold text-sky-500 mb-2 lg:mb-6">
                A headless Next.js site
              </h1>
              <p className="text-md lg:text-xl font-light text-gray-800 mb-8">
                This is placeholder text. If you are reading this, it is here by
                mistake and we would appreciate it if you could email us with a
                link to the page you found it on. This is placeholder text.
              </p>
            </div>
            <div className="w-full lg:w-1/2 lg:pl-24">
              <Image
                src="/CMS_icon_0.png"
                alt="Logo"
                width={200}
                height={227}
              />
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export async function getStaticProps(
  context,
): Promise<GetStaticPropsResult<IndexPageProps>> {
  if (process.env.NODE_ENV == 'development') {
    await testApiCompatibility(ENTITY_TYPES, drupal);
  }

  return {
    props: {
      menus: await getMenus(context),
    },
    revalidate: 60,
  };
}
