import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link";
import getPostsMetaData from "@/components/GetPostMetaData";
import PostPreview from "@/components/PostPreview";

function FeedPage() {
  const postMetaData = getPostsMetaData();

  const postsPreview = postMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <MaxWidthWrapper>
      <main className="mt-20 lg:mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-4xl max-w-2xl text-center">
            Thoughts on my Coding Journey, My Work & Life Experience and more!
          </h1>
        </div>
        <section className="mt-20 flex flex-col items-center space-y-6">
          {postsPreview}
        </section>
      </main>
    </MaxWidthWrapper>
  );
}

export default FeedPage;
