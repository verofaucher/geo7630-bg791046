# GEO7630 - Intégration et visualisation de données géographiques

## Tutoriel d'installation de la stack d'intégration et de services de données spatiales

`sudo chmod 775 1\ -\ installDependencies.sh && sudo chmod 775 2\ -\ createRepo.sh`
`./1\ -\ installDependencies.sh`
`./2\ -\ createRepo.sh`
`sudo docker compose up -d`

## Installer l'extension Docker pour VS Code
  `ctrl+shift+x`

  Cherchez Docker dans la barre de recherche en haut à gauche

  Cliquez sur Install

  Vous devriez voir l'icône de la baleine dans la barre de gauche

## Interface pour les tuiles vectorielles
### pg-tileserv
* http://localhost:7800

## Interface pour la norme WFS et OGC
### pg-featureserv
* http://localhost:9000

## Interface pour la norme WFS, WMTS, WMS et OGC (entre autres)
### Geoserver 
* http://localhost:8080

    `user : admin`

    `mdp : geoserver`