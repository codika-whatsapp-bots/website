---
title: Datenschutzerklarung
description: Wie WhatsApp Bots von Codika Ihre personenbezogenen Daten erhebt, verwendet und schutzt.
lastUpdated: 2026-03-09
---

## Wer wir sind

WhatsApp Bots ist ein Dienst von **Codika SRL**, einem in Belgien registrierten Unternehmen. Wir entwickeln KI-gesteuerte WhatsApp-Bots mit Verwaltungs-Dashboards fur Community- und Unternehmensmanagement.

**Kontakt:** hello@codika.io

## Welche Daten wir erheben

### Wenn Sie unsere Website besuchen

- **Nutzungsdaten:** besuchte Seiten, verbrachte Zeit, Verweisquelle, Browsertyp, Geratetyp und IP-Adresse
- **Cookies:** Wir verwenden essenzielle Cookies fur die Website-Funktionalitat und Analyse-Cookies, um zu verstehen, wie Besucher unsere Website nutzen

### Wenn Sie unseren Dienst nutzen (als Kunde)

- **Kontoinformationen:** Name, E-Mail-Adresse, Organisationsname
- **WhatsApp-Daten:** Telefonnummern, Nachrichteninhalte und Gesprachsverlaufe, die uber unsere Bot-Workflows verarbeitet werden
- **Dashboard-Daten:** Mitgliederdatensatze, Veranstaltungsdaten, Organisationsdaten und alle anderen Informationen, die Sie in Ihr Verwaltungs-Dashboard eingeben

### Wenn Sie mit einem Bot interagieren (als Endnutzer)

- **WhatsApp-Nachrichten:** der Inhalt der Nachrichten, die Sie an einen von unserer Plattform betriebenen WhatsApp-Bot senden oder von ihm empfangen
- **Telefonnummer:** Ihre WhatsApp-Telefonnummer, die zur Identifizierung und Aufrechterhaltung des Gesprachskontexts verwendet wird
- **Profildaten:** alle Informationen, die Sie freiwillig wahrend der Gesprache teilen (Name, Praferenzen usw.)

## Wie wir Ihre Daten verwenden

Wir verwenden Ihre Daten um:

- **Unseren Dienst bereitzustellen:** WhatsApp-Nachrichten zu verarbeiten, KI-gesteuerte Bot-Workflows auszufuhren und Daten in Verwaltungs-Dashboards anzuzeigen
- **Gesprachekontext aufrechtzuerhalten:** Gesprachsverlaufe zu speichern, damit der Bot relevante, personalisierte Antworten geben kann
- **Unseren Dienst zu verbessern:** Nutzungsmuster zu analysieren, um die Bot-Leistung und Benutzererfahrung zu verbessern
- **Mit Ihnen zu kommunizieren:** servicebezogene Benachrichtigungen zu senden und auf Supportanfragen zu antworten
- **Gesetzliche Pflichten zu erfullen:** regulatorische Anforderungen zu erfullen, die fur unser Geschaft gelten

## Wie KI Ihre Daten verarbeitet

Unsere Bots verwenden KI-Sprachmodelle (derzeit Claude von Anthropic), um Nachrichten zu verstehen und zu beantworten. Wenn Sie mit einem Bot interagieren:

- Ihre Nachricht wird zur Verarbeitung an das KI-Modell gesendet
- Das KI-Modell generiert eine Antwort basierend auf dem Gesprachskontext und verfugbaren Werkzeugen
- Wir verwenden Ihre Nachrichten nicht zum Training von KI-Modellen
- KI-generierte Antworten konnen gelegentlich ungenau sein — sie sollten nicht als professionelle Beratung betrachtet werden

## Datenspeicherung und Sicherheit

- **Infrastruktur:** unsere Plattform lauft auf Google Cloud Platform (GCP) und n8n-Workflow-Automatisierung, mit Dashboards, die von Supabase (PostgreSQL) betrieben werden
- **WhatsApp-Nachrichten:** verarbeitet uber die offizielle Twilio WhatsApp Business API (von Meta genehmigt)
- **Verschlusselung:** Daten werden bei der Ubertragung (TLS) und im Ruhezustand verschlusselt
- **Zugriffskontrolle:** nur autorisierte Teammitglieder konnen auf Kundendaten zugreifen, und nur fur die Diensterbringung und den Support
- **Datenstandort:** Daten werden hauptsachlich in Rechenzentren in der EU und den USA gespeichert

## Weitergabe von Daten

Wir verkaufen Ihre personenbezogenen Daten nicht. Wir teilen Daten nur mit:

- **Dienstleistern:** Twilio (WhatsApp-Messaging), Anthropic (KI-Verarbeitung), Google Cloud (Infrastruktur), Supabase (Datenbank) und anderen Anbietern, die fur die Diensterbringung erforderlich sind
- **Gesetzlichen Anforderungen:** wenn durch Gesetz, Gerichtsbeschluss oder Aufsichtsbehorde erforderlich
- **Unternehmensübertragungen:** im Falle einer Fusion, Ubernahme oder Verausserung von Vermogenswerten

Alle Dienstleister sind durch Datenverarbeitungsvertrage gebunden und verpflichtet, Ihre Daten zu schutzen.

## Ihre Rechte

Gemas DSGVO und anwendbaren Datenschutzgesetzen haben Sie das Recht:

- Auf Ihre personenbezogenen Daten **zuzugreifen**
- Ungenaue Daten zu **berichtigen**
- Ihre Daten **loschen** zu lassen ("Recht auf Vergessenwerden")
- Ihre Daten in einem portablen Format zu **exportieren**
- Der Verarbeitung auf Grundlage berechtigter Interessen zu **widersprechen**
- Die **Einwilligung jederzeit zu widerrufen**, wenn die Verarbeitung auf Einwilligung basiert

Um eines dieser Rechte auszuuben, kontaktieren Sie uns unter **hello@codika.io**. Wir werden innerhalb von 30 Tagen antworten.

## Datenaufbewahrung

- **Kundendaten:** aufbewahrt fur die Dauer der Dienstvereinbarung, plus 90 Tage nach Beendigung
- **Gesprachsverlauf:** aufbewahrt, solange der Bot des Kunden aktiv ist, es sei denn, der Kunde fordert eine fruhere Loschung an
- **Website-Analyse:** aggregierte Daten werden unbefristet aufbewahrt; individuelle Daten werden nach 26 Monaten geloscht
- **Kontodaten:** innerhalb von 90 Tagen nach Kontoschließung geloscht

## Baileys Connector (selbst gehostet)

Einige Kunden verwenden unsere Open-Source-Baileys-Connector-Vorlage, um WhatsApp-Gruppenunterstutzung zu ermoglichen. Bei Verwendung des Baileys Connectors:

- Der Connector lauft auf der **eigenen Infrastruktur des Kunden** — wir hosten oder betreiben ihn nicht
- Nachrichten fließen vom Server des Kunden zu unseren Webhook-Endpunkten zur Verarbeitung
- Wir verarbeiten diese Nachrichten genauso wie Nachrichten, die uber den offiziellen Twilio-Kanal empfangen werden
- Der Kunde ist verantwortlich fur die Einhaltung der Nutzungsbedingungen von Meta bezuglich der Verwendung inoffizieller WhatsApp-Protokolle

## Datenschutz fur Kinder

Unser Dienst richtet sich nicht an Kinder unter 16 Jahren. Wir erheben nicht wissentlich personenbezogene Daten von Kindern. Wenn Sie glauben, dass ein Kind uns personenbezogene Daten ubermittelt hat, kontaktieren Sie uns bitte und wir werden sie loschen.

## Anderungen dieser Erklarung

Wir konnen diese Datenschutzerklarung von Zeit zu Zeit aktualisieren. Wir werden Kunden uber wesentliche Anderungen per E-Mail informieren. Das Datum "Zuletzt aktualisiert" am Anfang dieser Seite gibt an, wann die Erklarung zuletzt uberarbeitet wurde.

## Kontakt

Bei Fragen oder Bedenken zum Datenschutz:

**E-Mail:** hello@codika.io
**Unternehmen:** Codika SRL, Belgien
