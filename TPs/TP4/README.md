Véronique Faucher							                     25 avril 2023
Intégration et visualisation de données géographiques
TP4 – Rapport explicatif

**Impact de l’agrile du frêne sur la canopée montréalaise (Partie 4)**



**Présentation générale**

L'application présentée dans le cardre du présent travail consiste à visualiser le volume d'arbres abattus et protégés sur le territoire de la ville de Montréal. 

**Importation des couches WFS**

À partir des couches de type «Feature Layer» hébergées sur la plateforme ArcGIS Online (AGOL), la première couche importée consistait à représenter les arbres abattus. Afin d'améliorer la visibilité de l'ampleur de la situation, des cercles d'agglomération ont été générés en fonction du nombre d'éléments à visualiser selon le niveau de rapprochement désiré. D'un dégradé de couleur allant de rouge pâle à foncé, les agglomérations contenant 100 éléments ou moins ont été représentées par un cercle de 20 pixels, celles de 100 à 750 par un cercle de 30 pixels puis 40 pixels pour les agglomérations de plus de 750 éléments. 
Le même processus à été appliqué à la représentation des frênes protégés par l'insecticide, cette fois-ci différenciée par la couleur turquoise. L'apparence des agglomérations fait référence aux couleurs choisies lors de la réalisation de l'exercice du TP3. 

**Importation de la couche d'arrondissements de Montréal**

Convertie au format de tuiles vectorielles (VTS), les arrondissements de la ville de Montréal figurent en arrière-plan des arbres abattus et protégés. 

**Problèmes rencontrés**

Uniquement une partie des éléments des couches WFS sont accessibles en raison de leur fort volume d'éléments et ce même malgé l'utilisation de «clusters». 
Malgré l'application des procédures d'insertion, il fût impossible d'afficher l'image raster (WMS) et la représentation 2.5d des frênes. 
La même problématique a été rencontrée au moment de l'affichage de la légende. 
Initialement la présentation comprenait la présence de boutons servant à allumer et éteindre la couche WMS et celle des éléments en 2.5d mais il ne fût pas possible d'associer les couches à ceux-ci. Les boutons sont donc présents mais non-fonctionnels, de même que pour le menu déroulant destiné à contrôler l'affichage des couches WFS.

