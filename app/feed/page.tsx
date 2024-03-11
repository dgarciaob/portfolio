import React from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

function FeedPage() {
  return (
    <MaxWidthWrapper>
      <main className="mt-20 lg:mt-32 selection:bg-green-200 dark:selection:bg-blue-600">
        <h1 className="font-bold text-4xl max-w-2xl text-left">
          Notes on my Coding Journey, My Work & Life Experience and more!
        </h1>
      </main>
    </MaxWidthWrapper>
  );
}

export default FeedPage;
