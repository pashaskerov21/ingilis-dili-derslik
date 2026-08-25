import { Fragment, type ReactNode } from 'react';

/**
 * Mətndəki **...** hissələrini qalın edir.
 * Tam markdown deyil — yalnız qalın vurğu lazımdır.
 */
export function renderBold(text: string): ReactNode[] {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="font-semibold text-foreground">
        {part}
      </strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    )
  );
}
