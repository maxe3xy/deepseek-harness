import type { IconProps } from './icons/props.ts'

/** Native viewBox of the TCL mark (width and height in user units). */
export const FISH_LOGO_VIEWBOX = { width: 36, height: 16 }

/**
 * Kept so existing imports still resolve. The rendered mark is the TCL word,
 * not this path.
 */
export const FISH_LOGO_PATH = ''

/**
 * Render the TCL mark in the current text color.
 * @param props.size - width in px (default 24; height keeps the 36:16 ratio).
 * @param props.className - extra class for layout placement.
 * @returns the logo svg (aria-hidden; pair with a text label for accessibility).
 */
export function FishLogo({ size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={(size * FISH_LOGO_VIEWBOX.height) / FISH_LOGO_VIEWBOX.width}
      className={className}
      viewBox={`0 0 ${FISH_LOGO_VIEWBOX.width} ${FISH_LOGO_VIEWBOX.height}`}
      fill="none"
      aria-hidden="true"
    >
      <text
        x="18"
        y="12.6"
        textAnchor="middle"
        fill="currentColor"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight={700}
        fontSize="13"
      >
        TCL
      </text>
    </svg>
  )
}
