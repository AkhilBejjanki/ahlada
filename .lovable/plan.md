

## Responsive Art-Directed Images

Serve landscape (4:3) images on wide screens and portrait (3:4) images on narrow screens using the HTML `<picture>` element with `<source media="...">`.

### What You Need to Do (Asset Prep)

Upload two versions of each service image:
- **Landscape crop** (4:3, e.g. 2000x1500px) → `public/images/{name}-wide.jpg`
- **Portrait crop** (3:4, e.g. 1500x2000px) → `public/images/{name}.jpg` (current files, already 3:4)

So the final folder will have 16 images total (8 pairs).

### Code Changes — `ServicesSection.tsx`

1. **Add a `wideImage` field** to each service object:
```ts
{
  image: "/images/birthday.jpg",        // portrait (3:4) — narrow screens
  wideImage: "/images/birthday-wide.jpg", // landscape (4:3) — wide screens
  objectPosition: "center center",
  wideObjectPosition: "center center",   // separate position for landscape crop
}
```

2. **Add a `wideObjectPosition` field** per service — landscape crops may need different framing than portrait ones.

3. **Replace the `<img>` tag** in the right panel with a `<picture>` element:
```tsx
<picture>
  <source
    media="(min-width: 1024px)"
    srcSet={s.wideImage}
  />
  <img
    src={s.image}
    alt={s.name}
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: /* toggle based on viewport */,
    }}
  />
</picture>
```

4. **Handle dynamic `objectPosition`** — since `<picture>` applies styles to the `<img>`, use the `useIsMobile` hook (already exists at 768px) or a new `useIsWide` check at 1024px to toggle between `objectPosition` and `wideObjectPosition`.

5. **Preload both sets** — update the preload `useEffect` to also preload `wideImage` URLs.

### Breakpoint Logic

| Viewport Width | Image Used | Ratio |
|---|---|---|
| < 1024px | `image` (portrait) | 3:4 |
| ≥ 1024px | `wideImage` (landscape) | 4:3 |

### Before Implementation

You'll need to provide the 8 landscape (4:3) cropped versions of your images. I can set up the code structure now with the `wideImage` fields pointing to `-wide.jpg` filenames, and you upload them when ready.

