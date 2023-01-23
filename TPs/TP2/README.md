****

TP2 - Intégration des données vectorielles et matricielles

****

L’objectif est de vous familiariser avec l’outil de traitement et d’intégration (ETL ou ELT) FME, ainsi que de préparer vos données pour les TP3 et TP4.

****

- Lire ou charger des données depuis une URL, une BD ou un fichier
- Valider l’intégrité des données entrantes
- Nettoyer (si besoin)
- Reprojeter
- Calculer, analyser
- Valider l’intégrité des données sortantes
- Intégrer dans une base de données
- Choisir une symbologie adéquate pour comprendre la problématique
- Documenter l’ensemble du processus dans un outil de développement collaboratif

****


# Prérequis pour le TP2

****

- [Compte Github](https://github.com/)

- Faire une demande [FME pour étudiant](https://www.safe.com/free-fme-licenses/students/?gclid=Cj0KCQiA8aOeBhCWARIsANRFrQHboqn2kCWedX1W7KI-gB1Be6CzwFZRFAfr6bjBlrtlL0029J3PqfAaAm1oEALw_wcB)

- [Oracle VM Virtual box](https://www.virtualbox.org/wiki/Downloads)

- [L’image de la machine virtuelle pour installer votre environnement de travail](https://drive.google.com/file/d/1ectuc8jB1ZE8aR7vCVyrGHZ1ElUbOhjC/view?usp=share_link)

  - Le mot de passe pour la machine est : **123**

- Un ou plusieurs nuages de points Lidar format .las

- Une ou plusieurs Images aériennes format libre 

- Données vectorielles qualitatives format libre

- Données vectorielles quantitatives format libre

- Données vectorielles avec une variable 3D format libre

****


# 


# Consignes 

****

1. Le TP2 doit être remis sous la forme d’un dépôt github (obligatoire)
2. Toutes les données doivent être traitées dans un seul workbench (tp2.fmw)
3. La projection de TOUTES les données sortantes doit être EPSG-3857
4. Un schéma explicatif du processus ETL / ELT (draw.io ou autre) (sous forme d’image dans le README.md
5. Toute la nomenclature des fichiers, tables, vues, colonnes doit être en minuscule et underscore et ne pas commencer par un chiffre.
6. La connexion à la base de données dans FME doit se configurer comme suit
7. Un projet QGIS avec les différentes couches de données et un fichier de style .sld
8. Une documentation explicative de l’ensemble de votre travail dans le fichier /TP2/README.md rédigé en MARKDOWN

****


# Précisions

****


## 1 - Architecture du dépôt github

****

Vos répertoires, qui serviront d’architecture pour votre dépôt Github devra être identique à celui ci-dessous

****

![](https://lh6.googleusercontent.com/DpJEWdRRtulncZDcAlotky-Vh0-_2gb07_efGBUWYKwtxAZPeLx5So3goqpkf5pMwbBvj9qRKAgeoGtQTt-n11rF54yyHM7eFWvT-P8ei-GwenN4Oh1_Jpooc3kJ6rvqAmPayxoqxYfHDDI8je_1iAKb_Lv4_dK-MVakHb6G1TpyXN8J0q48Gnl5nQmeOw)


## 2 - Workbench FME

****

Votre workbench doit être bien structuré avec des “bookmarks” et bien annoté pour que le lecteur comprenne les enjeux d’un transformer ex : ![](https://lh3.googleusercontent.com/5DlVkcTNjJm1CAMCOcvzSSV2O6wgLb17ISlzB1oNHmE49i9FHf912JtdotDLUaWdUBa2b7ifGvNS7e150S2BsObYqX4swzNBgzoZstLwVLsjkKHgjMB_h5YOQDJdq7vo3GB1ZedprpVkX1zoaWHksXbGek3TlgBvTfslusJK3tcnjHLJqzD-jFissfREuw)


## 4 - Schématisation du processus

****

Grâce à l’outil de votre choix (ex: [draw.io](http://draw.io)) vous devez schématiser simplement avec les étapes avec peu de mots. 

****

Chacun des processus devra être regroupé par catégorie

Vectoriel, Matriciel, PointCloud

****

Ces schémas serviront de support à votre documentation dans le README.md du projet

****

ex: ![](https://lh5.googleusercontent.com/bIgU2m2v1qtwhNZe9Ois6odh2idT4FHz2THnFXacBHJdFjDq1Wzl90uE9euJyM5-coF1k66PNRb-SDZSqpG4XHOSj_zRm410lI-Lg9kUjUdVBqx8ey1uOPhF_8AT7Suggn9XMe8xiqeeOEDY9OGQV8FSbx68iQRLnP4kIY-bCBcBB3ykbXULnzlBuJr1tw)


## 7 - Projet QGIS

****

Un fichier .qgz (Projet QGIS) devra être fourni avec toutes les couches de données 2D et les données matricielles

****

Les données doivent provenir de la base de données Postgresql locale

****

Vos données 2D devront être accompagnées d’une symbologie décrivant le phénomène d’une manière simple et vulgarisé pour qu’un enfant de 10 ans puisse comprendre votre carte.

****

Le projet devra s’ouvrir sans que les couches, ni la symbologie soient brisées.

****


## 8  - Documentation

****

Vous pouvez utiliser un traducteur comme celui-ci (spécialement pour Google Docs) pour générer du markdown à partir de google doc ou tout autre format (il faudra trouver un autre convertisseur, si le format est différent) <https://mr0grog.github.io/google-docs-to-markdown/>

****

****


# Grille d’évaluation

****

1. Respect des consignes :  **10%**
2. Capable de rouler le FMW sans erreur du premier coup :  **10%**
3. Workbench FME bien structuré, bien documenté :  **10%** (tel que vu en laboratoire)
4. Qualité de la validation intrantes et nettoyage :  **15%**
5. Qualité de la validation sortante : ** 15%**
6. Qualité de l’analyse technique :  **10%**
7. Qualité de la méthode et sémiologie choisi pour représenter l’analyse :  **10%**
8. Documentation globale de l’approche ETL/ELT et schéma explicatif : **10%**
9. Un projet QGIS qui ouvre automatiquement les données depuis la base de données Postgis locale et la symbologie depuis la base de données postgis : **10%**
