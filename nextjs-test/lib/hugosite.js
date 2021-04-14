export async function getHugoPostData() {
  console.log('hello')
  const res = await fetch('https://emmareynne.netlify.app/posts/index.json')
  const data = await res.json();
  console.log(data)
  return data
}