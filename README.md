#Opdrachtbeschrijving ## Inleiding 

FlyMeAway is een bedrijf, die zich specialiseert in het zoeken naar vliegtickets zonder onnodige extra’s zoals hotels en autohuur. 

Met de webapplicatie met dezelfde naam (FlyMeAway) kunnen de gepassioneerde reizigers hun dromen realiseren met het zoeken naar de beste deals en aanbiedingen. Aangemelde gebruikers krijgen toegang tot hun persoonlijke profielpagina én kunnen gebruik maken van de persoonlijke kortingscode voor op dat moment specifieke bestemming(en). Ben je klaar voor een onvergetelijke reis? 


## De applicatie starten 
- Om applicatie te kunnen starten moet je beschikken over een IDE zoals Webstorm, Eclipse of een andere IDE; 
- Clone code van GitHub https://github.com/AljonaP/fly-me-away2 op jouw locale machine óf open het project met de bijgeleverde eindopdracht project-map ‘FlyMeAway’. 


## API-key installatie 
Voor het zoeken van de vliegtickets gebruik de API key en Secret code van de API Amadeus. Beide zijn te vinden in het bestand ‘API keys, links naar Figma en GitHub.pdf’. 

De Api key moet worden ingevoerd in: 
../src/pages/Home.js regel 23 const apiKey = "vulInHierDeAPICode" 

De Secret code moet worden ingevoerd in: 
../src/pages/Home.js regel 24 const secret= "vulInHierDeSecretCode" 


## Installatie van benodigde modules 
- Installeer de node\_modules door het volgende commando in de terminal te runnen:
‘npm install‘

- Installeer de dependency react router DOM versie 5.1.2 met behulp van de volgende commando:  
‘npm install react-router-dom@5.1.2’ 

- Installeer de dependency axios: 
‘npm install axios’ 

- Voor de autorisatie binnen de webapplicatie moet een token worden gedecodeerd met behulp van jwt-decode. Installeer jwt-decode: 
‘npm install jwt-decode’

- Instaleer node module van de API Amadeus:  
‘npm i amadeus’ 


## Starten webapplicatie 
- Wanneer dit klaar is, kun je de applicatie starten met behulp van: ‘npm start’ 
- Open http://localhost:3000 om de pagina in de browser te bekijken. 
- Om de beste CSS prestatie te ervaren gebruik de schermgrootte 1400x1050px. 


## Gebruikersregistratie 
1. Klik rechts boven in het top-menu op de knop “Registreren”; 
2. Vul in de volgende input-fields: 
   * Username (minimaal 6 tekens); 
   * Emailadres; 
   * Wachtwoord (minimaal 6 tekens). 
3. Klik op de knop ‘Submit’. De nieuwe gebruiker wordt automatisch doorverwezen naar de aanmeldingspagina. 


## Aanmelden van de gebruiker 
1. Vul in de volgende input-fields om je aan te melden: 
   * Username; 
   * Wachtwoord. 
2. Klik op de knop ‘Submit’. De aangemelde gebruiker wordt automatisch doorverwezen naar zijn persoonlijke Profielpagina. 


## Gebruikersprofiel pagina 
Op de Profielpagina is persoonlijke informatie te vinden zoals Username en emailadres van de gebruiker.  

Daarnaast vindt de gebruiker gepersonaliseerde kortingscode voor de lopende aanbiedingen. 

Na het aanmelden verdwijnen de knopen ‘Registreren’ en ‘Aanmelden’ in het top-menu. In plaats daarvan verschijnt de knop ‘Uitloggen’. De gebruiker kan zich uitloggen via déze knop indien gewenst. 


## Zoeken naar de vliegtickets 
Op de Home-pagina kan de gebruiker vliegtickets zoeken: 

1. Kies de stad van vertrek en een bestemming; 
2. Kies de reisdatum; 
3. Kies het aantal van passagiers (maximum 8!); 
4. Klik op de knop ‘Submit’. De gebruiker wordt naar de zoekresultaten doorverwezen. 


## Filteren en sorteren van de resultaten 
1. De resultaten kunnen worden gesorteerd op prijs: 
   * Duurste eerst; 
   * Goedkoopste eerst. 
2. De resultaten kunnen worden verfijnd op het aantal Tussenstops: 
- Kies in het keuze-menu het gewenste aantal Tussenstops van de gevonden aanbiedingen; 
- Om alle resultaten weer te bekijken, kies ‘Alle vluchten’. 
