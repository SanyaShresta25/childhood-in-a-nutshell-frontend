// src/types.ts
import type { ReactNode } from 'react';

export interface Character {
  movie: ReactNode;
  movie_title: string;
  release_date: string;
  hero: string;
  villian: string;
  song: string;
}
