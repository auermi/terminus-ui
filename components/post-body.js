export default function PostBody({ title, coverImage, date, content }) {
  return (
    <>
      <a href="/components">&larr; All Components</a>
      <h1>{title}</h1>
      <div className="max-w-2xl mx-auto">
        <div
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <h3>Preview</h3>
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <img src={coverImage} />
      </div>
    </>
  )
}
