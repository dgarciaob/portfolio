import React from "react";
import fs from "fs";
import Markdown from "markdown-to-jsx";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import matter from "gray-matter";
import getPostsMetaData from "@/components/GetPostMetaData";

const getPostsContent = (slug: string) => {
  // function to get the content
  const folder = "posts/"; // first define the folder
  const file = `${folder}${slug}.md`; // then the file route with the slug that comes from the selected post, and the folder
  const content = fs.readFileSync(file, "utf8"); // read the file and return the content
  const matterResult = matter(content); // parse the content with gray-matter
  return matterResult;
};

// export const gerenateStaticPaths = async () => {
//   const posts = getPostsMetaData();
//   return posts.map((post) => ({ slug: post.slug }));
// };

// export async function getStaticPaths() {
//   const posts = getPostsMetaData();
//   const paths = posts.map((post) => ({ params: { slug: post.slug } }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getStaticPaths() {
  const posts = getPostsMetaData();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false, // or 'blocking' or true, depending on your needs
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostsContent(params.slug);
  return { props: { post } };
}

function PostPage(props: any) {
  const slug = props.params.slug;
  const post = getPostsContent(slug);
  return (
    <MaxWidthWrapper>
      <main className="mt-20 lg:mt-32 selection:bg-green-200 dark:selection:bg-blue-600 flex flex-col items-center mb-20">
        <h1 className="text-4xl font-black mb-8">{post.data.title}</h1>

        <article className="prose dark:prose-invert">
          <Markdown>{post.content}</Markdown>
        </article>
      </main>
    </MaxWidthWrapper>
  );
}

export default PostPage;
