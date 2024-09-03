import { parseISO, formatDistanceToNow } from 'date-fns';
import { useEffect } from 'react';

/**
 
 * @param isoDate 
 * @returns 
 */
export function formatCreatedAt(isoDate: string): string {
  if (!isoDate) {
      return "Date not available"; 
  }

  try {
      const date: Date = parseISO(isoDate);
      return formatDistanceToNow(date, { addSuffix: true });
  } catch (error) {
      console.error("Error parsing date:", error);
      return "Invalid date"; 
  }
}





