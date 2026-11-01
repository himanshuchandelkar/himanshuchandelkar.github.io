# Style and certification-skill synchronization update

- Restored the reference portfolio's shared section spacing, heading/intro rhythm, card layouts, skill cards, academic timeline and interest cards.
- Removed the forced two-column Interests override; it is now 3 columns on wide screens, 2 on medium screens and 1 on phones.
- Removed the negative top margin from section introductions.
- Matched certifications cards to the same surface, border, typography and spacing system.
- Skills attached to certificates are now collected into a derived `Certification Skills` group in the main Skills section. Duplicate names are only shown once. This group is generated from each certificate's `skills` array, so editing certificate skills updates the main Skills section automatically.
- Main Skills total and per-group count badges are recalculated from the visible items, rather than relying on stale manually typed counts.

No skill names were invented. Only the skills already present on certificates are synced.
