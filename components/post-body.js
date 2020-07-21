export default function PostBody({ title, coverImage, date, content }) {
  return (
    <>
      <a href="/">&larr; Home</a>
      <h1>{title}</h1>
      <div>
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      {coverImage && (
        <div>
          <h3>Preview</h3>
          <img src={coverImage} />
        </div>
      )}
    </>
  )
}
