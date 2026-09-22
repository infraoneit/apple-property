import { Inter, Titillium_Web } from 'next/font/google';

/**
 * Schriften werden von next/font beim Build heruntergeladen und selbst ausgeliefert.
 * Keine Verbindung zu Google beim Besuch der Seite (Datenschutz).
 * Titillium Web für Überschriften, wie bereits auf der bisherigen Website der Apple Property Group AG.
 */
export const schriftText = Inter({
  subsets: ['latin'],
  variable: '--font-text',
  display: 'swap',
});

export const schriftUeberschrift = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-ueberschrift',
  weight: ['600', '700', '900'],
  display: 'swap',
});
