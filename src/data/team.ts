export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
}

/**
 * Team data placeholder.
 * Replace with real team members when available.
 * Adding a new member here will automatically render them on the About page.
 */
export const team: TeamMember[] = [];
