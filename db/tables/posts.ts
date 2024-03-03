import { Cpx } from "../../app/app";

export interface Post {
  id: string;
  title: string;
  description: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: "0",
    title: "Post 1",
    description: "Post 1 Description",
    content: "Post 1 Content",
  },
  {
    id: "1",
    title: "Post 2",
    description: "Post 2 Description",
    content: "Post 2 Content",
  },
];

function byId(id: string): Post | undefined {
  return posts.find((post) => post.id === id);
}

function create(post: Post): void {
  posts.push(post);
}

function update(post: Post): void {
  const index = posts.findIndex((p) => p.id === post.id);
  posts[index] = post;
}

function deleteById(id: string): void {
  const index = posts.findIndex((p) => p.id === id);
  posts.splice(index, 1);
}

function getAll(): Post[] {
  return posts;
}
function byTitle(title: string): Post[] {
  return posts.filter((post) => post.title === title);
}
function byDescription(description: string): Post[] {
  return posts.filter((post) => post.description === description);
}
function byContent(content: string): Post[] {
  return posts.filter((post) => post.content === content);
}

export const post = {
  byId,
  create,
  update,
  deleteById,
  getAll,
  byTitle,
  byDescription,
  byContent,
};
