import markdownStyles from './markdown-styles.module.css'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostBody({ title, coverImage, date, content }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="max-w-2xl mx-auto">
        <div className="mb-6 text-lg">
          Last Updated: <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="max-w-2xl mx-auto">
        <div
          className={markdownStyles['markdown']}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <h3>Preview</h3>
      </div>
      <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}
