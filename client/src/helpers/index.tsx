import { parseISO, formatDistanceToNow } from 'date-fns';
import { useEffect } from 'react';
import { toast } from 'react-toastify';


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




export const toastify = (message: string, options = {}) => {
    toast(message, {
      position: "top-right",
      autoClose: 5001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      ...options,
    });
  };
