# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Käuferschaft und Mieterschaft, die im Bodenseeraum (Kanton Thurgau) eine Immobilie suchen und aktuelle Projekte der Apple Property Group AG ansehen wollen. Zweite Nutzergruppe: die Kundschaft selbst, die Inhalte über Keystatic pflegt (Projekte, Über uns, Kontakt).

## Product Purpose

Die Website zeigt die Immobilienprojekte der Apple Property Group AG (Neubau und Sanierung) mit Bildergalerien, stellt das Unternehmen und das Team vor und ermöglicht Anfragen über ein Kontaktformular. Erfolg heisst: Besucherinnen und Besucher finden ein Projekt, verstehen, wer dahintersteht, und nehmen Kontakt auf.

## Positioning

Inhabergeführtes Immobilienunternehmen, das die gesamte Wertschöpfungskette selbst abdeckt: Entwicklung, Realisierung, Vermarktung und Bewirtschaftung, mit Immobilien-, Finanz- und Rechtsexpertise im eigenen Haus. Das unterscheidet die Apple Property Group AG von reinen Maklerbetrieben, die nur vermarkten.

## Operating Context

Deutschsprachige Schweiz, Region Bodensee (Kreuzlingen, Ermatingen, Kradolf-Schönenberg, Güttingen, Sitz in Tägerwilen). Inhalte werden über Keystatic gepflegt: lokal direkt in Dateien, online über GitHub, mit automatischem Netlify-Build. Das Kontaktformular sendet über Netlify Forms an `/__forms.html`.

## Capabilities and Constraints

Next.js-Website mit Keystatic-Sammlungen für Projekte (`Referenzen`), freie Seiten, Startseite und Team. Die Sammlungen `Leistungen` und `Stellen` existieren technisch in der Vorlage, sind aber unbenutzt und nicht in der Navigation, da die alte Website diese Bereiche nicht hatte. Schweizer Textregeln sind im CMS technisch erzwungen: kein scharfes S, keine Gedankenstriche. Adressen `/leistungen`, `/referenzen`, `/jobs` sind reserviert und dürfen nicht für andere Seiten verwendet werden.

## Brand Commitments

Name: Apple Property Group AG. Bestehendes Signet (Apfel-Monogramm "APG" in Rose Gold) und Rose-Gold-Farbpalette (`--color-marke: #9a5c4a`) sind gesetzt und übernommen von der bisherigen Website. Überschriften in Titillium Web, Fliesstext in Inter, ebenfalls von der bisherigen Website übernommen. Es existiert keine helle Logovariante für dunklen Hintergrund, die Fusszeile zeigt deshalb den Firmennamen als Text.

## Evidence on Hand

Echte Projektfotos und Visualisierungen für 4 Standorte (Kreuzlingen, Ermatingen, Kradolf-Schönenberg, Güttingen), übernommen von der bisherigen Website apple-group.ch. Echtes Team (Natalie Piller, Gianluigi Conoci, Paul Künzig) ohne Fotos. Echte Kontaktdaten (Hauptstrasse 40a, 8274 Tägerwilen, +41 71 688 10 10, info@apple-group.ch). Keine Kundenstimmen, keine belegten Kennzahlen (Gründungsjahr, Mitarbeitendenzahl, Projektanzahl) vorhanden, diese dürfen nicht erfunden werden.

## Product Principles

- Nichts erfinden: nur echte, von der Kundschaft stammende Inhalte und Bilder verwenden.
- Die ganzheitliche Wertschöpfungskette (Entwicklung bis Bewirtschaftung) ist die Kernaussage.
- Käuferschaft und Mieterschaft stehen im Zentrum, Projekte sind der wichtigste Einstiegspunkt.
- Sachliche, vertrauensbildende Kommunikation in Schweizer Hochdeutsch (kein scharfes S, keine Gedankenstriche, keine Werbefloskeln).
- Rose-Gold-Identität und bestehendes Logo bleiben als Marke unverändert.

## Accessibility & Inclusion

Kein zusätzliches projektspezifisches Erfordernis über den WCAG-AA-Standard der InfraOne-Vorlage hinaus (Tastaturbedienung, sichtbarer Fokus, Sprung-zum-Inhalt-Link, Rücksicht auf reduzierte Bewegung).
