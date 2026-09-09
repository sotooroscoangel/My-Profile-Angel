import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import './ResumeModal.css'

interface ResumeModalProps {
  isOpen: boolean
  onClose: () => void
}

const RESUME_URLS = {
  en: '/resume-en.pdf',
  es: '/resume-es.pdf',
} as const

const DOWNLOAD_NAMES = {
  en: 'Angel-Soto-Orosco-Resume.pdf',
  es: 'Angel-Soto-Orosco-CV.pdf',
} as const

const LOADING_DURATION_MS = 900

function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { language, t } = useLanguage()
  const [isLoading, setIsLoading] = useState(true)

  const resumeUrl = RESUME_URLS[language]
  const downloadName = DOWNLOAD_NAMES[language]

  // Reset to the loading state every time the modal opens AND every
  // time the language changes while it's open (so switching ES/EN
  // swaps to the matching PDF with a fresh loading beat instead of
  // silently keeping the old document on screen). Also locks page
  // scroll while it's up and supports Escape to close.
  useEffect(() => {
    if (!isOpen) return

    setIsLoading(true)
    const timeout = window.setTimeout(() => setIsLoading(false), LOADING_DURATION_MS)

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.clearTimeout(timeout)
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, language, onClose])

  if (!isOpen) return null

  // Portal straight to <body> — same reason as the Projects modal:
  // a `position: fixed` element nested inside any transformed or
  // otherwise fixed-positioned ancestor (like the navbar) can end up
  // anchored to that ancestor instead of the real viewport.
  return createPortal(
    <div className="resume-modal-overlay" onClick={onClose}>
      <div
        className="resume-modal"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="resume-modal__header">
          <span className="resume-modal__title">{t.resumeModal.title}</span>

          <button
            type="button"
            className="resume-modal__close"
            onClick={onClose}
            aria-label={t.resumeModal.close}
          >
            ×
          </button>
        </div>

        <div className="resume-modal__body">
          {isLoading ? (
            <div className="resume-modal__loading">
              <div className="resume-modal__spinner" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <p>{t.resumeModal.loading}</p>
            </div>
          ) : (
            <iframe
              key={resumeUrl}
              src={`${resumeUrl}#toolbar=0`}
              title={t.resumeModal.title}
              className="resume-modal__frame"
            />
          )}
        </div>

        <div className="resume-modal__footer">
          <a
            href={resumeUrl}
            download={downloadName}
            className="resume-modal__button resume-modal__button--primary"
          >
            {t.resumeModal.download}
          </a>

          <a
            href={resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="resume-modal__button"
          >
            {t.resumeModal.openNewTab}
          </a>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ResumeModal
