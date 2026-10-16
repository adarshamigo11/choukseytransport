/**
 * Add REAL customer reviews here (with permission). Left empty on purpose —
 * invented testimonials would be misleading and can hurt local SEO.
 */
export type Review = {
  name: string;
  area: string;
  text: string;
  stars: 1 | 2 | 3 | 4 | 5;
};

export const reviews: Review[] = [];
