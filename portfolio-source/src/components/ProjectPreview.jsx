import { useRef } from 'react'
import Icon from './Icon'

export default function ProjectPreview({ project }) {
  const dialog = useRef(null)
  const titleId = `${project.id}-preview-title`

  return <>
    <button
      className="project-image-button"
      type="button"
      aria-label={`Enlarge ${project.title} preview`}
      aria-haspopup="dialog"
      onClick={() => dialog.current?.showModal()}
    >
      <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" width={project.imageWidth} height={project.imageHeight} />
    </button>
    <dialog className="project-preview" ref={dialog} aria-labelledby={titleId}>
      <div className="preview-heading">
        <h2 id={titleId}>{project.title}</h2>
        <button className="icon-button" type="button" aria-label="Close preview" onClick={() => dialog.current?.close()}>
          <Icon name="close" />
        </button>
      </div>
      <img src={project.image} alt={project.imageAlt} loading="lazy" width={project.imageWidth} height={project.imageHeight} />
    </dialog>
  </>
}
