# BCU23D, Node.js - Gruppuppgift, Blockkedja
Team: [@rowpacmal](https://github.com/rowpacmal), [@alcompilor](https://github.com/alcompilor), [@BTK88](https://github.com/BTK88), [@lisce18](https://github.com/lisce18)

## Gruppuppgift
I denna uppgift som ska utföras i grupp ska ni ta fram en blockkedja som hanterar en
fiktiv kryptovaluta samt hanterar transaktioner.

## Serverapplikationen(Back-End)
Som programmeringsspråk för Blockkedjan(serverdelen) ska Node.js användas.
Serverdelen ska vara utvecklad enligt designmönstret MVC. Det vill säga att varje
endpoint ska vara placerad i en egen controllermodul. Route hanteringen ska ligga i en
egen modul.

Det ska finnas endpoints (url) för att kunna lista blockkedjan, lägga till nya block i
blockkedjan. Validera blockkedjan och blocken i blockkedjan.
Addera transaktioner och att kunna göra en ”mine” för alla transaktioner.
Om tid finns så är det bra om en ”consensus” algoritm tas fram som synkronisera flera
noders blockkedjor.

## Klient applikationen
Ska vara utvecklad antingen som en renodlad HTML+CSS+JavaScript eller med React
och med ramverket vite.
Samma grundkrav finns här att strukturen i applikationen ska följa vedertagna
kodstandarder.
Via klientapplikationen ska det gå att lista block i en blockkedja, hämta ut ett block ur
blockkedjan. Det ska även gå att kunna lägga till en ny transaktion.
