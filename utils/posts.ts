import path from "path";
import fs from "fs/promises";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

export interface Post {
  content: MDXRemoteSerializeResult;
  slug: string;
  title: string;
  author: string;
  banner: string;
  type: string;
}

export async function getAllPosts() {
  const postFiles = await fs.readdir(getPostFolder());

  const posts: Post[] = [];

  for (const file of postFiles) {
    const slug = file.replace(/\..*$/, "");
    posts.push(await getPostBySlug(slug));
  }

  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const content = await fs.readFile(
    path.join(getPostFolder(), slug + ".mdx"),
    "utf-8"
  );
  const mdxSource = await serialize(content, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
    },
  });
  const meta = mdxSource.frontmatter!;

  return {
    content: mdxSource,
    slug,
    title: meta.title,
    author: meta.author,
    banner: meta.banner,
    type: meta.type,
  };
}

function getPostFolder() {
  return path.join(process.cwd(), "posts");
}
