Véronique Faucher							        11 avril 2023
Intégration et visualisation de données
TP3 – Rapport explicatif

Impact de l’agrile du frêne sur la canopée montréalaise (Partie 3)
URL pour accéder à l’application :
https://www.arcgis.com/apps/dashboards/b610ada8702d4d468c4d25e20c668910
	L’intention de ce travail consiste à sensibiliser à la thématique à l’étude par la manipulation d’une application utilisant l’interface Dashboards d’ArcGIS Online (AGOL). Au cours de son expérience, l’usager peut témoigner du manque de diversité arboricole ainsi que de la gestion de la ville de Montréal face à l’infestation d’agrile du frêne en consultant les différentes données reliées à la proportion de frênes abattus et traités sur le total des arbres du domaine public. 

Importation des couches vers AGOL
Au terme du géotraitement exécuté dans de l’environnement de travail de FME Workbench dans le cadre du travail précédent (voir TP2-README.md), la marche à suivre était de transmettre directement les couches traitées vers AGOL à l’aide d’un outil exportateur (Writer) configuré à cet effet. Suite aux nombreux échecs de cette opération, toutes les couches ont alors été exportées vers un format shapefile (shp), pour être corrigées dans ArcGIS Pro puis redirigées vers AGOL. 

Affichage des éléments vectoriels et matriciels
Étant donné les outils d’agrégation disponibles par AGOL, l’affichage des couches de densités produites lors du traitement dans FME ne trouvent par de pertinence quant au regroupement des informations partagées. Elles ne sont donc pas affichées dans l’application.  
L’importation de l’image aérienne a nécessité un travail manuel quant à sa mise à l’échelle et sa géolocalisation. À l’instar des couches traitées, son exportation vers AGOL depuis FME était impossible.  L’image choisie correspond à la localisation de la tuile LiDAR 292-5045, celle-ci également importée manuellement. 

Widgets et affichage du 2.5d
L’usage du diagramme à secteur s’avère un moyen efficace de représentation étant donné l’objectif d’informer l’usager des proportions ciblées.  Un premier diagramme a été réalisé afin de visualiser le pourcentage de frênes publics parmi la totalité d’arbres montréalais et un second démontrant son taux d’abattage de frênes. 
Des jauges dynamiques ont également été implantées en ce qui concerne les quantités d’arbres abattus et traités. Les quantités montrées par les jauges évoluent en fonction des rapprochements et éloignements par rapport à la carte afin de consulter l’information concernée uniquement par ce secteur. 
En raison de l’impossibilité d’afficher la composante 2.5d par l’outil Dashboards, les extractions des données LiDAR correspondant aux frênes (voir TP2-README.md) ont été ajoutées à l’application par l’intermédiaire de l’interface Experience Builder d’AGOL depuis sa visualisation en mode Scene,



