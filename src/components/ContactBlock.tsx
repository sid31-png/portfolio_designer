import { asset } from '@/lib/asset';
import { useI18n, useLoc } from '@/i18n';
import { profile } from '@/content/profile';
import { AnchorButton } from '@/components/ui/primitives';

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener"
      aria-label={label}
      className="grid h-11 w-11 place-items-center rounded-full border border-border text-fg-muted transition-colors hover:border-fg-subtle hover:text-fg"
    >
      {children}
    </a>
  );
}

export function ContactBlock() {
  const { t } = useI18n();
  const L = useLoc();
  const c = profile.contact;

  return (
    <div className="max-w-prose">
      <p className="prose-block">{L(profile.contactLead)}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <AnchorButton href={`mailto:${c.email}`} variant="solid">
          {c.email}
        </AnchorButton>
        <AnchorButton href={c.whatsapp} variant="ghost" external>
          {t.contact.whatsapp} · {c.whatsappLabel}
        </AnchorButton>
        <AnchorButton href={asset(profile.cv)} variant="ghost" download>
          {t.actions.downloadCv} ↓
        </AnchorButton>
      </div>

      <div className="mt-6 flex items-center gap-3 text-sm text-fg-subtle">
        <span>{L(profile.location)}</span>
        <span aria-hidden="true" className="h-1 w-1 rounded-full bg-fg-subtle" />
        <span>{profile.languages.map((l) => L(l.label)).join(' · ')}</span>
      </div>

      <div className="mt-6 flex gap-3">
        <Social href={c.instagram} label="Instagram">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </Social>
        <Social href={c.x} label="X">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M18.2 2H21l-6.6 7.5L22 22h-6.8l-4.6-6-5.3 6H2.5l7-8L2 2h6.9l4.2 5.5L18.2 2Zm-2.4 18h1.5L8.3 4H6.7l9.1 16Z" />
          </svg>
        </Social>
        <Social href={c.linkedin} label="LinkedIn">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5a2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 22 10.5 22 14v7h-4v-6.2c0-1.5-.03-3.4-2.07-3.4-2.07 0-2.4 1.6-2.4 3.3V21H9V9Z" />
          </svg>
        </Social>
        <Social href={c.whatsapp} label={t.contact.whatsapp}>
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2Zm0 1.8a8.2 8.2 0 0 1 6.9 12.6l-.2.3.6 2.2-2.3-.6-.3.2A8.2 8.2 0 1 1 12 3.8Zm-3 4.1c-.2 0-.5.07-.7.35-.25.3-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.8.14.18 1.9 2.9 4.6 4 2.27.9 2.73.72 3.22.68.5-.04 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.1-.25-.16-.53-.3-.28-.14-1.65-.8-1.9-.9-.26-.1-.45-.14-.63.14-.18.28-.72.9-.88 1.08-.16.18-.32.2-.6.07-.28-.14-1.17-.43-2.23-1.38-.82-.73-1.38-1.64-1.54-1.92-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.49.14-.16.18-.28.28-.46.1-.18.05-.35-.02-.49-.07-.14-.63-1.5-.86-2.06-.22-.54-.45-.47-.62-.48h-.54Z" />
          </svg>
        </Social>
      </div>
    </div>
  );
}
