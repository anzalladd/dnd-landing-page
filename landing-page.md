---
name: dnd-associate-landing-page
description: Builds and maintains the DND Associate landing page — pixel-perfect implementation of Figma designs using Nuxt 4, Tailwind v3, and shadcn-vue. Use when working on DND Associate frontend, implementing new sections from Figma, or fixing layout/component issues on this page.
---
# DND Associate Landing Page

## Tech stack (fixed — do not deviate)
- Nuxt 4 (not v3, not experimental features from later versions)
- TypeScript, strict mode
- Tailwind CSS v3 (NOT v4 — avoid v4-only syntax/plugins)
- shadcn-vue as base component library

## Figma references (fetch in this order)
1. **Design system**: https://www.figma.com/design/NZjbEA0eVaphZONe779UeN/-SRDS--Internal---Studio-Web-Design?node-id=405-2602
   → fetch ONCE per session, extract all tokens before touching any section
2. **Typography**: https://www.figma.com/design/NZjbEA0eVaphZONe779UeN/-SRDS--Internal---Studio-Web-Design?node-id=53-332
   → fetch ONCE per session, extract font family/sizes/weights/line-heights
3. **Main landing page**: https://www.figma.com/design/UmVT92ex5W4G8dl1TqM6dx/Global-Talent-Project?node-id=170-1299&t=wa27oRQjIMfvY5MN-4
   → fetch the SPECIFIC section frame being built (drill into sub-frame node-id, don't fetch the whole page at once)

## Step 1 — Extract design tokens (do this before any section work)
- Use the Figma MCP `get_variable_defs` (or equivalent variables call) on the
  design system link to pull exact color, spacing, and radius values
- Write these into `tailwind.config.ts` under `theme.extend` — do NOT
  approximate to Tailwind's default scale
- Use the typography link to populate `fontSize`/`fontFamily`/`lineHeight`
  in the same config
- If a Figma value doesn't cleanly map to a token (e.g. one-off spacing
  used only once), use Tailwind arbitrary value syntax (`p-[18px]`)
  instead of rounding to the nearest default class

## Step 2 — Per-section implementation
1. Fetch the exact sub-frame for the section from the main landing page link
   (drill to the section's own node-id, not the whole page)
2. Call `get_code` AND `get_image`/`get_screenshot` for that frame —
   use the screenshot as the visual ground truth, the code output as the
   structural/spacing reference (Figma's auto-generated code is not
   final code, but its measurements are reliable)
3. Build the section using tokens from Step 1 — no hardcoded hex/px values
   outside the token file unless they're truly one-off
4. Reuse existing components in `components/` before creating new ones

## Step 3 — Verification (do not skip)
1. After building a section, take a screenshot of the rendered result
   at 1440px width
2. Compare side-by-side against the Figma screenshot from Step 2.2
3. Check specifically: spacing/padding, font-size, line-height, color hex
   values, border-radius — these are the most common mismatch points
4. If misaligned, fix and re-screenshot before moving to the next section
5. Report to the user any Figma detail that's technically infeasible in
   the current stack, instead of silently approximating it

## Component conventions
- One component per file, PascalCase naming
- Props typed via TypeScript interface, not inline types
- No hardcoded copy in reusable components — pass via props/slots
- Co-locate section-specific components under `components/sections/`

## Design fidelity rules
- Match Figma spacing/typography exactly at desktop (1440px) breakpoint
- Zero tolerance on: spacing values, color values, border-radius
- Acceptable: minor font antialiasing differences across browsers
- When in doubt, re-check the Figma frame rather than guess from memory
  of a previous fetch in the same session

  ## Asset handling (images, icons, illustrations)
- NEVER use placeholder images (unsplash, picsum, generic stock photos,
  inline SVG icons invented from scratch) for any visual that exists in
  the Figma frame — always use the actual asset from Figma
- For every image/illustration/icon visible in the Figma frame:
  1. Use the Figma MCP `get_image` (or equivalent asset export call) on
     that specific node to fetch the real asset
  2. Save it into `public/images/[section-name]/` with a descriptive
     filename (not `image1.png`)
  3. Reference it in the component via the saved local path
- If an asset genuinely cannot be exported (e.g. it's a live embed or
  external content), STOP and ask the user for the source — do not
  substitute a stock photo silently
- Icons: check if the icon exists in the already-installed icon set
  (e.g. lucide) matching the Figma icon visually before exporting it as
  a custom asset — but if Figma uses a custom/branded icon, export the
  real one instead of swapping to a generic lucide icon
- After exporting assets for a section, verify the count of exported
  assets matches the count of visual elements in the Figma screenshot
  for that section — a missing asset means it was silently skipped

  ## Responsive breakpoints
Tailwind default breakpoints, used consistently across all sections:
- Mobile: base (< 640px) — design priority if no Figma mobile frame exists
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+) / `xl:` (1440px+, matches Figma desktop frame)

### If Figma has separate mobile/tablet frames
- Check the main landing page link for mobile/tablet variant frames
  (often named "Mobile" / "Tablet" / suffixed with a breakpoint number)
  before assuming there's only one
- If found, treat each as its own ground truth — repeat Step 2 and
  Step 3 of the per-section workflow for that breakpoint specifically
- Do not extrapolate mobile layout from the desktop frame if a real
  mobile frame exists — fetch and use it

### If Figma only has a desktop frame
- Apply standard responsive conversion rules:
  1. Stack multi-column layouts to single column below `md:`
  2. Scale down heading font sizes by roughly one step per breakpoint
     down (e.g. desktop `text-5xl` → tablet `text-4xl` → mobile `text-3xl`)
  3. Reduce section padding/margin proportionally (e.g. desktop `py-24`
     → mobile `py-12`), never keep desktop spacing verbatim on mobile
  4. Images/illustrations: full-width on mobile, maintain aspect ratio
  5. Navigation: convert to hamburger/drawer pattern below `md:` unless
     the design system frame specifies otherwise
- Flag to the user which sections used inferred (non-Figma-sourced)
  responsive behavior, since these are assumptions, not verified fidelity

## Step 3 — Verification (updated: check all breakpoints)
1. After building a section, screenshot the rendered result at THREE
   widths: 375px (mobile), 768px (tablet), 1440px (desktop)
2. Compare 1440px against the Figma desktop screenshot (zero tolerance,
   per Design fidelity rules)
3. For mobile/tablet: compare against Figma mobile/tablet frame if it
   exists; otherwise sanity-check readability, no overflow/clipping,
   no overlapping elements, and touch targets are large enough (min ~44px)
4. Test at the breakpoint boundaries specifically (e.g. 767px vs 768px)
   to catch layout breaks at the exact transition point
5. If misaligned or broken at any width, fix and re-screenshot all
   three before moving to the next section