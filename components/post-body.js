export default function PostBody({ title, coverImage, date, content }) {
  return (
    <>
      <a href="/components">&larr; All Components</a>
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
