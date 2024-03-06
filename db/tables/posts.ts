export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 0,
    title: "Post 1",
    description: "Post 1 Description",
    content: "Post 1 Content",
  },
  {
    id: 1,
    title: "Post 2",
    description: "Post 2 Description",
    content: "Post 2 Content",
  },
];

function id(id: number): any {
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

function all(): Post[] {
  return posts;
}
function title(title: string): Post[] {
  return posts.filter((post) => post.title === title);
}
function description(description: string): Post[] {
  return posts.filter((post) => post.description === description);
}
function content(content: string): Post[] {
  return posts.filter((post) => post.content === content);
}

export const query: Object = {
  id,
  all,
  title,
  description,
  content,
};

export const action: Object = {
  create,
  update,
  deleteById,
};