import axios from "axios";


// this concepts is dynamic route in next.js

export default async function BlogPage({ params }: 
  { 
    params: Promise<{
       postId: string
       }> 
  }
) {
  const {postId} = await params;   

  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const post = res.data;

  return (
    <div>
      <h1> Title-{post.title}</h1>
      <p> body--,,,,,,,,,,{post.body}</p>
    </div>
  );
}





