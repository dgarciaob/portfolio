import fs from "fs";
import matter from "gray-matter";
import { PostMetaData } from "./PostMetaData";

const getPostsMetaData = (): PostMetaData[] => {
  const folder = "posts/"; // The folder where the posts are located
  const files = fs.readdirSync(folder); // read the contents of the given directory (posts/), returns an array.
  const markdownPosts = files.filter((file) => {
    return file.endsWith(".md");
  }); // filter the files that end with .md
  const posts = markdownPosts.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, "utf8"); // create variable to store the content of the file
    const matterResult = matter(fileContent);
    return {
      title: matterResult.data.title,
      subtitle: matterResult.data.subtitle,
      date: matterResult.data.date,
      slug: fileName.replace(".md", ""),
    };
  });

  return posts;
};

export default getPostsMetaData;
