export type Livestream = {
  court: string;
  embedUrl?: string;
  note?: string;
};

// Replace placeholder embed URLs with actual YouTube embed links when available.
export const livestreams: Livestream[] = [
  { court: "Court 1", embedUrl: "https://www.youtube.com/embed/ra_5FUh6XVE?list=PLVAUDcutbNTMDbEeRokbAiakm8wKY-Asl" },
  { court: "Court 2", embedUrl: "https://www.youtube.com/embed/jDzotQUhF0U?list=PLVAUDcutbNTOxtDM1w9Zfl8z44kTaDrq8" },
  { court: "Court 12", embedUrl: "https://www.youtube.com/embed/QdC_JI5-vdM?list=PLVAUDcutbNTM9hAy5buwSwDMmQocYGFkn" },
  { court: "Court 14", embedUrl: "https://www.youtube.com/embed/xdGfcWQJ9Xw?list=PLVAUDcutbNTOwZ9XdV7wwB55LmhvygzF8" },
  { court: "Court 15", embedUrl: "https://www.youtube.com/embed/1wg-XN8jYTs?list=PLVAUDcutbNTM50Gg2oN7xgV1MIzm6el8r" },
  { court: "Court 17", embedUrl: "https://www.youtube.com/embed/Qqk4JS_bj8c?list=PLVAUDcutbNTNw6eAxBFiGj_zgw0p1gzeU" },
];
