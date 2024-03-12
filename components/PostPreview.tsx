import Link from "next/link";
import { PostMetaData } from "./PostMetaData";

const PostPreview = (props: PostMetaData) => {
  return (
    <>
      <Link href={`/posts/${props.slug}`} key={props.slug}>
        <div className="hover:bg-muted hover:dark:bg-[#202023] w-[20rem] lg:w-[36rem] px-6 py-8 rounded-lg transition-transform transform hover:scale-105 cursor-pointer flex flex-col space-y-2">
          <div className="flex flex-row justify-between">
            <h2 className="text-xl font-bold antialiased">{props.title}</h2>
            <p className="text-sm text-[#A1A1A9]">{props.date}</p>
          </div>
          <p className="text-base text-pretty truncate text-[#A1A1A9] font-medium">
            {props.subtitle}
          </p>
        </div>
      </Link>
      <div className="w-full h-[1px] bg-zinc-300 dark:bg-zinc-700 max-w-[36rem]" />
    </>
  );
};

export default PostPreview;
